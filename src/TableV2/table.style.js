import tw, {styled} from 'twin.macro'

const tableDesign = tw`
    // w-full
    my-4
    mx-auto
    text-lg
    // table-auto
    table-fixed
    border-spacing-0
    text-center
`;

const tableHeadRow = tw`
    // bg-gray-100
`;

const tableHeadColumn = tw`
    py-3
    text-gray-500
    bg-gray-200
    font-medium
    border-solid
    border-gray-300
    border-2
    border-x-0
    border-b-0

`;

const tableBodyRow = tw`
    text-gray-600
    border-solid
    border-gray-300
    border-2
    border-x-0
    border-b-0
    font-medium
`;

const tableBodyColumn = tw`
    py-3
    text-gray-600
    border-solid
    border-gray-300
    border-2
    border-x-0
    border-b-0
    
`;

const ColGreen = tw`
    text-green-600
`;

const styledDiv = tw`
    // w-8/12
    w-full
    my-6
    mx-auto
    flex 
    justify-evenly
`;

const pageBtnDiv = tw`
    justify-center
`;

const colHideCheckBox = tw`
    mx-2
`;

const Table = styled.table(() => [tableDesign])
export const TableHeadRow = styled.thead(() => [tableHeadRow])
export const TableHead = styled.th(() => [tableHeadColumn])
export const TableRow = styled.tr(() => [tableBodyRow])
export const TableDataColumn = styled.td(() => [tableBodyColumn])
export const GreenText= styled.span(() => [ColGreen])

export const Div = styled.div(() => [styledDiv])
export const PageDiv = styled.div(() => [styledDiv, pageBtnDiv])
export const ColToggleSpan = styled.span(() => [colHideCheckBox])

export default Table;