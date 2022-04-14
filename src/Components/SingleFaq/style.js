import styled from "styled-components";

export const Container = styled.details`
  display: flex;
  max-width: 800px;
  width: 100%;
  line-height: 1.5;
  transition: all 0.3s ease-in-out;
  box-shadow: 0px 15px 10px -15px;

  summary {
    padding: 2rem;
    cursor: pointer;
    list-style: none;
    display: flex;
    align-items: center;
    transition: all 0.3s ease-in-out;
    border-bottom: 1px solid gray;

    h3 {
      display: inline;
      font-size: 1.3rem;
    }
  }

  summary::before {
    content: "+";
    color: purple;
    margin-right: 2rem;
    font-weight: 800;
    font-size: 2rem;
    background: purple;
    color: white;
    width: 2rem;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &[open] summary::before {
    content: "-";
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    font-size: 2rem;
  }

  p {
    padding: 1rem 2rem;
    background: #cdf5fd;
    font-weight: 1.1rem;
  }
`;
