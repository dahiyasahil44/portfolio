import { useState } from "react";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`rounded-xl hover:drop-shadow-2xl shadow-gray-300 ease-out duration-1000  ${
        style && style
      }`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div
        className={`w-11 h-11 sm:w-18 sm:h-18 text-center center rounded-md`}
      >
        <img src={data?.image} alt={data?.title} />
      </div>
      <div className="mt-3 xs:mt-4 sm:mt-8">
        <p className="font-semibold text-center sm:text-sm">{`${data?.title}`}</p>
       
      </div>
    </div>
  );
};

export default WorkSteps;
