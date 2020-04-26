import React from "react";
import MemberCardItem from "./MemberCardItem/MemberCardItem";
const MembersCard = () => {
  // statique DATA
  const MembersCardsData = [
    {
      name: "Sazzel Shi",
      position: "UX/ Designer",
      profile_img: "https://i.ibb.co/HqRW3VZ/avatar3.jpg"
    },
    {
      name: "Daniel Dezox",
      position: "CEO Founder",
      profile_img: "https://i.ibb.co/3YrH8cH/avatar2.jpg"
    },
    {
      name: "Silp Sizzeri",
      position: "Humman Resource",
      profile_img: "https://i.ibb.co/Qvkz3sg/avatar1.jpg"
    }
  ];
  return (
    <section className='membercard dark'>
      <div className='container'>
        <div className='row'>
          {MembersCardsData.map(member => (
            <MemberCardItem memberData={member} key={member.name} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MembersCard;
