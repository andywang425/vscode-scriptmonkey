import * as vscode from 'vscode'

interface GMItem {
  label?: string
  kind?: vscode.CompletionItemKind
  documentation?: MarkDownItem[]
  typeDefinition?: MarkDownItem[]
  insertText?: string
  detail?: string
  commitCharacter?: string
  subItems?: GMItem[]
}

interface MarkDownItem {
  add: 'markdown' | 'code' | 'text'
  value: string
}

export { GMItem }
