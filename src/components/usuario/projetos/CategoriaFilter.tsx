
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

interface CategoriaFilterProps {
  categorias: string[];
  filtroCategoria: string;
  setFiltroCategoria: (categoria: string) => void;
}

const CategoriaFilter = ({ 
  categorias, 
  filtroCategoria, 
  setFiltroCategoria 
}: CategoriaFilterProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="mb-8 relative">
      <Carousel className="w-full max-w-[calc(100vw-200px)] mx-auto">
        <CarouselContent className="py-2">
          {categorias.map((categoria, index) => (
            <CarouselItem key={index} className={isMobile ? "basis-1/2" : "basis-1/5"}>
              <div 
                className={`mx-2 border ${
                  filtroCategoria === categoria 
                    ? 'border-blue-500 bg-blue-50 text-blue-600' 
                    : 'border-gray-200 hover:border-gray-300'
                } rounded-full px-6 py-2 text-center text-sm transition-all duration-200 cursor-pointer hover:bg-gray-50`}
                onClick={() => setFiltroCategoria(categoria)}
              >
                {categoria}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-12" />
        <CarouselNext className="-right-12" />
      </Carousel>
    </div>
  );
};

export default CategoriaFilter;
