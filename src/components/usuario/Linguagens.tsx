
import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Code, Edit, Globe, Trash2, Check, Plus } from "lucide-react";

const Linguagens = () => {
  const { toast } = useToast();
  const [languages, setLanguages] = useState([
    {
      id: 1,
      name: "JavaScript",
      type: "programming",
      level: "Avançado",
      color: "bg-blue-500"
    },
    {
      id: 2,
      name: "Python",
      type: "programming",
      level: "Intermediário",
      color: "bg-green-500"
    },
    {
      id: 3,
      name: "HTML/CSS",
      type: "programming",
      level: "Avançado",
      color: "bg-yellow-500"
    },
    {
      id: 4,
      name: "Inglês",
      type: "language",
      level: "Fluente",
      color: "bg-red-500"
    },
    {
      id: 5,
      name: "Espanhol",
      type: "language",
      level: "Intermediário",
      color: "bg-purple-500"
    }
  ]);

  const [newLanguage, setNewLanguage] = useState({
    name: "",
    type: "programming",
    level: "Iniciante"
  });

  const [editMode, setEditMode] = useState(null);

  const levels = ["Iniciante", "Básico", "Intermediário", "Avançado", "Fluente"];
  const types = ["programming", "language"];

  const typeColors = {
    programming: ["bg-blue-500", "bg-green-500", "bg-yellow-500", "bg-orange-500"],
    language: ["bg-red-500", "bg-purple-500", "bg-pink-500", "bg-indigo-500"]
  };

  const handleAddLanguage = () => {
    if (newLanguage.name.trim() === "") {
      toast({
        title: "Erro",
        description: "Nome da linguagem não pode estar vazio",
      });
      return;
    }

    const colorPool = typeColors[newLanguage.type];
    const randomColor = colorPool[Math.floor(Math.random() * colorPool.length)];

    const newId = languages.length > 0 ? Math.max(...languages.map(l => l.id)) + 1 : 1;
    
    setLanguages([...languages, { 
      id: newId,
      name: newLanguage.name,
      type: newLanguage.type,
      level: newLanguage.level,
      color: randomColor
    }]);
    
    setNewLanguage({
      name: "",
      type: "programming",
      level: "Iniciante"
    });
    
    toast({
      title: "Sucesso",
      description: "Linguagem adicionada com sucesso!",
    });
  };

  const handleRemoveLanguage = (id) => {
    setLanguages(languages.filter(lang => lang.id !== id));
    toast({
      description: "Linguagem removida com sucesso!",
    });
  };

  const handleEdit = (language) => {
    setEditMode(language.id);
  };

  const saveEdit = (id) => {
    setEditMode(null);
    toast({
      description: "Informação atualizada com sucesso!",
    });
  };

  const handleChange = (id, field, value) => {
    setLanguages(languages.map(lang => 
      lang.id === id ? { ...lang, [field]: value } : lang
    ));
  };

  return (
    <Card className="w-full bg-white rounded-lg border border-gray-200 mb-4">
      <CardContent className="p-3">
        <h2 className="text-base font-medium text-gray-800 mb-2 pb-1 border-b border-gray-200">Linguagens</h2>
        
        <div className="grid grid-cols-3 gap-2 mb-3">
          {languages.map((language) => (
            <div key={language.id} className="flex items-center space-x-2 group relative">
              {editMode === language.id ? (
                <div className="flex items-center space-x-1 w-full">
                  <div className={`h-7 w-7 rounded-full ${language.color} flex items-center justify-center text-white`}>
                    {language.type === "programming" ? <Code size={14} /> : <Globe size={14} />}
                  </div>
                  <div className="flex-1">
                    <Input
                      value={language.name}
                      onChange={(e) => handleChange(language.id, "name", e.target.value)}
                      className="h-6 text-xs mb-1 p-1"
                    />
                    <Select
                      value={language.level}
                      onValueChange={(value) => handleChange(language.id, "level", value)}
                    >
                      <SelectTrigger className="h-6 text-xs p-1">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {levels.map((level) => (
                          <SelectItem key={level} value={level} className="text-xs">
                            {level}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button size="icon" variant="ghost" className="h-6 w-6" onClick={() => saveEdit(language.id)}>
                    <Check size={14} />
                  </Button>
                </div>
              ) : (
                <>
                  <div className={`h-7 w-7 rounded-full ${language.color} flex items-center justify-center text-white`}>
                    {language.type === "programming" ? <Code size={14} /> : <Globe size={14} />}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-xs">{language.name}</p>
                    <p className="text-xs text-gray-500">{language.level}</p>
                  </div>
                  <div className="hidden group-hover:flex absolute right-0 space-x-1">
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-5 w-5"
                      onClick={() => handleEdit(language)}
                    >
                      <Edit size={12} />
                    </Button>
                    <Button
                      size="icon"
                      variant="ghost"
                      className="h-5 w-5"
                      onClick={() => handleRemoveLanguage(language.id)}
                    >
                      <Trash2 size={12} />
                    </Button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>

        <div className="flex items-end gap-1 mt-2 border-t border-gray-100 pt-2">
          <div className="flex-1">
            <Input 
              placeholder="Nova linguagem/idioma" 
              className="h-7 text-xs mb-1"
              value={newLanguage.name}
              onChange={(e) => setNewLanguage({...newLanguage, name: e.target.value})}
            />
            <div className="flex gap-1">
              <Select
                value={newLanguage.type}
                onValueChange={(value) => setNewLanguage({...newLanguage, type: value})}
              >
                <SelectTrigger className="h-6 text-xs flex-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="programming" className="text-xs">Programação</SelectItem>
                  <SelectItem value="language" className="text-xs">Idioma</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={newLanguage.level}
                onValueChange={(value) => setNewLanguage({...newLanguage, level: value})}
              >
                <SelectTrigger className="h-6 text-xs flex-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {levels.map((level) => (
                    <SelectItem key={level} value={level} className="text-xs">
                      {level}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <Button 
            size="sm" 
            className="h-7 w-7 p-0" 
            onClick={handleAddLanguage}
          >
            <Plus size={16} />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Linguagens;
