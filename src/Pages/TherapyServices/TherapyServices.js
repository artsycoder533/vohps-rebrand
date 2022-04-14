import React from "react";
import Title from "../../Components/Title/Title";
import { Center } from "../../Components/App/style";
import { serviceDescriptions } from "../../Utility/data";
import ServiceTab from "../../Components/ServiceTab/ServiceTab";
import { Descriptions } from "./style";
import BackToTopButton from "../../Components/BackToTopButton/BackToTopButton";

const TherapyServices = () => {

  return (
    <section>
      <Title title="Therapy Services" />
      <Center>
        <Descriptions>
          {serviceDescriptions.map((service, index) => {
            return <ServiceTab key={index} service={service} />;
          })}
        </Descriptions>
      </Center>
      <BackToTopButton />
    </section>
  );
};

export default TherapyServices;
