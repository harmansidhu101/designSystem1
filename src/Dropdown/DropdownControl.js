import React from 'react';
import { Controller } from 'react-hook-form';

import DropDown from './DropdownComponent';

// For React Hook Form only
const DropdownControl = ({
	options = [],
	name,
	onChange,
	placeHolder,
	defaultValue,
	formValue = {},
	// react hook form specific props
	formRegisterProps,
	formControl,
}) => (
	<Controller
		// render={({ field: { onChange, value } }) => {
		render={({field: { value}}) => {
			// const props = {
			// 	placeHolder: placeHolder,
			// 	options,
			// 	value,
			// 	formValue,
			// 	defaultValue,
			// };
			return (
				<DropDown
					{...formRegisterProps}
					onChange={(selectedValue) => {
						// onChange's arg will send value into hook form
						onChange(selectedValue);
					}}
				></DropDown>
			);
		}}
		name={name}
		control={formControl}
		defaultValue={defaultValue}
	/>
);

export default DropdownControl;
