import React, { useContext, useEffect } from "react";
import GlobalContext from "../../context/global/globalContext";
import Item from "../../component/Item/Item";
import Spinner from "../../component/Spinner/Spinner";
import ResultNotFound from "../../component/ResultsNotFound/ResultsNotFound";
import ErrHund from "../../component/ErrHund/ErrHund";
import EmptyField from "../../component/EmptyField/EmptyField";
const Search = ({ history, location }) => {
  // pull the nedded values from the global state
  const {
    searchJobs,
    getJobs,
    loading,
    err,
    searchKeys,
    setSearchKeys
  } = useContext(GlobalContext);
  //pars the URL
  const search = location.search
    .replace("?skill=", "")
    .replace("location=", "")
    .split("&");

  useEffect(() => {
    // getJobs when the component load
    if (search.skill && search.location) {
      // chek if url queries is set
      setSearchKeys({ skill: search[0], location: search[1] });
      getJobs({ skill: search[0], location: search[1] });
    } else {
      //if not get default
      getJobs({ skill: "", location: "" });
    }
  }, []);

  // hundle search input fields
  const inputHund = e => {
    setSearchKeys({ ...searchKeys, [e.target.name]: e.target.value });
  };
  // submit the search
  const submit = () => {
    history.push(
      `/search?skill=${searchKeys.skill}&location=${searchKeys.location}`
    );
    getJobs();
  };

  return (
    <div>
      <div className='search-sec'>
        <input
          type='search'
          name='skill'
          placeholder='Skills'
          onChange={inputHund}
          value={searchKeys.skill}
        />
        <input
          type='search'
          name='location'
          placeholder='Location'
          onChange={inputHund}
          value={searchKeys.location}
        />
        <button
          className={
            // eslint-disable-next-line
            !searchKeys.location == "" || !searchKeys.skill == ""
              ? "btn btn-danger "
              : "btn btn-danger disabled"
          }
          disabled={
            // eslint-disable-next-line
            !searchKeys.location == "" || !searchKeys.skill == "" ? false : true
          }
          onClick={submit}
        >
          Search
        </button>
      </div>
      <div className='container'>
        {!loading && searchJobs ? (
          searchJobs.map(el => <Item key={el.id} item={el} />)
        ) : (
          <Spinner />
        )}
        {!location.search && !loading && !err ? <EmptyField /> : null}
        {err ? <ErrHund /> : null}
        {searchJobs.length === 0 && !loading && location.search && !err ? (
          <ResultNotFound />
        ) : null}
      </div>
    </div>
  );
};

export default Search;
