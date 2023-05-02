'use strict'

const vscode = require('vscode');

function activate(context) {
    return {
        extendMarkdownIt(md) {
            const config = vscode.workspace.getConfiguration('markdown-include');

            return md.use(require('markdown-it-include'), {
                root: vscode.workspace.rootPath,
                includeRe: new RegExp( config.get('includeRe') ),
              } );
        }
    };
}
exports.activate = activate;
