import React from "react";
import Statistique from "./Stat/Stat";
const Stat = () => {
  const stats = [
    {
      name: "Job Posts",
      number: "+1000",
      icon: "fa fa-briefcase"
    },
    {
      name: "All Companies",
      number: "+207",
      icon: "fa fa-building"
    },
    {
      name: "Total Members",
      number: "+700",
      icon: "fa fa-users"
    },
    {
      name: "Happy Members",
      number: "+800",
      icon: "fa fa-smile-o"
    }
  ];
  return (
    <section className='counter'>
      <div className='container'>
        {stats.map(st => (
          <Statistique statData={st} key={st.name} />
        ))}
      </div>
    </section>
  );
};
export default Stat;
