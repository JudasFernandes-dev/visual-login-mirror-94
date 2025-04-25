
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
    <div className="mb-8 px-4">
      <h3 className="text-md font-medium text-indigo-800 mb-4">projetos</h3>
      
      <div className="relative w-full max-w-[calc(100vw-120px)] mx-auto">
        <Carousel className="w-full" opts={{ 
          align: "start",
          slidesToScroll: isMobile ? 1 : 2,
          containScroll: "trimSnaps"
        }}>
          <CarouselContent className="ml-0">
            {todosProjetos.map((projeto) => (
              <CarouselItem key={projeto.id} className={isMobile ? "basis-full pl-4" : "basis-1/3 pl-4"}>
                <ProjetoCard projeto={projeto} />
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

export default ProjetosSection;
