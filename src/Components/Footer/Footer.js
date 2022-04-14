import React from "react";
import { Center } from "../App/style";
import { footerLinks } from "../../Utility/data";
import { Container, Wrapper, LinkWrapper, StyledLink, SocialLinks, StyledFooter, ContactDiv, StyledAttrition, StyledRegLink } from "./style";
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
                  if (text === "Psychology Today") {
                    return <li key={index}>
                      <a href={url} target="_blank" rel="noopener noreferrer">{text}</a>
                    </li>
                  }
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
                      <StyledRegLink
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer">
                        {icon}
                        {text}
                      </StyledRegLink>
                    </li>
                  );
                })}
              </SocialLinks>
            </ContactDiv>
          </LinkWrapper>
          <StyledAttrition>
            &copy; Copyright Visions of Hope Psychological Services, LLC | All
            Rights Reserved | Website made by{" "}
            <a href="https://natashajohnson.dev/" target="_blank" rel="noopener noreferrer"> Natasha Johnson</a>
          </StyledAttrition>
        </Wrapper>
      </Center>
    </StyledFooter>
  );
};

export default Footer;
