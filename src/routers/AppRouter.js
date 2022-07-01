import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  HashRouter as Router,
  Switch,
  Redirect,
  Route,
} from "react-router-dom";

import { startChecking } from "../actions/auth";
import { getAllProducts, getAllCategories } from "../actions/product";

import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";
import { AccountRouter } from "./AccountRouter";

import { Home } from "../components/home/Home";
import { Spinner } from "../components/base/Spinner";
import { Search } from "../components/search/Search";
import { Login } from "../components/auth/Login";
import { Forgot } from "../components/auth/Forgot";
import { NavBar } from "../components/base/NavBar";
import { Register } from "../components/auth/Register";
import { Confirm } from "../components/auth/ConfirmAccount";
import { ProductoFullScreen } from "../components/base/ProductoFullScreen";

export const AppRouter = () => {
  const dispatch = useDispatch();
  const { checking, uid } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(startChecking());
    dispatch(getAllCategories());
    dispatch(getAllProducts());
  }, [dispatch]);

  if (checking) {
    return ( <Spinner/> );
  }

  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/search" component={Search} />

          <Route exact path="/recovery" component={Forgot} />

          <Route exact path="/register" component={Register} />

          <Route exact path="/confirm" component={Confirm} />

          <Route exact path="/product/:id" component={ProductoFullScreen} />

          <PublicRoute
            exact
            path="/login"
            component={Login}
            isAuthenticated={!!uid}
          />

          <PrivateRoute
            exact
            path="/account/*"
            component={AccountRouter}
            isAuthenticated={!!uid}
          />

          <Redirect to="/" />
        </Switch>
      </div>
    </Router>
  );
};
