import React from 'react'
import { Route, Switch } from 'react-router-dom'
// import UserRoute from './protectedRoutes/UserRoute'
import AdminRoute from './protectedRoutes/AdminRoute'

// components import
import Home from '../pages/home/Home'
import Register from '../pages/auth/register/Register'
import Login from '../pages/auth/login/Login'
import ForgotPassword from '../pages/auth/forgotPassword/ForgotPassword'
import Cart from '../pages/cart/Cart'
import Shop from '../pages/shop/Shop'
import AdminDashboard from '../pages/admin/adminDashboard/adminDashboard'

function MainRoutes () {
  return (
    <Switch>
      <Route exact path={'/'} component={Home}/>
      <Route exact path={'/register'} component={Register}/>
      <Route exact path={'/login'} component={Login}/>
      <Route exact path={'/forgot/password'} component={ForgotPassword}/>
      <Route exact path={'/cart'} component={Cart}/>
      <Route exact path={'/shop'} component={Shop}/>
      <AdminRoute exact path={'/admin/dashboard'} component={AdminDashboard}/>
      <Route exact path="*" render={() => <div>Page is not found</div>} />
    </Switch>
  )
}

export default MainRoutes



