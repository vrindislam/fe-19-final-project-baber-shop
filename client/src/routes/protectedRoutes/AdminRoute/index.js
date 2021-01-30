import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ ...rest }) => {
  const { exp, isAuthenticated, isAdmin } = useSelector(state => ({ ...state.user }));
  const [verified, setVerified] = useState(false);

  useEffect(() => {
    if (isAuthenticated && isAdmin && localStorage.token && exp && (exp < Date.now() / 1000)) {
      setVerified(true);
    }
  }, [exp, isAuthenticated, isAdmin]);

  return verified ? <Route {...rest} /> :  <Redirect to={'/'}/>;
};

export default AdminRoute;