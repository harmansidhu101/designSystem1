import React, { Fragment } from 'react';
import { useState, useRef, useMemo } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { useOnClickOutside } from 'usehooks-ts';

import ListItem from './ListItem';
import ListButton from './ListButton';
import { comparator } from '../helpers/utils';
import StyledDropdownContainer, { StyledListbox, StyledDivContainer, StyledLabel } from './Dropdown.style';

const DropDown = React.forwardRef(({
	options = [],
	onChange,
	placeHolder = 'Select All',
	defaultValue,
	formValue,
	...props
}, ref) => {
	const dropdownRef = useRef(null);
	const [isFocussed, setIsFocussed] = useState(false);
	const widgetValue = formValue[props.name];

	// sort items by position mentioned in the option list provided
	const sortedOptions = useMemo(() => comparator(options, 'position'), [options]);
	const getDefault = () => defaultValue || sortedOptions.find((option) => option.isDefault) || {};

	const defaultValueForTheWidget = getDefault();

	// issues with managing drodpwn value selection with the react-hook-form
	// using state here, so using useRef
	const selectedItem = useRef();
	// get and set default value if any
	selectedItem.current = widgetValue || defaultValueForTheWidget;

	// Listbox change handler
	const onListBoxChange = (selectedValue) => {
		if (onChange && typeof onChange === 'function') {
			onChange(selectedValue);
		}
		selectedItem.current = selectedValue;
	};

	// for showing input label
	const onFocusHandler = () => {
		setIsFocussed(true)
	}

	// for hiding input label if value is empty
	const onFocusOutHandler = () => {
		setIsFocussed(false);
	}

	useOnClickOutside(dropdownRef, onFocusOutHandler);
	return (
		<StyledDivContainer>
			{
				(isFocussed || widgetValue) && <StyledLabel>{placeHolder}</StyledLabel>
			}
			<Listbox value={(selectedItem && selectedItem.current && selectedItem.current.value) || ''} onChange={onListBoxChange} {...props}>
				{({ open }) => (
					<Fragment>
						<StyledDropdownContainer>
							{/* Styled - Listbox.Button */}
							<StyledListbox.Button $open={open}>
								<ListButton
									value={selectedItem.current.display_name}
									ref={(e) => {
										ref(e)
										dropdownRef.current = e // you can still assign to ref
									}}
									placeHolder={!isFocussed && !widgetValue ? placeHolder : ''}
									onFocus={onFocusHandler}
								/>
							</StyledListbox.Button>

							<Transition
								show={open}
								as={Fragment}
								leave="transition ease-in duration-100"
								leaveFrom="opacity-100"
								leaveTo="opacity-0"
							>
								{/* Styled Listbox.Options */}
								<StyledListbox.Options>
									{sortedOptions.map((option) => {
										const { name, isDisabled, display_name = '' } = option;

										return (
											<>
												{/* Styled Listbox.Option */}
												<StyledListbox.Option
													key={name}
													value={option}
													disabled={isDisabled}
												>
													{({ active }) => (
														<ListItem
															active={active}
															selected={selectedItem.current.name === option.name}
															value={display_name}
															disabled={isDisabled}
														/>
													)}
												</StyledListbox.Option>
											</>
										);
									})}
								</StyledListbox.Options>
							</Transition>
						</StyledDropdownContainer>
					</Fragment>
				)}
			</Listbox>
		</StyledDivContainer>
	);
});

export default DropDown;
