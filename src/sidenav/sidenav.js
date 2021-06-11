import { SideNav, SideNavItem, SideNavLink } from "carbon-components-react";
import React from "react";

const Sidenav = () => {
  return (
    <div className="sidenav-container">
      <SideNav
        isFixedNav
        expanded={true}
        isChildOfHeader={false}
        aria-label="Side navigation"
      >
        <SideNavLink href="/recipe-table">Random Recipes</SideNavLink>
        <SideNavLink href="/flowers">Flowers</SideNavLink>
      </SideNav>
    </div>
  );
};

export default Sidenav;
