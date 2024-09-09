import tw, { styled, css } from 'twin.macro';
import { Switch } from '@headlessui/react';

const defaultSwitch = tw`
     relative
     inline-flex
     h-[38px]
     w-[74px]
     shrink-0
     cursor-pointer
     rounded-full
     border-2
     border-transparent
     transition-colors
     duration-200
     ease-in-out
     focus:outline-none
     focus-visible:ring-2
     
     focus-visible:ring-white
     focus-visible:ring-opacity-75

`;
const enabledStyle = tw`
     bg-adp-blue
`;

const disabledStyle = tw`
     bg-adp-toggle-gray
`;

export const StyledSwitch = styled(Switch)(({ enabled }) => [
	defaultSwitch,
	enabled ? enabledStyle : disabledStyle,
]);

const toggleBodyWrapper = tw`
     text-xs
`;

const StyledToggleBodyWrapper = styled.div(() => [toggleBodyWrapper]);

const supportingElementsContainer = tw`
     h-6
     absolute
     w-full
     flex
     justify-between
     text-white
`;

const StyledSupportingElements = styled.div(() => [supportingElementsContainer]);

const supportingElement = tw`
     flex
     justify-center
     items-center
     w-6/12
`;

const StyledSupportingElement = styled.span(() => [supportingElement]);

const mainToggleElement = tw`
     pointer-events-none
     inline-block
     h-[34px]
     w-[34px]
     transform
     rounded-full
     bg-white
     shadow-lg
     ring-0
     transition
     duration-200
     ease-in-out
`;

const enabledMainToggleElement = tw`
     text-adp-green
`;
const disabledMainToggleElement = tw`
     text-adp-toggle-gray
`;
const StyledMainToggleElement = styled.span(({ enabled }) => [
	mainToggleElement,
	enabled ? enabledMainToggleElement : disabledMainToggleElement,
	// tailwind trnasofmr is not working with storybook - added css style here
	enabled
		? css`
				transform: translateX(2rem);
		  `
		: css`
				transform: translateX(0px);
		  `,
]);

export const StyledToggle = {
	BodyWrapper: StyledToggleBodyWrapper,
	SupportingElementsContainer: StyledSupportingElements,
	SupportingElement: StyledSupportingElement,
	MainToggleElement: StyledMainToggleElement,
};
