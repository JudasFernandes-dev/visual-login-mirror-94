
import React from "react";
import Linguagens from "@/components/usuario/Linguagens";
import ProgressoSelos from "@/components/usuario/ProgressoSelos";
import Projetos from "@/components/usuario/Projetos";
import Sidebar from "@/components/layout/Sidebar";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import LinkedInChat from "@/components/chat/LinkedInChat";

const Usuario = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <div className="flex flex-grow">
        <Sidebar />
        
        <div className="flex-grow bg-gray-50 overflow-y-auto">
          <div className="container mx-auto py-4 px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Coluna Esquerda */}
              <div className="lg:col-span-2">
                {/* Conteúdo da coluna esquerda */}
              </div>
              
              {/* Coluna Central */}
              <div className="lg:col-span-7">
                <Projetos />
              </div>
              
              {/* Coluna Direita */}
              <div className="lg:col-span-3 space-y-4">
                <Linguagens />
                <ProgressoSelos />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <LinkedInChat />
    </div>
  );
};

export default Usuario;
