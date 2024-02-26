// eslint-disable-next-line @typescript-eslint/naming-convention
const GM_APIsHoverItems = [
  {
    word: 'GM_info',
    contents: [
      {
        add: 'code',
        value:
          'const GM_info: {\n\tdownloadMode?: string,\n\tisIncognito?: boolean,\n\tinjectInto?: string,\n\tplatform?: {\n\t\tarch: string,\n\t\tbrowserName: string,\n\t\tbrowserVersion: string,\n\t\tos: string\n\t},\n\tscriptHandler: string,\n\tscriptMetaStr: string,\n\tscriptSource?: string,\n\tscriptUpdateURL?: string | null,\n\tscriptWillUpdate: boolean,\n\tuuid?: string,\n\ttoString?: () => string,\n\tversion: string,\n\tscript: {\n\t\tauthor: string,\n\t\tantifeatures?: {\n\t\t\tads?: {\n\t\t\t\tdefault: string\n\t\t\t},\n\t\t\ttracking?: {\n\t\t\t\tdefault: string\n\t\t\t},\n\t\t\tminer?: {\n\t\t\t\tdefault: string\n\t\t\t}\n\t\t}\n\t\tdescription: string,\n\t\tdescription_i18n?: {\n\t\t\t[key: string]?: string, ...\n\t\t},\n\t\toptions?: {\n\t\t\tcheck_for_updates: boolean,\n\t\t\tcomment: string | null,\n\t\t\tcompat_foreach: boolean,\n\t\t\tcompat_metadata: boolean,\n\t\t\tcompat_powerful_this: boolean,\n\t\t\tcompat_prototypes: boolean,\n\t\t\tcompat_wrappedjsobject: boolean,\n\t\t\tcompatopts_for_requires: boolean,\n\t\t\tnoframes: boolean | null,\n\t\t\toverride: {\n\t\t\t\tmerge_connects: boolean,\n\t\t\t\tmerge_excludes: boolean,\n\t\t\t\tmerge_includes: boolean,\n\t\t\t\tmerge_matches: boolean,\n\t\t\t\torig_connects: string[],\n\t\t\t\torig_excludes: string[],\n\t\t\t\torig_includes: string[],\n\t\t\t\torig_matches: string[],\n\t\t\t\torig_noframes: boolean | null,\n\t\t\t\torig_run_at: string,\n\t\t\t\tuse_blockers: string[],\n\t\t\t\tuse_connects: string[],\n\t\t\t\tuse_excludes: string[],\n\t\t\t\tuse_includes: string[],\n\t\t\t\tuse_matches: string[]\n\t\t\t}\n\t\t\trun_at: string,\n\t\t\ttab_types: string | null,\n\t\t\tunwrap: boolean | null,\n\t\t},\n\t\texcludeMatches?: string[],\n\t\texcludes: string[],\n\t\tgrant: string[],\n\t\ticon: string | null,\n\t\ticon64?: string | null,\n\t\tdownloadURL?: string | null,\n\t\tevilness?: number,\n\t\tlastModified?: number,\n\t\tposition?: number,\n\t\tincludes: string[],\n\t\tmatches: string[],\n\t\tname: string,\n\t\tname_i18n: {\n\t\t\t[key: string]?: string\n\t\t},\n\t\tnamespace: string,\n\t\tnoframes?: boolean,\n\t\trequire?: string[],\n\t\trequires?: [\n\t\t\t{\n\t\t\t\ttextContent: string\n\t\t\t}, ...\n\t\t],\n\t\tresources: [\n\t\t\t{\n\t\t\t\tname: string,\n\t\t\t\turl: string,\n\t\t\t\tcontent?: string,\n\t\t\t\tmeta?: string\n\t\t\t}, ...\n\t\t],\n\t\trunAt?: string,\n\t\trun-at?: string,\n\t\tsupportURL?: string | null,\n\t\tunwrap: boolean,\n\t\tupdateURL?: string | null,\n\t\tuuid?: string,\n\t\tversion: string,\n\t\tsync?: {\n\t\t\timported: number\n\t\t}\n\t\twebRequest: Object | null,\n\t}\n}'
      },
      {
        add: 'markdown',
        value: 'An object that exposes information about the current userscript.  \n'
      },
      {
        add: 'markdown',
        value:
          '**Notice:** `GM_info` in different userscript managers may have different properties.  \nPlease check the documentation of the userscript manager you are using.'
      }
    ]
  },
  {
    word: 'GM_addStyle',
    contents: [
      {
        add: 'code',
        value: 'function GM_addStyle(css: string): HTMLStyleElement'
      },
      {
        add: 'markdown',
        value: 'Adds the given style to the document and returns the injected style element.'
      }
    ]
  },
  {
    word: 'GM_addElement',
    contents: [
      {
        add: 'code',
        value:
          'function GM_addElement(parentNode?: HTMLElement, tag: string, attributes: { [key: string]: string | boolean | number }): HTMLElement'
      },
      {
        add: 'markdown',
        value:
          'Creates an HTML element specified by `tag_name` and applies all given `attributes` and returns the injected HTML element. If a `parent_node` is given, then it is attached to it or to document head or body otherwise.  \n  \nFor suitable `attributes`, please consult the appropriate documentation. For example:  \n- [script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)  \n- [img tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)  \n- [style tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)  \n'
      },
      {
        add: 'code',
        value: `GM_addElement('script', {\n\ttextContent: 'window.foo = "bar";'\n});\n\nGM_addElement('script', {\n\tsrc: 'https://example.com/script.js',\n\ttype: 'text/javascript'\n});\n\nGM_addElement(document.getElementsByTagName('div')[0], 'img', {\n\tsrc: 'https://example.com/image.png'\n});\n\nGM_addElement(shadowDOM, 'style', {\n\ttextContent: 'div { color: black; };'\n});`
      }
    ]
  },
  {
    word: 'GM_deleteValue',
    contents: [
      {
        add: 'code',
        value: 'function GM_deleteValue(key: string): void'
      },
      {
        add: 'markdown',
        value: 'Deletes an existing key / value pair for current script from storage.'
      }
    ]
  },
  {
    word: 'GM_listValues',
    contents: [
      {
        add: 'code',
        value: 'function GM_listValues(): string[]'
      },
      {
        add: 'markdown',
        value: 'Returns an array of keys of all available values within this script.'
      }
    ]
  },
  {
    word: 'GM_addValueChangeListener',
    contents: [
      {
        add: 'code',
        value:
          'function GM_addValueChangeListener(name: string, callback: (name: string, oldValue: any, newValue: any, remote: boolean) => void): number'
      },
      {
        add: 'markdown',
        value: 'Adds a change listener to the storage and returns the listener ID.  \n'
      },
      {
        add: 'markdown',
        value:
          '- `name` _string_\n\nThe name of the observed variable.\n\n- `callback` _function(name, oldValue, newValue, remote) {}_\n\n\t- `name` _string_\n\n\t\tThe name of the observed variable.\n\n\t- `oldValue` _any_\n\n\t\tThe old value of the observed variable (`undefined` if it was created).\n\n\t- `newValue` _any_\n\n\t\tThe new value of the observed variable (`undefined` if it was deleted).\n\n\t- `remote` _boolean_\n\n\t\t`true` if modified by the userscript instance of another tab or `false` for this script instance. Can be used by scripts of different browser tabs to communicate with each other.'
      }
    ]
  },
  {
    word: 'GM_removeValueChangeListener',
    contents: [
      {
        add: 'code',
        value: 'function GM_removeValueChangeListener(listenerId: number): void'
      },
      {
        add: 'markdown',
        value: 'Removes a change listener by its ID.'
      }
    ]
  },
  {
    word: 'GM_setValue',
    contents: [
      {
        add: 'code',
        value: 'function GM_setValue(key: string, value: any): void'
      },
      {
        add: 'markdown',
        value: 'Sets a key / value pair for current script to storage.'
      }
    ]
  },
  {
    word: 'GM_getValue',
    contents: [
      {
        add: 'code',
        value: 'function GM_getValue(key: string, defaultValue?: any): any'
      },
      {
        add: 'markdown',
        value: 'Retrieves a value for current script from storage.'
      }
    ]
  },
  {
    word: 'GM_log',
    contents: [
      {
        add: 'code',
        value: 'function GM_log(...message: any[]): void'
      },
      {
        add: 'markdown',
        value: 'Log a message to the console.'
      }
    ]
  },
  {
    word: 'GM_getResourceText',
    contents: [
      {
        add: 'code',
        value: 'function GM_getResourceText(name: string): string'
      },
      {
        add: 'markdown',
        value: 'Get the content of a predefined @resource tag at the script header.'
      }
    ]
  },
  {
    word: 'GM_getResourceURL',
    contents: [
      {
        add: 'code',
        value: 'function GM_getResourceURL(name: string, isBlobUrl?: boolean): string'
      },
      {
        add: 'markdown',
        value: 'Get the base64 encoded URI of a predefined @resource tag at the script header.'
      }
    ]
  },
  {
    word: 'GM_registerMenuCommand',
    contents: [
      {
        add: 'code',
        value:
          'function GM_registerMenuCommand(caption: string, onClick: (event: MouseEvent | KeyboardEvent) => void): number | string'
      },
      {
        add: 'markdown',
        value: 'Registers a command in userscript manager popup menu.'
      }
    ]
  },
  {
    word: 'GM_unregisterMenuCommand',
    contents: [
      {
        add: 'code',
        value: 'function GM_unregisterMenuCommand(menuItem: number | string): void'
      },
      {
        add: 'markdown',
        value:
          'Unregister a menu command that was previously registered by `GM_registerMenuCommand`.'
      }
    ]
  },
  {
    word: 'GM_openInTab',
    contents: [
      {
        add: 'code',
        value:
          'function GM_openInTab(url: string,\n\toptions?: {\n\t\tactive?: boolean,\n\t\tcontainer?: number,\n\t\tinsert?: boolean,\n\t\tpinned?: boolean\n\t} | boolean\n): { onclose: () => void, closed: boolean, close: () => void }'
      },
      {
        add: 'markdown',
        value: 'Opens URL in a new tab.'
      }
    ]
  },
  {
    word: 'GM_xmlhttpRequest',
    contents: [
      {
        add: 'code',
        value:
          'function GM_xmlhttpRequest(details: {\n\turl: string,\n\tmethod?: string,\n\tuser?: string,\n\tpassword?: string,\n\theaders?: { [key: string]: string },\n\tdata?: string | FormData | Blob,\n\tcookie?: string,\n\ttimeout?: number,\n\toverrideMimeType?: string,\n\tbinary?: boolean,\n\tnocache?: boolean,\n\trevalidate?: boolean,\n\tresponseType?: string,\n\tcontext?: any,\n\tanonymous?: boolean,\n\tfetch?: boolean,\n\tonabort?: (response: responseObject) => void,\n\tonloadend?: (response: responseObject) => void,\n\tonloadstart?: (response: responseObject) => void,\n\tonload?: (response: responseObject) => void,\n\tonprogress?: (response: responseObject) => void,\n\tonerror?: (response: responseObject) => void,\n\tonreadystatechange?: (response: responseObject) => void,\n\tontimeout?: (response: responseObject) => void\n}): () => void\n'
      },
      {
        add: 'markdown',
        value: '`@type`'
      },
      {
        add: 'code',
        value:
          'const responseObject: {\n\treadyState: number,\n\tstatus: number,\n\tstatusText: string,\n\tresponseText: string,\n\tresponseHeaders: string,\n\tresponseXML?: Document,\n\tresponse: string | Blob | ArrayBuffer | Document | Object | null,\n\tfinalUrl: string,\n\tcontext?: any\n}'
      },
      {
        add: 'markdown',
        value:
          'Makes a request like XMLHttpRequest, with some special capabilities, not restricted by same-origin policy.'
      }
    ]
  },
  {
    word: 'GM_download',
    contents: [
      {
        add: 'markdown',
        value: '- Using separate parameters:  \n'
      },
      {
        add: 'code',
        value: 'function GM_download(url: string, name: string): void\n'
      },
      {
        add: 'markdown',
        value: '- Using an object:  \n'
      },
      {
        add: 'code',
        value:
          'function GM_download(options: {\n\turl: string,\n\tname: string,\n\theaders?: Object,\n\tsaveAs?: boolean,\n\ttimeout?: number,\n\tonerror?: () => { error: string, details: string },\n\tonload?: () => void,\n\tonprogress?: () => void,\n\tontimeout?: () => void\n}): void\n'
      },
      {
        add: 'markdown',
        value: 'Downloads a URL to a local file.'
      }
    ]
  },
  {
    word: 'GM_getTab',
    contents: [
      {
        add: 'code',
        value: 'function GM_getTab(callback: () => Object): void'
      },
      {
        add: 'markdown',
        value: 'Get a object that is persistent as long as this tab is open.'
      }
    ]
  },
  {
    word: 'GM_saveTab',
    contents: [
      {
        add: 'code',
        value: 'function GM_saveTab(tab: Object): void'
      },
      {
        add: 'markdown',
        value: 'Save the tab object to reopen it after a page unload.'
      }
    ]
  },
  {
    word: 'GM_getTabs',
    contents: [
      {
        add: 'code',
        value: 'function GM_getTabs(callback: () => { [key: number]: Object }): void'
      },
      {
        add: 'markdown',
        value: 'Get all tab objects as a hash to communicate with other script instances.'
      }
    ]
  },
  {
    word: 'GM_notification',
    contents: [
      {
        add: 'markdown',
        value: '- Using separate parameters:  \n'
      },
      {
        add: 'code',
        value:
          'function GM_notification(text: string, title: string, image: string,\nonclick: () => any): void | () => Promise'
      },
      {
        add: 'markdown',
        value: '- Using an object:  \n'
      },
      {
        add: 'code',
        value:
          'function GM_notification(options: {\n\ttext: string,\n\ttitle?: string,\n\timage?: string,\n\tonclick?: () => any,\n\tondone?: () => any,\n\thighlight?: boolean,\n\tsilent?: boolean,\n\ttimeout?: number\n}): void | () => Promise'
      },
      {
        add: 'markdown',
        value: 'Shows a HTML5 Desktop notification and/or highlight the current tab.'
      }
    ]
  },
  {
    word: 'GM_setClipboard',
    contents: [
      {
        add: 'code',
        value:
          'function GM_setClipboard(data: string, type: string | { type: string, mimetype: string}): void'
      },
      {
        add: 'markdown',
        value: 'Sets data to system clipboard.'
      }
    ]
  }
]

export default GM_APIsHoverItems
