
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Trophy, Award, Medal, Target, Star, Flame, CheckCircle2 } from "lucide-react";

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
      icon: <Trophy className="w-full h-full text-yellow-500" />,
      requirement: "5 hackathons",
      current: `${userData.hackathonsWon} hackathons`
    },
    {
      id: 3,
      nome: "Colaborador Elite",
      progresso: Math.min(100, (userData.collaborations / 30) * 100),
      icon: <Medal className="w-full h-full text-blue-500" />,
      requirement: "30 colaborações",
      current: `${userData.collaborations} colaborações`
    }
  ];

  const proximosDesafios = [
    {
      id: 1,
      titulo: "Completar 5 projetos de front-end",
      dificuldade: "Médio",
      xp: 500,
      icon: <Target className="h-3 w-3 text-indigo-700" />
    },
    {
      id: 2,
      titulo: "Participar de 2 hackathons",
      dificuldade: "Difícil",
      xp: 1000,
      icon: <Flame className="h-3 w-3 text-red-600" />
    },
    {
      id: 3,
      titulo: "Colaborar com 3 novos membros",
      dificuldade: "Fácil",
      xp: 300,
      icon: <CheckCircle2 className="h-3 w-3 text-green-600" />
    }
  ];

  return (
    <Card className="w-full md:w-full mx-auto bg-white rounded-lg border border-gray-200">
      <CardContent className="p-3">
        <h2 className="text-sm font-medium text-gray-800 mb-2 pb-1 border-b border-gray-200">Progresso dos selos</h2>
        
        <div className="space-y-3 mb-4">
          {selos.map((selo) => (
            <div key={selo.id} className="flex items-center space-x-2">
              <div className="h-6 w-6 rounded-full flex items-center justify-center text-white overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600">
                {typeof selo.icon === 'string' ? (
                  <img src={selo.icon} alt={selo.nome} className="h-full w-full object-cover" />
                ) : selo.icon}
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
        
        {/* Seção adicionada para equilibrar a altura do card */}
        <div>
          <h3 className="text-xs font-medium text-indigo-800 mb-2 flex items-center">
            <Star className="mr-1 h-3.5 w-3.5 text-yellow-500" /> Próximos Desafios
          </h3>
          <div className="space-y-2">
            {proximosDesafios.map((desafio) => (
              <div 
                key={desafio.id} 
                className="border border-gray-100 rounded p-2 bg-gradient-to-r from-gray-50 to-gray-100 hover:from-white hover:to-gray-50 transition-colors shadow-sm"
              >
                <p className="text-xs font-medium mb-1 flex items-center">
                  {desafio.icon}
                  <span className="ml-1">{desafio.titulo}</span>
                </p>
                <div className="flex justify-between items-center">
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                    desafio.dificuldade === "Fácil" ? "bg-green-100 text-green-800" : 
                    desafio.dificuldade === "Médio" ? "bg-yellow-100 text-yellow-800" : 
                    "bg-red-100 text-red-800"
                  }`}>
                    {desafio.dificuldade}
                  </span>
                  <span className="text-[10px] bg-purple-100 text-purple-700 font-medium px-1.5 py-0.5 rounded-full flex items-center">
                    +{desafio.xp} XP <Award className="ml-0.5 h-2.5 w-2.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProgressoSelos;
