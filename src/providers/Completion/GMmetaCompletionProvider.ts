import * as vscode from 'vscode'
import GMmetaCompletionItems from './items/GMmetaCompletionItems'
import checkIfShouldRun from '../../utils/checkIfShouldRun'
import buildMarkdownString from '../../utils/buildMarkdownString'

const GMmetaCompletionProvider = vscode.languages.registerCompletionItemProvider(
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
      const list: vscode.CompletionItem[] = GMmetaCompletionItems.map((item) => {
        const completionItem = new vscode.CompletionItem('@' + item.label, item.kind)
        completionItem.detail = 'GM Metadata'
        completionItem.insertText = item.insertText ?? item.label + ' '
        const doc = buildMarkdownString(item)
        completionItem.documentation = doc
        return completionItem
      })

      return list
    }
  },
  '@'
)

export default GMmetaCompletionProvider
