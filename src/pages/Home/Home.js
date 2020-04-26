import React, { useContext, useEffect, Fragment } from "react";
import GlobalContext from "../../context/global/globalContext";
import Banner from "../../component/Banner/Banner";
import Features from "../../component/Features/Features";
import Stat from "../../component/Statistiques/Statistiques";
import DefaultJobsSection from "../../component/JobsSecton/JobsSection";
import MembersCard from "../../component/MembersCard/MembersCard";
import Contact from "../../component/Contact/Contact";
import Footer from "../../component/Footer/Footer";
import Alert from "../../component/Alert/Alert";
const Home = () => {
  const { getDefaultJobs } = useContext(GlobalContext);
  //get jobs data from the API when component is loaded
  useEffect(() => getDefaultJobs(), []);
  return (
    <Fragment>
      <Alert />
      <Banner />
      <Features />
      <Stat />
      <DefaultJobsSection />
      <MembersCard />
      <Contact />
      <Footer />
    </Fragment>
  );
};

export default Home;
