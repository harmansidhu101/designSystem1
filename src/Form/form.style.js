import tw, { styled ,css} from "twin.macro";

const slabel = tw`
border
border-solid
border-adp-gray
p-10
rounded-lg
hover:border-black
w-2/4
mx-auto
`;

export const Div = styled.body(() => [slabel]);
