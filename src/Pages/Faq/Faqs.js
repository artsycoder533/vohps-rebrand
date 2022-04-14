import React from "react";
import Title from "../../Components/Title/Title";
import { Center } from "../../Components/App/style";
import AllFaqs from "../../Components/AllFaqs/AllFaqs";
import { Container, Wrapper, StyledArticle } from "./style";
import { goodFaith, noSurprises } from "../../Utility/data";

const Faqs = () => {
  return (
    <Container>
      <Center>
        <Wrapper>
          <Title title="FAQs" />
          <AllFaqs />
          <Title title="No Surprises Act" />
          {noSurprises.map(text => {
            return <p>{text}</p>
          })}
          <Title title="Good Faith Estimate" />
          {goodFaith.map((item, index) => {
            const { heading, p1, p2, list, footer, linkText, link } = item;
            return <StyledArticle key={index}>
              <h4>{heading}</h4>
              <p>{p1}</p>
              <ul>
                {list.map((listItem, index) => {
                 return <li key={index}>{listItem}</li>
                })}
              </ul>
              <p>{p2}</p>
              <p>{footer} <a href={link}>{linkText}</a></p>
            </StyledArticle>
          })}
        </Wrapper>
      </Center>
    </Container>
  );
};

export default Faqs;
