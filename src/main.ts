import * as Local from '@getflywheel/local';
import * as LocalMain from '@getflywheel/local/main';
import uuidv4 from 'uuid/v4';
import addWorkspaceJSON from './helpers/addWorkspaceJSON';
import enableXDebugPHPini from './helpers/enableXDebugPHPini';

export default function(context) {
    const { notifier, electron } : { notifier: any, electron: typeof Electron } = context;

    electron.ipcMain.on('add-vscode-xdebug-config', async (event, siteId: Local.Site['id']) => {

        const site = LocalMain.SiteData.getSite(siteId);

        const serverUuid = uuidv4();

        try {
            await addWorkspaceJSON(site, serverUuid);
            await enableXDebugPHPini(site, serverUuid);

            notifier.notify({
                title: 'Xdebug + VS Code',
                message: `Local's Xdebug Run Configuration and Server has been added to VS Code.`,
            });
        } catch (e) {
            notifier.notify({
                title: 'Xdebug + VS Code Error',
                message: `Unable to add Run Configuration and Server.`,
            });

            electron.dialog.showErrorBox('Xdebug + VS Code Error', e.stack);
        }
    });
}
