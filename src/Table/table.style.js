import tw, {styled} from 'twin.macro'
import Button from '../Button';

const tableDesign = tw`
    text-lg
    w-full
    h-full
    border-solid
    border-2
    border-gray-300  
    text-gray-500 
    mx-auto
    border-b-0
    border-t-0
    table-auto
    // table-fixed
    border-spacing-0
    border-collapse
`;

const tableHead = tw`
  
`;

const tableHeadColumn = tw`
    px-6 
    py-4
`;

const tableColumn = tw`
    whitespace-nowrap 
    px-6 
    py-4 
    font-medium
    text-center
`;

const tableColumnFlex = tw`
    flex
    justify-center
`;

const tableBodyRow = tw`
    
`;

const colHideCheckBox = tw`
    mx-2
    p-2
`;

const Table = styled.table(() => [tableDesign])
export default Table;
export const TableHeadRow = styled.thead(() => [tableHead])
export const TableHead = styled.th(() => [tableHeadColumn])
export const TableColumn = styled.td(() => [tableColumn])
export const TableColumnFlex = styled.td(() => [tableColumn, tableColumnFlex])
export const TableRow = styled.tr(() => [tableBodyRow])
export const ColToggleSpan = styled.span(() => [colHideCheckBox])