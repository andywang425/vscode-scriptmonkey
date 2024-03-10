import * as vscode from 'vscode'

let activeFileSuffixes = vscode.workspace
  .getConfiguration('scriptmonkey.activation condition')
  .get<string[]>('file suffix')!

let checkUserscriptHeader = vscode.workspace
  .getConfiguration('scriptmonkey.activation condition')
  .get<boolean>('userscript header')!

vscode.workspace.onDidChangeConfiguration((event) => {
  if (event.affectsConfiguration('scriptmonkey.activation condition.file suffix')) {
    activeFileSuffixes = vscode.workspace
      .getConfiguration('scriptmonkey.activation condition')
      .get<string[]>('file suffix')!
  } else if (event.affectsConfiguration('scriptmonkey.activation condition.userscript header')) {
    checkUserscriptHeader = vscode.workspace
      .getConfiguration('scriptmonkey.activation condition')
      .get<boolean>('userscript header')!
  }
})

const checks: ((document: vscode.TextDocument) => boolean)[] = [
  (document) => {
    const fileName = document.fileName
    const matchExt = fileName.match('\\..+$') ?? ''
    const suffix = matchExt[0]

    if (activeFileSuffixes.includes(suffix)) {
      return true
    }
    return false
  },
  (document) => {
    if (checkUserscriptHeader) {
      if (/\/\/[ ]+==UserScript==/.test(document.lineAt(0).text.trim())) {
        return true
      }
      return false
    }
    return true
  }
]

const checkIfShouldRun = (document: vscode.TextDocument) => {
  return checks.every((check) => check(document))
}

export default checkIfShouldRun
