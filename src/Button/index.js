import React from 'react';
import StyledButton, { StyledSpanContainerForIcon } from './Button.style';

function Button({ children, ...props }) {
    return <StyledButton {...props}>{children}</StyledButton>;
}

export const IconButton = ({ text, icon, left = false, onClick, ...props }) => {
    const clickHandler = (evt) => {
        if(evt.target) {
            switch(evt.target.tagName) {
                case 'svg': {
                    const { id } = evt.target.parentElement;
                    onClick(id)
                    break;
                }
                case 'path': {
    
                    const { id } = evt.target.parentElement.parentElement;
                    onClick(id)
                    break;
                }
                case 'button':
                default: {
                    const { id } = evt.target;
                    onClick(id)
                    break;
                }
            }
        } else {
            // evt is id
            onClick(evt)
        }
    }

    return (
        <StyledButton left={left} onClick={clickHandler} {...props}>
            {text && <StyledSpanContainerForIcon onClick={clickHandler} left={left} {...props}>{text}</StyledSpanContainerForIcon>}
            {typeof icon === 'function' ? icon() : icon}
        </StyledButton>
    );``
};

export default Button;




// import React from 'react';
// import StyledButton, { StyledSpanContainerForIcon } from './Button.style';

// function Button({ children, ...props }) {
// 	return <StyledButton {...props}>{children}</StyledButton>;
// }

// export const IconButton = ({ text, icon, left = false, ...props }) => {
// 	return (
// 		<StyledButton left={left} {...props}>
// 			{text && <StyledSpanContainerForIcon left={left}>{text}</StyledSpanContainerForIcon>}
// 			{typeof icon === 'function' ? icon() : icon}
// 		</StyledButton>
// 	);
// };

// export default Button;
