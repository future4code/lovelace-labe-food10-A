import React from "react"

const MyCartPage=(props)=>{

    const renderCartItems = () => {
        if (props.cart.length === 0) {
          return <p>carrinho vazio</p>;
        }
        return props.cart.map((item) => (
         <div>{item}</div>
        ));
      };

      const totalPrice = props.cart.reduce((acc, item) => {
        return acc + item.price * item.quantity;
      }, 0);
      
    return(
        <div>
            {renderCartItems()}
            pagina do carrinho
        </div>
    )
}
export default MyCartPage