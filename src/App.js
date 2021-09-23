import {useLayoutEffect} from 'react';
import {Switch, Route} from "react-router-dom/cjs/react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Categories from "./pages/Categories";
import Favorite from "./pages/Favorite";
import Profile from "./pages/Profile";
import Product from "./pages/Product/Product";
import UserRoute from "./components/UserRoute";
import Login from "./pages/Login";
import LoginRoute from "./components/LoginRoute";
import {useDispatch} from "react-redux";
import {setToken} from "./redux/userSlice";
import 'normalize.css/normalize.css';
import {setCart} from "./redux/cartSlice";

const App = () => {
    const dispatch = useDispatch();

    useLayoutEffect(() => {
        const token = localStorage.getItem('token');
        const cart = JSON.parse(localStorage.getItem('cart'));
        token && dispatch(setToken(token));
        cart && dispatch(setCart(cart));
    }, [dispatch]);

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
                <UserRoute path='/profile'>
                    <Profile />
                </UserRoute>
                <LoginRoute path='/login'>
                    <Login />
                </LoginRoute>
                <Route path='/products/:id'>
                    <Product />
                </Route>
            </Switch>
        </div>
    );
};

export default App;