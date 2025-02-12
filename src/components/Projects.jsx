import gpt from "../assets/projects/gpt.jpg";
import tweeter from "../assets/projects/tweeter.png";
import prosthetic from "../assets/projects/prosthetic.jpg";
import tsp from "../assets/projects/tsp.jpg";
import ind from "../assets/projects/ind.png";
import sum from "../assets/projects/sum.jpg";
import asld from "../assets/projects/asld.png";


const Projects = () => {
  const projects = [
    {
      id: 1,
      src: gpt,
      title: "GPT (Generalized Pre-Trained Transformer)",
      link: "https://github.com/aminkhoram/gpt",
    },
    {
      id: 2,
      src: tweeter,
      title: "Tweets Sentiment Analysis",
      link: "https://github.com/aminkhoram/tweets_sentiment_analysis",
    },
    {
      id: 3,
      src: prosthetic,
      title: "EMG Signal Classification",
      link: "https://ourspace.uregina.ca/items/144d8a4e-ba9f-4951-adf8-933dd5bf6dac",
    },
    {
      id: 4,
      src: tsp,
      title: "TSP with a Deep Averaged Reinforced Learning",
      link: "https://github.com/aminkhoram/tsp",
    },
    {
      id: 5,
      src: ind,
      title: "CNN+LSTM for Industrial Fault Diagnosis",
      link: "https://link.springer.com/article/10.1007/s10489-020-01859-1",
    },
    {
      id: 6,
      src: sum,
      title: "NLP_Summarize Dialogue",
      link: "https://github.com/aminkhoram/nlp_summarize_dialogue",
    },
    {
      id: 7,
      src: asld,
      title: "American Sign Language Dataset Classification",
      link: "https://github.com/aminkhoram/ASLD",
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
            <div
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg overflow-hidden flex flex-col"
            >
              <a href={link} target="_blank" rel="noopener noreferrer" className="flex-1">
                <img
                  src={src}
                  alt={title}
                  className="w-full h-full object-cover"
                  title={title}
                />
              </a>
              <p className="text-center font-medium mt-2">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
