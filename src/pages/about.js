import React from 'react';
import { getDriveUrlById } from '../utils';

export default function About() {
  // Lien direct vers ton fichier PDF (il faut un lien direct, pas la page Google Drive)
  const resumeDownloadLink = 'https://drive.google.com/file/d/1zhZAyH1DADmtjs68H5sb7iHodyCt0483/view?usp=drive_link';

  return (
    <div className=" mx-auto max-w-6xl p-5 py-8 md:py-20" id="about">
      <div className="mb-8 md:mb-16 pb-4 text-6xl font-medium text-gray-300 md:text-left md:text-7xl">
        About Me
      </div>

      <div className="items-center space-y-8 md:flex md:space-y-0">
        <div className="h-full basis-1/3 md:order-last">
          <img
            src={getDriveUrlById('1zMOinHcdi5Jx1C6yAkU8P9ZGZz3gXFXp')}
            className="mx-auto h-52 w-52 rounded-full"
            alt=""
          />
        </div>
        <div className="basis-2/3 space-y-4">
          <span className="text-xl text-gray-500"> Salut, je suis </span>
          <div className="text-4xl font-bold text-cyan-500">Aissame El Khmaiti</div>
          <div className="text-justify font-light text-gray-400">
            Je suis une personne très enthousiaste et compétitive qui aime être entourée de personnes qui repoussent mes limites, et à mon tour, je m’efforce de les pousser aussi. J’ai une passion pour l’acquisition de nouvelles compétences et le partage de mes connaissances. Relever des défis complexes est une passion personnelle. Je préfère ne pas m’en tenir à une seule technique trop longtemps et cherche activement des approches alternatives pour les tâches. Je crois fermement qu’être un touche-à-tout sans être expert dans un seul domaine est souvent préférable à être maître d’un seul.
          </div>
        </div>
      </div>
      <div className="justify-between md:flex">
        <div className="flex items-center justify-center space-x-4 py-10">
          {social.map((link, index) => {
            return (
              <a
                key={`about${index}`}
                href={link.link}
                target={'_blank'}
                rel="noreferrer"
                className="relative rounded-full"
              >
                <img src={link.icon} className="h-10 w-10" alt="" />
              </a>
            );
          })}
        </div>

        {/* Lien de téléchargement direct du CV */}
        <a
          className="relative m-auto flex w-max cursor-pointer items-center space-x-4 rounded-lg border bg-slate-200 p-2 px-10"
          href={resumeDownloadLink}
          download="CV_Aissame_El_Khmaiti.pdf"
          rel="noreferrer"
        >
          <div>Resume</div>
          <img
            className="h-6 w-6"
            src="https://img.icons8.com/material-outlined/48/000000/link--v1.png"
            alt=""
          />
        </a>
      </div>
    </div>
  );
}

const social = [
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg',
    link: 'https://www.linkedin.com/in/aissame-elkhmaiti/',
  },
  {
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg',
    link: 'https://github.com/aissameelkhmaiti',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/1384/1384063.png',
    link: 'https://www.instagram.com/aissame_elkhmaiti/',
  },
  {
    icon: 'https://cdn-icons-png.flaticon.com/512/732/732200.png',
    link: 'mailto: aissameelkhmaiti@gmail.com',
  },
];
