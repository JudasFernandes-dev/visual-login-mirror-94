
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
    <div>
      <h3 className="text-md font-medium text-indigo-800 mb-4 px-4">Grupos</h3>
      
      <div className="relative">
        <Carousel className="w-full" opts={{ slidesToScroll: isMobile ? 1 : 2 }}>
          <CarouselContent>
            {todosGrupos.map((grupo) => (
              <CarouselItem key={grupo.id} className={isMobile ? "basis-full" : "basis-1/4"}>
                <GrupoCard grupo={grupo} />
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
  );
};

export default GruposSection;
