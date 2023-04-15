import * as vscode from 'vscode';

let activeFileSuffixes = vscode.workspace.getConfiguration('scriptmonkey.activation condition').get('file suffix') as string[];
vscode.workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration('scriptmonkey.activation condition.file suffix')) {
        activeFileSuffixes = vscode.workspace.getConfiguration('scriptmonkey.activation condition').get('file suffix') as string[];
    }
});

const checkIfShouldRun = (document: vscode.TextDocument) => {
    const fileName = document.fileName;
    const matchExt = fileName.match('\\..+$') || '';
    const suffix = matchExt[0];
    if (activeFileSuffixes.includes(suffix)) {
        return true;
    }
    return false;
};

export default checkIfShouldRun;
