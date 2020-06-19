import React, { Fragment, useContext } from "react";
import globalContext from "../../context/global/globalContext";
const Alert = () => {
  const { model } = useContext(globalContext);
  return (
    <Fragment>
      {model ? (
        <div
          className='alert'
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "red",
            textAlign: "center",
            position: "fixed",
            top: "0",
            left: "0",
            zIndex: "111",
            color: "#fff"
          }}
        >
          {model.msg}
        </div>
      ) : null}
    </Fragment>
  );
};

export default Alert;
