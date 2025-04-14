
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

const Projetos = () => {
  const isMobile = useIsMobile();
  
  const categorias = ["Todos", "Design", "Dev", "Marketing", "Gestão"];
  
  const projetos = [
    {
      id: 1,
      titulo: "nome:",
      empresa: "empresa:",
      imagem: "/lovable-uploads/f3056b72-9444-4661-8acd-eab6e0b1f442.png",
      categoria: "Design",
      status: ""
    },
    {
      id: 2,
      titulo: "nome:",
      empresa: "empresa:",
      imagem: "/lovable-uploads/f3056b72-9444-4661-8acd-eab6e0b1f442.png",
      categoria: "Dev",
      status: "completo"
    },
    {
      id: 3,
      titulo: "nome:",
      empresa: "empresa:",
      imagem: "/lovable-uploads/f3056b72-9444-4661-8acd-eab6e0b1f442.png",
      categoria: "Marketing",
      status: ""
    },
    {
      id: 4,
      titulo: "nome:",
      empresa: "empresa:",
      imagem: "/lovable-uploads/f3056b72-9444-4661-8acd-eab6e0b1f442.png",
      categoria: "Design",
      status: "finalizado"
    },
    {
      id: 5,
      titulo: "nome:",
      empresa: "empresa:",
      imagem: "/lovable-uploads/f3056b72-9444-4661-8acd-eab6e0b1f442.png",
      categoria: "Gestão",
      status: ""
    },
    {
      id: 6,
      titulo: "nome:",
      empresa: "empresa:",
      imagem: "/lovable-uploads/f3056b72-9444-4661-8acd-eab6e0b1f442.png",
      categoria: "Dev",
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
        
        <div className="mb-8 px-4 relative">
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
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>
        
        <div className="mb-8 px-4 relative">
          <h3 className="text-md font-medium text-gray-700 mb-4">projetos</h3>
          
          <Carousel className="w-full">
            <CarouselContent>
              {projetos.slice(0, 3).map((projeto) => (
                <CarouselItem key={projeto.id} className={isMobile ? "basis-full" : "basis-1/3"}>
                  <div className="bg-blue-300 rounded-lg overflow-hidden h-full relative">
                    {projeto.status && (
                      <span className="absolute top-2 right-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                        {projeto.status}
                      </span>
                    )}
                    <div className="flex justify-center pt-8 pb-4">
                      <div className="w-16 h-16 rounded-full bg-yellow-300 flex items-center justify-center">
                        <img src={projeto.imagem} alt="Ícone de lâmpada" className="w-10 h-10" />
                      </div>
                    </div>
                    <div className="p-4 text-white">
                      <p className="mb-1">{projeto.titulo}</p>
                      <p className="mb-6">{projeto.empresa}</p>
                      <div className="flex justify-between gap-2 mt-4">
                        <button className="bg-white text-black text-sm px-4 py-1 rounded-md border border-gray-300 hover:bg-gray-100 w-full">
                          participar
                        </button>
                        <button className="bg-white text-black text-sm px-4 py-1 rounded-md border border-gray-300 hover:bg-gray-100 w-full">
                          saber +
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>
        
        <div className="mb-8 px-4 relative">
          <h3 className="text-md font-medium text-gray-700 mb-4">hackatons</h3>
          
          <Carousel className="w-full">
            <CarouselContent>
              {projetos.slice(3, 6).map((projeto) => (
                <CarouselItem key={projeto.id} className={isMobile ? "basis-full" : "basis-1/3"}>
                  <div className="bg-blue-300 rounded-lg overflow-hidden h-full relative">
                    {projeto.status && (
                      <span className="absolute top-2 right-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                        {projeto.status}
                      </span>
                    )}
                    <div className="flex justify-center pt-8 pb-4">
                      <div className="w-16 h-16 rounded-full bg-yellow-300 flex items-center justify-center">
                        <img src={projeto.imagem} alt="Ícone de lâmpada" className="w-10 h-10" />
                      </div>
                    </div>
                    <div className="p-4 text-white">
                      <p className="mb-1">{projeto.titulo}</p>
                      <p className="mb-6">{projeto.empresa}</p>
                      <div className="flex justify-between gap-2 mt-4">
                        <button className="bg-white text-black text-sm px-4 py-1 rounded-md border border-gray-300 hover:bg-gray-100 w-full">
                          participar
                        </button>
                        <button className="bg-white text-black text-sm px-4 py-1 rounded-md border border-gray-300 hover:bg-gray-100 w-full">
                          saber +
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>
        
        <div className="px-4 relative">
          <h3 className="text-md font-medium text-gray-700 mb-4">Grupos</h3>
          
          <Carousel className="w-full">
            <CarouselContent>
              {projetos.slice(0, 3).map((projeto) => (
                <CarouselItem key={projeto.id} className={isMobile ? "basis-full" : "basis-1/3"}>
                  <div className="bg-blue-300 rounded-lg overflow-hidden h-full relative">
                    {projeto.status && (
                      <span className="absolute top-2 right-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
                        {projeto.status}
                      </span>
                    )}
                    <div className="flex justify-center pt-8 pb-4">
                      <div className="w-16 h-16 rounded-full bg-yellow-300 flex items-center justify-center">
                        <img src={projeto.imagem} alt="Ícone de lâmpada" className="w-10 h-10" />
                      </div>
                    </div>
                    <div className="p-4 text-white">
                      <p className="mb-1">{projeto.titulo}</p>
                      <p className="mb-6">{projeto.empresa}</p>
                      <div className="flex justify-between gap-2 mt-4">
                        <button className="bg-white text-black text-sm px-4 py-1 rounded-md border border-gray-300 hover:bg-gray-100 w-full">
                          participar
                        </button>
                        <button className="bg-white text-black text-sm px-4 py-1 rounded-md border border-gray-300 hover:bg-gray-100 w-full">
                          saber +
                        </button>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>
      </CardContent>
    </Card>
  );
};

export default Projetos;
