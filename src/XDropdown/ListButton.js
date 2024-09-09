import React, { Fragment } from 'react';
import { FaCaretDown } from 'react-icons/fa';
import { StyledListButtonContainer } from './Dropdown.style';

const ListButton = ({ value, placeHolder }) => {
	return (
		<Fragment>
			<StyledListButtonContainer.TextContainer>
				{value || placeHolder}
			</StyledListButtonContainer.TextContainer>
			<StyledListButtonContainer.IconContainer>
				<FaCaretDown></FaCaretDown>
			</StyledListButtonContainer.IconContainer>
		</Fragment>
	);
};

export default ListButton;
