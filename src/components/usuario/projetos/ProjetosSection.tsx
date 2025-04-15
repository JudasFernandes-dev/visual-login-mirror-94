
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ProjetoCard from "./ProjetoCard";

interface ProjetosSectionProps {
  filtroCategoria: string;
  projetos: {
    id: number;
    titulo: string;
    empresa: string;
    imagem: string;
    categoria: string;
    status: string;
  }[];
}

const ProjetosSection = ({ filtroCategoria, projetos }: ProjetosSectionProps) => {
  const isMobile = useIsMobile();
  
  // Função para filtrar projetos por categoria
  const projetosFiltrados = filtroCategoria === "Todos" 
    ? projetos 
    : projetos.filter(projeto => projeto.categoria === filtroCategoria);

  return (
    <div className="mb-8">
      <h3 className="text-md font-medium text-indigo-800 mb-4 px-4">projetos</h3>
      
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {projetosFiltrados.map((projeto) => (
              <CarouselItem key={projeto.id} className={isMobile ? "basis-full" : "basis-1/4"}>
                <ProjetoCard projeto={projeto} />
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
  );
};

export default ProjetosSection;
