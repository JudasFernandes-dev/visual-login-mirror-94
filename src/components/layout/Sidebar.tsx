
import React from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Building, Github, Linkedin, Link2, Home, Bell, MessageSquare, FileText, Users, User, Settings } from "lucide-react";

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
              onClick={() => handleNavigate("/editar-perfil")}
              className="bg-white hover:bg-gray-50 text-blue-600 rounded-full text-xs py-1.5 px-6 shadow-sm border border-blue-100 transition-all duration-200"
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

export default Sidebar;
