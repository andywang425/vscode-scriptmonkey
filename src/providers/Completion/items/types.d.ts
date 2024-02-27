import * as vscode from 'vscode'

interface CompletionItem {
  label: string
  kind: vscode.CompletionItemKind
  documentation: DocItem[]
  insertText?: vscode.SnippetString
  detail?: string
  commitCharacters?: string[]
}

interface DocItem {
  add: 'markdown' | 'code' | 'text'
  value: string
}

export { CompletionItem }
