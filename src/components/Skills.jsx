import React from "react";

// Importing images from the assets folder
import python from "../assets/python.png";
import numpy from "../assets/numpy.png";
import pandas from "../assets/pandas.png";
import scikitLearn from "../assets/scikit-learn.png";
import tensorflow from "../assets/tensorflow.png";
import pytorch from "../assets/pytorch.png";
import jupyter from "../assets/jupyter.png";
import sql from "../assets/sql.png";
import aws from "../assets/aws.png";
import docker from "../assets/docker.png";
import git from "../assets/git.png";
import github from "../assets/github.png";

const Skills = () => {
  // Array of technology objects with image source and title
  const techs = [
    {
      id: 1,
      src: python,
      title: "Python",
    },
    {
      id: 2,
      src: numpy,
      title: "NumPy",
    },
    {
      id: 3,
      src: pandas,
      title: "Pandas",
    },
    {
      id: 4,
      src: scikitLearn,
      title: "Scikit-Learn",
    },
    {
      id: 5,
      src: tensorflow,
      title: "TensorFlow",
    },
    {
      id: 6,
      src: pytorch,
      title: "PyTorch",
    },
    {
      id: 7,
      src: jupyter,
      title: "Jupyter",
    },
    {
      id: 8,
      src: sql,
      title: "SQL",
    },
    {
      id: 9,
      src: aws,
      title: "AWS",
    },
    {
      id: 10,
      src: docker,
      title: "Docker",
    },
    {
      id: 11,
      src: git,
      title: "Git",
    },
    {
      id: 12,
      src: github,
      title: "GitHub",
    },
  ];

  return (
    <div name="Skills" className="w-full h-screen">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Skills
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-3 sm:grid-cols-4 gap-6 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title }) => (
            <div
              key={id}
              className="hover:scale-125 duration-500 py-2 rounded-lg"
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
