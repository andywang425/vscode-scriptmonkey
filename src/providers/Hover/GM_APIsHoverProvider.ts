import * as vscode from 'vscode';
import GM_APIsHoverItems from './items/GM_APIsHoverItems';
import checkIfShouldRun from '../../other/checkIfShouldRun';

// eslint-disable-next-line @typescript-eslint/naming-convention
const GM_APIsHoverProvider = vscode.languages.registerHoverProvider('javascript', {
    provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
        if (!checkIfShouldRun(document)) {
            return;
        }
        const range = document.getWordRangeAtPosition(position);
        const word = document.getText(range);
        const hoverItem = GM_APIsHoverItems.find(i => i.word === word);
        if (hoverItem) {
            const markdownString = new vscode.MarkdownString();
            for (const i of hoverItem.contents) {
                switch (i.add) {
                    case 'code':
                        markdownString.appendCodeblock(i.value, 'typescript');
                        break;
                    case 'markdown':
                        markdownString.appendMarkdown(i.value);
                        break;
                    default:
                        markdownString.appendText(i.value);
                        break;
                }
            }
            return new vscode.Hover(markdownString);
        }
    }
});

export default GM_APIsHoverProvider;
