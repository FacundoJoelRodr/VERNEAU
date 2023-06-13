import React from 'react';
import NavBar from './components/navBar';
import ItemListConteiner from './components/ItemListConteiner'

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListConteiner bienvenida="BIENVENIDO A VERNEAU PROXIMAMENTE UN ECOMMERCE DE ROPA"></ItemListConteiner>
    </div>
  );
}

export default App;