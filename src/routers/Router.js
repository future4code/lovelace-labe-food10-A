import React from 'react'
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
            <MyCartPage/>
      </Route>

      <Route exact path='/meuperfil'>
            <MyProfilePage/>
      </Route>

      <Route exact path='/restaurantes-encontrados'>
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
