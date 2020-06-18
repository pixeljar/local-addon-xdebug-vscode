import React from 'react';
import { TextButton, TableListRow } from '@getflywheel/local-components';
import { ipcRenderer } from 'electron';

export default function (context) {

	const { hooks } = context;

	hooks.addContent('siteInfoUtilities', (site) => {
		return (
			<TableListRow key="vscode-xdebug-integration" label="XDebug + VSCode">
				<TextButton
					style={{paddingLeft: 0}}
					onClick={(event) => {
						ipcRenderer.send('add-vscode-xdebug-config', site.id);

						event.target.setAttribute('disabled', 'true');
					}}
				>
					Add Run Configuration to VSCode
				</TextButton>

				<p>
					<small>The run configuration will be added to the VSCode project settings in this site's root directory.</small>
				</p>
			</TableListRow>
		);
	});

}
