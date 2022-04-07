import React, { useState } from "react";
import Title from "../../Components/Title/Title";
import { Center } from "../../Components/App/style";
import { servicesButtons } from "../../Utility/data";
import { serviceDescriptions } from "../../Utility/data";
import ServiceTab from "../../Components/ServiceTab/ServiceTab";
import { SecondaryButton } from "../../Components/Button/style";
import { ButtonContainer, Descriptions } from "./style";

const TherapyServices = () => {
  const [view, setView] = useState(3);
  console.log(view);
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
                view={view}
                index={index}
              />
            );
          })}
        </Descriptions>
      </Center>
    </section>
  );
};

export default TherapyServices;
