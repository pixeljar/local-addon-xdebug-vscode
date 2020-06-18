import * as path from 'path';
import * as fs from 'fs-extra';
import * as Local from '@getflywheel/local';

/**
 * Adds a conf file to the php directory to enable xdebug
 * @param site
 * @param serverUuid
 */
export default async function enableXDebugPHPini (site: Local.Site, serverUuid: string) {

	const phpIniCode = `
[localbyflywheel]
xdebug.scream = 1
xdebug.show_local_vars = 1
xdebug.remote_autostart = 1
xdebug.remote_connect_back = 1`;

	await fs.ensureDir(path.join(site.paths.confTemplates, 'php'));

    await fs.appendFile(path.join(site.paths.confTemplates, 'php', 'php.ini.hbs'), phpIniCode);
}




