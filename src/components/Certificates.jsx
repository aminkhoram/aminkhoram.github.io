import certificate1 from "../assets/certificates/certificate1.png";
import certificate2 from "../assets/certificates/certificate2.png";
import certificate3 from "../assets/certificates/certificate3.png";
import certificate4 from "../assets/certificates/certificate4.png";
import certificate5 from "../assets/certificates/certificate5.png";
import certificate6 from "../assets/certificates/certificate6.png";
import certificate7 from "../assets/certificates/certificate7.png";
import certificate8 from "../assets/certificates/certificate8.png";
// import certificate9 from "../assets/certificates/certificate9.png";

const Certificates = () => {
  const certificates = [
    { id: 1, src: certificate1, title: "IBM Python Project for Data Science", link: "https://www.coursera.org/account/accomplishments/verify/QCKL4W8FUX4N" },
    { id: 2, src: certificate2, title: "IBM Python for DataScience", link: "https://www.coursera.org/account/accomplishments/verify/SKGVHZYFL578" },
    { id: 3, src: certificate3, title: "SQL Essential Training", link: "https://www.linkedin.com/learning/certificates/e296c0d952bfa1888c6b518cbbd95ad9ac6911fd073c4f01179f0674b979eec4" },
    { id: 4, src: certificate4, title: "Google Data Analytics", link: "https://www.coursera.org/account/accomplishments/verify/8QLK97WM7HV7" },
    { id: 5, src: certificate5, title: "SQL in SAS", link: "https://www.linkedin.com/learning/certificates/3f3c4651959f2cb7f942332d41397f0e80aafea4e60c72129fd36749d3d0a723" },
    { id: 6, src: certificate6, title: "NVIDIA Deep Learning", link: "https://learn.nvidia.com/certificates?id=f7448cd47647456ebb43c031b257e8b3" },
    { id: 7, src: certificate7, title: "Machine Learnig with Python", link: "https://drive.google.com/file/d/1ZQcsTGPDuH7wMpnNAeVq1-HjI4EnFus6/view" },
    { id: 8, src: certificate8, title: "Advanced Pandas", link: "https://www.linkedin.com/learning/certificates/172c99640803a6b4ed3dd25996a0d251ae78f8e570ab5ef5c41418e9eb8d6a07?trk=share_certificate" },
    // { id: 9, src: certificate9, title: "Certificate 9", link: "https://example.com/certificate9" },
  ];

  return (
    <div name="certificates" className="w-full min-h-screen mt-60">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Certificates
          </p>
          <p className="py-6">Check out my certificates right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 px-4">
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
        </div>
      </div>
    </div>
  );
};

export default Certificates;
