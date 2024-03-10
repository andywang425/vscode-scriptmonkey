import * as vscode from 'vscode'

function findNextPosition(
  document: vscode.TextDocument,
  position: vscode.Position,
  first: boolean
): vscode.Position | undefined {
  if (first) {
    return position
  }

  let line = position.line
  let character = position.character

  if (character === 0) {
    if (line === 0) {
      return
    }

    character = document.lineAt(--line).text.trimEnd().length - 1

    if (character === -1) {
      return findNextPosition(document, new vscode.Position(line, 0), false)
    }

    if (
      document.getText(new vscode.Range(new vscode.Position(line, character), position)).trim() ===
      '.'
    ) {
      character = document.lineAt(line).text.substring(0, character).trimEnd().length - 1
      return new vscode.Position(line, character)
    }

    return
  }

  character = document.lineAt(line).text.substring(0, character).trimEnd().length - 1

  if (character === -1) {
    return findNextPosition(document, new vscode.Position(line, 0), false)
  }

  let temps = document
    .getText(new vscode.Range(new vscode.Position(line, character), position))
    .trim()

  if (
    document.getText(new vscode.Range(new vscode.Position(line, character), position)).trim() ===
    '.'
  ) {
    character = document.lineAt(line).text.substring(0, character).trimEnd().length - 1
    return new vscode.Position(line, character)
  }
}

/**
 * Get the word at a position
 *
 * Calling this function repeatedly with new position that returned by the previous call will get a serial of words
 *
 * For example, the document is (Invoke hover at ^ position):
 * ```js
 * GM. cookie
 *   .list
 *     ^
 * ```
 * - The fist call returns `list`
 * - The second call returns `cookie`
 * - The third call returns `GM`
 * @param document vscode.TextDocument
 * @param position vscode.Position
 * @param first Is it the first search?
 * @returns [word, next search's position]
 */
function getWord(
  document: vscode.TextDocument,
  position: vscode.Position,
  first: boolean
): [string, vscode.Position] | undefined {
  let newPosition: vscode.Position | undefined = findNextPosition(document, position, first)

  if (!newPosition) {
    return
  }

  const wordRange = document.getWordRangeAtPosition(newPosition)

  if (wordRange) {
    const text = document.getText(wordRange)

    if (text) {
      return [text, wordRange.start]
    }
  }
}

export default getWord
