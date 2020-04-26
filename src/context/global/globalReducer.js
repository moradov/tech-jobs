import {
  SET_DEFAULT_JOBS,
  SET_SEARCH_JOBS,
  SET_LOADING,
  SET_MODEL,
  SET_ERR,
  CLEAR_SEARCH_JOBS,
  CLEAR_DEFAULT_JOBS,
  SET_SEARCH_KEYS,
  CLEAR_MODEL
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case SET_DEFAULT_JOBS:
      return {
        ...state,
        defaultJobs: action.payload,
        loading: false
      };
    case SET_SEARCH_JOBS:
      return {
        ...state,
        searchJobs: action.payload,
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: action.payload
      };
    case SET_MODEL:
      return {
        ...state,
        model: { ...action.payload }
      };
    case CLEAR_MODEL:
      return {
        ...state,
        model: null
      };
    case CLEAR_SEARCH_JOBS:
      return {
        ...state,
        searchJobs: []
      };
    case CLEAR_DEFAULT_JOBS:
      return {
        ...state,
        defaultJobs: []
      };
    case SET_ERR:
      return {
        ...state,
        err: action.payload
      };
    case SET_SEARCH_KEYS:
      return {
        ...state,
        searchKeys: action.payload
      };
    default:
      return {
        ...state
      };
  }
};
