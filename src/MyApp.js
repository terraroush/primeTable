import React from "react";
import { Route } from "react-router-dom";
import { AppViews } from "./AppViews";

export const MyApp = () => (
  <Route
    render={() => {
      return <AppViews />;
    }}
  />
);
