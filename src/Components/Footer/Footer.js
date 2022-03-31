import React from "react";
import { Center } from "../App/style";
import { footerLinks } from "../../Utility/data";
import { NavLink } from "react-router-dom";
import { Container, Wrapper, LinkWrapper, StyledLink, SocialLinks, StyledFooter, ContactDiv, StyledAttrition } from "./style";
import logo from "../../Images/logo.png";
import { socialLinks } from "../../Utility/data";


const Footer = () => {
  return (
    <StyledFooter>
      <Center>
        <Wrapper>
          <LinkWrapper>
            <img
              src={logo}
              alt="Vision of Hope Psychological Services LLC logo"
            />
            <div>
              <Container>
                {footerLinks.map((link, index) => {
                  const { url, text } = link;
                  return (
                    <li key={index}>
                      <StyledLink to={url}>{text}</StyledLink>
                    </li>
                  );
                })}
              </Container>
            </div>
            <ContactDiv>
              <address>
                <p>Visions of Hope Psychological Services, LLC</p>
                <p>555 Southlake Blvd</p>
                <p>Unit C2</p>
                <p>Richmond, VA 23236</p>
              </address>
              <SocialLinks>
                {socialLinks.map((link, index) => {
                  const { url, icon, text } = link;
                  return (
                    <li key={index}>
                      <StyledLink to={url}>
                        {icon}
                        {text}
                      </StyledLink>
                    </li>
                  );
                })}
              </SocialLinks>
            </ContactDiv>
          </LinkWrapper>
          <StyledAttrition>
            &copy; Copyright Visions of Hpe Psychological Services, LLC | All
            Rights Reserved | Website made by{" "}
            <a href="https://natashajohnson.dev/"> Natasha Johnson</a>
          </StyledAttrition>
        </Wrapper>
      </Center>
    </StyledFooter>
  );
};

export default Footer;
