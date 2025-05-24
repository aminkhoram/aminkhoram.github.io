import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import amn from "../assets/projects/amn4.jpeg";


const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-5xl font-bold">
            I'm a Data Scientist
          </h2>
          <p className=" py-4 max-w-md">
            I have 5 years of experience building and designing machine learning models.
            Currently, I am working on NLP and LLMs and am trying to build my expertise in this field.
            You can observe my projects and certifications below.
          </p>
          <div>
            <Link
                to="about" // Matches the target section name
                smooth={true} // Enables smooth scrolling
                duration={500} // Duration of the animation
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
          </div>
        </div>
        <div>
          <img
            src= {amn}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-2/3"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
