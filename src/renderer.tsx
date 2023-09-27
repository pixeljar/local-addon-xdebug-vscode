import React from 'react';
import { TextButton, TableListRow } from '@getflywheel/local-components';
import { AddonRendererContext } from '@getflywheel/local/renderer';

export default function (context: AddonRendererContext) {

	const { hooks, electron } = context;

	hooks.addContent('siteInfoUtilities', (site) => {
		return (
			<TableListRow key="vscode-xdebug-integration" label="Xdebug + VS Code">
				<TextButton
					style={{paddingLeft: 0}}
					onClick={(event) => {
						electron.ipcRenderer.send('add-vscode-xdebug-config', site.id);

						event.target.setAttribute('disabled', 'true');
					}}
				>
					Add Run Configuration to VS Code
				</TextButton>

				<p>
					<small>The run configuration will be added to the VS Code project settings in this site's app/public directory.</small>
				</p>
			</TableListRow>
		);
	});

}
