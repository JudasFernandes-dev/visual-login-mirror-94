
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import HackathonCard from "./HackathonCard";

interface HackathonsSectionProps {
  hackathons: {
    id: number;
    titulo: string;
    descricao: string;
    imagem: string;
    status: string;
  }[];
}

const HackathonsSection = ({ hackathons }: HackathonsSectionProps) => {
  const isMobile = useIsMobile();

  // Adicionando mais hackathons para o carrossel
  const todosHackathons = [
    ...hackathons,
    {
      id: 4,
      titulo: "Hackathon adicional 1",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum ultrices sollicitudin. Nam viverra magna a molestie.",
      imagem: "/lovable-uploads/e81e5a94-cf17-44af-9574-ce0cf0f520a7.png",
      status: "novo"
    },
    {
      id: 5,
      titulo: "Hackathon adicional 2",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum ultrices sollicitudin. Nam viverra magna a molestie.",
      imagem: "/lovable-uploads/e81e5a94-cf17-44af-9574-ce0cf0f520a7.png",
      status: "novo"
    },
    {
      id: 6,
      titulo: "Hackathon adicional 3",
      descricao: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In fermentum ultrices sollicitudin. Nam viverra magna a molestie.",
      imagem: "/lovable-uploads/e81e5a94-cf17-44af-9574-ce0cf0f520a7.png",
      status: "novo"
    }
  ];

  return (
    <div className="mb-8 px-4">
      <h3 className="text-md font-medium text-indigo-800 mb-4">hackatons</h3>
      
      <div className="relative w-full max-w-[calc(100vw-120px)] mx-auto">
        <Carousel className="w-full" opts={{ 
          align: "start",
          slidesToScroll: isMobile ? 1 : 2,
          containScroll: "trimSnaps"
        }}>
          <CarouselContent className="ml-0">
            {todosHackathons.map((hackathon) => (
              <CarouselItem key={hackathon.id} className={isMobile ? "basis-full pl-4" : "basis-1/3 pl-4"}>
                <HackathonCard hackathon={hackathon} />
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

export default HackathonsSection;
