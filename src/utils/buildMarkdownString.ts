import * as vscode from 'vscode'
import { GMItem } from '../items/types'

// function isCompletionItem(item: any): item is CompletionItem {
//   return (item as CompletionItem).documentation !== undefined
// }

function appendContentToMarkdownString(markdownString: vscode.MarkdownString, content: any): void {
  switch (content.add) {
    case 'code':
      markdownString.appendCodeblock(content.value, 'typescript')
      break
    case 'markdown':
      markdownString.appendMarkdown(content.value)
      break
    default:
      markdownString.appendText(content.value)
      break
  }
}

function buildMarkdownString(item: GMItem): vscode.MarkdownString {
  const markdownString = new vscode.MarkdownString()

  if (item.documentation) {
    for (const content of item.documentation) {
      appendContentToMarkdownString(markdownString, content)
    }
  }

  return markdownString
}

export default buildMarkdownString
