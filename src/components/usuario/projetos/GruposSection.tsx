
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import GrupoCard from "./GrupoCard";

interface GruposSectionProps {
  grupos: {
    id: number;
    titulo: string;
    imagem: string;
    status: string;
  }[];
}

const GruposSection = ({ grupos }: GruposSectionProps) => {
  const isMobile = useIsMobile();

  // Adicionando mais grupos para o carrossel
  const todosGrupos = [
    ...grupos,
    {
      id: 4,
      titulo: "Grupo adicional 1",
      imagem: "/lovable-uploads/e81e5a94-cf17-44af-9574-ce0cf0f520a7.png",
      status: "novo"
    },
    {
      id: 5,
      titulo: "Grupo adicional 2",
      imagem: "/lovable-uploads/e81e5a94-cf17-44af-9574-ce0cf0f520a7.png",
      status: "novo"
    },
    {
      id: 6,
      titulo: "Grupo adicional 3",
      imagem: "/lovable-uploads/e81e5a94-cf17-44af-9574-ce0cf0f520a7.png",
      status: "novo"
    }
  ];

  return (
    <div className="px-4">
      <h3 className="text-md font-medium text-indigo-800 mb-4">Grupos</h3>
      
      <div className="relative w-full max-w-[calc(100vw-120px)] mx-auto">
        <Carousel className="w-full" opts={{ 
          align: "start",
          slidesToScroll: isMobile ? 1 : 2,
          containScroll: "trimSnaps"
        }}>
          <CarouselContent className="ml-0">
            {todosGrupos.map((grupo) => (
              <CarouselItem key={grupo.id} className={isMobile ? "basis-full pl-4" : "basis-1/3 pl-4"}>
                <GrupoCard grupo={grupo} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 border border-gray-200" />
          <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-100 border border-gray-200" />
        </Carousel>
      </div>
    </div>
  );
};

export default GruposSection;
