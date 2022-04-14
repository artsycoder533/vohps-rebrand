import React from "react";
import { Container} from "./style";

const SingleFaq = ({ question, answer }) => {


  if (question === "What are your rates?") {
      return (   
      <Container>
        <summary>
          <h3>{question}</h3>
        </summary>
        <div>
          {answer.map((ans, index) => {
            return <p key={index}>{ans}</p>;
          })}
        </div>
      </Container>
    );
  }

  return (
    <Container>
      <summary>
        <h3>{question}</h3>
      </summary>
      <div >
        <p>{answer}</p>
      </div>
    </Container>
  );
};

export default SingleFaq;
