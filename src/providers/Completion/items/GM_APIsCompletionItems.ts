import * as vscode from 'vscode'
import { CompletionItem } from './types'

const GM_APIsCompletionItems: CompletionItem[] = [
  {
    label: 'GM_info',
    kind: vscode.CompletionItemKind.Constant,
    documentation: [
      {
        add: 'markdown',
        value:
          'An object that exposes information about the current userscript. `GM_info` in different userscript managers may have different properties. Please check the documentation of the userscript manager you are using.'
      }
    ]
  },
  {
    label: 'GM_addStyle',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value: 'Adds the given style to the document and returns the injected style element.'
      }
    ]
  },
  {
    label: 'GM_addElement',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value:
          'Creates an HTML element specified by `tag_name` and applies all given `attributes` and returns the injected HTML element. If a `parent_node` is given, then it is attached to it or to document head or body otherwise.  \n  \nFor suitable `attributes`, please consult the appropriate documentation. For example:  \n- [script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)  \n- [img tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)  \n- [style tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)  \n'
      }
    ]
  },
  {
    label: 'GM_deleteValue',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value: 'Deletes an existing key / value pair for current script from storage.'
      }
    ]
  },
  {
    label: 'GM_listValues',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value: 'Returns an array of keys of all available values within this script.'
      }
    ]
  },
  {
    label: 'GM_addValueChangeListener',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value: 'Adds a change listener to the storage and returns the listener ID.'
      }
    ]
  },
  {
    label: 'GM_removeValueChangeListener',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value: 'Removes a change listener by its ID.'
      }
    ]
  },
  {
    label: 'GM_setValue',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value: 'Sets a key / value pair for current script to storage.'
      }
    ]
  },
  {
    label: 'GM_getValue',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value: 'Retrieves a value for current script from storage.'
      }
    ]
  },
  {
    label: 'GM_log',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value: 'Log a message to the console.'
      }
    ]
  },
  {
    label: 'GM_getResourceText',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value: 'Get the content of a predefined @resource tag at the script header.'
      }
    ]
  },
  {
    label: 'GM_getResourceURL',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value: 'Get the base64 encoded URI of a predefined @resource tag at the script header.'
      }
    ]
  },
  {
    label: 'GM_registerMenuCommand',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value: 'Registers a command in Violentmonkey popup menu.'
      }
    ]
  },
  {
    label: 'GM_unregisterMenuCommand',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value:
          'Unregister a menu command that was previously registered by `GM_registerMenuCommand` with the given menu command ID.'
      }
    ]
  },
  {
    label: 'GM_openInTab',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value: 'Opens URL in a new tab.'
      }
    ]
  },
  {
    label: 'GM_xmlhttpRequest',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value:
          'Makes a request like XMLHttpRequest, with some special capabilities, not restricted by same-origin policy.'
      }
    ]
  },
  {
    label: 'GM_download',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value: 'Downloads a URL to a local file.'
      }
    ]
  },
  {
    label: 'GM_getTab',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value: 'Get a object that is persistent as long as this tab is open.'
      }
    ]
  },
  {
    label: 'GM_saveTab',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value: 'Save the tab object to reopen it after a page unload.'
      }
    ]
  },
  {
    label: 'GM_getTabs',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value: 'Get all tab objects as a hash to communicate with other script instances.'
      }
    ]
  },
  {
    label: 'GM_notification',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value: 'Shows a HTML5 Desktop notification and/or highlight the current tab.'
      }
    ]
  },
  {
    label: 'GM_setClipboard',
    kind: vscode.CompletionItemKind.Function,
    documentation: [
      {
        add: 'markdown',
        value: 'Sets data to system clipboard.'
      }
    ]
  }
]

export default GM_APIsCompletionItems
