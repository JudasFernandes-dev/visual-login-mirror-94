
import React, { useState } from "react";
import { toast } from "sonner";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    mensagem: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você adicionaria a lógica para enviar o formulário
    console.log("Formulário enviado:", formData);
    
    // Mostrar mensagem de sucesso
    toast.success("Mensagem enviada com sucesso!");
    
    // Limpar o formulário
    setFormData({
      nome: "",
      email: "",
      mensagem: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg">
      <div className="mb-6">
        <label htmlFor="nome" className="block text-gray-800 mb-2">
          Nome:
        </label>
        <input
          type="text"
          id="nome"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          placeholder="Digite seu nome"
          required
          className="w-full border border-gray-300 rounded p-3"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="email" className="block text-gray-800 mb-2">
          E-mail:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Digite seu e-mail"
          required
          className="w-full border border-gray-300 rounded p-3"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="mensagem" className="block text-gray-800 mb-2">
          Mensagem:
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          value={formData.mensagem}
          onChange={handleChange}
          placeholder="Digite sua mensagem"
          required
          className="w-full border border-gray-300 rounded p-3 h-32"
        />
      </div>

      <button
        type="submit"
        className="bg-contato-laranja text-white px-6 py-3 rounded font-medium hover:bg-opacity-90 transition-all"
      >
        Enviar Mensagem
      </button>
    </form>
  );
};

export default ContactForm;
