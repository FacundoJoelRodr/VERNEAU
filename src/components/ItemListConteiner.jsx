import React from 'react'
import Button from 'react-bootstrap/Button';

const ItemListConteiner = (props) => {
    const showAlert = () => {
        alert(props.bienvenida);
      };
      const styles = {
        carrito:{
            margin:"2rem 0rem 2rem 30rem"
        }
      }
    return (
  <>
  <div>
  <h1>{props.bienvenida}</h1>
  <Button variant="info" onClick={showAlert} style={styles.carrito}>alerta de bienvenida</Button>{' '}
    </div>
  
    </>
    );
  }
export default ItemListConteiner
