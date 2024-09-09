import tw, { styled } from "twin.macro";

const sinput = tw`
    block
    py-2.5

    w-full
    text-sm
    text-black

    border

    border-0
    border-b-2
    border-solid
    border-adp-gray

    focus:outline-none
    focus:ring-0
    focus:border-adp-border-primary
`;

const slabel = tw`
    absolute
    z-10

    text-sm
    font-bold

    -top-2
`;

const InputError = tw`
    focus:outline-none
    focus:ring-0
    focus:border-red-600

    border-red-600
`;

const InputWrapper = tw`
    flex
    justify-center
`;

const InputContainer = tw`
    relative
`;

const StyledInput = styled.input(({ error }) => [sinput, error && InputError]);
export const StyledLabel = styled.label(() => [slabel]);
export const StyledDiv = styled.div(() => [InputWrapper]);
export const StyledDivContainer = styled.div(() => [InputContainer]);
export default StyledInput;
