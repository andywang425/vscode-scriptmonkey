import * as vscode from 'vscode'
import GMdotAPIsHoverItems from './items/GMdotAPIsHoverItems'
import checkIfShouldRun from '../../utils/checkIfShouldRun'
import buildMarkdownString from '../../utils/buildMarkdownString'

const GMdotAPIsHoverProvider = vscode.languages.registerHoverProvider('javascript', {
  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ) {
    if (!checkIfShouldRun(document)) {
      return
    }
    const linePrefix = document.lineAt(position).text.substring(0, position.character)
    if (!linePrefix.includes('GM.')) {
      return undefined
    }
    const word = document.getText(document.getWordRangeAtPosition(position))
    const hoverItem = GMdotAPIsHoverItems.find((i) => i.word === word)
    if (hoverItem) {
      const markdownString = buildMarkdownString(hoverItem)
      return new vscode.Hover(markdownString)
    }
  }
})

export default GMdotAPIsHoverProvider
