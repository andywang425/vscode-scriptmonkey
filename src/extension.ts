// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import GM_APIsCompletionProvider from './providers/Completion/GM_APIsCompletionProvider';
import GMdotAPIsCompletionProvider from './providers/Completion/GMdotAPIsCompletionProvider';
import GMmetaCompletionProvider from './providers/Completion/GMmetaCompletionProvider';
import GMotherCompletionProvider from './providers/Completion/GMotherCompletionProvider';
import GM_APIsHoverProvider from './providers/Hover/GM_APIsHoverProvider';
import GMdotAPIsHoverProvider from './providers/Hover/GMdotAPIsHoverProvider';
import GMotherHoverProvider from './providers/Hover/GMotherHoverProvider';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(GM_APIsCompletionProvider, GMdotAPIsCompletionProvider, GMmetaCompletionProvider, GMotherCompletionProvider, GM_APIsHoverProvider, GMdotAPIsHoverProvider, GMotherHoverProvider);
}

// this method is called when your extension is deactivated
export function deactivate() { }
