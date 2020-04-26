import React, { useContext, useState } from "react";
import globalContext from "../../context/global/globalContext";
const Contact = () => {
  const { setModel } = useContext(globalContext);
  const [subInput, setSubInput] = useState("");
  const subscribeSubmit = () => {
    // once subscribtion is done set a model
    if (subInput.length > 0) {
      setModel({ display: true, msg: "subscription done" });
      setSubInput("");
    }
  };
  const subInputHund = e => setSubInput(e.target.value);
  return (
    <section className='newsletter'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-10 col-sm-10 col-md-offset-1 col-sm-offset-1'>
            <h2>Want More Job & Latest Job? </h2>
            <p>
              Subscribe to our mailing list to receive an update when new Job
              arrive!
            </p>
            <div className='input-group'>
              <input
                type='email'
                required
                className='form-control'
                placeholder='Type Your Email Address...'
                onChange={subInputHund}
                value={subInput}
              />
              <span className='input-group-btn'>
                <button
                  type='text'
                  className='btn btn-default'
                  onClick={subscribeSubmit}
                >
                  Subscribe
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
