import * as vscode from 'vscode'
import GMotherCompletionItems from './items/GMotherCompletionItems'
import checkIfShouldRun from '../../utils/checkIfShouldRun'
import buildMarkdownString from '../../utils/buildMarkdownString'

const GMotherCompletionProvider = vscode.languages.registerCompletionItemProvider('javascript', {
  provideCompletionItems(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken,
    context: vscode.CompletionContext
  ) {
    if (!checkIfShouldRun(document)) {
      return
    }
    const list: vscode.CompletionItem[] = GMotherCompletionItems.map((item) => {
      const completionItem = new vscode.CompletionItem(item.label, item.kind)
      completionItem.detail = item.detail
      completionItem.commitCharacters = item.commitCharacters
      const doc = buildMarkdownString(item)
      completionItem.documentation = doc
      return completionItem
    })

    return list
  }
})

export default GMotherCompletionProvider
