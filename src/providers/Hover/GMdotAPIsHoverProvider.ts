import * as vscode from 'vscode';
import GMdotAPIsHoverItems from './items/GMdotAPIsHoverItems';
import checkIfShouldRun from '../../other/fileSuffixChecker';

// eslint-disable-next-line @typescript-eslint/naming-convention
const GMdotAPIsHoverProvider = vscode.languages.registerHoverProvider('javascript', {
    provideHover(document: vscode.TextDocument, position: vscode.Position, token: vscode.CancellationToken) {
        if (!checkIfShouldRun()) {
            return;
        }
        const linePrefix = document.lineAt(position).text.substring(0, position.character);
        const word = document.getText(document.getWordRangeAtPosition(position));
        if (!linePrefix.includes('GM.')) {
            return undefined;
        }
        const hoverItem = GMdotAPIsHoverItems.find(i => i.word === word);
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

export default GMdotAPIsHoverProvider;
