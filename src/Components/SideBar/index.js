import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarBtnWrap,
  SidebarRoute,
  SidebarLink,
} from "./sidebarElements";
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="about">About</SidebarLink>
            <SidebarLink to="discover">Discover</SidebarLink>
            <SidebarLink to="services">Services</SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
        <SidebarBtnWrap>
          <SidebarRoute to="/open">Open account</SidebarRoute>
        </SidebarBtnWrap>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
