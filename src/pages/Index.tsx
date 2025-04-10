
import React from "react";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Elemento decorativo azul (canto superior direito) */}
      <div className="absolute top-0 right-0 w-[45%] h-[50%] bg-contato-azul transform rotate-[15deg] translate-x-[10%] translate-y-[-20%] rounded-bl-[100px]"></div>
      
      {/* Elemento decorativo laranja (canto inferior direito) */}
      <div className="absolute bottom-0 right-0 w-[45%] h-[50%] bg-contato-laranja transform rotate-[15deg] translate-x-[10%] translate-y-[20%] rounded-tl-[100px]"></div>
      
      <div className="bg-white max-w-4xl w-full mx-4 p-8 md:p-12 relative z-10 shadow-lg rounded-lg my-8">
        {/* Logo placeholder */}
        <div className="border border-gray-800 inline-block px-6 py-2 mb-10">
          <span className="text-gray-800 text-lg">[Sua Logo]</span>
        </div>
        
        {/* Título e subtítulo */}
        <h1 className="text-5xl font-bold text-contato-laranja mb-4">Entre em Contato</h1>
        <p className="text-gray-800 text-lg mb-8">
          Gostaríamos de ouvir de você. Envie-nos uma mensagem e retornaremos assim que possível.
        </p>
        
        {/* Formulário de contato */}
        <ContactForm />
      </div>
    </div>
  );
};

export default Index;
