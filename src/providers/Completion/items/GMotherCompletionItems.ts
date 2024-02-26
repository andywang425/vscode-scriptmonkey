import * as vscode from 'vscode'

// eslint-disable-next-line @typescript-eslint/naming-convention
const GMotherCompletionItems = [
  {
    label: 'unsafeWindow',
    kind: vscode.CompletionItemKind.Variable,
    detail: 'window object',
    commitCharacters: ['.'],
    documentation: [
      {
        add: 'markdown',
        value:
          'The `unsafeWindow` object provides full access to the pages javascript functions and variables.'
      }
    ]
  },
  {
    label: 'GM',
    kind: vscode.CompletionItemKind.Variable,
    detail: 'GM object',
    commitCharacters: ['.'],
    documentation: [
      {
        add: 'markdown',
        value: 'Provides `GM.*` APIs.'
      }
    ]
  }
]

export default GMotherCompletionItems
