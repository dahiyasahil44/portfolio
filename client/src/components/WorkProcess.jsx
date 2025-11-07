import WorkSteps from "./WorkSteps";

const workStepData = [
  { id: 1, title: "React", image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" },
  { id: 2, title: "JavaScript", image: "https://static.vecteezy.com/system/resources/thumbnails/027/127/463/small_2x/javascript-logo-javascript-icon-transparent-free-png.png" },
  { id: 3, title: "MongoDB", image: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-2.svg" },
  { id: 4, title: "Node JS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg" },
  { id: 5, title: "HTML", image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" },
  { id: 6, title: "CSS", image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" },
  { id: 7, title: "Git", image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Git_icon.svg" },
  { id: 8, title: "Express JS", image: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png" },
];

const WorkProcess = () => {
  return (
    <div
      className="content grid xl:grid-cols-2 xl:items-center px-4 py-10 lg:py-20"
      id="skills"
    >
      {/* Left Section */}
      <div className="lg:pe-10 xl:pe-20 mb-8 xl:mb-0">
        <p className="section-title text-center xl:text-left">Technical Skills</p>

        <p className="mt-6 md:text-lg text-sm font-normal text-gray-500 text-center xl:text-left">
          Strong foundation in programming, databases, and modern development tools, 
          with hands-on experience across front-end and back-end technologies.
        </p>
      </div>

      {/* Right Section */}
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6 justify-items-center">
        {workStepData.map((data) => (
          <WorkSteps key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default WorkProcess;
