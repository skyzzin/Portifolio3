import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronDown, ChevronUp, X } from 'lucide-react';

export interface Project {
  title: string;
  description: string;
  icon: string;
  colorContainer: string;
  colorButton: string;
  colorTextButton: string;
  iconSize: number;
  url: string;
  imgs: string[];
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);
  const [isImagesVisible, setImagesVisible] = useState<boolean>(false);
  const [isFullscreen, setFullscreen] = useState<boolean>(false);

  const goToNextImage = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex + 1) % project.imgs.length);
  };

  const goToPreviousImage = () => {
    setCurrentImgIndex((prevIndex) => (prevIndex - 1 + project.imgs.length) % project.imgs.length);
  };

  return (
    <div className={`${project.colorContainer} p-6 rounded-lg w-[350px] min-h-40 shadow-lg`}>
      <div className="flex gap-4 justify-between">
        <a href={project.url} target="_blank" className="w-full flex justify-between gap-4 hover:opacity-50">
          <img src={project.icon} style={{ width: project.iconSize }} alt="Icon" />
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

      {isImagesVisible && (
        <div className="relative mt-4">
          <img
            src={project.imgs[currentImgIndex]}
            alt="Projeto"
            className="w-full min-h-[550px] object-cover rounded-lg cursor-pointer"
            onClick={() => setFullscreen(true)}
          />

          <button
            onClick={goToPreviousImage}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[#141414] p-2 rounded-full shadow-md hover:bg-gray-200"
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

      {isFullscreen && (
        <div
          className="fixed inset-0 bg-[#14141480] flex justify-center items-center z-50 overflow-y-auto"
          onClick={() => setFullscreen(false)}
        >
          <div className="relative max-w-[90%] max-h-[90%]" onClick={(e) => e.stopPropagation()}>
            <img
              src={project.imgs[currentImgIndex]}
              alt="Projeto Expandido"
              className="w-full h-full object-contain"
            />
            <button
              onClick={() => setFullscreen(false)}
              className="absolute top-2 right-2 bg-black p-2 rounded-full text-white hover:bg-gray-700"
            >
              <X />
            </button>
            <button
              onClick={goToPreviousImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black p-2 rounded-full text-white hover:bg-gray-700"
            >
              <ChevronLeft />
            </button>
            <button
              onClick={goToNextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black p-2 rounded-full text-white hover:bg-gray-700"
            >
              <ChevronRight />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
