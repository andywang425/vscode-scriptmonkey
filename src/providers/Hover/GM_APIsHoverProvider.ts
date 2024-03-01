import * as vscode from 'vscode'
import GM_APIsHoverItems from './items/GM_APIsHoverItems'
import checkIfShouldRun from '../../utils/checkIfShouldRun'
import buildMarkdownString from '../../utils/buildMarkdownString'
import { getWord } from '../../utils/tools'

const GM_APIsHoverProvider = vscode.languages.registerHoverProvider('javascript', {
  provideHover(
    document: vscode.TextDocument,
    position: vscode.Position,
    token: vscode.CancellationToken
  ) {
    if (!checkIfShouldRun(document)) {
      return
    }
    const word = getWord(document, position)
    const hoverItem = GM_APIsHoverItems.find((i) => i.word === word)
    if (hoverItem) {
      const markdownString = buildMarkdownString(hoverItem)
      return new vscode.Hover(markdownString)
    }
  }
})

export default GM_APIsHoverProvider
