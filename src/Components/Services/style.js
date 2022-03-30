import styled from "styled-components";
import { GiPerson,  } from "react-icons/gi";
import { HiUserGroup } from "react-icons/hi";
import { IoMan, IoWoman, IoClipboard } from "react-icons/io5";
;

export const Container = styled.section`
  margin: 4rem 0;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledPersonIcon = styled(GiPerson)`
  font-size: 3rem;
`;

export const StyledManIcon = styled(IoMan)`
  font-size: 3rem;
`;

export const StyledWomanIcon = styled(IoWoman)`
  font-size: 3rem;
`;

export const StyledUserIcon = styled(HiUserGroup)`
  font-size: 3rem;
`;

export const StyledClipboard = styled(IoClipboard)`
  font-size: 3rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  flex-direction: row;

  div {
    display: flex;
  }
`;