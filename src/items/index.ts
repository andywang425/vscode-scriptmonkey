import * as vscode from 'vscode'
import { GMItem } from './types'

const items: GMItem[] = [
  {
    label: 'unsafeWindow',
    kind: vscode.CompletionItemKind.Constant,
    detail: 'window object',
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
    commitCharacter: '.',
    documentation: [
      {
        add: 'markdown',
        value: 'Provides `GM.*` APIs.'
      }
    ],
    subItems: [
      {
        label: 'info',
        kind: vscode.CompletionItemKind.Constant,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'An object that exposes information about the current userscript.'
          }
        ]
      },
      {
        label: 'addStyle',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'Adds the given style to the document and returns the injected style element.'
          }
        ]
      },
      {
        label: 'addElement',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value:
              'Creates an HTML element specified by `tag_name` and applies all given `attributes` and returns the injected HTML element. If a `parent_node` is given, then it is attached to it or to document head or body otherwise.  \n  \nFor suitable `attributes`, please consult the appropriate documentation. For example:  \n- [script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)  \n- [img tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)  \n- [style tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)  \n'
          }
        ]
      },
      {
        label: 'deleteValue',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'Deletes an existing key / value pair for current script from storage.'
          }
        ]
      },
      {
        label: 'listValues',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'Returns an array of keys of all available values within this script.'
          }
        ]
      },
      {
        label: 'addValueChangeListener',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'Adds a change listener to the storage and returns the listener ID.'
          }
        ]
      },
      {
        label: 'removeValueChangeListener',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'Removes a change listener by its ID.'
          }
        ]
      },
      {
        label: 'setValue',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'Sets a key / value pair for current script to storage.'
          }
        ]
      },
      {
        label: 'getValue',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'Retrieves a value for current script from storage.'
          }
        ]
      },
      {
        label: 'log',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'Log a message to the console.'
          }
        ]
      },
      {
        label: 'getResourceText',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'Get the content of a predefined @resource tag at the script header.'
          }
        ]
      },
      {
        label: 'getResourceURL',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'Get the base64 encoded URI of a predefined @resource tag at the script header.'
          }
        ]
      },
      {
        label: 'registerMenuCommand',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'Registers a command in Violentmonkey popup menu.'
          }
        ]
      },
      {
        label: 'unregisterMenuCommand',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value:
              'Unregister a menu command that was previously registered by `GM_registerMenuCommand` with the given menu command ID.'
          }
        ]
      },
      {
        label: 'openInTab',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'Opens URL in a new tab.'
          }
        ]
      },
      {
        label: 'xmlHttpRequest',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value:
              'Makes a request like XMLHttpRequest, with some special capabilities, not restricted by same-origin policy.'
          }
        ]
      },
      {
        label: 'download',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'Downloads a URL to a local file.'
          }
        ]
      },
      {
        label: 'getTab',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'Get a object that is persistent as long as this tab is open.'
          }
        ]
      },
      {
        label: 'saveTab',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'Save the tab object to reopen it after a page unload.'
          }
        ]
      },
      {
        label: 'getTabs',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'Get all tab objects as a hash to communicate with other script instances.'
          }
        ]
      },
      {
        label: 'notification',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'Shows a HTML5 Desktop notification and/or highlight the current tab.'
          }
        ]
      },
      {
        label: 'setClipboard',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value: 'Sets data to system clipboard.'
          }
        ]
      },
      {
        label: 'webRequest',
        kind: vscode.CompletionItemKind.Function,
        detail: 'GM API',
        documentation: [
          {
            add: 'markdown',
            value:
              "`GM_webRequest` (re-)registers rules for web request manipulations and the listener of triggered rules. If you need to just register rules it's better to use `@webRequest` header. Note, webRequest proceeds only requests with types `sub_frame`, `script`, `xhr` and `websocket`."
          }
        ]
      }
    ]
  },
  {
    commitCharacter: '@',
    subItems: [
      {
        label: 'name',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'The name of the script, shown in script list and menus. It must be unique within a `@namespace`. Internationalization is done by adding an appendix naming the locale.'
          }
        ]
      },
      {
        label: 'namespace',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'The combination of `@namespace` and `@name` is the unique identifier for a userscript. `@namespace` can be any string, for example the homepage of a group of userscripts by the same author.'
          }
        ]
      },
      {
        label: 'version',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'Version of the script, it can be used to check if a script has new versions. It is composed of several parts, joined by `.`. Each part must start with numbers, and can be followed by alphabetic characters.'
          }
        ]
      },
      {
        label: 'author',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value: "The script's author."
          }
        ]
      },
      {
        label: 'description',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'A brief summary to describe the script. Internationalization is done by adding an appendix naming the locale.'
          }
        ]
      },
      {
        label: 'homepage',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              "The author's homepage that is used at the options page to link from the scripts name to the given page."
          }
        ]
      },
      {
        label: 'homepageURL',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value: 'If supplied, the home icon in the user scripts list will link to this.'
          }
        ]
      },
      {
        label: 'website',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              "The author's website that is used at the options page to link from the scripts name to the given page."
          }
        ]
      },
      {
        label: 'source',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'The source of the script that is used at the options page to link from the scripts name to the given page.'
          }
        ]
      },
      {
        label: 'icon',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value: 'The script icon in low resolution.'
          }
        ]
      },
      {
        label: 'iconURL',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value: 'The script icon in low resolution.'
          }
        ]
      },
      {
        label: 'defaulticon',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value: 'The script icon in low resolution.'
          }
        ]
      },
      {
        label: 'icon64',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'This scripts icon in 64x64 pixels. If this tag, but `@icon` is given the `@icon` image will be scaled at some places at the options page.'
          }
        ]
      },
      {
        label: 'icon64URL',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'This scripts icon in 64x64 pixels. If this tag, but `@icon` is given the `@icon` image will be scaled at some places at the options page.'
          }
        ]
      },
      {
        label: 'updateURL',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'An update URL for the userscript.  \n**Note:** a `@version` tag is required to make update checks work.'
          }
        ]
      },
      {
        label: 'downloadURL',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'Defines the URL where the script will be downloaded from when an update was detected. If the value `none` is used, then no update check will be done.'
          }
        ]
      },
      {
        label: 'installURL',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value: 'Describe how user script managers should get updates.'
          }
        ]
      },
      {
        label: 'contributionURL',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value: 'URL for a page where users can donate to the author of a script.'
          }
        ]
      },
      {
        label: 'contributionAmount',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value: 'Suggested donation amount, used in conjunction with `@contributionURL`.'
          }
        ]
      },
      {
        label: 'supportURL',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value: 'Defines the URL where the user can report issues and get personal support.'
          }
        ]
      },
      {
        label: 'compatible',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              "Flags this script as compatible with a browser. Compatibility information will be shown on a script's page. Comments on compatibility can be included in the format `@compatible firefox Must disable pop-up blocker`. Recognized browsers are: `firefox`, `chrome`, `opera`, `safari`, `edge`."
          }
        ],
        insertText: 'compatible ${1|firefox,chrome,opera,safari,edge|}'
      },
      {
        label: 'incompatible',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              "Flags this script as incompatible with a browser. Compatibility information will be shown on a script's page. Optional comments on compatibility can be included in the format `@incompatible firefox Broken since Firefox 23`. Recognized browsers are: `firefox`, `chrome`, `opera`, `safari`, `edge`."
          }
        ],
        insertText: 'incompatible ${1|firefox,chrome,opera,safari,edge|}'
      },
      {
        label: 'include',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value: 'The pages on that a script should run.  \nMultiple tag instances are allowed.'
          }
        ]
      },
      {
        label: 'exclude',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'Exclude URLs even it they are included by `@include` or `@match`.  \nMultiple tag instances are allowed.'
          }
        ]
      },
      {
        label: 'exclude-match',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'Exclude URLs even it they are included by `@include` or `@match`.  \nMultiple tag instances are allowed.'
          }
        ]
      },
      {
        label: 'match',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'More or less equal to the `@include` tag.  \nMultiple tag instances are allowed.'
          }
        ]
      },
      {
        label: 'require',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'Require another script to execute before the current one. The value is the URL to the required script, which may be relative to the URL the script is being installed from. Please check the [sub-resource integrity](https://www.tampermonkey.net/documentation.php?ext=dhdg#Subresource_Integrity) section for more information how to ensure integrity.  \nMultiple tag instances are allowed.'
          }
        ]
      },
      {
        label: 'resource',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'Preloads resources that can by accessed via GM_getResourceURL and GM_getResourceText by the script. Please check the [sub-resource integrity](https://www.tampermonkey.net/documentation.php?ext=dhdg#Subresource_Integrity) section for more information how to ensure integrity.  \nMultiple tag instances are allowed.'
          }
        ]
      },
      {
        label: 'connect',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'This tag defines the domains (no top-level domains) including subdomains which are allowed to be retrieved by `GM_xmlhttpRequest`.  \nMultiple tag instances are allowed.'
          }
        ]
      },
      {
        label: 'run-at',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value: 'Decide when the script will execute.'
          }
        ],
        insertText:
          'run-at ${1|document-start,document-body,document-end,document-idle,context-menu|}'
      },
      {
        label: 'grant',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'Specify which special APIs should be granted and can be used when the script executes.'
          }
        ],
        insertText:
          'grant ${1|none,unsafeWindow,window.close,window.focus,window.onurlchange,GM_info,GM_addStyle,GM_addElement,GM_deleteValue,GM_listValues,GM_addValueChangeListener,GM_removeValueChangeListener,GM_setValue,GM_getValue,GM_log,GM_getResourceText,GM_getResourceURL,GM_registerMenuCommand,GM_unregisterMenuCommand,GM_openInTab,GM_xmlhttpRequest,GM_download,GM_getTab,GM_saveTab,GM_getTabs,GM_notification,GM_setClipboard,GM.addStyle,GM.addElement,GM.registerMenuCommand,GM.deleteValue,GM.getResourceURL,GM.getValue,GM.info,GM.listValues,GM.notification,GM.openInTab,GM.setClipboard,GM.setValue,GM.xmlHttpRequest|}'
      },
      {
        label: 'antifeature',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'This tag allows script developers to disclose whether they monetize their scripts. It is for example required by [GreasyFork](https://greasyfork.org/).'
          }
        ],
        insertText: 'antifeature ${1|ads,tracking,miner|}'
      },
      {
        label: 'noframes',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'When present, the script will execute only in top level document, but not in nested frames.'
          }
        ]
      },
      {
        label: 'unwrap',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value: 'Injects the userscript without any wrapper and sandbox into the page.'
          }
        ]
      },
      {
        label: 'license',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              'The license that describes how people are allowed to copy or modify a script. Using a "Full name" or "Identifier" from [the SPDX License List](https://spdx.org/licenses/) is recommended. Lack of license implies users can install the script for personal use, but may not redistribute it. License is displayed on a script\'s info page.'
          }
        ],
        insertText:
          'license ${1|AGPL-3.0-only,AGPL-3.0-or-later,GPL-2.0-only,GPL-2.0-or-later,GPL-3.0-only,GPL-3.0-or-later,LGPL-2.0-only,LGPL-2.0-or-later,LGPL-2.1-only,LGPL-2.1-or-later,LGPL-3.0-only,LGPL-3.0-or-later,MIT,Unlicense|}'
      },
      {
        label: 'copyright',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value: 'The copyright of your script. Format: _year, name (link)_.'
          }
        ]
      },
      {
        label: 'nocompat',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              "At the moment TM tries to detect whether a script was written in knowledge of Google Chrome/Chromium by looking for the @match tag, but not every script uses it. That's why TM supports this tag to disable all optimizations that might be necessary to run scripts written for Firefox/Greasemonkey. To keep this tag extensible you can to add the browser name that can be handled by the script."
          }
        ],
        insertText: 'nocompat Chrome'
      },
      {
        label: 'webRequest',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value:
              "`@webRequest` takes a JSON document that matches `GM_webRequest`'s rule parameter. It allows the rules to apply even before the userscript is loaded."
          }
        ],
        insertText: 'webRequest { "selector": $1, "action": $2 }'
      },
      {
        label: 'sandbox',
        kind: vscode.CompletionItemKind.Snippet,
        detail: 'GM metadata',
        documentation: [
          {
            add: 'markdown',
            value: '`@sandbox` allows Tampermonkey to decide where the userscript is injected:'
          },
          {
            add: 'markdown',
            value:
              "\n- `MAIN_WORLD` - the page\n- `ISOLATED_WORLD` - the extension's content script\n- `USERSCRIPT_WORLD` - a special context created for userscripts\n"
          },
          {
            add: 'markdown',
            value:
              '\nBut instead of specifying an environment, the userscript can express what exactly it needs access to. `@sandbox` supports three possible arguments:\n'
          },
          {
            add: 'markdown',
            value:
              '\n- `raw` "Raw" access means that a script for compatibility reasons always needs to run in page context, the `MAIN_WORLD`. At the moment this mode is the default if `@sandbox` is omitted. If injection into the `MAIN_WORLD` is not possible (e.g. because of a CSP) the userscript will be injected into other (enabled) sandboxes according to the order of this list.\n'
          },
          {
            add: 'markdown',
            value:
              '\n- `JavaScript` "JavaScript" access mode means that this script needs access to `unsafeWindow`. At Firefox a special context, the `USERSCRIPT_WORLD`, is created which also bypasses existing CSPs. It however, might create new issues since now [`cloneInto` and `exportFunction`](https://developer.mozilla.org/en-US/docs/Mozilla/Add-ons/WebExtensions/Sharing_objects_with_page_scripts) are necessary to share objects with the page. `raw` mode is used as fallback at other browsers.\n'
          },
          {
            add: 'markdown',
            value:
              '\n- `DOM` Use this access mode if the script only needs DOM and no direct `unsafeWindow` access. If [enabled](https://www.tampermonkey.net/faq#Q404) these scripts are executed inside the extension context, the `ISOLATED_WORLD`, or at any other enabled context otherwise, because they all grant DOM access.\n'
          }
        ],
        insertText: 'sandbox ${1|raw,JavaScript,DOM|}'
      }
    ]
  }
]

export default items
