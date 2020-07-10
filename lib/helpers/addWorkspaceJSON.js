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
Object.defineProperty(exports, "__esModule", { value: true });
const path = __importStar(require("path"));
const fs = __importStar(require("fs-extra"));
/**
 * Adds the vscode xdebug configuration for the site.
 *
 * @param site
 * @param serverUuid
 */
function addWorkspaceJSON(site, serverUuid) {
    return __awaiter(this, void 0, void 0, function* () {
        const vscodeJSON = `{
	"version": "0.2.0",
	"configurations": [
		{
			"name": "Listen for Xdebug (Local)",
			"type": "php",
			"request": "launch",
			"port": 9000,
			"xdebugSettings": {
				"max_children": 128,
				"max_data": 1024,
				"max_depth": 3,
				"show_hidden": 1
			}
		},
		{
			"name": "Launch currently open script",
			"type": "php",
			"request": "launch",
			"program": "\${file}",
			"cwd": "\${fileDirname}",
			"port": 9000,
			"xdebugSettings": {
				"max_children": 128,
				"max_data": 1024,
				"max_depth": 3,
				"show_hidden": 1
			}
		}
	]
}`;
        console.log(site.paths);
        yield fs.ensureDir(path.join(site.longPath, 'app/public', '.vscode'));
        yield fs.writeFile(path.join(site.longPath, 'app/public', '.vscode', 'launch.json'), vscodeJSON);
    });
}
exports.default = addWorkspaceJSON;
//# sourceMappingURL=addWorkspaceJSON.js.map