import React, { useState, useEffect } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useIsMobile } from "@/hooks/use-mobile";
import { Search, User, Settings, Bell, Home, MessageSquare, Users, FileText, Building, Github, Linkedin, Link2, Code, Globe, MoreHorizontal, X, Paperclip, Send, Plus, Trash2, Edit, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent, ChatPopoverContent } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Linguagens = () => {
  const { toast } = useToast();
  const [languages, setLanguages] = useState([
    {
      id: 1,
      name: "JavaScript",
      type: "programming",
      level: "Avançado",
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Python",
      type: "programming",
      level: "Intermediário",
      color: "bg-green-500"
    },
    {
      id: 3,
      name: "HTML/CSS",
      type: "programming",
      level: "Avançado",
      color: "bg-yellow-500"
    },
    {
      id: 4,
      name: "Inglês",
      type: "language",
      level: "Fluente",
      color: "bg-red-500"
    },
    {
      id: 5,
      name: "Espanhol",
      type: "language",
      level: "Intermediário",
      color: "bg-purple-500"
    }
  ]);

  const [newLanguage, setNewLanguage] = useState({
    name: "",
    type: "programming",
    level: "Iniciante"
  });

  const [editMode, setEditMode] = useState(null);

  const levels = ["Iniciante", "Básico", "Intermediário", "Avançado", "Fluente"];
  const types = ["programming", "language"];

  const typeColors = {
    programming: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-orange-500"],
    language: ["bg-red-500", "bg-purple-500", "bg-pink-500", "bg-indigo-500"]
  };

  const handleAddLanguage = () => {
    if (newLanguage.name.trim() === "") {
      toast({
        title: "Erro",
        description: "Nome da linguagem não pode estar vazio",
      });
      return;
    }

    const colorPool = typeColors[newLanguage.type];
    const randomColor = colorPool[Math.floor(Math.random() * colorPool.length)];

    const newId = languages.length > 0 ? Math.max(...languages.map(l => l.id)) + 1 : 1;
    
    setLanguages([...languages, { 
      id: newId,
      name: newLanguage.name,
      type: newLanguage.type,
      level: newLanguage.level,
      color: randomColor
    }]);
    
    setNewLanguage({
      name: "",
      type: "programming",
      level: "Iniciante"
    });
    
    toast({
      title: "Sucesso",
      description: "Linguagem adicionada com sucesso!",
    });
  };

  const handleRemoveLanguage = (id) => {
    setLanguages(languages.filter(lang => lang.id !== id));
    toast({
      description: "Linguagem removida com sucesso!",
    });
  };

  const handleEdit = (language) => {
    setEditMode(language.id);
  };

  const saveEdit = (id) => {
    setEditMode(null);
    toast({
      description: "Informação atualizada com sucesso!",
    });
  };

  const handleChange = (id, field, value) => {
    setLanguages(languages.map(lang => 
      lang.id === id ? { ...lang, [field]: value } : lang
    ));
  };

  return (
    <Card className="w-full bg-white rounded-lg border border-gray-200 mb-4">
      <CardContent className="p-3">
        <h2 className="text-base font-medium text-gray-800 mb-2 pb-1 border-b border-gray-200">Linguagens</h2>
        
        <div className="grid grid-cols-3 gap-2 mb-3">
          {languages.map((language) => (
            <div key={language.id} className="flex items-center space-x-2 group relative">
              {editMode === language.id ? (
                <div className="flex items-center space-x-1 w-full">
                  <div className={`h-7 w-7 rounded-full ${language.color} flex items-center justify-center text-white`}>
                    {language.type === "programming" ? <Code size={14} /> : <Globe size={14} />}
                  </div>
                  <div className="flex-1">
                    <Input
                      value={language.name}
                      onChange={(e) => handleChange(language.id, "name", e.target.value)}
                      className="h-6 text-xs mb-1 p-1"
                    />
                    <Select
                      value={language.level}
                      onValueChange={(value) => handleChange(language.id, "level", value)}
                    >
                      <SelectTrigger className="h-6 text-xs p-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {levels.map((level) => (
                          <SelectItem key={level} value={level} className="text-xs">
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => saveEdit(language.id)}>
                    <Check size={14} />
                  </Button>
                </div>
              ) : (
                <>
                  <div className={`h-7 w-7 rounded-full ${language.color} flex items-center justify-center text-white`}>
                    {language.type === "programming" ? <Code size={14} /> : <Globe size={14} />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-xs">{language.name}</p>
                    <p className="text-xs text-gray-500">{language.level}</p>
                  </div>
                  <div className="hidden group-hover:flex absolute right-0 space-x-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-5 w-5"
                      onClick={() => handleEdit(language)}
                    >
                      <Edit size={12} />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-5 w-5"
                      onClick={() => handleRemoveLanguage(language.id)}
                    >
                      <Trash2 size={12} />
                    </Button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-end gap-1 mt-2 border-t border-gray-100 pt-2">
          <div className="flex-1">
            <Input 
              placeholder="Nova linguagem/idioma" 
              className="h-7 text-xs mb-1"
              value={newLanguage.name}
              onChange={(e) => setNewLanguage({...newLanguage, name: e.target.value})}
            />
            <div className="flex gap-1">
              <Select
                value={newLanguage.type}
                onValueChange={(value) => setNewLanguage({...newLanguage, type: value})}
              >
                <SelectTrigger className="h-6 text-xs flex-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="programming" className="text-xs">Programação</SelectItem>
                  <SelectItem value="language" className="text-xs">Idioma</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={newLanguage.level}
                onValueChange={(value) => setNewLanguage({...newLanguage, level: value})}
              >
                <SelectTrigger className="h-6 text-xs flex-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level} className="text-xs">
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button 
            size="sm" 
            className="h-7 w-7 p-0" 
            onClick={handleAddLanguage}
          >
            <Plus size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const ProgressoSelos = () => {
  const [userData, setUserData] = useState({
    projectsCompleted: 15,
    hackathonsWon: 2,
    collaborations: 8
  });

  const selos = [
    {
      id: 1,
      nome: "Desenvolvedor Experiente",
      progresso: Math.min(100, (userData.projectsCompleted / 20) * 100),
      icon: "/lovable-uploads/d3e05fe7-e4a5-4258-9a43-c1a878a42ddc.png",
      requirement: "20 projetos",
      current: `${userData.projectsCompleted} projetos`
    },
    {
      id: 2,
      nome: "Mestre dos Hackathons",
      progresso: Math.min(100, (userData.hackathonsWon / 5) * 100),
      icon: "https://via.placeholder.com/40",
      requirement: "5 hackathons",
      current: `${userData.hackathonsWon} hackathons`
    },
    {
      id: 3,
      nome: "Colaborador Elite",
      progresso: Math.min(100, (userData.collaborations / 30) * 100),
      icon: "https://via.placeholder.com/40",
      requirement: "30 colaborações",
      current: `${userData.collaborations} colaborações`
    }
  ];

  return (
    <Card className="w-full bg-white rounded-lg border border-gray-200 mb-4">
      <CardContent className="p-4">
        <h2 className="text-base font-medium text-gray-800 mb-3 pb-1 border-b border-gray-200">Progresso dos selos</h2>
        
        <div className="space-y-4">
          {selos.map((selo) => (
            <div key={selo.id} className="flex items-center space-x-3">
              <div className={`h-8 w-8 rounded-full flex items-center justify-center text-white overflow-hidden`}>
                <img src={selo.icon} alt={selo.nome} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <p className="text-sm font-medium">{selo.nome}</p>
                  <span className="text-xs text-gray-500">{selo.progresso.toFixed(0)}% ({selo.current})</span>
                </div>
                <Progress value={selo.progresso} className="h-2 bg-gray-100">
                  <div 
                    className="h-full bg-orange-500" 
                    style={{ width: `${selo.progresso}%` }}
                  />
                </Progress>
                <p className="text-xs text-gray-400 mt-1">Meta: {selo.requirement}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const Sidebar = () => {
  const handleNavigate = (path) => {
    window.location.href = path;
  };
  
  const sidebarItems = [
    { icon: <Building size={16} className="text-gray-700" />, text: "Função", path: "/funcao" },
    { icon: <Github size={16} className="text-gray-700" />, text: "Github", path: "/github" },
    { icon: <Linkedin size={16} className="text-gray-700" />, text: "Linkedin", path: "/linkedin" },
    { icon: <Link2 size={16} className="text-gray-700" />, text: "Link", path: "/link" },
    { icon: <Home size={16} className="text-gray-700" />, text: "Página Inicial", path: "/" },
    { icon: <Bell size={16} className="text-gray-700" />, text: "Notificações", path: "/notificacoes" },
    { icon: <MessageSquare size={16} className="text-gray-700" />, text: "Mensagens", path: "/mensagens" },
    { icon: <img src="/lovable-uploads/44f613b9-3eea-42dd-a2c1-3cf64b70fa25.png" alt="Hackathon" className="h-4 w-4" />, text: "Hackathons", path: "/hackathons" },
    { icon: <FileText size={16} className="text-gray-700" />, text: "Projetos", path: "/projetos" },
    { icon: <Users size={16} className="text-gray-700" />, text: "Equipes", path: "/equipes" },
    { icon: <User size={16} className="text-gray-700" />, text: "Perfil", path: "/usuario" },
    { icon: <Settings size={16} className="text-gray-700" />, text: "Configurações", path: "/configuracoes" },
  ];

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
          {sidebarItems.slice(0, 4).map((item, index) => (
            <li 
              key={index} 
              className="flex items-center space-x-3 text-gray-700 cursor-pointer hover:bg-blue-100 rounded-md p-1"
              onClick={() => handleNavigate(item.path)}
            >
              {item.icon}
              <span className="text-sm">{item.text}</span>
            </li>
          ))}
          
          <li className="my-4 flex justify-center">
            <Button 
              className="bg-blue-400 hover:bg-blue-500 rounded-full text-white text-xs py-1 px-5"
              onClick={() => handleNavigate("/editar-perfil")}
            >
              Editar Perfil
            </Button>
          </li>
          
          {sidebarItems.slice(4).map((item, index) => (
            <li 
              key={index} 
              className="flex items-center space-x-3 text-gray-700 cursor-pointer hover:bg-blue-100 rounded-md p-1"
              onClick={() => handleNavigate(item.path)}
            >
              {item.icon}
              <span className="text-sm">{item.text}</span>
            </li>
          ))}
          
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

const Projetos = () => {
  const isMobile = useIsMobile();
  
  const categorias = ["Todos", "Design", "Dev", "Marketing", "Gestão"];
  
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
      categoria: "Dev",
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
      categoria: "Dev",
      desc: "Descrição do projeto 6"
    }
  ];

  return (
    <Card className="w-full bg-white rounded-lg border border-gray-200">
      <CardContent className="p-6">
        <h2 className="text-lg font-medium text-gray-800 mb-4 pb-2 border-b border-gray-200">Projetos</h2>
        
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

const LinkedInChat = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  
  const contacts = [
    {
      id: 1,
      name: "Ana Silva",
      avatar: "https://via.placeholder.com/40",
      lastMessage: "Olá! Vi seu projeto de UI/UX e adorei o trabalho.",
      time: "11 de abr.",
      online: true,
      unread: true
    },
    {
      id: 2,
      name: "Isabella Furbino",
      avatar: "https://via.placeholder.com/40",
      lastMessage: "Você tem problemas com Controle de Versão?",
      time: "7 de abr.",
      online: false,
      unread: false
    },
    {
      id: 3,
      name: "Fabrício Cantieri",
      avatar: "https://via.placeholder.com/40",
      lastMessage: "Seja bem vinda Jéssica, tudo bem?",
      time: "6 de abr.",
      online: true,
      unread: false
    },
    {
      id: 4,
      name: "Natan Tomé",
      avatar: "https://via.placeholder.com/40",
      lastMessage: "Você: Oi, Natan! Tudo certinho? Que massa!!!",
      time: "31 de mar.",
      online: true,
      unread: false
    }
  ];

  const handleSend = () => {
    if (message.trim()) {
      toast({
        title: "Mensagem enviada",
        description: "Sua mensagem foi enviada com sucesso!",
      });
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button 
            variant="outline" 
            className={`w-60 min-w-60 rounded-md p-3 shadow-lg border border-gray-300 ${isOpen ? 'bg-blue-100' : 'bg-white'} hover:bg-blue-50`}
          >
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8 border border-gray-300">
                <AvatarImage src="/lovable-uploads/63498272-71ed-42ba-8c2f-2666d4afa1fd.png" alt="Profile" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              {!isOpen && (
                <>
                  <span className="font-medium text-gray-700">Mensagens</span>
                  <div className="h-2 w-2 bg-green-500 rounded-full absolute top-1 right-1"></div>
                </>
              )}
            </div>
          </Button>
        </PopoverTrigger>
        <ChatPopoverContent 
          className="p-0 w-80 h-[400px] flex flex-col rounded-t-lg shadow-xl border-gray-300"
          sideOffset={0}
        >
          <div className="border-b border-gray-200 p-3 flex justify-between items-center bg-gray-50">
            <div className="flex items-center space-x-2">
              <h3 className="font-medium text-gray-900">Mensagens</h3>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="p-2 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Pesquisar mensagens" 
                className="pl-8 py-1 h-8 text-sm"
              />
            </div>
            
            <div className="flex mt-2">
              <Button 
                variant="ghost"
                className="flex-1 py-1 h-8 text-sm border-b-2 border-blue-500 text-blue-700 rounded-none"
              >
                Prioritárias
              </Button>
              <Button 
                variant="ghost"
                className="flex-1 py-1 h-8 text-sm text-gray-500 rounded-none"
              >
                Outras
              </Button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {contacts.map((contact) => (
              <div 
                key={contact.id}
                className={`flex items-center p-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200 ${contact.unread ? 'bg-blue-50' : ''}`}
              >
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={contact.avatar} alt={contact.name} />
                    <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {contact.online && (
                    <div className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full border border-white"></div>
                  )}
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <div className="flex justify-between">
                    <p className={`font-medium text-sm truncate ${contact.unread ? 'text-black' : 'text-gray-700'}`}>{contact.name}</p>
                    <span className="text-xs text-gray-500">{contact.time}</span>
                  </div>
                  <p className={`text-xs truncate ${contact.unread ? 'text-gray-800' : 'text-gray-500'}`}>{contact.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-2 border-t border-gray-200 bg-white">
            <div className="flex items-center">
              <Input 
                placeholder="Escreva sua mensagem..."
                className="text-sm focus-visible:ring-0"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <div className="flex ml-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Paperclip className="h-4 w-4 text-gray-500" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleSend}>
                  <Send className="h-4 w-4 text-blue-500" />
                </Button>
              </div>
            </div>
          </div>
        </ChatPopoverContent>
      </Popover>
    </div>
  );
};

const Usuario = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex flex-grow">
        <Sidebar />
        
        <div className="flex-grow bg-gray-50 overflow-y-auto">
          <div className="container mx-auto py-4 px-4">
            <div className="flex flex-col gap-4">
              <Linguagens />
              <ProgressoSelos />
              <Projetos />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <LinkedInChat />
    </div>
  );
};

export default Usuario;
