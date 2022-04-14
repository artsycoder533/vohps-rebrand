import React from "react";
import { Container } from "./style";

const Map = () => {
  return (
    <Container>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3165.3740750888546!2d-77.59930618428425!3d37.499094535744526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b16d64c92e8c01%3A0xfd722b5638636e03!2s555%20Southlake%20Blvd%2C%20Richmond%2C%20VA%2023236!5e0!3m2!1sen!2sus!4v1649211562533!5m2!1sen!2sus"
        title="Address Map"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </Container>
  );
};

export default Map;
