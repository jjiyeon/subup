import { useEffect, useState } from "react";
import UI from "./NavStyle";
import { HD_Width } from "../const/Viewport";
import {
  Subup,
  Archive,
  Home,
  Project,
  User,
  Setting,
  Logout,
} from "./icon/IconIndex";
const Nav = () => {
  return (
    <UI.NavContainer>
      <UI.NavHeader>
        <Subup />
        <br />
        EDITOR
      </UI.NavHeader>

      <UI.MenuWrapper>
        <UI.MenuUl>
          <UI.MenuLi>
            <Home />
            Dashbord
          </UI.MenuLi>
          <UI.MenuLi>
            <Project />
            Projects
          </UI.MenuLi>
          <UI.MenuLi>
            <User />
            Users
          </UI.MenuLi>
          <UI.MenuLi>
            <Archive />
            Archive
          </UI.MenuLi>
          <UI.MenuLi>
            <Setting />
            Settings
          </UI.MenuLi>
        </UI.MenuUl>
        <UI.MenuBottom>
          <UI.Logout>
            <Logout />
            Logout
          </UI.Logout>
        </UI.MenuBottom>
      </UI.MenuWrapper>
    </UI.NavContainer>
  );
};

export default Nav;
