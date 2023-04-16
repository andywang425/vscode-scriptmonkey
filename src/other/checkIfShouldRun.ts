import * as vscode from 'vscode';

let activeFileSuffixes = vscode.workspace.getConfiguration('scriptmonkey.activation condition').get('file suffix') as string[];
let checkUserscriptHeader = vscode.workspace.getConfiguration('scriptmonkey.activation condition').get('userscript header') as boolean;
vscode.workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration('scriptmonkey.activation condition.file suffix')) {
        activeFileSuffixes = vscode.workspace.getConfiguration('scriptmonkey.activation condition').get('file suffix') as string[];
    } else if (event.affectsConfiguration('scriptmonkey.activation condition.userscript header')) {
        checkUserscriptHeader = vscode.workspace.getConfiguration('scriptmonkey.activation condition').get('userscript header') as boolean;
    }
});

const checkIfShouldRun = (document: vscode.TextDocument) => {
    const fileName = document.fileName;
    const matchExt = fileName.match('\\..+$') || '';
    const suffix = matchExt[0];
    if (activeFileSuffixes.includes(suffix)) {
        if (checkUserscriptHeader) {
            if (/\/\/[ ]+==UserScript==/.test(document.lineAt(0).text.trim())) {
                return true;
            }
            return false;
        }
        return true;
    }
    return false;
};

export default checkIfShouldRun;
