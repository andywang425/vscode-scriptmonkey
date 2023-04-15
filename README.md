# Scriptmonkey

A simple userscript language support extension which provides syntax highlight, completion, hover, and code snippets.

Most features of Scriptmonkey activates only when filename ends with `.user.js` by default to prevent polluting non userscript files.
You can modify the extension settings to make Scriptmonkey work in other javascript files.

## Features

### Syntax highlight

- **Metadata**

![Metadata highlight](images/metadata.png)

- **Css in GM_addstyle**

![GM_addstyle highlight](images/GM_addstyle.png)

### Completion

- **Metadata**

![Metadata Completion](images/meta_completion.gif)

- **Code**

![Code Completion](images/code_completion.gif)

### Hover

![Code Hover](images/code_hover.png)

### Code Snippets

Type `userscript` to generate a userscript template. You can modify the default values of some meta data keys in the extension settings.

![Code Snippets](images/code_snippets.gif)

## Release Notes

Please check [CHANGELOG](CHANGELOG.md).

## License

![MIT](https://img.shields.io/github/license/andywang425/vscode-scriptmonkey?style=for-the-badge)

## Special Thanks

- [kufii](https://github.com/kufii): The metadata highlight feature of Scriptmonkey is improved from [vscode-userscript](https://github.com/kufii/vscode-userscript).
