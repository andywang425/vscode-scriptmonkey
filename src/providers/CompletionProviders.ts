import * as vscode from 'vscode'
import allItems from '../items'
import checkIfShouldRun from '../utils/checkIfShouldRun'
import buildMarkdownString from '../utils/buildMarkdownString'
import { GMItem } from '../items/types'
import getWord from '../utils/getWord'

const completionProviders: vscode.Disposable[] = []

/**
 * Make a completion item
 * @param item GM item
 * @param prefix The prefix of the GM item, examples: `@name` (@ is prefix), `GM.info` (GM. is prefix)
 * @param isGM_ Is it a GM_ function? Example: GM_addStyle
 * @param position The position invoked completion
 * @returns
 */
function makeCompletionItem(
  item: GMItem,
  prefix: string | undefined,
  isGM_: boolean,
  position: vscode.Position
) {
  let label = item.label!

  if (prefix === '@') {
    // GM metadata
    label = `@${label}`
  } else if (isGM_) {
    // If it's a GM_ function, make the completion item from GM.xxx
    if (label === 'xmlHttpRequest') {
      // Compatible for GM.xmlHttpRequest and GM_xmlhttpRequest
      label = 'xmlhttpRequest'
    }
    label = `GM_${label}`
  }

  const completionItem = new vscode.CompletionItem(label, item.kind)

  if (item.detail) {
    completionItem.detail = item.detail
  }

  if (prefix === '@') {
    // For GM metadata, we need to adjust the range to include the prefix `@` since it's commitCharacter
    const startPosition = position.with(undefined, position.character - 1)
    const endPosition = position.with(undefined, position.character + item.label!.length - 1)
    completionItem.range = new vscode.Range(startPosition, endPosition)
  }

  if (prefix?.endsWith('.')) {
    // For GM.xxx functions, we need to adjust the range to include the prefix `.` since it's commitCharacter
    const startPosition = position.with(undefined, position.character - 1)
    const endPosition = position.with(undefined, position.character + item.label!.length)
    completionItem.range = new vscode.Range(startPosition, endPosition)
    // By setting `range` and `filterText`, ensuring the item appears at the top of the completion results
    completionItem.filterText = `.${label}`
  }

  // Set sortText to space (ASCII code 32) to ensure the item appears at the top of the completion results
  completionItem.sortText = ' '

  if (item.insertText) {
    completionItem.insertText = new vscode.SnippetString(item.insertText)
    if (prefix === '@') {
      completionItem.insertText.value = `@${completionItem.insertText.value}`
    } else if (prefix?.endsWith('.')) {
      completionItem.insertText.value = `.${completionItem.insertText.value}`
    }
  } else {
    if (prefix?.endsWith('.')) {
      completionItem.insertText = `.${label}`
    }
  }

  if (item.documentation) {
    completionItem.documentation = buildMarkdownString(item)
  }

  if (item.commitCharacter) {
    completionItem.commitCharacters = [item.commitCharacter]
  }

  return completionItem
}

function createCompletionItemProvider(items: GMItem[], prefix?: string, commitCharacter?: string) {
  const provider = vscode.languages.registerCompletionItemProvider(
    'javascript',
    {
      provideCompletionItems(
        document: vscode.TextDocument,
        position: vscode.Position,
        token: vscode.CancellationToken,
        context: vscode.CompletionContext
      ) {
        if (!checkIfShouldRun(document)) {
          return
        }

        let matched_prefix = false
        let prefix_words = ''
        let prefix_word_position = position

        if (prefix?.endsWith('.')) {
          for (let i = 0; i < Number(process.env.GM_ITEMS_DEPTH) - 1; i++) {
            const wordAndPosition = getWord(document, prefix_word_position, false)
            if (wordAndPosition) {
              let [word, pos] = wordAndPosition

              if (word.startsWith('GM_')) {
                word = `GM.${word.substring(3)}`
                i++
              }

              prefix_words = `${word}.` + prefix_words

              if (prefix_words === prefix) {
                matched_prefix = true
                break
              } else {
                prefix_word_position = pos
              }
            }
          }

          if (!matched_prefix) {
            return
          }
        }

        const list = []

        for (const item of items) {
          if (item.label && item.kind) {
            list.push(makeCompletionItem(item, prefix, false, position))

            if (item.label === 'GM') {
              // For GM_xxx functions, make the completion items from GM.xxx
              for (const i of item.subItems!) {
                list.push(makeCompletionItem(i, prefix, true, position))
              }
            }
          }
        }

        return list
      }
    },
    commitCharacter!
  )

  completionProviders.push(provider)

  // Recursively make sub completion items
  for (const item of items) {
    if (item.subItems) {
      createCompletionItemProvider(
        item.subItems,
        `${prefix ?? ''}${item.label ?? ''}${item.commitCharacter ?? ''}`,
        item.commitCharacter
      )
    }
  }
}

createCompletionItemProvider(allItems)

export { completionProviders }
