import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';

import config from '../../config.json';
import '../../App.css'

export default function NativeSelects(props) {

	return (
		<FormControl className="formControll">
			<InputLabel htmlFor="age-native-helper">Sat</InputLabel>
			<NativeSelect value={props.age} onChange={props.handleChange}
				inputProps={{
					name: 'age',
					id: 'age-native-helper',
				}}
			>
				<option aria-label="None" value="" />
				{config.satellites.map(sat => (
					<option value={sat}>{sat}</option>
				))}
			</NativeSelect>
			<FormHelperText>Online Rules!</FormHelperText>
		</FormControl>
	);
}
