import React, { useState } from "react";

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  //   const firstValue = text || "hello world";
  //   const secondValue = text && "hello world";

  return (
    <>
      {/*<h1>{firstValue}</h1>
      <h2>value : {secondValue}</h2>*/}
      <h1>{text || "Shruti Singh"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {isError && <h1>Error..</h1>}
      {isError ? (
        <p>There is an Error..</p>
      ) : (
        <div>
          <h2>There is no Error...</h2>
        </div>
      )}
    </>
  );
};

export default ShortCircuit;
