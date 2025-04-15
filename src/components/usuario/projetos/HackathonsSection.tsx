
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

  return (
    <div className="mb-8">
      <h3 className="text-md font-medium text-indigo-800 mb-4 px-4">hackatons</h3>
      
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            {hackathons.map((hackathon) => (
              <CarouselItem key={hackathon.id} className={isMobile ? "basis-full" : "basis-1/4"}>
                <HackathonCard hackathon={hackathon} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-4 bg-yellow-400 hover:bg-yellow-500 flex items-center justify-center">
            <ChevronLeft className="h-4 w-4" />
          </CarouselPrevious>
          <CarouselNext className="-right-4 bg-orange-500 hover:bg-orange-600 flex items-center justify-center">
            <ChevronRight className="h-4 w-4" />
          </CarouselNext>
        </Carousel>
      </div>
    </div>
  );
};

export default HackathonsSection;
