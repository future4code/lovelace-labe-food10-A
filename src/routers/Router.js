import React, { useState } from "react";
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AddressRegistrationPage from '../pages/AddressRegistrationPage/AddressRegistrationPage'
import HomePage from '../pages/HomePage/HomePage'
import LoginPage from '../pages/LoginPage/LoginPage/LoginPage'
import MyCartPage from '../pages/MyCartPage/MyCartPage'
import MyProfilePage from '../pages/MyProfilePage/MyProfilePage'
import RestaurantPage from '../pages/RestaurantPage/RestaurantPage'
import SearchResultsPage from '../pages/SearchPage/SearchResultsPage'
import SignUpPage from '../pages/SignUpPage/SignUpPage'
import ErrorPage from '../pages/ErrorPage/ErrorPage'

const Router = () => {

    const [cart, setCart] = useState(['pÃ£o']);

    const addToCart = (product) => {
      const isProductAlreadyInCart = cart.find((productInCart) => {
        if (productInCart.id === product.id) {
          return true;
        } else {
          return false;
        }
      });
  
      if (isProductAlreadyInCart) {
        const newCart = cart.map((productInCart) => {
          if (productInCart.id === product.id) {
            const newProduct = {
              ...productInCart,
              quantity: productInCart.quantity + 1
            };
            return newProduct;
          }
          return productInCart;
        });
        setCart(newCart);
      } else {
        const newProduct = { ...product, quantity: 1 };
        const newCart = [...cart, newProduct];
        setCart(newCart);
      }
    };
  
    const removeFromCart = (product) => {
      let newCart = cart.map((productInCart) => {
        if (productInCart.id === product.id) {
          const newProduct = {
            ...productInCart,
            quantity: productInCart.quantity - 1
          };
          return newProduct;
        }
        return productInCart;
      });
  
      newCart = newCart.filter((productInCart) => {
        if (productInCart.quantity < 1) {
          return false;
        } else {
          return true;
        }
      });
  
      setCart(newCart);
    };
  
    return (
        <BrowserRouter>
        <Switch>

        <Route exact path='/cadastrar-endereco'>
            <AddressRegistrationPage/>
        </Route>

        <Route exact path='/'>
            <HomePage/>
        </Route>

        <Route exact path='/login'>
            <LoginPage/>
        </Route>

      <Route exact path='/meucarrinho' >
            <MyCartPage cart={cart}/>
      </Route>

      <Route exact path='/meuperfil'>
            <MyProfilePage/>
      </Route>

      <Route exact path='/restaurantes/:id'>
            <RestaurantPage/>
      </Route>

      <Route exact path='/resultado-da-usca'>
            <SearchResultsPage/>
      </Route>

      <Route exact path='/cadastrar'>
            <SignUpPage/>
      </Route>



    <Route>
    <ErrorPage/>
    </Route>

        </Switch>
        </BrowserRouter>
    )
}

export default Router