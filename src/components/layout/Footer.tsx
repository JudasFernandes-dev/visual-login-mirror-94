
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-8 border-t border-gray-200">
      <div className="container mx-auto px-4">
        <div className="text-center text-gray-600 mb-6">
          Conectando pessoas do mesmo cosmo
        </div>
        
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold mb-3 uppercase text-sm text-gray-700">Sobre nós</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-800">Quem somos</a></li>
              <li><a href="#" className="hover:text-blue-800">Como funciona</a></li>
              <li><a href="#" className="hover:text-blue-800">Trabalhe conosco</a></li>
              <li><a href="#" className="hover:text-blue-800">FAQ</a></li>
            </ul>
          </div>
          
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold mb-3 uppercase text-sm text-gray-700">Links úteis</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-800">Documentação</a></li>
              <li><a href="#" className="hover:text-blue-800">Política de privacidade</a></li>
              <li><a href="#" className="hover:text-blue-800">Termos de uso</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold mb-3 uppercase text-sm text-gray-700">Informações</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li><a href="#" className="hover:text-blue-800">Juncal 475</a></li>
              <li><a href="#" className="hover:text-blue-800">+11 11 42 742 01 08</a></li>
              <li><a href="#" className="hover:text-blue-800">Digital • AI Strategy 3D</a></li>
              <li><a href="#" className="hover:text-blue-800">HELLO Digital</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center border-t border-gray-300 pt-6">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-gray-600 hover:text-blue-800">
              <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">f</div>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-800">
              <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">t</div>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-800">
              <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">ig</div>
            </a>
            <a href="#" className="text-gray-600 hover:text-blue-800">
              <div className="h-8 w-8 bg-gray-200 rounded-full flex items-center justify-center">in</div>
            </a>
          </div>
          
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded">
            Mensagem
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
