import React from "react";
import {
  Header,
  HeaderName,
  HeaderNavigation,
  HeaderMenuItem,
} from "carbon-components-react";

const AppHeader = () => {
  return (
    <Header aria-label="Terra's App">
      <HeaderName href="/">Cats, Foods and Flowers</HeaderName>
      <HeaderNavigation aria-label="cfaf">
        <HeaderMenuItem href="/">Home</HeaderMenuItem>
      </HeaderNavigation>
    </Header>
  );
};
export default AppHeader;
