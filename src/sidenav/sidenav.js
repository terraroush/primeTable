import {
  SideNav,
  SideNavLink,
} from "carbon-components-react/lib/components/UIShell";
import React from "react";
import "../index.scss";

const Sidenav = () => {
  return (
    <div className="sidenav-container">
      <SideNav
        isFixedNav
        expanded={true}
        isChildOfHeader={true}
        aria-label="Side navigation"
      >
        <SideNavLink href="/recipe-table">Random Recipes</SideNavLink>
        <SideNavLink href="/flowers">Flowers</SideNavLink>
      </SideNav>
    </div>
  );
};

export default Sidenav;
