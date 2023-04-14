import * as vscode from 'vscode';
import GMmetaCompletionItems from './items/GMmetaCompletionItems';
import checkIfShouldRun from '../../other/fileSuffixChecker';

// eslint-disable-next-line @typescript-eslint/naming-convention
const GMmetaCompletionProvider = vscode.languages.registerCompletionItemProvider('javascript', {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
        if (!checkIfShouldRun()) {
            return;
        }
        const list: vscode.CompletionItem[] = GMmetaCompletionItems.map(item => {
            const completionItem = new vscode.CompletionItem(item.label, item.kind);
            completionItem.detail = 'GM Metadata';
            completionItem.insertText = item.insertText ?? item.label + ' ';
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

export default GMmetaCompletionProvider;
