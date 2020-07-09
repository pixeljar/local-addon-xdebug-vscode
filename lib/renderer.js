"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const local_components_1 = require("@getflywheel/local-components");
const electron_1 = require("electron");
function default_1(context) {
    const { hooks } = context;
    hooks.addContent('siteInfoUtilities', (site) => {
        return (react_1.default.createElement(local_components_1.TableListRow, { key: "vscode-xdebug-integration", label: "Xdebug + VS Code" },
            react_1.default.createElement(local_components_1.TextButton, { style: { paddingLeft: 0 }, onClick: (event) => {
                    electron_1.ipcRenderer.send('add-vscode-xdebug-config', site.id);
                    event.target.setAttribute('disabled', 'true');
                } }, "Add Run Configuration to VS Code"),
            react_1.default.createElement("p", null,
                react_1.default.createElement("small", null, "The run configuration will be added to the VS Code project settings in this site's app/public directory."))));
    });
}
exports.default = default_1;
//# sourceMappingURL=renderer.js.map