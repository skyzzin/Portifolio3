import ProjectCard, { Project } from './ProjectCard';

export default function Projects() {
  const projects: Project[] = [
    {
      colorButton: "bg-green-600",
      colorContainer: "bg-green-900",
      colorTextButton: "text-white",
      description: "Aplicativo de Palpites de Apostas Esportivas",
      icon: "./assets/projects/betgo/icon.svg",
      imgs: [
        './assets/projects/betgo/home.png',
        './assets/projects/betgo/casas.png',
        './assets/projects/betgo/chat.png',
        './assets/projects/betgo/menu.png',
        './assets/projects/betgo/notifications.png',
        './assets/projects/betgo/plains.png',
        './assets/projects/betgo/results.png',
        './assets/projects/betgo/signin.png',
        './assets/projects/betgo/signup.png',
        './assets/projects/betgo/terms.png',
      ],
      iconSize:30,
      title: "BetGoAi",
      url:"https://www.app.betgo.ai/home"
    },
    {
      colorButton: "bg-orange-600",
      colorContainer: "bg-orange-900",
      colorTextButton: "text-white",
      description: "E-Comerce Papelaria",
      icon: "./assets/projects/trajeton/icon.png",
      url:'#',
      imgs: [
          './assets/projects/trajeton/splashScreen.jpg',
          './assets/projects/trajeton/splash descubra.jpg',
          './assets/projects/trajeton/cadastro.png',
          './assets/projects/trajeton/Conta criada sucesso.png',
        './assets/projects/trajeton/home.png',
        './assets/projects/trajeton/Editar perfil.png',
        './assets/projects/trajeton/Editar senha.png',
      ],
      
      title: "",
      iconSize:120
    },
    {
        colorButton: "bg-blue-600",
        colorContainer: "bg-blue-900",
        colorTextButton: "text-white",
        description: "Aplicativo De Menssagem",
        icon: "",
        url:'#',
        imgs: [
            './assets/projects/taptap/signin.png',
            './assets/projects/taptap/signup.png',
            './assets/projects/taptap/home.png',
            './assets/projects/taptap/groups.png',
          './assets/projects/taptap/mural.png',
          './assets/projects/taptap/notifications.png',
        ],
        
        title: "Tap Tap Chat",
        iconSize:0
      },
      {
        colorButton: "bg-green-600",
        colorContainer: "bg-green-500",
        colorTextButton: "text-white",
        description: "Sistema De Gerenciamento De Reciclagem Por Criptomoedas",
        icon: './assets/projects/attosgreen/logo.svg',
        url:'https://attosgreen.com.br',
        imgs: [
            "./assets/projects/attosgreen/website.svg",
            "./assets/projects/attosgreen/Dashboard-COLETOR.svg",
            "./assets/projects/attosgreen/alterar senha.svg",
            "./assets/projects/attosgreen/Frame 19.svg",
            "./assets/projects/attosgreen/Frame 21.svg",
            "./assets/projects/attosgreen/Frame 22.svg",
         
        ],
        
        title: "Attosgreen",
        iconSize:30
      }

   
  ];

  return (
    <div className='flex gap-4 flex-col'>
        <h1 className='text-[40px] font-bold'>Projetos</h1>
      {/* Criando uma instância do ProjectCard para cada projeto */}
        <div className="flex gap-4 flex-wrap">
        {projects.map((e,i)=>(
            <div key={i}>
                <ProjectCard project={e} />
            </div>
        ))}
        </div>
    
    </div>
  );
}
