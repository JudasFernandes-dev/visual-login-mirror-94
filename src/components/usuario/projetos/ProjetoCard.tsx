
import React from "react";
import { Lightbulb } from "lucide-react";

interface ProjetoCardProps {
  projeto: {
    id: number;
    titulo: string;
    empresa: string;
    imagem: string;
    categoria: string;
    status: string;
  };
}

const ProjetoCard = ({ projeto }: ProjetoCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden h-full relative border border-gray-200 mx-2 w-64">
      {projeto.status && (
        <span className="absolute top-2 right-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
          {projeto.status}
        </span>
      )}
      <div className="flex flex-col h-full">
        <div className="bg-blue-400 relative pt-12 pb-2">
          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-yellow-300 flex items-center justify-center">
            <Lightbulb className="w-7 h-7 text-black" />
          </div>
        </div>
        <div className="bg-blue-400 p-4 text-white flex-grow">
          <p className="text-sm font-medium">{projeto.titulo}</p>
          <p className="text-sm mb-6">{projeto.empresa}</p>
          <div className="flex justify-between gap-2 mt-auto">
            <button className="bg-white text-black text-xs px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 w-full">
              participar
            </button>
            <button className="bg-white text-black text-xs px-3 py-1 rounded-md border border-gray-300 hover:bg-gray-100 w-full">
              saber +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjetoCard;
