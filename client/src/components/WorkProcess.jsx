import WorkSteps from "./WorkSteps";

const workStepData = [
  {
    id: 1,
    title: "REACT",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
  },
  {
    id: 2,
    title: "JavaScript",
    image:"https://static.vecteezy.com/system/resources/thumbnails/027/127/463/small_2x/javascript-logo-javascript-icon-transparent-free-png.png",
  },
  {
    id: 3,
    title: "MongoDB",
    image:"https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg",
  },
  {
    id: 4,
    title: "Node JS",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png",
  },
  {
    id: 5,
    title: "HTML",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1024px-HTML5_logo_and_wordmark.svg.png",
  },
  {
    id: 6,
    title: "CSS",
    image:"https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    id: 7,
    title: "Git",
    image:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/1200px-Git_icon.svg.png",
  },
  {
    id: 8,
    title: "Express JS",
    image:"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
  },
  
];

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-2 py-5 md:py-10 lg:py-25 xl:py-35 max-xxl:px-4"
      id="skills"
    >
      <div className="lg:pe-10 xl:pe-35.75 max-xs:mb-3 max-xl:mb-8">
        <p className="section-title max-xl:text-center">Technical Skills</p>
        
        <p className="mt-6 md:text-[18px] text-sm font-normal max-xl:text-center text-gray-500">
          Strong foundation in programming, databases, and modern development tools, with hands-on experience across front-end and back-end technologies.
        </p>
      </div>

      <div className="grid xs:grid-cols-4 justify-end my-2 w-fit mx-auto ">
        {workStepData.map((data, index) => {
          return (
            <WorkSteps
              data={data}
              style={`max-xs:mt-3 p-4 sm:p-8 bg-white aspect-auto sm:max-w-78 ${
                index % 2 == 1 ? "xs:ms-3 xs:mt-6 " : "xs:mb-6"
              }`}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkProcess;
