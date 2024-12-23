import React, { useState } from "react";

const Main = ({ setStatus }) => {
  const [noSize, setNo] = useState(20);
  const [yesSize, setYes] = useState(20);

  const bStyle = "bg-red-300 font-bold px-4 py-2 rounded-md text-[40px]";

  const master =
    "relative flex flex-col items-center justify-center w-[100vw] h-[100vh] overflow-hidden bg-[rgb(0_8_28)]";

  const noB = { fontSize: `${noSize}px` };
  const yesB = { fontSize: `${yesSize}px` };
  return (
    <div className={master}>
      <p className="absolute text-5xl font-extrabold text-gray-600 mb-8 translate-y-[-100px] bg-[rgb(0_8_28)] px-6 py-4 rounded-md ">
        Are you Gay ?
      </p>

      <div className="flex justify-evenly items-center gap-2">
        <button className={bStyle} style={yesB} onClick={() => setStatus(true)}>
          Yes
        </button>
        <button
          onClick={() => {
            setNo(noSize - 2);
            setYes(yesSize + 100);
          }}
          className={bStyle}
          style={noB}
        >
          No
        </button>
      </div>
    </div>
  );
};

export default Main;
