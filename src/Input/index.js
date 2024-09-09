import React, { useState, useRef } from "react";
import { useOnClickOutside } from 'usehooks-ts';

import StyledInput, { StyledDivContainer, StyledLabel } from "./Input.style";

const Input = React.forwardRef(({ placeholder, formValue = {}, onChange, name, ...props }, ref) => {
	const inputRef = useRef(null);
	const [isFocussed, setIsFocussed] = useState(false);
	const widgetValue = formValue[name];

	// for showing input label
	const onFocusHandler = () => {
		setIsFocussed(true)
	}

	// for hiding input label if value is empty
	const onFocusOutHandler = () => {
		setIsFocussed(false);
	}
	useOnClickOutside(inputRef, onFocusOutHandler);

	return (
		<StyledDivContainer>
			{
				(isFocussed || widgetValue) && <StyledLabel>{placeholder}</StyledLabel>
			}
			<StyledInput
				// Note: always set name and remaining props at the top
				name={name}
				{...props}
				// set ref as per react hook form
				// ref: https://stackoverflow.com/questions/67877887/react-hook-form-v7-function-components-cannot-be-given-refs-attempts-to-access
				// https://react-hook-form.com/faqs#Howtosharerefusage
				ref={(e) => {
					// ref(e)
					inputRef.current = e // you can still assign to ref
				}}
				placeholder={!isFocussed && !widgetValue ? placeholder : ''}
				onFocus={onFocusHandler} onChange={onChange} ></StyledInput>
		</StyledDivContainer>
	);
})

export default Input;
