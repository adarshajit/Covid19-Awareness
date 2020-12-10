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
            <SidebarLink to="about" onClick={toggle}>
              About
            </SidebarLink>
            <SidebarLink to="discover" onClick={toggle}>
              Discover
            </SidebarLink>
            <SidebarLink to="services" onClick={toggle}>
              Services
            </SidebarLink>
          </SidebarMenu>
        </SidebarWrapper>
        <SidebarBtnWrap>
          <SidebarRoute to="/open" onClick={toggle}>
            Open account
          </SidebarRoute>
        </SidebarBtnWrap>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
