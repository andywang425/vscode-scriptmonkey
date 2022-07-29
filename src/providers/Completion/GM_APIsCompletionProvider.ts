import * as vscode from 'vscode';
import GM_APIsCompletionItems from './items/GM_APIsCompletionItems';

const GM_APIsCompletionProvider = vscode.languages.registerCompletionItemProvider('javascript', {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
        const word = document.getText(document.getWordRangeAtPosition(position));
        if (document.lineAt(position).text.endsWith('.' + word))
            return undefined;
        const list: vscode.CompletionItem[] = GM_APIsCompletionItems.map(item => {
            const completionItem = new vscode.CompletionItem(item.label, item.kind);
            completionItem.detail = 'GM_* APIs';
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

export default GM_APIsCompletionProvider;