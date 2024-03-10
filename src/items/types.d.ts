import * as vscode from 'vscode'

interface GMItem {
  label?: string
  kind?: vscode.CompletionItemKind
  documentation?: DocItem[]
  typeDefinition?: TypeItem[]
  insertText?: string
  detail?: string
  commitCharacter?: string
  subItems?: GMItem[]
}

interface DocItem {
  add: 'markdown' | 'text'
  value: string
}

interface TypeItem {
  add: 'markdown' | 'code'
  value: string
}

export { GMItem }
