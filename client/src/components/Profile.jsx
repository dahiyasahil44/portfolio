import person from "../assets/sahil2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "./SocialMedia";

const Profile = () => {
  const handleDownloadCV = () => {
    const viewUrl = "https://drive.google.com/file/d/1U1LxQrcak35eyxsW759GBacRwR0NDJc1/view";
    const downloadUrl = "https://drive.google.com/uc?export=download&id=1U1LxQrcak35eyxsW759GBacRwR0NDJc1";

    window.open(viewUrl, "_blank"); // open in new tab
    const link = document.createElement("a");
    link.href = downloadUrl;
    link.download = "Sahil_Dahiya_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      className="relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4"
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-8">

        {/* 👇 Profile image (Responsive) */}
        <div className="flex flex-col items-center w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[460px] mx-auto">
          <div className="w-full overflow-hidden rounded-tl-[36px] rounded-br-[36px]">
            <img
              src={person}
              alt="Sahil"
              className="w-full h-auto object-cover bg-white rounded-tl-[36px] rounded-br-[36px] shadow-2xl transition-all duration-500 hover:scale-[1.02]"
            />
          </div>

          {/* Social media section */}
          <div className="relative -mt-6">
            <div className="flex justify-center">
              <div className="px-6 py-3 z-50 text-center bg-white rounded-md center shadow-xl drop-shadow-xl">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        {/* 👇 About section */}
        <div className="max-sm:w-full w-[33rem]">
          <h2 className="text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] font-semibold mb-8 text-center md:text-left">
            About me
          </h2>

          <div className="text-xs xs:text-[16px] lg:text-lg font-normal text-gray-600 text-center md:text-left">
            <p>
              I’m a dedicated Software Engineer with strong expertise in the MERN stack
              (MongoDB, Express.js, React.js, Node.js) and a solid background in PHP and MySQL.
            </p>
            <p className="mt-3">
              I have hands-on experience designing, developing, and managing scalable web
              applications and am committed to continuous learning and evolving as a versatile,
              high-impact software engineer.
            </p>
          </div>

          <div className="mt-8 flex justify-center md:justify-start flex-wrap gap-3">
            <a
              href="#projects"
              className="btn btn-primary px-6 py-3 text-sm sm:text-base font-semibold"
            >
              My Projects
            </a>

            <button
              onClick={handleDownloadCV}
              className="btn btn-primary px-6 py-3 text-sm sm:text-base font-semibold flex items-center gap-2"
            >
              <FontAwesomeIcon icon={faDownload} />
              Download CV
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Profile;
