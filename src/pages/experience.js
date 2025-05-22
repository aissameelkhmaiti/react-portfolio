import React from 'react';


export default function Experience() {
  return (
    <div className="mx-auto max-w-6xl p-5 py-8 md:py-20" id="experience">
      <div className="mb-8 md:mb-16 pb-4 text-6xl font-medium text-gray-300 md:text-left md:text-7xl">
        Expérience
      </div>
      {experiences.map((exp) => {
        return (
          <div className="mb-10" key={`experience-${exp.company}`}>
            <div className="mb-2 flex flex-row items-center border-b-[1px] border-b-gray-200 pb-2">
              <div className="mr-4 flex h-[32px] w-[32px] items-center justify-center">
                <img
                  className="max-h-full max-w-full transform cursor-pointer rounded-md transition ease-in hover:scale-105"
                  src={
                    exp.img ||
                    'https://icons.veryicon.com/png/o/miscellaneous/zr_icon/company-23.png'
                  }
                  alt={exp.company}
                  onClick={() => window.open(exp.companyUrl || window.location, '_blank')}
                />
              </div>

              <div className="flex-1 cursor-pointer">
                <div className="text-lg font-bold md:text-lg">{exp.company}</div>
                <div className="flex flex-col justify-between md:flex-row">
                  <div className="text-md md:text-md font-semibold text-gray-600">
                    {exp.position}
                  </div>
                  <div className="font-semibold text-sm">{exp.date}</div>
                </div>
              </div>
            </div>

            <div className="pl-4 tracking-wide text-sm text-gray-500">
              <ul className="list-disc">
                {exp.details.map((detail, index) => (
                  <li key={`exp-details-${index}-${exp.company}`}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

const experiences = [
  {
    position: 'Développeur Full Stack MERN JS',
    company: 'Ark x Talent Factory',
    date: 'Janvier 2024 - Juin 2024',
    companyUrl: '',

    details: [
      "Conception et développement d'une application de blog avec Node.js, Express, MongoDB, React et Tailwind CSS.",
      "Responsable de l'architecture logicielle, des API RESTful, et de l'interface utilisateur réactive pour une expérience utilisateur optimale.",
      "Implémentation complète d'un site e-commerce en utilisant Node.js, Express, MongoDB, React et Tailwind CSS.",
      "Gestion des problèmes Git et résolution efficace des issues rencontrées tout au long du processus de développement.",
      "Application Web Meteo avec HTML, CSS , JavaScript , REST API.",
    ],
  },
  {
    position: 'Développeur web',
    company: 'OCP Jorf Lasfar',
    date: 'Avril 2023 - Juin 2023',
    companyUrl: 'https://www.ocpgroup.ma/',

    details: [
      "Création d'une application web de gestion des incidents.",
      "Technologies utilisées : HTML, CSS, JavaScript, Ajax, PHP, SQL, Bootstrap.",
    ],
  },
  {
    position: 'Projets Académiques',
    company: 'FST Settat',
    date: 'Septembre 2023 - Juin 2024',
    companyUrl: 'https://www.fsts.ac.ma/',
  
    details: [
      "Création d'un site web E-commerce avec HTML, CSS, Bootstrap, PHP, MySQL.",
      "Développement d'une application calculatrice interactive avec JavaFX et FXML.",
    ],
  },
  {
    position: 'Créateur de contenu digital',
    company: 'Auto-entrepreneur',
    date: '2023 - Présent',
    companyUrl: 'https://www.instagram.com/',
   
    details: [
      "Création de visuels pour des publications Facebook et Instagram à l'aide de Canva.",
      "Montage vidéo avec Filmora.",
    ],
  },
];
