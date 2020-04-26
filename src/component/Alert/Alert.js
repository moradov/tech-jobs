import React, { Fragment, useContext, useEffect } from "react";
import globalContext from "../../context/global/globalContext";
const Alert = () => {
  const { model } = useContext(globalContext);
  useEffect(() => {
    if (model) {
      console.log(model);
    }
  }, [model]);
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
