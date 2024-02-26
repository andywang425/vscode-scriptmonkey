import * as vscode from 'vscode'

const getCodeSnippets = () => {
  const config = vscode.workspace.getConfiguration('scriptmonkey.metaData.default')

  const metaDataDefault = {
    author: config.get('author'),
    namespace: config.get('namespace'),
    icon: config.get('icon')
  }

  return [
    {
      label: 'userscript',
      kind: vscode.CompletionItemKind.Snippet,
      insertText: `\/\/ ==UserScript==
\/\/ @name         \${1:Script name}
\/\/ @namespace    \${2:${metaDataDefault.namespace}}
\/\/ @version      \${3:0.1}
\/\/ @description  \${4:A brief summary to describe the script}
\/\/ @author       \${5:${metaDataDefault.author}}
\/\/ @match        \${6:*://*/*}
\/\/ @icon         \${7:${metaDataDefault.icon}}
\/\/ @grant        \${8:none}
\/\/ ==/UserScript==

(function () {
    'use strict';
    $0
})();`,
      detail: 'userscript',
      documentation: [
        {
          add: 'text',
          value: 'Create a new userscript'
        }
      ]
    }
  ]
}

export default getCodeSnippets
