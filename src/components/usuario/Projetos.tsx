
import React, { useState } from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";

const Projetos = () => {
  const isMobile = useIsMobile();
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

  // Função para filtrar projetos por categoria
  const projetosFiltrados = filtroCategoria === "Todos" 
    ? projetos 
    : projetos.filter(projeto => projeto.categoria === filtroCategoria);

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
        
        <div className="mb-8 px-4 relative">
          <Carousel className="w-full">
            <CarouselContent className="py-2">
              {categorias.map((categoria, index) => (
                <CarouselItem key={index} className={isMobile ? "basis-1/2" : "basis-1/5"}>
                  <div 
                    className={`border ${filtroCategoria === categoria ? 'border-blue-500 bg-blue-50' : 'border-gray-300'} rounded-md px-4 py-2 text-center text-gray-700 text-sm hover:bg-gray-50 cursor-pointer`}
                    onClick={() => setFiltroCategoria(categoria)}
                  >
                    {categoria}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>
        
        {/* PROJETOS SECTION */}
        <div className="mb-8">
          <h3 className="text-md font-medium text-indigo-800 mb-4 px-4">projetos</h3>
          
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {projetosFiltrados.map((projeto) => (
                  <CarouselItem key={projeto.id} className={isMobile ? "basis-full" : "basis-1/3"}>
                    <div className="rounded-lg overflow-hidden h-full relative border border-gray-200">
                      {projeto.status && (
                        <span className="absolute top-2 right-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                          {projeto.status}
                        </span>
                      )}
                      <div className="flex flex-col h-full">
                        <div className="bg-blue-400 relative pt-12 pb-2">
                          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center">
                            <Lightbulb className="w-7 h-7 text-black" />
                          </div>
                        </div>
                        <div className="bg-blue-400 p-4 text-white flex-grow">
                          <p className="text-sm font-medium">{projeto.titulo}</p>
                          <p className="text-sm mb-6">{projeto.empresa}</p>
                          <div className="flex justify-between gap-2 mt-auto">
                            <button className="bg-white text-black text-xs px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 w-full">
                              participar
                            </button>
                            <button className="bg-white text-black text-xs px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 w-full">
                              saber +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 flex items-center justify-center">
                <ChevronLeft className="h-4 w-4" />
              </CarouselPrevious>
              <CarouselNext className="-right-4 flex items-center justify-center">
                <ChevronRight className="h-4 w-4" />
              </CarouselNext>
            </Carousel>
          </div>
        </div>
        
        {/* HACKATONS SECTION */}
        <div className="mb-8">
          <h3 className="text-md font-medium text-indigo-800 mb-4 px-4">hackatons</h3>
          
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {hackathons.map((hackathon) => (
                  <CarouselItem key={hackathon.id} className={isMobile ? "basis-full" : "basis-1/3"}>
                    <div className="rounded-lg overflow-hidden h-full relative border border-gray-200">
                      {hackathon.status && (
                        <span className="absolute top-2 right-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                          {hackathon.status}
                        </span>
                      )}
                      <div className="flex flex-col h-full">
                        <div className="bg-gray-800 p-4 text-white">
                          <h4 className="text-sm font-medium">{hackathon.titulo}</h4>
                          <p className="text-xs mt-2 mb-4">{hackathon.descricao}</p>
                          <div className="flex justify-between gap-2 mt-4">
                            <button className="bg-white text-black text-xs px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 w-full">
                              participar
                            </button>
                            <button className="bg-white text-black text-xs px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 w-full">
                              saber +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center">
                <ChevronLeft className="h-4 w-4" />
              </CarouselPrevious>
              <CarouselNext className="-right-4 bg-orange-500 hover:bg-orange-600 flex items-center justify-center">
                <ChevronRight className="h-4 w-4" />
              </CarouselNext>
            </Carousel>
          </div>
        </div>
        
        {/* GRUPOS SECTION */}
        <div>
          <h3 className="text-md font-medium text-indigo-800 mb-4 px-4">Grupos</h3>
          
          <div className="relative">
            <Carousel className="w-full">
              <CarouselContent>
                {grupos.map((grupo) => (
                  <CarouselItem key={grupo.id} className={isMobile ? "basis-full" : "basis-1/3"}>
                    <div className="rounded-lg overflow-hidden h-full relative border border-gray-200">
                      {grupo.status && (
                        <span className="absolute top-2 right-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                          {grupo.status}
                        </span>
                      )}
                      <div className="flex flex-col h-full">
                        <div className="bg-green-300 p-4 pt-24 flex-grow">
                          <div className="flex justify-between gap-2 mt-auto">
                            <button className="bg-white text-black text-xs px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 w-full">
                              participar
                            </button>
                            <button className="bg-white text-black text-xs px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 w-full">
                              saber +
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="-left-4 bg-blue-500 hover:bg-blue-600 flex items-center justify-center">
                <ChevronLeft className="h-4 w-4" />
              </CarouselPrevious>
              <CarouselNext className="-right-4 bg-blue-500 hover:bg-blue-600 flex items-center justify-center">
                <ChevronRight className="h-4 w-4" />
              </CarouselNext>
            </Carousel>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Projetos;
