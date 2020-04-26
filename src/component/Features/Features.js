import React from "react";
import Feature from "./Feature/Feature";
const Features = () => {
  const features = [
    {
      name: "SEARCH FOR JOBS",
      description:
        "over 10000 jobs provided by companies you can browse and chose the perfect job",
      icon: "fa fa-search"
    },
    {
      name: "SEARCH FOR COMEPNIES",
      description:
        "easly you can find a target companie and start browse thier post jobs",
      icon: "fa fa-building"
    },
    {
      name: "FIND DATA",
      description:
        "we provide differents type of data by using advaced API let you access useful analytics about jobs field ",
      icon: "fa fa-rocket"
    },
    {
      name: "SEND YOUR RESUME",
      description:
        "once you send as you resume you will get automatically you target job on your email",
      icon: "fa fa-paper-plane"
    },
    {
      name: "CONTACT FOR SUPPORT",
      description: "contact team support if you face any trouble  ",
      icon: "fa fa-wrench"
    },
    {
      name: "FIND DAT",
      description:
        "we provide diffrent type of data by using advace API let access useful analitict about jobs field ",
      icon: "fa fa-rocket"
    }
  ];
  return (
    <section className='features'>
      <div className='container'>
        {features.map(ft => (
          <Feature
            key={ft.name}
            icon={ft.icon}
            name={ft.name}
            description={ft.description}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
