import React, { useReducer } from "react";
import GlobalContext from "./globalContext";
import globalReducer from "./globalReducer";
import axios from "axios";
import {
  SET_DEFAULT_JOBS,
  SET_SEARCH_JOBS,
  SET_LOADING,
  SET_MODEL,
  SET_ERR,
  CLEAR_SEARCH_JOBS,
  CLEAR_DEFAULT_JOBS,
  SET_SEARCH_KEYS,
  CLEAR_MODEL,
} from "../types";
let appId;
let appKey;
if (process.env.NODE_ENV !== "production") {
  appId = process.env.REACT_APP_ID;
  appKey = process.env.REACT_APP_KEY;
  console.log(process.env.REACT_APP_KEY);
} else {
  appId = process.env.APP_ID;
  appKey = process.env.APP_KEY;
  console.log(process.env.REACT_APP_KEY);
}

const GlobalState = (props) => {
  const initState = {
    defaultJobs: [],
    searchKeys: { skill: "", location: "" },
    searchJobs: [],
    loading: false,
    model: null,
    err: null,
  };
  // init reducer
  const [state, dispatch] = useReducer(globalReducer, initState);

  //setSeachKey
  const setSearchKeys = (SearchValues) => {
    dispatch({ type: SET_SEARCH_KEYS, payload: SearchValues });
  };

  // get default jobs for home page
  const getDefaultJobs = () => {
    setLoading(true);
    setError(null);
    clearDefaultJobs();
    console.log(appKey);
    axios
      .get(
        `https://api.adzuna.com/v1/api/jobs/gb/search/10?app_id=8ba6341e&app_key=2863bf154d48bce5fe3ebd1fcc58bb27%09&results_per_page=10&what_and=web`
        // `https://api.adzuna.com/v1/api/jobs/gb/search/10?app_id=${appId}&app_key=${appKey}&results_per_page=10&what_and=web`
      )
      .then((res) => {
        dispatch({ type: SET_DEFAULT_JOBS, payload: res.data.results });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(1);
      });
  };
  // get jobs by search
  const getJobs = (data) => {
    setLoading(true);
    setError(null);
    clearSearchJobs();
    axios
      .get(
        `https://api.adzuna.com/v1/api/jobs/gb/search/10?app_id=${appId}&app_key=${appKey}&results_per_page=100&what=${
          data ? data.skill : state.searchKeys.skill
        }&where=${data ? data.location : state.searchKeys.location}`
      )
      .then((res) => {
        dispatch({ type: SET_SEARCH_JOBS, payload: res.data.results });
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        setError(2);
      });
  };
  // set loadin
  const setLoading = (value) => dispatch({ type: SET_LOADING, payload: value });
  // set model
  const setModel = (modelId) =>
    setTimeout(() => {
      dispatch({ type: SET_MODEL, payload: modelId });
      clearModel();
    }, 2000);
  // clearn model
  const clearModel = () =>
    setTimeout(() => dispatch({ type: CLEAR_MODEL }), 2000);

  // set err
  const setError = (err) => dispatch({ type: SET_ERR, payload: err });
  // clear searched jobs
  const clearSearchJobs = () => dispatch({ type: CLEAR_SEARCH_JOBS });
  //clear default jobs
  const clearDefaultJobs = () => dispatch({ type: CLEAR_DEFAULT_JOBS });

  return (
    <GlobalContext.Provider
      value={{
        defaultJobs: state.defaultJobs,
        searchJobs: state.searchJobs,
        loading: state.loading,
        model: state.model,
        searchKeys: state.searchKeys,
        err: state.err,
        setModel,
        getDefaultJobs,
        getJobs,
        setSearchKeys,
        clearModel,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};
export default GlobalState;
