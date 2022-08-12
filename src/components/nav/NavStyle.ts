import styled from "styled-components";
import { HD_Width } from "const/Viewport";

const NavContainer = styled.div`
  width: 290px;
  height: 100vh;
  display: inline-block;
  color: #98a0cc;
  @media screen and (max-width: ${HD_Width}px) {
    width: 75px;
  }
`;
const NavHeader = styled.h1`
  font-weight: 700;
  font-size: 20px;
  padding: 42px 0 21px 34px;
  border-bottom: 1px solid #f4f7fe;
  @media screen and (max-width: ${HD_Width}px) {
    padding: 15px 27px 13px 26px;
  }
`;
const MenuWrapper = styled.div`
  position: relative;
  height: calc(100% - 123px);
`;
const MenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 23px;
  padding: 38px 0 0 0;
  @media screen and (max-width: ${HD_Width}px) {
    align-items: center;
    justify-content: center;
  }
`;
const MenuLi = styled.li`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  position: relative;
  padding: 0 0 0 35.8px;
  font-size: 16px;
  line-height: 30px;
  font-weight: 500;
  &:nth-child(1) {
    gap: 14.8px;
    svg {
      margin-left: 2.8px;
    }
  }
  &:nth-child(2) {
    gap: 15px;
    svg {
      margin-left: 3px;
    }
  }
  &:nth-child(3) {
    gap: 16px;
    svg {
      margin-left: 4px;
    }
  }
  &:nth-child(4) {
    gap: 12px;
  }
  &:nth-child(5) {
    gap: 14.25px;
    svg {
      margin-left: 2.25px;
    }
  }
  &._curr {
    &::after {
      content: "";
      width: 4px;
      height: 100%;
      position: absolute;
      background: #2368ff;
      border-radius: 4px;
      right: 0;
    }
  }
  @media screen and (max-width: ${HD_Width}px) {
    padding: 0;
    justify-content: center;
  }
`;
const MenuBottom = styled.div`
  position: absolute;
  bottom: 23px;
  width: 100%;
`;
const Logout = styled.button`
  height: 36px;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  gap: 14px;
  border: 0;
  background: none;
  padding-left: 35px;
  font-size: 16px;
  line-height: 30px;
  color: #a3aed0;
  @media screen and (max-width: ${HD_Width}px) {
    padding: 0;
    justify-content: center;
  }
`;

const UI = {
  NavContainer,
  NavHeader,
  MenuWrapper,
  MenuUl,
  MenuLi,
  MenuBottom,
  Logout,
};
export default UI;
