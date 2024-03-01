import * as vscode from 'vscode'
import GMdotAPIsHoverItems from './items/GMdotAPIsHoverItems'
import checkIfShouldRun from '../../utils/checkIfShouldRun'
import buildMarkdownString from '../../utils/buildMarkdownString'
import { getWord } from '../../utils/tools'

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
    const word = getWord(document, position)
    if (linePrefix.includes('GM.') && word.startsWith(linePrefix.split('GM.').pop()!)) {
      const hoverItem = GMdotAPIsHoverItems.find((i) => i.word === word)
      if (hoverItem) {
        const markdownString = buildMarkdownString(hoverItem)
        return new vscode.Hover(markdownString)
      }
    }
  }
})

export default GMdotAPIsHoverProvider
