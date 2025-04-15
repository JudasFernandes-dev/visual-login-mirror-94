
import React from "react";

interface GrupoCardProps {
  grupo: {
    id: number;
    titulo: string;
    imagem: string;
    status: string;
  };
}

const GrupoCard = ({ grupo }: GrupoCardProps) => {
  return (
    <div className="rounded-lg overflow-hidden h-full relative border border-gray-200 mx-2 w-64">
      {grupo.status && (
        <span className="absolute top-2 right-2 bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded">
          {grupo.status}
        </span>
      )}
      <div className="flex flex-col h-full">
        <div className="bg-green-300 p-4 pt-24 flex-grow">
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

export default GrupoCard;
