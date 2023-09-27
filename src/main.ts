import * as Local from '@getflywheel/local';
import * as LocalMain from '@getflywheel/local/main';
import {v4 as uuidv4} from 'uuid';
import addWorkspaceJSON from './helpers/addWorkspaceJSON';
import enableXDebugPHPini from './helpers/enableXDebugPHPini';

export default function(context: LocalMain.AddonMainContext) {
    const { notifier, electron } = context;

    electron.ipcMain.on('add-vscode-xdebug-config', async (event, siteId: Local.Site['id']) => {

        const site = LocalMain.SiteData.getSite(siteId);

        const serverUuid = uuidv4();

        try {
            await addWorkspaceJSON(site, serverUuid);
            await enableXDebugPHPini(site, serverUuid);

            notifier.notify({
                title: 'Xdebug + VS Code',
                message: `Local's Xdebug Run Configuration and Server has been added to VS Code.`,
				open: undefined, //TODO: remove this once the add-on API is updated with correct notifier types.
            });
        } catch (e) {
            notifier.notify({
                title: 'Xdebug + VS Code Error',
                message: `Unable to add Run Configuration and Server.`,
				open: undefined, //TODO: remove this once the add-on API is updated with correct notifier types.
            });

            electron.dialog.showErrorBox('Xdebug + VS Code Error', e.stack);
        }
    });
}
