import React from "react";
import { Route } from "react-router-dom";
import AppHeader from "./components/AppHeader";
import Flowers from "./pages/flowers/Flowers";
import Home from "./pages/home/Home";
import RecipeTable from "./pages/recipeTable/RecipeTable";
import Sidenav from "./sidenav/Sidenav";
import { Content } from "carbon-components-react/lib/components/UIShell";
import "./AppViews.scss";

export const AppViews = () => {
  return (
    <>
      <AppHeader />
      <Sidenav />
      <Route exact path="/">
        <Content id="main-content" className="content">
          <Home />
        </Content>
      </Route>

      <Route path="/recipe-table">
        <Content id="main-content" className="content">
          <RecipeTable />
        </Content>
      </Route>

      <Route path="/flowers">
        <Content id="main-content" className="content">
          <Flowers />
        </Content>
      </Route>
    </>
  );
};
