import gpt from "../assets/portfolio/gpt.jpg";
import installNode from "../assets/portfolio/installNode.jpg";
import navbar from "../assets/portfolio/navbar.jpg";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import reactWeather from "../assets/portfolio/reactWeather.jpg";
import toDoList from "../assets/portfolio/toDoList.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: gpt,
      title: "GPT Project",
      link: "https://github.com/aminkhoram/gpt",
    },
    {
      id: 2,
      src: toDoList,
      title: "To-Do List",
      link: "https://github.com/yourusername/todo-list-repo",
    },
    {
      id: 3,
      src: navbar,
      title: "Navbar",
      link: "https://github.com/yourusername/navbar-repo",
    },
    {
      id: 4,
      src: reactSmooth,
      title: "React Smooth Scroll",
      link: "https://github.com/yourusername/react-smooth-scroll-repo",
    },
    {
      id: 5,
      src: installNode,
      title: "Install Node.js",
      link: "https://github.com/yourusername/install-node-repo",
    },
    {
      id: 6,
      src: reactWeather,
      title: "React Weather App",
      link: "https://github.com/yourusername/react-weather-app-repo",
    },
  ];

  return (
    <div name="projects" className="w-full md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, title, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt={title}
                  className="rounded-md duration-200 hover:scale-105 w-full h-auto"
                  title={title}
                />
              </a>
              <p className="text-center font-medium mt-2">{title}</p> {/* Add this line */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;