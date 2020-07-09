"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LocalMain = __importStar(require("@getflywheel/local/main"));
const v4_1 = __importDefault(require("uuid/v4"));
const addWorkspaceJSON_1 = __importDefault(require("./helpers/addWorkspaceJSON"));
const enableXDebugPHPini_1 = __importDefault(require("./helpers/enableXDebugPHPini"));
function default_1(context) {
    const { notifier, electron } = context;
    electron.ipcMain.on('add-vscode-xdebug-config', (event, siteId) => __awaiter(this, void 0, void 0, function* () {
        const site = LocalMain.SiteData.getSite(siteId);
        const serverUuid = v4_1.default();
        try {
            yield addWorkspaceJSON_1.default(site, serverUuid);
            yield enableXDebugPHPini_1.default(site, serverUuid);
            notifier.notify({
                title: 'Xdebug + VS Code',
                message: `Local's Xdebug Run Configuration and Server has been added to VS Code.`,
            });
        }
        catch (e) {
            notifier.notify({
                title: 'Xdebug + VS Code Error',
                message: `Unable to add Run Configuration and Server.`,
            });
            electron.dialog.showErrorBox('Xdebug + VS Code Error', e.stack);
        }
    }));
}
exports.default = default_1;
//# sourceMappingURL=main.js.map