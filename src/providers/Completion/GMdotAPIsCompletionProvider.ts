import * as vscode from 'vscode';
import GMdotAPIsCompletionItems from './items/GMdotAPIsCompletionItems';

const GMdotAPIsCompletionProvider = vscode.languages.registerCompletionItemProvider(
    'javascript',
    {
        provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
            const linePrefix = document.lineAt(position).text.substring(0, position.character);
            //const word = document.getText(document.getWordRangeAtPosition(position));
            if (!linePrefix.endsWith('GM.')) {
                return undefined;
            }
            const list: vscode.CompletionItem[] = GMdotAPIsCompletionItems.map(item => {
                const completionItem = new vscode.CompletionItem(item.label, item.kind);
                completionItem.detail = 'GM.* APIs';
                const doc = new vscode.MarkdownString();
                for (const i of item.documentation) {
                    switch (i.add) {
                        case 'markdown':
                            doc.appendMarkdown(i.value);
                            break;
                        case 'code':
                            doc.appendCodeblock(i.value, 'javascript');
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
    },
    '.'
);

export default GMdotAPIsCompletionProvider;