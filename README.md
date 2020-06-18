# Local Add-on: XDebug + VSCode [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/pixeljar/local-addon-xdebug-vscode/pulls/)

## Manual Installation

### Clone

Clone the repository into the following directory depending on your platform:

- macOS: `~/Library/Application Support/Local/addons`
- Windows: `%AppData%\Local\addons`
- Linux: `~/.config/Local/addons`

### Install Dependencies
- `yarn install`

### Build
- `yarn build`

## Development

### Folder Structure
All files in `/src` will be transpiled to `/lib` using [TypeScript](http://www.typescriptlang.org/). Anything in `/lib` will be overwritten.

## License

MIT
