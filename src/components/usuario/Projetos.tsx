
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import CategoriaFilter from "./projetos/CategoriaFilter";
import ProjetosSection from "./projetos/ProjetosSection";
import HackathonsSection from "./projetos/HackathonsSection";
import GruposSection from "./projetos/GruposSection";

const Projetos = () => {
  const [filtroCategoria, setFiltroCategoria] = useState("Todos");
  
  const categorias = ["Todos", "Design", "Dev", "Marketing", "Gestão"];
  
  const projetos = [
    {
      id: 1,
      titulo: "nome:",
      empresa: "empresa:",
      imagem: "/lovable-uploads/f3056b72-9444-4661-8acd-eab6e0b1f442.png",
      categoria: "Design",
      status: "completo"
    },
    {
      id: 2,
      titulo: "nome:",
      empresa: "empresa:",
      imagem: "/lovable-uploads/f3056b72-9444-4661-8acd-eab6e0b1f442.png",
      categoria: "Dev",
      status: ""
    },
    {
      id: 3,
      titulo: "nome:",
      empresa: "empresa:",
      imagem: "/lovable-uploads/f3056b72-9444-4661-8acd-eab6e0b1f442.png",
      categoria: "Marketing",
      status: ""
    }
  ];
  
  const hackathons = [
    {
      id: 1,
      titulo: "Nome do hackathon",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum ultrices sollicitudin. Nam viverra magna a molestie.",
      imagem: "/lovable-uploads/e81e5a94-cf17-44af-9574-ce0cf0f520a7.png",
      status: "finalizado"
    },
    {
      id: 2,
      titulo: "Nome do hackathon",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum ultrices sollicitudin. Nam viverra magna a molestie.",
      imagem: "/lovable-uploads/e81e5a94-cf17-44af-9574-ce0cf0f520a7.png",
      status: ""
    },
    {
      id: 3,
      titulo: "Nome do hackathon",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum ultrices sollicitudin. Nam viverra magna a molestie.",
      imagem: "/lovable-uploads/e81e5a94-cf17-44af-9574-ce0cf0f520a7.png",
      status: ""
    }
  ];
  
  const grupos = [
    {
      id: 1,
      titulo: "",
      imagem: "/lovable-uploads/e81e5a94-cf17-44af-9574-ce0cf0f520a7.png",
      status: ""
    },
    {
      id: 2,
      titulo: "",
      imagem: "/lovable-uploads/e81e5a94-cf17-44af-9574-ce0cf0f520a7.png",
      status: ""
    },
    {
      id: 3,
      titulo: "",
      imagem: "/lovable-uploads/e81e5a94-cf17-44af-9574-ce0cf0f520a7.png",
      status: ""
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
        
        <CategoriaFilter 
          categorias={categorias} 
          filtroCategoria={filtroCategoria} 
          setFiltroCategoria={setFiltroCategoria} 
        />
        
        <ProjetosSection 
          filtroCategoria={filtroCategoria} 
          projetos={projetos} 
        />
        
        <HackathonsSection hackathons={hackathons} />
        
        <GruposSection grupos={grupos} />
      </CardContent>
    </Card>
  );
};

export default Projetos;
