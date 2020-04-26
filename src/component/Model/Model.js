import React, { useContext } from "react";
import globalContext from "../../../context/global/globalContext";
const Model = ({ msg }) => {
  const { setModel } = useContext(globalContext);
  const closeModel = () => setModel({ display: false, msg: "", delay: 0 });
  return (
    <div
      className='modal'
      tabIndex='-1'
      role='dialog'
      style={{ display: "block" }}
    >
      <div className='modal-dialog' role='document'>
        <div className='modal-content'>
          <div className='modal-header'>
            {/* <h5 class='modal-title'>Modal title</h5> */}
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body'>
            <p>{msg} </p>
          </div>
          <div className='modal-footer'>
            {/* <button type='button' class='btn btn-primary'>
              Save changes
            </button> */}
            <button
              onClick={closeModel}
              type='button'
              className='btn btn-secondary'
              data-dismiss='modal'
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
