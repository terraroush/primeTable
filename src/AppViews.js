import React from "react";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import Flowers from "./pages/flowers/Flowers";
import Home from "./pages/home/Home";
import RecipeTable from "./pages/recipeTable/RecipeTable";
import Sidenav from "./sidenav/Sidenav";

export const AppViews = () => {
  return (
    <React.Fragment>
      <Header />
      <Sidenav />

      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/recipe-table">
        <RecipeTable />
      </Route>

      <Route path="/flowers">
        <Flowers />
      </Route>
    </React.Fragment>
  );
};
