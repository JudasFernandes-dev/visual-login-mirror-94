
import React from "react";
import { useIsMobile } from "@/hooks/use-mobile";
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
    <div className="mb-12 px-8">
      <h3 className="text-md font-medium text-indigo-800 mb-6">hackatons</h3>
      
      <div className="relative w-full max-w-[calc(100vw-160px)] mx-auto">
        <Carousel className="w-full" opts={{ 
          align: "start",
          slidesToScroll: isMobile ? 1 : 2,
          containScroll: "trimSnaps"
        }}>
          <CarouselContent className="-ml-8">
            {todosHackathons.map((hackathon) => (
              <CarouselItem key={hackathon.id} className={isMobile ? "basis-full pl-8" : "basis-1/3 pl-8"}>
                <div className="p-3">
                  <HackathonCard hackathon={hackathon} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2" />
          <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2" />
        </Carousel>
      </div>
    </div>
  );
};

export default HackathonsSection;
