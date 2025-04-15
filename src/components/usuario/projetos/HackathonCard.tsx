
import React from "react";

interface HackathonCardProps {
  hackathon: {
    id: number;
    titulo: string;
    descricao: string;
    imagem: string;
    status: string;
  };
}

const HackathonCard = ({ hackathon }: HackathonCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden h-full relative border border-gray-200 mx-2 w-64">
      {hackathon.status && (
        <span className="absolute top-2 right-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
          {hackathon.status}
        </span>
      )}
      <div className="flex flex-col h-full">
        <div className="bg-gray-800 p-4 text-white">
          <h4 className="text-sm font-medium">{hackathon.titulo}</h4>
          <p className="text-xs mt-2 mb-4">{hackathon.descricao}</p>
          <div className="flex justify-between gap-2 mt-4">
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

export default HackathonCard;
