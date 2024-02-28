import React from "react";
import styled from "styled-components";

// Componente estilizado: inclusive pode-se estilizar uma tag dentro da outra
const Title = styled.h1`
  font-size: 2rem;
  color: blue;
`;

// Componente funcional do React
function App() {
  return <Title>Styled Components</Title>;
}

export default App;
