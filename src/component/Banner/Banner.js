import React, { useContext } from "react";
import { withRouter } from "react-router-dom";
import globalContext from "../../context/global/globalContext";

const Banner = ({ history }) => {
  //pull the needed values from the global context
  const { searchKeys, setSearchKeys } = useContext(globalContext);

  // set search inputs values to the global context
  const inputHund = e => {
    setSearchKeys({ ...searchKeys, [e.target.name]: e.target.value });
  };
  //on submit
  const SearchSubmit = () => {
    history.push(
      `/search?skill=${searchKeys.skill}&location=${searchKeys.location}`
    );
  };

  return (
    <section className='main-banner'>
      <div className='container'>
        <div className='caption'>
          <h2>Build Your Career</h2>
          <form>
            <fieldset>
              <div className='col-md-2 col-sm-2'></div>
              <div className='col-md-4 col-sm-4 no-pad'>
                <input
                  type='text'
                  className='form-control border-right'
                  placeholder='Skills, Designation, Companies'
                  name='skill'
                  onChange={inputHund}
                />
              </div>
              <div className='col-md-3 col-sm-3 no-pad'>
                <input
                  type='text'
                  className='form-control border-right'
                  placeholder='location'
                  name='location'
                  onChange={inputHund}
                />
              </div>
              <div className='col-md-2 col-sm-2 no-pad'>
                <button
                  className={
                    // eslint-disable-next-line
                    !searchKeys.location == "" || !searchKeys.skill == ""
                      ? "btn seub-btn "
                      : "btn seub-btn disabled"
                  }
                  onClick={SearchSubmit}
                  disabled={
                    // eslint-disable-next-line
                    !searchKeys.location == "" || !searchKeys.skill == ""
                      ? false
                      : true
                  }
                >
                  submit
                </button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </section>
  );
};

export default withRouter(Banner);
