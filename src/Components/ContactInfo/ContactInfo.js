import React from "react";
import { Container } from "./style";
import { FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <Container>
      <div>
        <h3>
          <FaPhone /> Telephone & Fax
        </h3>
        <span>
          Phone: <a href="tel:18045920491">(804) 592-0491</a>
        </span>
        <span>Fax: (804) 843-1004</span>
      </div>
      <div>
        <h3>
          <FaEnvelope /> Email
        </h3>
        <span>
          <a href="mailto:dr.nelson@visionsofhope-va.com">
            dr.nelson@visionsofhope-va.com
          </a>
        </span>
      </div>
      <div>
        <h3>
          <FaClock /> Client Hours
        </h3>
        <span>Mon - Thurs: 10:00AM to 6:30PM</span>
        <span>Fri: 10:00AM to 1:00PM</span>
        <span>Saturday: Evaluations Only*</span>
      </div>
      <div>
        <h3>
          <FaMapMarkerAlt /> Address
        </h3>
        <address>
          <span>Visions of Hope Psychological Services, LLC</span>
          <span>555 Southlake Blvd</span>
          <span>Unit C2</span>
          <span>Richmond, VA 23236</span>
        </address>
      </div>
    </Container>
  );
};

export default ContactInfo;
