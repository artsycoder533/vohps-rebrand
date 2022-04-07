import React from "react";
import Title from "../../Components/Title/Title";
import { Center } from "../../Components/App/style";
import { servicesButtons } from "../../Utility/data";
import { serviceDescriptions } from "../../Utility/data";
import ServiceTab from "../../Components/ServiceTab/ServiceTab";

const TherapyServices = () => {
  return (
    <section>
      <Title title="Therapy Services" />
      <Center>
        <div>
          <div>
            {servicesButtons.map((btn, index) => {
              return <button key={index}>{btn}</button>;
            })}
          </div>
          <div>
            {serviceDescriptions.map((service, index) => {
              return <ServiceTab key={index} service={service} />;
            })}
          </div>
        </div>
      </Center>
    </section>
  );
};

export default TherapyServices;
