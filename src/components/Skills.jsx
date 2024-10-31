import React from 'react';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt, FaJs } from 'react-icons/fa';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const skillsData = [
  { id: 'html', name: "HTML5", icon: <FaHtml5 color="#e34c26" />, stars: 5, description: "HTML5 HyperText Markup Languageтин эң акыркы версиясы." },
  { id: 'css', name: "CSS3", icon: <FaCss3Alt color="#264de4" />, stars: 5, description: "CSS3 веб-баракчаларды стилдештирүү жана жайгаштыруу үчүн колдонулат." },
  { id: 'js', name: "JavaScript", icon: <FaReact color="#610K87"/>, stars: 5, description: "Колдонуучу интерфейстерин куруу үчүн JavaScript китепканасы."},
  { id: 'react', name: "React", icon: <FaReact color="#61dbfb" />, stars: 4.5, description: "React – бул колдонуучу интерфейстерин куруу үчүн JavaScript китепканасы." },
  { id: 'node', name: "Node.js", icon: <FaNodeJs color="#3c873a" />, stars: 4, description: "Node.js JavaScript'ти сервер тарабында иштетүүгө мүмкүндүк берет." },
  { id: 'git', name: "Git", icon: <FaGitAlt color="#f1502f" />, stars: 4.5, description: "Git - бул баштапкы коддогу өзгөрүүлөргө көз салуу үчүн версияны башкаруу системасы." },
];

const Skills = () => {
  return (
    <div className="bg-indigo-900 text-gray-800 m-5 md:m-20 py-10 px-6">
      <h2 className="text-4xl font-bold text-center text-white mb-10">My Skills</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillsData.map((skill) => (
          <Link to={`/skills/${skill.id}`} key={skill.id} className="block">
            <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transform transition hover:scale-105 text-center">
              <div className="text-6xl mb-4">{skill.icon}</div>
              <h3 className="text-2xl font-semibold text-indigo-700">{skill.name}</h3>
              <div className="flex justify-center space-x-1 text-yellow-500 mt-2">
                {Array.from({ length: Math.floor(skill.stars) }, (_, i) => <BsStarFill key={i} />)}
                {skill.stars % 1 !== 0 && <BsStarHalf />}
                {Array.from({ length: 5 - Math.ceil(skill.stars) }, (_, i) => <BsStar key={i} />)}
              </div>
              <p className="mt-4 text-gray-700">{skill.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Skills;
