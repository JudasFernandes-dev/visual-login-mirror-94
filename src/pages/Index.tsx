
import React from "react";
import LoginForm from "@/components/LoginForm";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Elemento decorativo azul (canto superior direito) */}
      <div className="absolute top-0 right-0 w-[45%] h-[50%] bg-contato-azul transform rotate-[15deg] translate-x-[10%] translate-y-[-20%] rounded-bl-[100px]"></div>
      
      {/* Elemento decorativo laranja (canto inferior direito) */}
      <div className="absolute bottom-0 right-0 w-[45%] h-[50%] bg-contato-laranja transform rotate-[15deg] translate-x-[10%] translate-y-[20%] rounded-tl-[100px]"></div>
      
      <div className="bg-white max-w-md w-full mx-4 p-8 md:p-12 relative z-10 shadow-lg rounded-lg my-8">
        {/* Logo placeholder */}
        <div className="flex justify-center mb-8">
          <div className="border border-gray-800 px-8 py-3 rounded">
            <span className="text-gray-800 text-lg font-semibold">[Sua Logo]</span>
          </div>
        </div>
        
        {/* Título e subtítulo */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Bem-vindo de volta</h1>
          <p className="text-gray-600">
            Faça login para acessar sua conta
          </p>
        </div>
        
        {/* Formulário de login */}
        <LoginForm />
        
        {/* Link para a página de usuário */}
        <div className="mt-6 text-center">
          <Link to="/usuario" className="text-contato-azul hover:underline">
            Acessar página de usuário (demo)
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;
