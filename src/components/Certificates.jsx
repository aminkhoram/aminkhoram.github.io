import certificate1 from "../assets/certificates/certificate1.png"; // Update with actual paths
// import certificate2 from "../assets/certificates/certificate2.png";
// import certificate3 from "../assets/certificates/certificate3.png";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      src: certificate1,
      title: "IBM Python Project for Data Science",
      link: "https://www.coursera.org/account/accomplishments/verify/QCKL4W8FUX4N",
    },
    // {
    //   id: 2,
    //   src: certificate2,
    //   title: "Certificate 2",
    //   link: "https://link-to-certificate2.com",
    // },
    // {
    //   id: 3,
    //   src: certificate3,
    //   title: "Certificate 3",
    //   link: "https://link-to-certificate3.com",
    // },
  ];

  return (
    <div name="certificates" className="w-full md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Certificates
          </p>
          <p className="py-6">Check out my certificates right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {certificates.map(({ id, src, title, link }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <a href={link} target="_blank" rel="noopener noreferrer">
                <img
                  src={src}
                  alt={title}
                  className="rounded-md duration-200 hover:scale-105 w-full h-auto"
                  title={title}
                />
              </a>
              <p className="text-center font-medium mt-2">{title}</p>
            </div>
          ))}
          {/* Placeholder for additional certificates */}
          <div className="shadow-md shadow-gray-600 rounded-lg flex items-center justify-center">
            <p className="text-center text-gray-500">More certificates coming soon!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;
