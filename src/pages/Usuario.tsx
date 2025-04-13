import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { Search, User, Settings, Bell, Home, MessageSquare, Users, FileText, Building, Github, Linkedin, Link2, Code, Globe, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

// Componente da barra lateral (Sidebar)
const Sidebar = () => {
  return (
    <div className="bg-gradient-to-b from-[#D3E4FD] to-[#E5DEFF] min-h-screen w-64 flex-shrink-0 flex flex-col py-4 hidden md:flex">
      <div className="px-4 py-2 flex flex-col items-center">
        <Avatar className="h-16 w-16 border-2 border-white bg-white">
          <img src="/lovable-uploads/63498272-71ed-42ba-8c2f-2666d4afa1fd.png" alt="Profile" className="rounded-full" />
        </Avatar>
        <span className="mt-2 text-gray-700 text-sm">nome</span>
      </div>
      
      <nav className="mt-6 flex-grow px-4">
        <ul className="space-y-3">
          <li className="flex items-center space-x-3 text-gray-700">
            <Building size={16} className="text-gray-700" />
            <span className="text-sm">Função</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700">
            <Github size={16} className="text-gray-700" />
            <span className="text-sm">Github</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700">
            <Linkedin size={16} className="text-gray-700" />
            <span className="text-sm">Linkedin</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700">
            <Link2 size={16} className="text-gray-700" />
            <span className="text-sm">Link</span>
          </li>
          
          <li className="my-4 flex justify-center">
            <Button className="bg-blue-400 hover:bg-blue-500 rounded-full text-white text-xs py-1 px-5">
              Editar Perfil
            </Button>
          </li>
          
          <li className="flex items-center space-x-3 text-gray-700">
            <Home size={16} className="text-gray-700" />
            <span className="text-sm">Página Inicial</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700">
            <Bell size={16} className="text-gray-700" />
            <span className="text-sm">Notificações</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700">
            <MessageSquare size={16} className="text-gray-700" />
            <span className="text-sm">Mensagens</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700">
            <img src="/lovable-uploads/44f613b9-3eea-42dd-a2c1-3cf64b70fa25.png" alt="Hackathon" className="h-4 w-4" />
            <span className="text-sm">Hackathons</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700">
            <FileText size={16} className="text-gray-700" />
            <span className="text-sm">Projetos</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700">
            <Users size={16} className="text-gray-700" />
            <span className="text-sm">Equipes</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700">
            <User size={16} className="text-gray-700" />
            <span className="text-sm">Perfil</span>
          </li>
          <li className="flex items-center space-x-3 text-gray-700">
            <Settings size={16} className="text-gray-700" />
            <span className="text-sm">Configurações</span>
          </li>
          
          <li className="pt-3">
            <Separator className="bg-gray-300" />
          </li>
          
          <li className="pt-3">
            <div className="flex justify-around">
              <div className="h-10 w-10 rounded-full bg-[#F4D35E] border border-gray-400 flex items-center justify-center text-white overflow-hidden">
                <img src="https://via.placeholder.com/40" alt="Skill 1" className="h-full w-full object-cover" />
              </div>
              <div className="h-10 w-10 rounded-full bg-[#50B2C0] border border-gray-400 flex items-center justify-center text-white overflow-hidden">
                <img src="https://via.placeholder.com/40" alt="Skill 2" className="h-full w-full object-cover" />
              </div>
              <div className="h-10 w-10 rounded-full bg-[#EE6C4D] border border-gray-400 flex items-center justify-center text-white overflow-hidden">
                <img src="https://via.placeholder.com/40" alt="Skill 3" className="h-full w-full object-cover" />
              </div>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

// Componente da barra de navegação (Navbar)
const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 py-2 px-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <a href="/" className="text-gray-500 hover:text-blue-800">Home</a>
          <a href="/contato" className="text-gray-500 hover:text-blue-800">Contato</a>
          <a href="/sobre" className="text-gray-500 hover:text-blue-800">Sobre</a>
        </div>
        
        <div className="flex items-center space-x-3">
          <button className="text-gray-500 hover:text-blue-800">
            <span className="mr-1">+</span>
            <span>3</span>
          </button>
          <button className="text-gray-500 hover:text-blue-800">
            <Bell size={18} />
          </button>
          <div className="h-6 w-6 rounded-full bg-gray-200 flex items-center justify-center">
            <User size={14} />
          </div>
        </div>
      </div>
    </header>
  );
};

// Componente do rodapé (Footer)
const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600 mb-6">
          Conectando pessoas do mesmo cosmo
        </div>
        
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold mb-3 uppercase text-sm text-gray-700">Sobre nós</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-800">Quem somos</a></li>
              <li><a href="#" className="hover:text-blue-800">Como funciona</a></li>
              <li><a href="#" className="hover:text-blue-800">Trabalhe conosco</a></li>
              <li><a href="#" className="hover:text-blue-800">FAQ</a></li>
            </ul>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold mb-3 uppercase text-sm text-gray-700">Links úteis</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-800">Documentação</a></li>
              <li><a href="#" className="hover:text-blue-800">Política de privacidade</a></li>
              <li><a href="#" className="hover:text-blue-800">Termos de uso</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3 uppercase text-sm text-gray-700">Informações</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-800">Juncal 475</a></li>
              <li><a href="#" className="hover:text-blue-800">+11 11 42 742 01 08</a></li>
              <li><a href="#" className="hover:text-blue-800">Digital • AI Strategy 3D</a></li>
              <li><a href="#" className="hover:text-blue-800">HELLO Digital</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-6">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-600 hover:text-blue-800">
              <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">f</div>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-800">
              <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">t</div>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-800">
              <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">ig</div>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-800">
              <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">in</div>
            </a>
          </div>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
            Mensagem
          </button>
        </div>
      </div>
    </footer>
  );
};

// Componente de Linguagens
const Linguagens = () => {
  return (
    <Card className="w-full bg-white rounded-lg border border-gray-200 mb-4">
      <CardContent className="p-6">
        <h2 className="text-lg font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">Linguagens</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-blue-500 flex items-center justify-center text-white">
              <Code size={20} />
            </div>
            <div>
              <p className="font-medium">JavaScript</p>
              <p className="text-xs text-gray-500">Avançado</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-green-500 flex items-center justify-center text-white">
              <Code size={20} />
            </div>
            <div>
              <p className="font-medium">Python</p>
              <p className="text-xs text-gray-500">Intermediário</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-yellow-500 flex items-center justify-center text-white">
              <Code size={20} />
            </div>
            <div>
              <p className="font-medium">HTML/CSS</p>
              <p className="text-xs text-gray-500">Avançado</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center text-white">
              <Globe size={20} />
            </div>
            <div>
              <p className="font-medium">Inglês</p>
              <p className="text-xs text-gray-500">Fluente</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="h-10 w-10 rounded-full bg-purple-500 flex items-center justify-center text-white">
              <Globe size={20} />
            </div>
            <div>
              <p className="font-medium">Espanhol</p>
              <p className="text-xs text-gray-500">Intermediário</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Componente de Mensagens estilo LinkedIn
const Mensagens = () => {
  const mensagens = [
    {
      id: 1,
      nome: "Ana Silva",
      avatar: "https://via.placeholder.com/40",
      mensagem: "Olá! Vi seu projeto de UI/UX e adorei o trabalho. Podemos conversar?",
      tempo: "1h atrás",
      lida: false
    },
    {
      id: 2,
      nome: "Carlos Oliveira",
      avatar: "https://via.placeholder.com/40",
      mensagem: "Estou montando uma equipe para o próximo hackathon. Tem interesse?",
      tempo: "3h atrás",
      lida: true
    },
    {
      id: 3,
      nome: "Maria Santos",
      avatar: "https://via.placeholder.com/40",
      mensagem: "Os arquivos do projeto foram enviados. Poderia dar uma olhada quando tiver um tempo?",
      tempo: "1d atrás",
      lida: true
    }
  ];

  return (
    <Card className="w-full bg-white rounded-lg border border-gray-200 mb-4">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">Mensagens</h2>
          <div className="flex space-x-2">
            <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-700">
              Ver todas
            </Button>
            <Button variant="ghost" size="sm" className="text-gray-500">
              <MoreHorizontal size={18} />
            </Button>
          </div>
        </div>
        
        <div className="space-y-4">
          {mensagens.map((msg) => (
            <div key={msg.id} className={`flex items-start space-x-3 p-3 rounded-lg ${msg.lida ? 'bg-white' : 'bg-blue-50'}`}>
              <Avatar className="h-10 w-10">
                <img src={msg.avatar} alt={msg.nome} />
              </Avatar>
              <div className="flex-1">
                <div className="flex justify-between">
                  <h4 className={`font-medium ${msg.lida ? 'text-gray-700' : 'text-gray-900'}`}>{msg.nome}</h4>
                  <span className="text-xs text-gray-500">{msg.tempo}</span>
                </div>
                <p className={`text-sm ${msg.lida ? 'text-gray-500' : 'text-gray-800'}`}>{msg.mensagem}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-4 flex justify-center">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full text-sm w-full">
            <MessageSquare size={16} className="mr-2" /> Nova mensagem
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

// Componente principal de Projetos
const Projetos = () => {
  const isMobile = useIsMobile();
  
  const categorias = ["Todos", "Design", "Desenvolvimento", "Marketing", "Gestão"];
  
  // Array de projetos com estrutura consistente para manter a proporção
  const projetos = [
    {
      id: 1,
      titulo: "Projeto 1",
      imagem: "https://via.placeholder.com/300x200",
      categoria: "Design",
      desc: "Descrição do projeto 1"
    },
    {
      id: 2,
      titulo: "Projeto 2",
      imagem: "https://via.placeholder.com/300x200",
      categoria: "Desenvolvimento",
      desc: "Descrição do projeto 2"
    },
    {
      id: 3,
      titulo: "Projeto 3",
      imagem: "https://via.placeholder.com/300x200",
      categoria: "Marketing",
      desc: "Descrição do projeto 3"
    },
    {
      id: 4,
      titulo: "Projeto 4",
      imagem: "https://via.placeholder.com/300x200",
      categoria: "Design",
      desc: "Descrição do projeto 4"
    },
    {
      id: 5,
      titulo: "Projeto 5",
      imagem: "https://via.placeholder.com/300x200",
      categoria: "Gestão",
      desc: "Descrição do projeto 5"
    },
    {
      id: 6,
      titulo: "Projeto 6",
      imagem: "https://via.placeholder.com/300x200",
      categoria: "Desenvolvimento",
      desc: "Descrição do projeto 6"
    }
  ];

  return (
    <Card className="w-full bg-white rounded-lg border border-gray-200">
      <CardContent className="p-6">
        <h2 className="text-lg font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">Projetos</h2>
        
        {/* Barra de pesquisa */}
        <div className="relative mb-6">
          <input 
            type="search" 
            placeholder="Procurar..." 
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white px-3 py-1 rounded-md text-sm">
            Buscar
          </button>
        </div>
        
        {/* Categorias */}
        <div className="mb-8">
          <Carousel className="w-full">
            <CarouselContent className="py-2">
              {categorias.map((categoria, index) => (
                <CarouselItem key={index} className={isMobile ? "basis-1/2" : "basis-1/5"}>
                  <div className="border border-gray-300 rounded-md px-4 py-2 text-center text-gray-700 text-sm hover:bg-gray-50 cursor-pointer">
                    {categoria}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
        
        {/* Projetos destacados */}
        <div className="mb-8">
          <h3 className="text-md font-medium text-gray-700 mb-4">Projetos Destacados</h3>
          
          <Carousel className="w-full">
            <CarouselContent>
              {projetos.slice(0, 3).map((projeto) => (
                <CarouselItem key={projeto.id} className={isMobile ? "basis-full" : "basis-1/3"}>
                  <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 h-full">
                    <img src={projeto.imagem} alt={projeto.titulo} className="w-full h-40 object-cover" />
                    <div className="p-4">
                      <h4 className="font-medium">{projeto.titulo}</h4>
                      <p className="text-sm text-gray-600 mb-4">{projeto.desc}</p>
                      <button className="mt-2 bg-blue-600 text-white text-sm px-4 py-1 rounded-md w-full">
                        Detalhes
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
        
        {/* Hackathons */}
        <div className="mb-8">
          <h3 className="text-md font-medium text-gray-700 mb-4">Hackathons</h3>
          
          <Carousel className="w-full">
            <CarouselContent>
              {projetos.slice(3, 6).map((projeto) => (
                <CarouselItem key={projeto.id} className={isMobile ? "basis-full" : "basis-1/3"}>
                  <div className="bg-orange-50 rounded-lg overflow-hidden border border-orange-100 h-full">
                    <img src={projeto.imagem} alt={projeto.titulo} className="w-full h-40 object-cover" />
                    <div className="p-4">
                      <h4 className="font-medium">{projeto.titulo}</h4>
                      <p className="text-sm text-gray-600 mb-4">Categoria: {projeto.categoria}</p>
                      <button className="mt-2 bg-orange-500 text-white text-sm px-4 py-1 rounded-md w-full">
                        Participar
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
        
        {/* Grupos */}
        <div>
          <h3 className="text-md font-medium text-gray-700 mb-4">Grupos</h3>
          
          <Carousel className="w-full">
            <CarouselContent>
              {projetos.slice(0, 3).map((projeto) => (
                <CarouselItem key={projeto.id} className={isMobile ? "basis-full" : "basis-1/3"}>
                  <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200 h-full">
                    <img src={projeto.imagem} alt={projeto.titulo} className="w-full h-40 object-cover" />
                    <div className="p-4">
                      <h4 className="font-medium">{projeto.titulo}</h4>
                      <p className="text-sm text-gray-600 mb-4">{projeto.desc}</p>
                      <button className="mt-2 bg-blue-600 text-white text-sm px-4 py-1 rounded-md w-full">
                        Entrar
                      </button>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </div>
      </CardContent>
    </Card>
  );
};

// Componente da página principal do Usuário
const Usuario = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex flex-grow">
        <Sidebar />
        
        <div className="flex-grow bg-gray-50 overflow-y-auto">
          <div className="container mx-auto py-4 px-4">
            <div className="flex flex-col gap-4">
              <Linguagens />
              <Mensagens />
              <Projetos />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Usuario;
