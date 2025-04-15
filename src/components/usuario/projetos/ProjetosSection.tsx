
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

  // Adicionando mais projetos para o carrossel
  const todosProjetos = [
    ...projetosFiltrados,
    {
      id: 4,
      titulo: "nome: adicional 1",
      empresa: "empresa: adicional 1",
      imagem: "/lovable-uploads/f3056b72-9444-4661-8acd-eab6e0b1f442.png",
      categoria: filtroCategoria === "Todos" ? "Design" : filtroCategoria,
      status: "novo"
    },
    {
      id: 5,
      titulo: "nome: adicional 2",
      empresa: "empresa: adicional 2",
      imagem: "/lovable-uploads/f3056b72-9444-4661-8acd-eab6e0b1f442.png",
      categoria: filtroCategoria === "Todos" ? "Dev" : filtroCategoria,
      status: "novo"
    },
    {
      id: 6,
      titulo: "nome: adicional 3",
      empresa: "empresa: adicional 3",
      imagem: "/lovable-uploads/f3056b72-9444-4661-8acd-eab6e0b1f442.png",
      categoria: filtroCategoria === "Todos" ? "Marketing" : filtroCategoria,
      status: "novo"
    }
  ];

  return (
    <div className="mb-8">
      <h3 className="text-md font-medium text-indigo-800 mb-4 px-4">projetos</h3>
      
      <div className="relative">
        <Carousel className="w-full" opts={{ slidesToScroll: isMobile ? 1 : 2 }}>
          <CarouselContent>
            {todosProjetos.map((projeto) => (
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
