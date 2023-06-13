import React from 'react'
import Button from 'react-bootstrap/Button';

const ItemListConteiner = () => {
    const showAlert = () => {
        alert('¡Bienvenido pero en alert!');
      };
      const styles = {
        carrito:{
            margin:"2rem 0rem 2rem 30rem"
        }
      }
    return (
  <>
  <div>
  <h1>BIENVENIDO A VERNEAU PROXIMAMENTE UN ECOMMERCE DE ROPA</h1>
  <Button variant="info" onClick={showAlert} style={styles.carrito}>alerta de bienvenida</Button>{' '}
    </div>
  
    </>
    );
  }
export default ItemListConteiner
