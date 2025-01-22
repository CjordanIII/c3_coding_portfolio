import React, { useState, useEffect } from "react";

const Status = ({ status }) => {
  const [updateState, setUpdateState] = useState("");

  useEffect(() => {
    if (status==200) {
     
      setUpdateState(
        <div className="text-sm">
          {status === 200 ? (
            <p className="font-semibold text-green-700">Success</p>
          ) : (
            <p className="font-semibold text-red-700">Something went wrong</p>
          )}
        </div>
      );
    }
    if(status==400){
        setUpdateState("")
    }
  }, [status]);

  return <>{updateState}</>;
};

export default Status;
