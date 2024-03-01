import { HoverItem } from './types'

const GMdotAPIsHoverItems: HoverItem[] = [
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
