import * as vscode from 'vscode';

const GMmetaCompletionItems = [
    {
        label: '@name',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'The name of the script, shown in script list and menus. It must be unique within a `@namespace`. Internationalization is done by adding an appendix naming the locale.'
            }
        ]
    },
    {
        label: '@namespace',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'The combination of `@namespace` and `@name` is the unique identifier for a userscript. `@namespace` can be any string, for example the homepage of a group of userscripts by the same author.'
            }
        ]
    },
    {
        label: '@version',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'Version of the script, it can be used to check if a script has new versions. It is composed of several parts, joined by `.`. Each part must start with numbers, and can be followed by alphabetic characters.'
            }
        ]
    },
    {
        label: '@author',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'The script\'s author.'
            }
        ]
    },
    {
        label: '@description',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'A brief summary to describe the script. Internationalization is done by adding an appendix naming the locale.'
            }
        ]
    },
    {
        label: '@homepage',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'The author\'s homepage that is used at the options page to link from the scripts name to the given page.'
            }
        ]
    },
    {
        label: '@homepageURL',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'If supplied, the home icon in the user scripts list will link to this.'
            }
        ]
    },
    {
        label: '@website',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'The author\'s website that is used at the options page to link from the scripts name to the given page.'
            }
        ]
    },
    {
        label: '@source',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'The source of the script that is used at the options page to link from the scripts name to the given page.'
            }
        ]
    },
    {
        label: '@icon',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'The script icon in low resolution.'
            }
        ]
    },
    {
        label: '@iconURL',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'The script icon in low resolution.'
            }
        ]
    },
    {
        label: '@defaulticon',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'The script icon in low resolution.'
            }
        ]
    },
    {
        label: '@icon64',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'This scripts icon in 64x64 pixels. If this tag, but `@icon` is given the `@icon` image will be scaled at some places at the options page.'
            }
        ]
    },
    {
        label: '@icon64URL',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'This scripts icon in 64x64 pixels. If this tag, but `@icon` is given the `@icon` image will be scaled at some places at the options page.'
            }
        ]
    },
    {
        label: '@updateURL',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'An update URL for the userscript.  \n**Note:** a `@version` tag is required to make update checks work.'
            }
        ]
    },
    {
        label: '@downloadURL',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'Defines the URL where the script will be downloaded from when an update was detected. If the value `none` is used, then no update check will be done.'
            }
        ]
    },
    {
        label: '@supportURL',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'Defines the URL where the user can report issues and get personal support.'
            }
        ]
    },
    {
        label: '@include',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'The pages on that a script should run.  \nMultiple tag instances are allowed.'
            }
        ]
    },
    {
        label: '@exclude',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'Exclude URLs even it they are included by `@include` or `@match`.  \nMultiple tag instances are allowed.'
            }
        ]
    },
    {
        label: '@exclude-match',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'Exclude URLs even it they are included by `@include` or `@match`.  \nMultiple tag instances are allowed.'
            }
        ]
    },
    {
        label: '@match',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'More or less equal to the `@include` tag.  \nMultiple tag instances are allowed.'
            }
        ]
    },
    {
        label: '@require',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'Require another script to execute before the current one. The value is the URL to the required script, which may be relative to the URL the script is being installed from. Please check the [sub-resource integrity](https://www.tampermonkey.net/documentation.php?ext=dhdg#Subresource_Integrity) section for more information how to ensure integrity.  \nMultiple tag instances are allowed.'
            }
        ]
    },
    {
        label: '@resource',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'Preloads resources that can by accessed via GM_getResourceURL and GM_getResourceText by the script. Please check the [sub-resource integrity](https://www.tampermonkey.net/documentation.php?ext=dhdg#Subresource_Integrity) section for more information how to ensure integrity.  \nMultiple tag instances are allowed.'
            }
        ]
    },
    {
        label: '@connect',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'This tag defines the domains (no top-level domains) including subdomains which are allowed to be retrieved by `GM_xmlhttpRequest`.  \nMultiple tag instances are allowed.'
            }
        ]
    },
    {
        label: '@run-at',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'Decide when the script will execute.'
            }
        ],
        insertText: new vscode.SnippetString('@run-at ${1|document-start,document-body,document-end,document-idle,context-menu|}')
    },
    {
        label: '@grant',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'Specify which special APIs should be granted and can be used when the script executes.'
            }
        ],
        insertText: new vscode.SnippetString('@grant ${1|none,unsafeWindow,window.close,window.focus,window.onurlchange,GM_info,GM_addStyle,GM_addElement,GM_deleteValue,GM_listValues,GM_addValueChangeListener,GM_removeValueChangeListener,GM_setValue,GM_getValue,GM_log,GM_getResourceText,GM_getResourceURL,GM_registerMenuCommand,GM_unregisterMenuCommand,GM_openInTab,GM_xmlhttpRequest,GM_download,GM_getTab,GM_saveTab,GM_getTabs,GM_notification,GM_setClipboard,GM.addStyle,GM.addElement,GM.registerMenuCommand,GM.deleteValue,GM.getResourceURL,GM.getValue,GM.info,GM.listValues,GM.notification,GM.openInTab,GM.setClipboard,GM.setValue,GM.xmlHttpRequest|}')
    },
    {
        label: '@antifeature',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'This tag allows script developers to disclose whether they monetize their scripts. It is for example required by [GreasyFork](https://greasyfork.org/).'
            }
        ],
        insertText: new vscode.SnippetString('@antifeature ${1|ads,tracking,miner|} ')
    },
    {
        label: '@noframes',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'When present, the script will execute only in top level document, but not in nested frames.'
            }
        ]
    },
    {
        label: '@unwrap',
        kind: vscode.CompletionItemKind.Snippet,
        documentation: [
            {
                add: 'markdown',
                value: 'Injects the userscript without any wrapper and sandbox into the page.'
            }
        ]
    }
]

export default GMmetaCompletionItems;