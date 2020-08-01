import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Signup from './user/Signup';
import Signin from './user/Signin';
import Home from './core/Home';
import Userdashboard from './user/Userdashboard'
import Admindashboard from "./user/Admindashboard"
import PrivateRoute from './auth/PrivateRoutes'
import AdminRoute from './auth/AdminRoute'
import AddCategory from './admin/Addcategory'
import Menu from './core/Menu'
import AddProduct from './admin/Addproduct';
import Shop from './core/Shop'
import Product from './core/Product'
import Cart from './core/Cart'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap-css-only/css/bootstrap.min.css'
import 'mdbreact/dist/css/mdb.css'
const Routes = () => {
    return (
        <BrowserRouter>
              <Menu />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/signin" exact component={Signin} />
                <Route path="/signup" exact component={Signup} />
                <Route path="/shop" exact component={Shop} />
                <Route path="/cart" exact component={Cart} />
                <Route path="/product/:productId" exact component={Product} />
                <PrivateRoute path="/user/dashboard" exact component={Userdashboard}/>
                <AdminRoute path="/admin/dashboard" exact component={Admindashboard}/>
                <AdminRoute path="/create/category" exact component={AddCategory}/>
                <AdminRoute path="/create/product" exact component={AddProduct}/>
            </Switch>
        </BrowserRouter>
    );
};

export default Routes;
