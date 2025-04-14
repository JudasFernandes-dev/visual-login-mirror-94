
import React from "react";
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
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>
        
        <div className="mb-8 px-4 relative">
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
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>
      </CardContent>
    </Card>
  );
};

export default Projetos;
