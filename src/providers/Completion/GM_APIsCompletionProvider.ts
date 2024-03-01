import * as vscode from 'vscode'
import GM_APIsCompletionItems from './items/GM_APIsCompletionItems'
import checkIfShouldRun from '../../utils/checkIfShouldRun'
import buildMarkdownString from '../../utils/buildMarkdownString'
import { getWord } from '../../utils/tools'

const GM_APIsCompletionProvider = vscode.languages.registerCompletionItemProvider('javascript', {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ) {
    if (!checkIfShouldRun(document)) {
      return
    }
    const word = getWord(document, position)
    if (document.lineAt(position).text.endsWith('.' + word)) {
      return undefined
    }
    const list: vscode.CompletionItem[] = GM_APIsCompletionItems.map((item) => {
      const completionItem = new vscode.CompletionItem(item.label, item.kind)
      completionItem.detail = 'GM_* APIs'
      const doc = buildMarkdownString(item)
      completionItem.documentation = doc
      return completionItem
    })

    return list
  }
})

export default GM_APIsCompletionProvider
