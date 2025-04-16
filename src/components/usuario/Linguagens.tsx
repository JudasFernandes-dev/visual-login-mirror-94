
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Settings, Code, Globe, Trash2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Linguagens = () => {
  const [nivelProgramacao, setNivelProgramacao] = useState("iniciante");
  const [linguagemSelecionada, setLinguagemSelecionada] = useState("");
  const [linguagens, setLinguagens] = useState([
    { id: 1, nome: "JavaScript", nivel: "intermediário" },
    { id: 2, nome: "Python", nivel: "avançado" },
    { id: 3, nome: "Java", nivel: "iniciante" }
  ]);

  const [idiomaSelecionado, setIdiomaSelecionado] = useState("");
  const [idiomas, setIdiomas] = useState([
    { id: 1, nome: "Inglês", nivel: "intermediário" },
    { id: 2, nome: "Espanhol", nivel: "iniciante" }
  ]);
  
  const adicionarLinguagem = () => {
    if (linguagemSelecionada) {
      const novaLinguagem = {
        id: Date.now(),
        nome: linguagemSelecionada,
        nivel: nivelProgramacao
      };
      setLinguagens([...linguagens, novaLinguagem]);
      setLinguagemSelecionada("");
    }
  };
  
  const removerLinguagem = (id: number) => {
    setLinguagens(linguagens.filter(linguagem => linguagem.id !== id));
  };
  
  const adicionarIdioma = () => {
    if (idiomaSelecionado) {
      const novoIdioma = {
        id: Date.now(),
        nome: idiomaSelecionado,
        nivel: nivelProgramacao
      };
      setIdiomas([...idiomas, novoIdioma]);
      setIdiomaSelecionado("");
    }
  };
  
  const removerIdioma = (id: number) => {
    setIdiomas(idiomas.filter(idioma => idioma.id !== id));
  };
  
  const opcoesLinguagens = [
    "JavaScript", "Python", "Java", "C++", "Ruby", "Go", "PHP", "Swift", "Kotlin", "TypeScript"
  ];
  
  const opcoesIdiomas = [
    "Inglês", "Espanhol", "Francês", "Alemão", "Italiano", "Japonês", "Chinês", "Russo", "Árabe", "Português"
  ];

  return (
    <Card className="w-full md:w-full mx-auto bg-white rounded-lg border border-gray-200">
      <CardContent className="p-3">
        <div className="flex justify-between items-center mb-3 pb-1 border-b border-gray-200">
          <h2 className="text-base font-medium text-gray-800">Linguagens</h2>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-7 w-7">
                <Settings className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <h3 className="text-lg font-medium mb-4">Configurações</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-medium mb-2">Preferências de Notificação</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Email para novas oportunidades</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="checkbox" className="rounded" />
                      <span>Notificações no navegador</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Visibilidade do Perfil</h4>
                  <div className="space-y-2">
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="visibility" />
                      <span>Público</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="visibility" />
                      <span>Privado</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="visibility" />
                      <span>Somente Conexões</span>
                    </label>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-2">Tema</h4>
                  <select className="w-full border border-gray-300 rounded-md px-3 py-2">
                    <option>Claro</option>
                    <option>Escuro</option>
                    <option>Sistema</option>
                  </select>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full">Salvar Configurações</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        
        <div className="grid md:grid-cols-1 gap-4">
          {/* Programação */}
          <div>
            <h3 className="text-sm font-medium mb-2 text-indigo-800 flex items-center">
              <Code className="mr-2 h-3 w-3" /> programação
            </h3>
            
            <div className="mb-2">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="col-span-2 sm:col-span-1">
                  <Select
                    value={linguagemSelecionada}
                    onValueChange={setLinguagemSelecionada}
                  >
                    <SelectTrigger className="w-full h-8 text-xs">
                      <SelectValue placeholder="Selecionar linguagem" />
                    </SelectTrigger>
                    <SelectContent>
                      {opcoesLinguagens.map((linguagem) => (
                        <SelectItem key={linguagem} value={linguagem}>
                          {linguagem}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Select
                    value={nivelProgramacao}
                    onValueChange={setNivelProgramacao}
                  >
                    <SelectTrigger className="w-full h-8 text-xs">
                      <SelectValue placeholder="Nível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="iniciante">iniciante</SelectItem>
                      <SelectItem value="intermediário">intermediário</SelectItem>
                      <SelectItem value="avançado">avançado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                onClick={adicionarLinguagem} 
                className="w-full h-7 text-xs"
                size="sm"
              >
                Adicionar
              </Button>
            </div>
            
            <div className="space-y-1 max-h-24 overflow-y-auto">
              {linguagens.map(linguagem => (
                <div 
                  key={linguagem.id} 
                  className="flex justify-between items-center p-1 border border-gray-300 rounded"
                >
                  <span className="flex items-center">
                    <Code className="h-3 w-3 mr-1 text-blue-500" />
                    <span className="text-xs">{linguagem.nome}</span>
                  </span>
                  <div className="flex items-center">
                    <span className="bg-blue-100 text-blue-800 text-xs px-1.5 py-0.5 rounded mr-1">
                      {linguagem.nivel}
                    </span>
                    <button 
                      onClick={() => removerLinguagem(linguagem.id)} 
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Idiomas */}
          <div>
            <h3 className="text-sm font-medium mb-2 text-indigo-800 flex items-center">
              <Globe className="mr-2 h-3 w-3" /> idiomas
            </h3>
            
            <div className="mb-2">
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="col-span-2 sm:col-span-1">
                  <Select
                    value={idiomaSelecionado}
                    onValueChange={setIdiomaSelecionado}
                  >
                    <SelectTrigger className="w-full h-8 text-xs">
                      <SelectValue placeholder="Selecionar idioma" />
                    </SelectTrigger>
                    <SelectContent>
                      {opcoesIdiomas.map((idioma) => (
                        <SelectItem key={idioma} value={idioma}>
                          {idioma}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <Select
                    value={nivelProgramacao}
                    onValueChange={setNivelProgramacao}
                  >
                    <SelectTrigger className="w-full h-8 text-xs">
                      <SelectValue placeholder="Nível" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="iniciante">iniciante</SelectItem>
                      <SelectItem value="intermediário">intermediário</SelectItem>
                      <SelectItem value="avançado">avançado</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <Button 
                onClick={adicionarIdioma} 
                className="w-full h-7 text-xs"
                size="sm"
              >
                Adicionar
              </Button>
            </div>
            
            <div className="space-y-1 max-h-24 overflow-y-auto">
              {idiomas.map(idioma => (
                <div 
                  key={idioma.id} 
                  className="flex justify-between items-center p-1 border border-gray-300 rounded"
                >
                  <span className="flex items-center">
                    <Globe className="h-3 w-3 mr-1 text-green-500" />
                    <span className="text-xs">{idioma.nome}</span>
                  </span>
                  <div className="flex items-center">
                    <span className="bg-green-100 text-green-800 text-xs px-1.5 py-0.5 rounded mr-1">
                      {idioma.nivel}
                    </span>
                    <button 
                      onClick={() => removerIdioma(idioma.id)} 
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default Linguagens;
