import tw, {styled} from 'twin.macro'

const StyledDiv = tw`
    flex
    justify-center
    border-2
    border-b-0
    border-solid
    border-gray-300
`;

const searchbar = tw`
    px-6
    py-3
    font-bold
    text-center
    w-8/12
    text-lg
    border-none
    text-gray-500
`;

const spanIcon = tw`
    cursor-pointer
    py-4
    mx-6
    font-medium
    text-gray-500
    text-2xl
`;

const spanIndex = tw`
    py-4
    font-medium
    mx-6
    text-gray-500
    text-lg
`;

export const Search = styled.input(() => [searchbar])
export const SearchDiv = styled.div(() => [StyledDiv])
export const SpanIcon = styled.label(() => [spanIcon])
export const SpanIndex = styled.span(() => [spanIndex])