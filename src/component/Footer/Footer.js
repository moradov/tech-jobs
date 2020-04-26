import React, { useContext, useState } from "react";
import globalContext from "../../context/global/globalContext";
const Footer = () => {
  const { setModel } = useContext(globalContext);
  //create state to store inputs values
  const [inptVal, setInpsVal] = useState({
    name: "",
    email: "",
    msg: ""
  });
  // inputs hundler => put inputs values to the state
  const inptHund = e =>
    setInpsVal({ ...inptVal, [e.target.name]: e.target.value });
  //on submit the for
  const formSubmited = event => {
    event.preventDefault();
    // show msg
    setModel({ display: true, msg: "your message is sent" });
    //clear the state
    setInpsVal({
      name: "",
      email: "",
      msg: ""
    });
  };
  return (
    <footer>
      <div className='container'>
        <div className='col-md-4 col-sm-6'>
          <h4>Featured Job</h4>
          <ul className='footer-ui'>
            <li>Browse Jobs</li>
            <li>Premium MBA Jobs</li>
            <li>Access Database</li>
            <li>Manage Responses</li>
            <li>Report a Problem</li>
            <li>Mobile Site</li>
          </ul>
        </div>

        <div className='col-md-4 col-sm-6'>
          <h4>Reach Us</h4>
          <address>
            <ul>
              <li>1201, Murakeu Market, 12 street</li>
              <li>Email: Support@job-api.com</li>
              <li>Call: 044 123 458 65879</li>
              <li>Skype: job-api@skype</li>
              <li>FAX: 123 456 85</li>
            </ul>
          </address>
        </div>

        <div className='col-md-4 col-sm-6'>
          <h4>Drop A Mail</h4>
          <form onSubmit={formSubmited}>
            <input
              name='name'
              type='text'
              className='form-control input-lg'
              placeholder='Your Name'
              required
              onChange={inptHund}
              value={inptVal.name}
            />
            <input
              name='email'
              type='email'
              className='form-control input-lg'
              placeholder='Email...'
              required
              onChange={inptHund}
              value={inptVal.email}
            />
            <textarea
              name='msg'
              type='text'
              required
              className='form-control'
              placeholder='Message'
              onChange={inptHund}
              value={inptVal.msg}
            ></textarea>
            <button type='submit' className='btn btn-primary'>
              Send
            </button>
          </form>
        </div>
      </div>
      <div className='copy-right'>
        <p>
          &copy;Copyright 2019 Tech Jobs | Developed By{" "}
          <a href='https://themezhub.com/'>Morad</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
