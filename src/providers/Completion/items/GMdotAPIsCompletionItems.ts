import * as vscode from 'vscode'
import { CompletionItem } from './types'

const GMdotAPIsCompletionItems: CompletionItem[] = [
  {
    label: 'addStyle',
    kind: vscode.CompletionItemKind.Method,
    documentation: [
      {
        add: 'markdown',
        value: 'Adds the given style to the document and returns the injected style element.'
      }
    ]
  },
  {
    label: 'addElement',
    kind: vscode.CompletionItemKind.Method,
    documentation: [
      {
        add: 'markdown',
        value:
          'Creates an HTML element specified by `tag_name` and applies all given `attributes` and returns the injected HTML element. If a `parent_node` is given, then it is attached to it or to document head or body otherwise.  \n  \nFor suitable `attributes`, please consult the appropriate documentation. For example:  \n- [script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)  \n- [img tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)  \n- [style tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)  \n'
      }
    ]
  },
  {
    label: 'registerMenuCommand',
    kind: vscode.CompletionItemKind.Method,
    documentation: [
      {
        add: 'markdown',
        value: 'Registers a command in Violentmonkey popup menu.'
      }
    ]
  },
  {
    label: 'deleteValue',
    kind: vscode.CompletionItemKind.Method,
    documentation: [
      {
        add: 'markdown',
        value: '(async) Deletes an existing key / value pair for current script from storage.'
      }
    ]
  },
  {
    label: 'getResourceURL',
    kind: vscode.CompletionItemKind.Method,
    documentation: [
      {
        add: 'markdown',
        value:
          '(async) Get the base64 encoded URI of a predefined @resource tag at the script header.'
      }
    ]
  },
  {
    label: 'getValue',
    kind: vscode.CompletionItemKind.Method,
    documentation: [
      {
        add: 'markdown',
        value: '(async) Retrieves a value for current script from storage.'
      }
    ]
  },
  {
    label: 'info',
    kind: vscode.CompletionItemKind.Property,
    documentation: [
      {
        add: 'markdown',
        value:
          'An object that exposes information about the current userscript. `GM.info` in different userscript managers may have different properties. Please check the documentation of the userscript manager you are using.'
      }
    ]
  },
  {
    label: 'listValues',
    kind: vscode.CompletionItemKind.Method,
    documentation: [
      {
        add: 'markdown',
        value: '(async) Returns an array of keys of all available values within this script.'
      }
    ]
  },
  {
    label: 'notification',
    kind: vscode.CompletionItemKind.Method,
    documentation: [
      {
        add: 'markdown',
        value: 'Shows a HTML5 Desktop notification and/or highlight the current tab.'
      }
    ]
  },
  {
    label: 'openInTab',
    kind: vscode.CompletionItemKind.Method,
    documentation: [
      {
        add: 'markdown',
        value: 'Opens URL in a new tab.'
      }
    ]
  },
  {
    label: 'setClipboard',
    kind: vscode.CompletionItemKind.Method,
    documentation: [
      {
        add: 'markdown',
        value: 'Sets data to system clipboard.'
      }
    ]
  },
  {
    label: 'setValue',
    kind: vscode.CompletionItemKind.Method,
    documentation: [
      {
        add: 'markdown',
        value: '(async) Sets a key / value pair for current script to storage.'
      }
    ]
  },
  {
    label: 'xmlHttpRequest',
    kind: vscode.CompletionItemKind.Method,
    documentation: [
      {
        add: 'markdown',
        value:
          'Makes a request like XMLHttpRequest, with some special capabilities, not restricted by same-origin policy.'
      }
    ]
  }
]

export default GMdotAPIsCompletionItems
