import * as vscode from 'vscode'
import { CompletionItem } from '../providers/Completion/items/types'
import { HoverItem } from '../providers/Hover/items/types'

function isCompletionItem(item: any): item is CompletionItem {
  return (item as CompletionItem).documentation !== undefined
}

function appendContentToMarkdownString(markdownString: vscode.MarkdownString, content: any) {
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

function buildMarkdownString(item: CompletionItem | HoverItem) {
  const markdownString = new vscode.MarkdownString()

  if (isCompletionItem(item)) {
    for (const content of item.documentation) {
      appendContentToMarkdownString(markdownString, content)
    }
  } else {
    for (const content of item.contents) {
      appendContentToMarkdownString(markdownString, content)
    }
  }

  return markdownString
}

export default buildMarkdownString
