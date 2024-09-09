import tw, { styled } from 'twin.macro';

const defaultButtonStyle = tw`
	flex
	justify-center
	items-center

	rounded
	text-sm
	px-5
	py-2
	cursor-pointer
	border-solid
`;

const primaryStyle = tw`
	text-white
	bg-adp-primary-blue
	border-none

	hover:shadow-adp
	hover:bg-adp-primary-blue-hover
	hover:border-adp-border

	active:bg-adp-primary-blue
	active:shadow-none

	focus:bg-adp-primary-blue
	focus:shadow-none

	disabled:opacity-65
	disabled:cursor-not-allowed
`;

const primaryOrangeStyle = tw`
	text-white
	bg-adp-primary-orange
	border-none

	hover:shadow-adp
	hover:bg-adp-primary-orange-hover
	hover:border-adp-border

	active:bg-adp-primary-orange
	active:shadow-none

	focus:bg-adp-primary-orange
	focus:shadow-none

	disabled:opacity-65
	disabled:cursor-not-allowed
`;

const primaryGreenStyle = tw`
	text-white
	bg-adp-primary-green
	border-none

	hover:shadow-adp
	hover:bg-adp-primary-green-hover
	hover:border-adp-border

	active:bg-adp-primary-green
	active:shadow-none

	focus:bg-adp-primary-green
	focus:shadow-none

	disabled:opacity-65
	disabled:cursor-not-allowed
`;

const secondaryStyle = tw`
	bg-gray-500
	border-none
	text-white

	hover:bg-gray-400
	hover:shadow-adp

	// active:bg-adp-secondary
	// active:shadow-adp

	focus:bg-gray-500
	// focus:shadow-adp

	disabled:opacity-65
	disabled:shadow-none
	disabled:bg-white
	disabled:cursor-not-allowed
`;

const secondarySmallStyle = tw`
	bg-gray-500
	border-none
	text-white

	px-1
	py-1

	hover:bg-gray-400
	hover:shadow-adp

	// active:bg-gray-500
	// active:shadow-adp

	focus:bg-gray-500
	// focus:shadow-adp

	disabled:opacity-65
	disabled:shadow-none
	disabled:bg-white
	disabled:cursor-not-allowed
`;

const tertiaryStyle = tw`
	bg-white
	border
	border-adp-tertiary-blue
	text-adp-primary-blue

	hover:bg-adp-primary-blue
	hover:text-adp-text-tertiary-hover
	hover:shadow-adp

	active:bg-adp-primary-blue-hover
	active:shadow-adp

	// focus:bg-adp-secondary
	focus:shadow-adp

	disabled:opacity-65
	disabled:shadow-none
	disabled:bg-white
	disabled:cursor-not-allowed
`;

const tertiaryOrangeStyle = tw`
	bg-white
	border
	border-adp-primary-orange
	text-adp-primary-orange

	hover:bg-adp-primary-orange
	hover:text-adp-text-tertiary-hover
	hover:shadow-adp

	active:bg-adp-primary-orange-hover
	active:shadow-adp

	// focus:bg-adp-secondary
	focus:shadow-adp

	disabled:opacity-65
	disabled:shadow-none
	disabled:bg-white
	disabled:cursor-not-allowed
`;

const tertiaryGreenStyle = tw`
	bg-white
	border
	border-adp-primary-green
	text-adp-primary-green

	hover:bg-adp-primary-green
	hover:text-adp-text-tertiary-hover
	hover:shadow-adp

	active:bg-adp-primary-green-hover
	active:shadow-adp

	// focus:bg-adp-secondary
	focus:shadow-adp

	disabled:opacity-65
	disabled:shadow-none
	disabled:bg-white
	disabled:cursor-not-allowed
`;

const quarternaryStyle = tw`
	bg-white
	border-none
	text-adp-text-tertiary

	hover:bg-adp-quarternary

	active:bg-adp-quarternary

	focus:bg-adp-quarternary

	disabled:bg-adp-quarternary
	disabled:opacity-65
	disabled:cursor-not-allowed
`;

const fullWidthStyle = tw`
	w-full
`;	

const ButtonType = ({ primary, primaryorange, primarygreen, secondary, secondarysmall, tertiary, tertiaryorange, tertiarygreen, quarternary }) => [
	defaultButtonStyle,
	primary && primaryStyle,
	primaryorange && primaryOrangeStyle,
	primarygreen && primaryGreenStyle,
	secondary && secondaryStyle,
	secondarysmall && secondarySmallStyle,
	tertiary && tertiaryStyle,
	tertiaryorange && tertiaryOrangeStyle,
	tertiarygreen && tertiaryGreenStyle,
	quarternary && quarternaryStyle,
	!primary && !primaryorange && !primarygreen && !secondary && !secondarysmall && !tertiary && !tertiaryorange && !tertiarygreen && !quarternary && primaryStyle, // default primary
];

const ButtonFullWidth = ({ wide = false }) => [wide && fullWidthStyle];

const iconRowReverse = tw`
	flex-row-reverse
`;

const IconButton = ({ left = false }) => [left && iconRowReverse];

const StyledButton = styled.button(() => [ButtonType, ButtonFullWidth, IconButton]);

const iconStyleLeft = tw`
	ml-1
`;
const iconStyleRight = tw`
	mr-1
`;
const IconAlignment = ({ left = false }) => [left ? iconStyleLeft : iconStyleRight];
export const StyledSpanContainerForIcon = styled.span(() => [IconAlignment]);

export default StyledButton;
