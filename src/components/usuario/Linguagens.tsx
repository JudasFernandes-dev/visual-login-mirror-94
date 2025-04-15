
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Settings } from "lucide-react";
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
  
  const opcoesLinguagens = [
    "JavaScript", "Python", "Java", "C++", "Ruby", "Go", "PHP", "Swift", "Kotlin", "TypeScript"
  ];
  
  const opcoesIdiomas = [
    "Inglês", "Espanhol", "Francês", "Alemão", "Italiano", "Japonês", "Chinês", "Russo", "Árabe", "Português"
  ];

  return (
    <Card className="w-full bg-white rounded-lg border border-gray-200">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4 pb-2 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-800">Linguagens</h2>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
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
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Programação */}
          <div>
            <h3 className="text-md font-medium mb-4 text-indigo-800">programação</h3>
            
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="col-span-2 sm:col-span-1">
                  <Select
                    value={linguagemSelecionada}
                    onValueChange={setLinguagemSelecionada}
                  >
                    <SelectTrigger className="w-full">
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
                    <SelectTrigger className="w-full">
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
                className="w-full mb-4"
              >
                Adicionar
              </Button>
            </div>
            
            <div className="space-y-2">
              {linguagens.map(linguagem => (
                <div 
                  key={linguagem.id} 
                  className="flex justify-between items-center p-2 border border-gray-300 rounded"
                >
                  <span>{linguagem.nome}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {linguagem.nivel}
                  </span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Idiomas */}
          <div>
            <h3 className="text-md font-medium mb-4 text-indigo-800">idiomas</h3>
            
            <div className="mb-4">
              <div className="grid grid-cols-2 gap-2 mb-3">
                <div className="col-span-2 sm:col-span-1">
                  <Select
                    value={idiomaSelecionado}
                    onValueChange={setIdiomaSelecionado}
                  >
                    <SelectTrigger className="w-full">
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
                    <SelectTrigger className="w-full">
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
                className="w-full mb-4"
              >
                Adicionar
              </Button>
            </div>
            
            <div className="space-y-2">
              {idiomas.map(idioma => (
                <div 
                  key={idioma.id} 
                  className="flex justify-between items-center p-2 border border-gray-300 rounded"
                >
                  <span>{idioma.nome}</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {idioma.nivel}
                  </span>
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
