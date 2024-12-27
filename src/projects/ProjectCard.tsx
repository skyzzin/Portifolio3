import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp } from 'lucide-react';

// Definindo a interface para os dados do projeto
export interface Project {
  title: string;
  description: string;
  icon: string;
  colorContainer: string;
  colorButton: string;
  colorTextButton: string;
  iconSize:number;
  url:string
  imgs: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);
  const [isImagesVisible, setImagesVisible] = useState<boolean>(false); // Controle de visibilidade das imagens

  const goToNextImage = () => {
    setCurrentImgIndex((prevIndex) => {
      const nextIndex = prevIndex + 1 >= project.imgs.length ? 0 : prevIndex + 1;
      return nextIndex;
    });
  };

  const goToPreviousImage = () => {
    setCurrentImgIndex((prevIndex) => {
      const prevIndexAdjusted = prevIndex - 1 < 0 ? project.imgs.length - 1 : prevIndex - 1;
      return prevIndexAdjusted;
    });
  };

  return (
    <div className={`${project.colorContainer} p-6 rounded-lg w-[350px] min-h-40 shadow-lg`}>
      <div className="flex gap-4 justify-between">
       <a href={project.url} target='_blank' className='w-full flex justify-between gap-4 hover:opacity-50'>
       <img src={project.icon} style={{width:project.iconSize}} alt="Icon" />
        {project.title && (
          <h3 className="text-xl font-semibold w-full text-white border-b-2 border-white pb-2">
          {project.title}
        </h3>
        )}
       </a>
        <button
          onClick={() => setImagesVisible((prev) => !prev)}
          className={`${project.colorButton} ${project.colorTextButton} p-2 rounded-full shadow-md hover:bg-green-200`}
        >
          {isImagesVisible ? <ChevronUp /> : <ChevronDown />}
        </button>
      </div>
      <p className="text-white mt-2">{project.description}</p>

      {/* Se as imagens estiverem visíveis, exibe o slider */}
      {isImagesVisible && (
        <div className="relative mt-4">
          <div>
          <img
            src={project.imgs[currentImgIndex]}
            alt="Projeto"
            className="w-full min-h-[550px] object-cover rounded-lg"
          />
          </div>

          {/* Botões de navegação com ícones do lucide-react */}
          <button
            onClick={goToPreviousImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#141414]  p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={goToNextImage}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#141414] p-2 rounded-full shadow-md hover:bg-gray-200"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
