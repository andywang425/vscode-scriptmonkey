import * as vscode from 'vscode'
import GMotherHoverItems from './items/GMotherHoverItems'
import checkIfShouldRun from '../../utils/checkIfShouldRun'
import buildMarkdownString from '../../utils/buildMarkdownString'

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
      const markdownString = buildMarkdownString(hoverItem)
      return new vscode.Hover(markdownString)
    }
  }
})

export default GMotherHoverProvider
