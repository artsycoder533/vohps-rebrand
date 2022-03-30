import React from "react";
import { Container, IconWrapper } from "./style";
import { Center } from "../App/style";
import ServiceCard from "../ServiceCard/ServiceCard";
import { StyledPersonIcon, StyledManIcon, StyledWomanIcon, StyledUserIcon,StyledClipboard, Wrapper} from "./style";

const Services = () => {
  return (
    <Container>
      <Center>
        <Wrapper>
          <ServiceCard
            icon={<StyledManIcon />}
            link={"Individual Therapy"}
            path={"/individual"}
          />
          <ServiceCard
            icon={
              <IconWrapper>
                <div>
                  <StyledManIcon />
                  <StyledWomanIcon />
                </div>
                <div>
                  <StyledWomanIcon />
                  <StyledWomanIcon />
                </div>
                <div>
                  <StyledManIcon />
                  <StyledManIcon />
                </div>
              </IconWrapper>
            }
            link={"Couples Therapy"}
            path={"/couples"}
          />
          <ServiceCard
            icon={<StyledUserIcon />}
            link={"Group Therapy"}
            path={"/group"}
          />
          <ServiceCard
            icon={<StyledClipboard />}
            link={"Psychological Assessments"}
            path={"/assessments"}
          />
        </Wrapper>
      </Center>
    </Container>
  );
};

export default Services;
