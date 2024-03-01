import * as vscode from 'vscode'

function getWord(document: vscode.TextDocument, position: vscode.Position): string {
  return document.getText(document.getWordRangeAtPosition(position))
}

export { getWord }
