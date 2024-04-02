import * as vscode from 'vscode'
import allItems from '../items'
import checkIfShouldRun from '../utils/checkIfShouldRun'
import buildMarkdownString from '../utils/buildMarkdownString'
import { GMItem } from '../items/types'
import getWord from '../utils/getWord'
import findGMItem from '../utils/findGMItem'

const hoverProviders: vscode.Disposable[] = []

function makeHoverObject(
  document: vscode.TextDocument,
  position: vscode.Position,
  word_list: string[],
  items: GMItem[],
  isInWord: boolean
): vscode.Hover | vscode.Position | undefined {
  const wordAndPosition = getWord(document, position, isInWord)
  if (wordAndPosition) {
    let [word, next_position] = wordAndPosition
    if (word.startsWith('GM_')) {
      word = word.substring(3)
      // Compatible for GM.xmlHttpRequest and GM_xmlhttpRequest
      if (word === 'xmlhttpRequest') {
        word = 'xmlHttpRequest'
      } else if (word === 'xmlHttpRequest') {
        return
      }
      word_list.unshift(word)
      // If it's a GM_ function, make the hover object from GM.xxx
      word_list.unshift('GM')
    } else {
      word_list.unshift(word)
    }
    const item = findGMItem(items, word_list)
    if (item) {
      // If item is found, return a hover object
      return new vscode.Hover(buildMarkdownString(item))
    }
    // Else return a position for next search
    return next_position
  }
}

function createHoverProvider(items: GMItem[]) {
  const provider = vscode.languages.registerHoverProvider('javascript', {
    provideHover(
      document: vscode.TextDocument,
      position: vscode.Position,
      token: vscode.CancellationToken
    ) {
      if (!checkIfShouldRun(document)) {
        return
      }

      const word_list: string[] = []

      let pos = position

      for (let i = 0; i < Number(process.env.GM_ITEMS_DEPTH); i++) {
        const result = makeHoverObject(document, pos, word_list, items, i === 0)
        if (result instanceof vscode.Hover) {
          return result
        } else if (result instanceof vscode.Position) {
          pos = result
        } else {
          break
        }
      }
    }
  })

  hoverProviders.push(provider)
}

createHoverProvider(allItems)

export { hoverProviders }
