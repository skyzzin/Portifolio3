import { useState, useEffect, useRef } from 'react';
import Projects from './projects/Projects';
import { Github, Linkedin } from 'lucide-react';

export default function App() {
  const [text, setText] = useState('');
  const fullText = 'Skyzzin Developer';
  const indexRef = useRef(0);

  useEffect(() => {
    const idLoop = setInterval(() => {
      const currentIndex = indexRef.current;
      if (currentIndex < fullText.length) {
        setText((prev) => prev + fullText[currentIndex]);
        indexRef.current += 1;
      } else {
        clearInterval(idLoop);
      }
    }, 50);

    return () => clearInterval(idLoop);
  }, []);

  return (
    <div className="p-4 flex items-center w-full flex-col">
      <h1 className="text-2xl font-bold text-white text-[30pt] mx-auto sm:text-[24pt] md:text-[30pt] lg:text-[36pt]">
        {text}
      </h1>
  
      {/* Cards Tecnologys */}
      <div className="flex gap-4 mt-6 flex-wrap justify-center sm:gap-2">
        <div className='min-w-[60px] p-4 h-[60px] animate-upDown-1 rounded-[25px] bg-purple-400 flex items-center text-[20px] justify-center text-white'>
          C#
        </div>
        <div className='min-w-[60px] p-4 h-[60px] animate-upDown-2 rounded-[25px] bg-red-400 flex items-center text-[20px] justify-center text-white'>
          Java
        </div>
        <div className='min-w-[60px] p-4 h-[60px] animate-upDown-1 rounded-[25px] bg-blue-400 flex items-center text-[20px] justify-center text-white'>
          C
        </div>
        <div className='min-w-[60px] p-4 h-[60px] animate-upDown-2 rounded-[25px] bg-blue-600 flex items-center text-[20px] justify-center text-white'>
          C++
        </div>
        <div className='min-w-[60px] p-4 h-[60px] animate-upDown-2 rounded-[25px] bg-yellow-300 flex items-center text-[20px] justify-center text-white'>
          JS
        </div>
      </div>
      
      <br />

      {/* Cards Services */}
      <div className="flex gap-6 mt-8 flex-wrap justify-center sm:gap-4">
        {/* Card API */}
        <div className="bg-[#4CAF50] p-6 rounded-lg w-[300px] shadow-lg mirror-effect sm:w-[250px]">
          <h3 className="text-xl font-semibold text-white border-b-2 border-white pb-2">APIs</h3>
          <p className="text-white mt-2">
            Desenvolvimento e integração de APIs robustas e escaláveis para diversos sistemas e plataformas.
          </p>
        </div>

        {/* Card Mobile Apps */}
        <div className="bg-[#2196F3] p-6 rounded-lg w-[300px] shadow-lg mirror-effect sm:w-[250px]">
          <h3 className="text-xl font-semibold text-white border-b-2 border-white pb-2">Mobile Apps</h3>
          <p className="text-white mt-2">
            Criação de aplicativos móveis para Android e iOS com interfaces intuitivas e alta performance.
          </p>
        </div>

        {/* Card Sistemas Web */}
        <div className="bg-[#FF9800] p-6 rounded-lg w-[300px] shadow-lg mirror-effect sm:w-[250px]">
          <h3 className="text-xl font-semibold text-white border-b-2 border-white pb-2">Sistemas Web</h3>
          <p className="text-white mt-2">
            Soluções completas em sistemas web, desde o design até a implementação de funcionalidades personalizadas.
          </p>
        </div>
      </div>

      <br /><br />
      <Projects />
      <br /><br />

      <div className="flex gap-4">
      <a href="https://github.com/skyzzin" target='_blank' className='hover:opacity-50'>
      <Github size={60} />
      </a>

      <a href="https://www.linkedin.com/in/devdough/" target='_blank' className='hover:opacity-50'>
      <Linkedin size={60} />
      </a>
      </div>
     
    </div>
  );
}
