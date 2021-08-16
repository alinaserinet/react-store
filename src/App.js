import React from 'react';
import {Switch, Route} from "react-router-dom/cjs/react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Favorite from "./pages/Favorite";
import Profile from "./pages/Profile";
import Product from "./pages/Product";

const App = () => {
    return (
        <div className='app'>
            <Switch>
                <Route path='/' exact>
                    <Home />
                </Route>
                <Route path='/cart'>
                    <Cart />
                </Route>
                <Route path='/categories'>
                    <Categories />
                </Route>
                <Route path='/favorite'>
                    <Favorite />
                </Route>
                <Route path='/profile'>
                    <Profile />
                </Route>
                <Route path='/products/:id'>
                    <Product />
                </Route>
            </Switch>
        </div>
    );
};

export default App;