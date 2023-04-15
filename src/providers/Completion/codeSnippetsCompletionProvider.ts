import * as vscode from 'vscode';
import getCodeSnippets from './items/codeSnippetsCompletionItems';
import checkIfShouldRun from '../../other/fileSuffixChecker';

let codeSnippetsCompletionItems = getCodeSnippets();
vscode.workspace.onDidChangeConfiguration(event => {
    if (event.affectsConfiguration('scriptmonkey.metaData.default')) {
        codeSnippetsCompletionItems = getCodeSnippets();
    }
});

const codeSnippetsCompletionProvider = vscode.languages.registerCompletionItemProvider('javascript', {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
        if (!checkIfShouldRun(document)) {
            return;
        }
        const list: vscode.CompletionItem[] = codeSnippetsCompletionItems.map(item => {
            const completionItem = new vscode.CompletionItem(item.label, item.kind);
            completionItem.detail = item.detail;
            completionItem.insertText = new vscode.SnippetString(item.insertText);
            const doc = new vscode.MarkdownString();
            for (const i of item.documentation) {
                switch (i.add) {
                    case 'markdown':
                        doc.appendMarkdown(i.value);
                        break;
                    case 'code':
                        doc.appendCodeblock(i.value, 'typescript');
                        break;
                    default:
                        doc.appendText(i.value);
                        break;
                }
            }
            completionItem.documentation = doc;
            return completionItem;
        });

        return list;
    }
});

export default codeSnippetsCompletionProvider;
