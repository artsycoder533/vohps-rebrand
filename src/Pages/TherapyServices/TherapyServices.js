import React from "react";
import Title from "../../Components/Title/Title";
import { Center } from "../../Components/App/style";
import { serviceDescriptions } from "../../Utility/data";
import ServiceTab from "../../Components/ServiceTab/ServiceTab";
import { Descriptions } from "./style";

const TherapyServices = () => {

  return (
    <section>
      <Title title="Therapy Services" />
      <Center>
        <Descriptions>
          {serviceDescriptions.map((service, index) => {
            return (
              <ServiceTab
                key={index}
                service={service}
              />
            );
          })}
        </Descriptions>
      </Center>
    </section>
  );
};

export default TherapyServices;
