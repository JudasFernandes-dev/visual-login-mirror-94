
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const ProgressoSelos = () => {
  const [userData, setUserData] = useState({
    projectsCompleted: 15,
    hackathonsWon: 2,
    collaborations: 8
  });

  const selos = [
    {
      id: 1,
      nome: "Desenvolvedor Experiente",
      progresso: Math.min(100, (userData.projectsCompleted / 20) * 100),
      icon: "/lovable-uploads/d3e05fe7-e4a5-4258-9a43-c1a878a42ddc.png",
      requirement: "20 projetos",
      current: `${userData.projectsCompleted} projetos`
    },
    {
      id: 2,
      nome: "Mestre dos Hackathons",
      progresso: Math.min(100, (userData.hackathonsWon / 5) * 100),
      icon: "https://via.placeholder.com/40",
      requirement: "5 hackathons",
      current: `${userData.hackathonsWon} hackathons`
    },
    {
      id: 3,
      nome: "Colaborador Elite",
      progresso: Math.min(100, (userData.collaborations / 30) * 100),
      icon: "https://via.placeholder.com/40",
      requirement: "30 colaborações",
      current: `${userData.collaborations} colaborações`
    }
  ];

  return (
    <Card className="w-full md:w-full mx-auto bg-white rounded-lg border border-gray-200">
      <CardContent className="p-3">
        <h2 className="text-sm font-medium text-gray-800 mb-2 pb-1 border-b border-gray-200">Progresso dos selos</h2>
        
        <div className="space-y-3">
          {selos.map((selo) => (
            <div key={selo.id} className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center text-white overflow-hidden">
                <img src={selo.icon} alt={selo.nome} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-0.5">
                  <p className="text-xs font-medium">{selo.nome}</p>
                  <span className="text-xs text-gray-500">{selo.progresso.toFixed(0)}%</span>
                </div>
                <Progress value={selo.progresso} className="h-1.5 bg-gray-100" />
                <p className="text-[10px] text-gray-400 mt-0.5">{selo.current} / {selo.requirement}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressoSelos;
