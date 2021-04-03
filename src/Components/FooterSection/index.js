import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";

import {
  FooterContainer,
  FooterLinksItems,
  FooterLink,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterWrap,
  FooterLinkTitle,
  SocialIconLink,
  SocialMedia,
  SocialLogo,
  SocialIcons,
  SocialMediaWrap,
  WebsiteRights,
} from "./FooterElements";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle>What we do</FooterLinkTitle>
              <FooterLink to="/signin">Countries</FooterLink>
              <FooterLink to="/signin">FAQ</FooterLink>
              <FooterLink to="/signin">Procurement</FooterLink>
              <FooterLink to="/signin">Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle> Regions</FooterLinkTitle>
              <FooterLink to="/signin">Africa</FooterLink>
              <FooterLink to="/signin">America</FooterLink>
              <FooterLink to="/signin">South-East Asia</FooterLink>
              <FooterLink to="/signin">Europe</FooterLink>
              <FooterLink to="/signin">Western Specific</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <FooterLinkTitle> About Us</FooterLinkTitle>
              <FooterLink to="/signin">Director-General</FooterLink>
              <FooterLink to="/signin">World Health Assembly</FooterLink>
              <FooterLink to="/signin">Executive Board</FooterLink>
              <FooterLink to="/signin">Member States</FooterLink>
              <FooterLink to="/signin">Employment</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <FooterLinkTitle> Social Media</FooterLinkTitle>
              <FooterLink to="/">Instagram</FooterLink>
              <FooterLink to="/">Facebook</FooterLink>
              <FooterLink to="/">Youtube</FooterLink>
              <FooterLink to="/">twitter</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">Covid-19</SocialLogo>
            <WebsiteRights>
              {new Date().getFullYear()} All Rights Reserved
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
