
import React, { useState } from "react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    senha: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para autenticar
    console.log("Login submetido:", formData);
    
    // Mostrar mensagem de sucesso
    toast.success("Login realizado com sucesso!");
    
    // Limpar o formulário de senha (mantém o email)
    setFormData(prevState => ({
      ...prevState,
      senha: ""
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6">
      <div>
        <Label htmlFor="email" className="text-gray-800 font-medium">
          Email
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite seu email"
          className="mt-1 w-full"
          required
        />
      </div>

      <div>
        <Label htmlFor="senha" className="text-gray-800 font-medium">
          Senha
        </Label>
        <Input
          type="password"
          id="senha"
          name="senha"
          value={formData.senha}
          onChange={handleChange}
          placeholder="Digite sua senha"
          className="mt-1 w-full"
          required
        />
      </div>

      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="lembrar"
            className="mr-2 h-4 w-4 text-contato-laranja"
          />
          <label htmlFor="lembrar" className="text-gray-600">Lembrar-me</label>
        </div>
        <a href="#" className="text-contato-azul hover:underline">
          Esqueceu sua senha?
        </a>
      </div>

      <button
        type="submit"
        className="w-full bg-contato-laranja text-white py-3 rounded-md font-medium hover:bg-opacity-90 transition-all"
      >
        Entrar
      </button>

      <div className="text-center mt-4 text-gray-600">
        Não tem uma conta? <a href="#" className="text-contato-azul hover:underline">Cadastre-se</a>
      </div>
    </form>
  );
};

export default LoginForm;
