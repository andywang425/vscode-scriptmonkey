import * as vscode from 'vscode'
import GMotherHoverItems from './items/GMotherHoverItems'
import checkIfShouldRun from '../../other/checkIfShouldRun'

const GMotherHoverProvider = vscode.languages.registerHoverProvider('javascript', {
  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ) {
    if (!checkIfShouldRun(document)) {
      return
    }
    const word = document.getText(document.getWordRangeAtPosition(position))
    const hoverItem = GMotherHoverItems.find((i) => i.word === word)
    if (hoverItem) {
      const markdownString = new vscode.MarkdownString()
      for (const i of hoverItem.contents) {
        switch (i.add) {
          case 'code':
            markdownString.appendCodeblock(i.value, 'typescript')
            break
          case 'markdown':
            markdownString.appendMarkdown(i.value)
            break
          default:
            markdownString.appendText(i.value)
            break
        }
      }
      return new vscode.Hover(markdownString)
    }
  }
})

export default GMotherHoverProvider
