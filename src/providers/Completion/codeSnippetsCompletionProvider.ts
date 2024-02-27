import * as vscode from 'vscode'
import getCodeSnippets from './items/codeSnippetsCompletionItems'
import checkIfShouldRun from '../../utils/checkIfShouldRun'
import buildMarkdownString from '../../utils/buildMarkdownString'

let codeSnippetsCompletionItems = getCodeSnippets()
vscode.workspace.onDidChangeConfiguration((event) => {
  if (event.affectsConfiguration('scriptmonkey.metaData.default')) {
    codeSnippetsCompletionItems = getCodeSnippets()
  }
})

const codeSnippetsCompletionProvider = vscode.languages.registerCompletionItemProvider(
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
      const list: vscode.CompletionItem[] = codeSnippetsCompletionItems.map((item) => {
        const completionItem = new vscode.CompletionItem(item.label, item.kind)
        completionItem.detail = item.detail
        completionItem.insertText = item.insertText
        const doc = buildMarkdownString(item)
        completionItem.documentation = doc
        return completionItem
      })

      return list
    }
  }
)

export default codeSnippetsCompletionProvider
