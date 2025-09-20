import Projects from "./Projects";
import card1 from "../assets/memehub.png";
import card2 from "../assets/greenthumb.png";
import card3 from "../assets/task-master.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "Social Media",
    title: "MemeHub - Meme Sharing & Creation platform",
    description:
      "Tech Stack: React.js | Firebase | TUI Image Editor | Predis.ai | HTML/CSS | JavaScript",
    link: "https://memehub-nu.vercel.app/",
  },
  {
    id: 2,
    image: card2,
    category: "Full Stack",
    title: "GreenThumb - Personal gardening assistant",
    description:
      "Tech Stack: React.js | Firebase | TUI Image Editor | Predis.ai | HTML/CSS | JavaScript",
    link: "https://gardening-app-tawny.vercel.app/",
  },
  {
    id: 3,
    image: card3,
    category: "Kanban-style Task Management",
    title: "Task master - Task Management Application",
    description:
      "Tech Stack: MERN (MongoDB, Express.js, React.js, Node.js) | HTML/CSS | JavaScript",
    link: "https://task-master-front-two.vercel.app/",
  }
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="projects"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            A showcase of my best work in full-stack development, demonstrating scalable solutions and modern web technologies
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
      <div className="text-center" style={{display: 'none'}}>
        <a
          href="#!"
          className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
        >
          More Project
        </a>
      </div>
    </div>
  );
};

export default Portfolio;
