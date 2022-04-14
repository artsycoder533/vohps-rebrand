import React from 'react'
import { Container } from './style';
import { Center } from '../App/style';

const Mission = () => {
  return (
    <Container id="mission">
      <Center>
        <article>
          <div>
            <h2>Who We Are:</h2>
            <p>
              We are a mental health private practice located in Richmond,
              Virginia with 14 years of professional counseling experience. We
              are owned and operated by Dr. Selisha Nelson-Smith PhD, LCP. We
              are licensed by the Virginia Board of Psychology and a member of
              the American Psychological Association.
            </p>
          </div>
          <div>
            <h2>What we do:</h2>
            <p>
              We provide counseling services such as Individual Therapy, Couples
              Therapy, Group Therapy and Psychological Evaluations. We
              facilitate positive peer, family, and community relationships. We
              strive to empower individuals to reach their full potential by
              providing them with the tools needed to succeed in society. We
              teach and instill in clients a sense of strength and resilience.
              We also provide education to assist clients with adequately
              identifying and addressing issues as they arise. Empowerment is an
              essential component of the work we do.
            </p>
          </div>
          <div>
            <h2>How we do it:</h2>
            <p>
              We challenge our clients to be the best version of themselves. To
              do this, we incorporate a variety of therapeutic techniques and
              evidence-based practices. It is important to create a safe space
              that will allow individuals to find strength and security in their
              vulnerability. There is no cookie cutter model to therapy, and
              each client's treatment will cater to their presenting needs and
              current diagnosis.
            </p>
          </div>
        </article>
      </Center>
    </Container>
  );
}

export default Mission