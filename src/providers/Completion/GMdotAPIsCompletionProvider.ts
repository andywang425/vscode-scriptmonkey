import * as vscode from 'vscode'
import GMdotAPIsCompletionItems from './items/GMdotAPIsCompletionItems'
import checkIfShouldRun from '../../utils/checkIfShouldRun'
import buildMarkdownString from '../../utils/buildMarkdownString'

const GMdotAPIsCompletionProvider = vscode.languages.registerCompletionItemProvider(
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
      const linePrefix = document.lineAt(position).text.substring(0, position.character)
      if (!linePrefix.endsWith('GM.')) {
        return undefined
      }
      const list: vscode.CompletionItem[] = GMdotAPIsCompletionItems.map((item) => {
        const completionItem = new vscode.CompletionItem(item.label, item.kind)
        completionItem.detail = 'GM.* APIs'
        const doc = buildMarkdownString(item)
        completionItem.documentation = doc
        return completionItem
      })
      return list
    }
  },
  '.'
)

export default GMdotAPIsCompletionProvider
