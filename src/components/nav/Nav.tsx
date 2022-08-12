import { useEffect, useState } from "react";
import UI from "./NavStyle";
import { HD_Width } from "../../const/Viewport";
import { Size } from "interfaces/Project";
import {
  Subup,
  HDSubup,
  Archive,
  Home,
  Project,
  User,
  Setting,
  Logout,
} from "../icon/IconIndex";
interface Props {
  deviceSize?: Size;
}
const Nav = ({ deviceSize }: Props) => {
  return (
    <UI.NavContainer>
      <UI.NavHeader>
        {deviceSize ? (
          deviceSize.width > HD_Width ? (
            <>
              <Subup />
              <br />
              EDITOR
            </>
          ) : (
            <HDSubup />
          )
        ) : (
          ""
        )}
      </UI.NavHeader>

      <UI.MenuWrapper>
        <UI.MenuUl>
          <UI.MenuLi>
            <Home />
            {deviceSize ? (deviceSize.width > HD_Width ? "Dashbord" : "") : ""}
          </UI.MenuLi>
          <UI.MenuLi className="_curr">
            <Project />
            {deviceSize ? (deviceSize.width > HD_Width ? "Projects" : "") : ""}
          </UI.MenuLi>
          <UI.MenuLi>
            <User />
            {deviceSize ? (deviceSize.width > HD_Width ? "Users" : "") : ""}
          </UI.MenuLi>
          <UI.MenuLi>
            <Archive />
            {deviceSize ? (deviceSize.width > HD_Width ? "Archive" : "") : ""}
          </UI.MenuLi>
          <UI.MenuLi>
            <Setting />
            {deviceSize ? (deviceSize.width > HD_Width ? "Settings" : "") : ""}
          </UI.MenuLi>
        </UI.MenuUl>
        <UI.MenuBottom>
          <UI.Logout>
            <Logout />
            {deviceSize ? (deviceSize.width > HD_Width ? "Logout" : "") : ""}
          </UI.Logout>
        </UI.MenuBottom>
      </UI.MenuWrapper>
    </UI.NavContainer>
  );
};

export default Nav;
