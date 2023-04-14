import * as vscode from 'vscode';

let activeFileSuffixes = vscode.workspace.getConfiguration('scriptmonkey.file').get('suffix') as string[];
vscode.workspace.onDidChangeConfiguration((event) => {
    if (event.affectsConfiguration('scriptmonkey.file.suffix')) {
        activeFileSuffixes = vscode.workspace.getConfiguration('scriptmonkey.file').get('suffix') as string[];
    }
});

const checkIfShouldRun = () => {
    const activeEditor = vscode.window.activeTextEditor;
    if (activeEditor) {
        const fileName = activeEditor.document.fileName;
        const matchExt = fileName.match('\\..+$');
        const suffix = matchExt === null ? '' : matchExt[0];
        console.log('extension', suffix);
        console.log('activeFileSuffixes', activeFileSuffixes);
        if (activeFileSuffixes.includes(suffix)) {
            console.log(true);
            return true;
        }
        console.log(false);
        return false;
    }
};

export default checkIfShouldRun;
