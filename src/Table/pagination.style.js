import tw, {styled} from 'twin.macro'

const btnBasic = tw`
    text-base
    cursor-pointer
    hover:bg-gray-400
    hover:text-white
    focus:text-red-600 
    transition
    duration-300
`;

const pageDiv = tw`
    border-solid
    border-2
    border-gray-300
    flex
    text-lg
    text-center
    text-gray-500
    // justify-center
    mx-auto
`;

const prevButton = tw`
    py-4 
    px-5
    border-l-0
    border-t-0
    border-b-0
    border-r-2
    border-gray-300
    border-solid
    font-bold
    text-gray-500

    disabled:cursor-not-allowed
`;

const pageButton = tw`
    py-3.5 px-8
    bg-white
    border-l-0
    border-t-0
    border-b-0
    border-r-2
    border-gray-300
    border-solid
    font-bold
    text-gray-500
`;

const nextButton = tw`
    py-4
    px-5
    border-l-0
    border-t-0
    border-b-0
    border-r-2
    border-gray-300
    border-solid
    font-bold
    text-gray-500
    disabled:cursor-not-allowed
`;

export const Div = styled.div(() => [pageDiv])
export const PreButton = styled.button(() => [prevButton, btnBasic])
export const PageButton = styled.button(() => [pageButton, btnBasic])
export const NextButton = styled.button(() => [nextButton, btnBasic])