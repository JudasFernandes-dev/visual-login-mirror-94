
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
  );
};

export default CategoriaFilter;
