import { useState } from "react";

const WorkSteps = ({ data }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`rounded-xl bg-white p-4 sm:p-6 w-full max-w-[140px] sm:max-w-[180px] flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 ease-out`}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
    >
      <div className="w-12 h-12 sm:w-16 sm:h-16 flex justify-center items-center">
        <img
          src={data?.image}
          alt={data?.title}
          className={`object-contain transition-transform duration-300 ${
            hover ? "scale-110" : "scale-100"
          }`}
        />
      </div>
      <p className="font-semibold text-center text-sm sm:text-base mt-3">
        {data?.title}
      </p>
    </div>
  );
};

export default WorkSteps;
