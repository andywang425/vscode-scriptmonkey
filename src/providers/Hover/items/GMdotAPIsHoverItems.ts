const GMdotAPIsHoverItems = [
  {
    word: 'addStyle',
    contents: [
      {
        add: 'code',
        value: 'function GM.addStyle(css: string): HTMLStyleElement'
      },
      {
        add: 'markdown',
        value: 'Adds the given style to the document and returns the injected style element.'
      }
    ]
  },
  {
    word: 'addElement',
    contents: [
      {
        add: 'code',
        value:
          'function GM.addElement(parentNode?: HTMLElement, tag: string, attributes: { [key: string]: string | boolean | number }): HTMLElement'
      },
      {
        add: 'markdown',
        value:
          'Creates an HTML element specified by `tag_name` and applies all given `attributes` and returns the injected HTML element. If a `parent_node` is given, then it is attached to it or to document head or body otherwise.  \n  \nFor suitable `attributes`, please consult the appropriate documentation. For example:  \n- [script tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)  \n- [img tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img)  \n- [style tag](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)  \n'
      },
      {
        add: 'code',
        value: `GM.addElement('script', {\n\ttextContent: 'window.foo = "bar";'\n});\n\nGM.addElement('script', {\n\tsrc: 'https://example.com/script.js',\n\ttype: 'text/javascript'\n});\n\nGM.addElement(document.getElementsByTagName('div')[0], 'img', {\n\tsrc: 'https://example.com/image.png'\n});\n\nGM.addElement(shadowDOM, 'style', {\n\ttextContent: 'div { color: black; };'\n});`
      }
    ]
  },
  {
    word: 'registerMenuCommand',
    contents: [
      {
        add: 'code',
        value:
          'function GM.registerMenuCommand(caption: string, onClick: (event: MouseEvent | KeyboardEvent) => void): number | string'
      },
      {
        add: 'markdown',
        value: 'Registers a command in userscript manager popup menu.'
      }
    ]
  },
  {
    word: 'deleteValue',
    contents: [
      {
        add: 'code',
        value: 'async function GM.deleteValue(key: string): Promise<void>'
      },
      {
        add: 'markdown',
        value: 'Deletes an existing key / value pair for current script from storage.'
      }
    ]
  },
  {
    word: 'getResourceURL',
    contents: [
      {
        add: 'code',
        value:
          'async function GM.getResourceURL(name: string, isBlobUrl?: boolean): Promise<string>'
      },
      {
        add: 'markdown',
        value: 'Get the base64 encoded URI of a predefined @resource tag at the script header.'
      }
    ]
  },
  {
    word: 'getValue',
    contents: [
      {
        add: 'code',
        value: 'async function GM.getValue(key: string, defaultValue?: any): Promise<any>'
      },
      {
        add: 'markdown',
        value: 'Retrieves a value for current script from storage.'
      }
    ]
  },
  {
    word: 'info',
    contents: [
      {
        add: 'code',
        value:
          'const GM.info: {\n\tdownloadMode?: string,\n\tisIncognito?: boolean,\n\tinjectInto?: string,\n\tplatform?: {\n\t\tarch: string,\n\t\tbrowserName: string,\n\t\tbrowserVersion: string,\n\t\tos: string\n\t},\n\tscriptHandler: string,\n\tscriptMetaStr: string,\n\tscriptSource?: string,\n\tscriptUpdateURL?: string | null,\n\tscriptWillUpdate: boolean,\n\tuuid?: string,\n\ttoString?: () => string,\n\tversion: string,\n\tscript: {\n\t\tauthor: string,\n\t\tantifeatures?: {\n\t\t\tads?: {\n\t\t\t\tdefault: string\n\t\t\t},\n\t\t\ttracking?: {\n\t\t\t\tdefault: string\n\t\t\t},\n\t\t\tminer?: {\n\t\t\t\tdefault: string\n\t\t\t}\n\t\t}\n\t\tdescription: string,\n\t\tdescription_i18n?: {\n\t\t\t[key: string]?: string, ...\n\t\t},\n\t\toptions?: {\n\t\t\tcheck_for_updates: boolean,\n\t\t\tcomment: string | null,\n\t\t\tcompat_foreach: boolean,\n\t\t\tcompat_metadata: boolean,\n\t\t\tcompat_powerful_this: boolean,\n\t\t\tcompat_prototypes: boolean,\n\t\t\tcompat_wrappedjsobject: boolean,\n\t\t\tcompatopts_for_requires: boolean,\n\t\t\tnoframes: boolean | null,\n\t\t\toverride: {\n\t\t\t\tmerge_connects: boolean,\n\t\t\t\tmerge_excludes: boolean,\n\t\t\t\tmerge_includes: boolean,\n\t\t\t\tmerge_matches: boolean,\n\t\t\t\torig_connects: string[],\n\t\t\t\torig_excludes: string[],\n\t\t\t\torig_includes: string[],\n\t\t\t\torig_matches: string[],\n\t\t\t\torig_noframes: boolean | null,\n\t\t\t\torig_run_at: string,\n\t\t\t\tuse_blockers: string[],\n\t\t\t\tuse_connects: string[],\n\t\t\t\tuse_excludes: string[],\n\t\t\t\tuse_includes: string[],\n\t\t\t\tuse_matches: string[]\n\t\t\t}\n\t\t\trun_at: string,\n\t\t\ttab_types: string | null,\n\t\t\tunwrap: boolean | null,\n\t\t},\n\t\texcludeMatches?: string[],\n\t\texcludes: string[],\n\t\tgrant: string[],\n\t\ticon: string | null,\n\t\ticon64?: string | null,\n\t\tdownloadURL?: string | null,\n\t\tevilness?: number,\n\t\tlastModified?: number,\n\t\tposition?: number,\n\t\tincludes: string[],\n\t\tmatches: string[],\n\t\tname: string,\n\t\tname_i18n: {\n\t\t\t[key: string]?: string\n\t\t},\n\t\tnamespace: string,\n\t\tnoframes?: boolean,\n\t\trequire?: string[],\n\t\trequires?: [\n\t\t\t{\n\t\t\t\ttextContent: string\n\t\t\t}, ...\n\t\t],\n\t\tresources: [\n\t\t\t{\n\t\t\t\tname: string,\n\t\t\t\turl: string,\n\t\t\t\tcontent?: string,\n\t\t\t\tmeta?: string\n\t\t\t}, ...\n\t\t],\n\t\trunAt?: string,\n\t\trun-at?: string,\n\t\tsupportURL?: string | null,\n\t\tunwrap: boolean,\n\t\tupdateURL?: string | null,\n\t\tuuid?: string,\n\t\tversion: string,\n\t\tsync?: {\n\t\t\timported: number\n\t\t}\n\t\twebRequest: Object | null,\n\t}\n}'
      },
      {
        add: 'markdown',
        value: 'An object that exposes information about the current userscript.  \n'
      },
      {
        add: 'markdown',
        value:
          '**Notice:** `GM.info` in different userscript managers may have different properties.  \nPlease check the documentation of the userscript manager you are using.'
      }
    ]
  },
  {
    word: 'listValues',
    contents: [
      {
        add: 'code',
        value: 'async function GM.listValues(): Promise<string[]>'
      },
      {
        add: 'markdown',
        value: 'Returns an array of keys of all available values within this script.'
      }
    ]
  },
  {
    word: 'notification',
    contents: [
      {
        add: 'markdown',
        value: '- Using separate parameters:  \n'
      },
      {
        add: 'code',
        value:
          'function GM.notification(text: string, title: string, image: string,\nonclick: () => any): void | () => Promise'
      },
      {
        add: 'markdown',
        value: '- Using an object:  \n'
      },
      {
        add: 'code',
        value:
          'function GM.notification(options: {\n\ttext: string,\n\ttitle?: string,\n\timage?: string,\n\tonclick?: () => any,\n\tondone?: () => any,\n\thighlight?: boolean,\n\tsilent?: boolean,\n\ttimeout?: number\n}): void | () => Promise'
      },
      {
        add: 'markdown',
        value: 'Shows a HTML5 Desktop notification and/or highlight the current tab.'
      }
    ]
  },
  {
    word: 'openInTab',
    contents: [
      {
        add: 'code',
        value:
          'function GM.openInTab(url: string,\n\toptions?: {\n\t\tactive?: boolean,\n\t\tcontainer?: number,\n\t\tinsert?: boolean,\n\t\tpinned?: boolean\n\t} | boolean\n): { onclose: () => void, closed: boolean, close: () => void }'
      },
      {
        add: 'markdown',
        value: 'Opens URL in a new tab.'
      }
    ]
  },
  {
    word: 'setClipboard',
    contents: [
      {
        add: 'code',
        value:
          'function GM.setClipboard(data: string, type: string | { type: string, mimetype: string}): void'
      },
      {
        add: 'markdown',
        value: 'Sets data to system clipboard.'
      }
    ]
  },
  {
    word: 'setValue',
    contents: [
      {
        add: 'code',
        value: 'function GM.setValue(key: string, value: any): void'
      },
      {
        add: 'markdown',
        value: 'Sets a key / value pair for current script to storage.'
      }
    ]
  },
  {
    word: 'xmlHttpRequest',
    contents: [
      {
        add: 'code',
        value:
          'function GM.xmlHttpRequest(details: {\n\turl: string,\n\tmethod?: string,\n\tuser?: string,\n\tpassword?: string,\n\theaders?: { [key: string]: string },\n\tdata?: string | FormData | Blob,\n\tcookie?: string,\n\ttimeout?: number,\n\toverrideMimeType?: string,\n\tbinary?: boolean,\n\tnocache?: boolean,\n\trevalidate?: boolean,\n\tresponseType?: string,\n\tcontext?: any,\n\tanonymous?: boolean,\n\tfetch?: boolean,\n\tonabort?: (response: responseObject) => void,\n\tonloadend?: (response: responseObject) => void,\n\tonloadstart?: (response: responseObject) => void,\n\tonload?: (response: responseObject) => void,\n\tonprogress?: (response: responseObject) => void,\n\tonerror?: (response: responseObject) => void,\n\tonreadystatechange?: (response: responseObject) => void,\n\tontimeout?: (response: responseObject) => void\n}): () => void\n'
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
  }
]

export default GMdotAPIsHoverItems
