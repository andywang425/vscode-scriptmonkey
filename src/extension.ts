// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode'
import { completionProviders } from './providers/CompletionProviders'
import { hoverProviders } from './providers/HoverProviders'
import { GMItem } from './items/types'
import allItems from './items'

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  process.env['GM_ITEMS_DEPTH'] = (function search(items: GMItem[]): number {
    const list = items.map((item) => {
      if (item.subItems) {
        return 1 + search(item.subItems)
      } else {
        return 1
      }
    })

    return Math.max(...list)
  })(allItems).toString()

  context.subscriptions.push(...completionProviders, ...hoverProviders)
}

// this method is called when your extension is deactivated
export function deactivate() {}
