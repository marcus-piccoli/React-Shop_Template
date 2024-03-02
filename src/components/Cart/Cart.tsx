import * as S from "./CartStyles";

interface CartProps {
  showCart: boolean;
}
export const Cart: React.FC<CartProps> = ({ showCart }) => {
  return (
    <S.Container showCart={showCart}>
      <S.Title>Carrinho</S.Title>
    </S.Container>
  );
};
