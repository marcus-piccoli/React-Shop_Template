import { Header } from "./components/Header/Header";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { GlobalStyles } from "./styles/GlobalStyles";

// Componente estilizado: inclusive pode-se estilizar uma tag dentro da outra ex:
// const Title = styled.h1`
//   font-size: 2rem;
//   color: blue;
// `;

// Componente funcional do React
function App() {
  return (
    <>
      <Header />
      <ProductsList />
      <GlobalStyles />
    </>
  );
}

export default App;
