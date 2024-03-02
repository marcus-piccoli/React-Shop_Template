import { products } from "../../data/Products";
import { ProductCard } from "../ProductCard/ProductCard";
import * as S from "./ProductsListStyles";

export const ProductsList: React.FC = () => {
  // Pode-se utilizar um useEffect para puxar estes dados da API de produtos

  return (
    <S.Container>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </S.Container>
  );
};
