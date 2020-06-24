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
 * Adds a conf file to the php directory to enable xdebug
 * @param site
 * @param serverUuid
 */
function enableXDebugPHPini(site, serverUuid) {
    return __awaiter(this, void 0, void 0, function* () {
        const phpIniCode = `
[localbyflywheel]
xdebug.scream = 1
xdebug.show_local_vars = 1
xdebug.remote_autostart = 1
xdebug.remote_connect_back = 1`;
        yield fs.ensureDir(path.join(site.paths.confTemplates, 'php'));
        yield fs.appendFile(path.join(site.paths.confTemplates, 'php', 'php.ini.hbs'), phpIniCode);
    });
}
exports.default = enableXDebugPHPini;
//# sourceMappingURL=enableXDebugPHPini.js.map