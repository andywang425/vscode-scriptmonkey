import * as vscode from 'vscode';
import GMotherCompletionItems from './items/GMotherCompletionItems';
import checkIfShouldRun from '../../other/checkIfShouldRun';

// eslint-disable-next-line @typescript-eslint/naming-convention
const GMotherCompletionProvider = vscode.languages.registerCompletionItemProvider('javascript', {
    provideCompletionItems(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken, context: vscode.CompletionContext) {
        if (!checkIfShouldRun(document)) {
            return;
        }
        const list: vscode.CompletionItem[] = GMotherCompletionItems.map(item => {
            const completionItem = new vscode.CompletionItem(item.label, item.kind);
            completionItem.detail = item.detail;
            completionItem.commitCharacters = item.commitCharacters;
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

export default GMotherCompletionProvider;
