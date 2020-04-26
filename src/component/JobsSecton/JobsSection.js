import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Item from "../Item/Item";
import GlobalContext from "../../context/global/globalContext";
import Spinner from "../Spinner/Spinner";
const JobsSection = () => {
  const { defaultJobs, loading } = useContext(GlobalContext);
  return (
    <section className='jobs'>
      <h2 className='brows'>Browse Jobs </h2>
      {!loading ? (
        defaultJobs.map(item => <Item key={item.id} item={item} />)
      ) : (
        <Spinner />
      )}
      <div className='row'>
        <div className='col-md-12 col-sm-12' style={{ textAlign: "center" }}>
          <button className='brows-btn'>
            <Link className='tag' to={"/search?skill=&location="}>
              Brows All Jobs
            </Link>
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobsSection;
