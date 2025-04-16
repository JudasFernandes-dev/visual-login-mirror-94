
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Save, User, Briefcase, MapPin, Mail, Phone, Linkedin, Github, Globe, Eye } from "lucide-react";
import Sidebar from "@/components/layout/Sidebar";

const profileFormSchema = z.object({
  name: z.string().min(2, { message: "Nome deve ter pelo menos 2 caracteres" }),
  headline: z.string().optional(),
  location: z.string().optional(),
  email: z.string().email({ message: "Email inválido" }),
  phone: z.string().optional(),
  about: z.string().optional(),
  linkedin: z.string().optional(),
  github: z.string().optional(),
  website: z.string().optional(),
  visibility: z.enum(["todos", "conexoes", "apenas-eu"], {
    required_error: "Por favor selecione uma opção de visibilidade",
  }),
});

type ProfileFormValues = z.infer<typeof profileFormSchema>;

const defaultValues: Partial<ProfileFormValues> = {
  name: "Jane Doe",
  headline: "Desenvolvedora de Software",
  location: "São Paulo, Brasil",
  email: "jane.doe@example.com",
  phone: "(11) 98765-4321",
  about: "Desenvolvedora full-stack com experiência em React, Node.js e bancos de dados relacionais e não relacionais.",
  linkedin: "linkedin.com/in/janedoe",
  github: "github.com/janedoe",
  website: "janedoe.dev",
  visibility: "todos",
};

const EditarPerfil = () => {
  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
  });

  const onSubmit = (data: ProfileFormValues) => {
    console.log("Form submitted:", data);
    // Implement save functionality here
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl font-bold mb-6 text-gray-800">Configurações do Perfil</h1>
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Informações Básicas */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <User size={20} />
                    Informações Básicas
                  </CardTitle>
                  <CardDescription>
                    Configure as informações principais do seu perfil
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-24 w-24 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden border-2 border-white shadow">
                      <img 
                        src="/lovable-uploads/63498272-71ed-42ba-8c2f-2666d4afa1fd.png" 
                        alt="Profile" 
                        className="h-full w-full object-cover" 
                      />
                    </div>
                    <div>
                      <Button variant="outline" size="sm" className="mb-2">
                        Alterar foto
                      </Button>
                      <p className="text-xs text-gray-500">
                        Recomendado: Imagem quadrada, JPG ou PNG, máximo 5MB
                      </p>
                    </div>
                  </div>
                
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nome*</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="headline"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Título profissional</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>
                          Apareça abaixo do seu nome no perfil
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Informações de Contato */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Mail size={20} />
                    Informações de Contato
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email*</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Telefone</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Localização</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormDescription>
                          Ex: São Paulo, Brasil
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Sobre */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <User size={20} />
                    Sobre
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="about"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Biografia</FormLabel>
                        <FormControl>
                          <Textarea 
                            {...field} 
                            className="min-h-32"
                            placeholder="Descreva suas experiências, habilidades e objetivos"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Links */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Globe size={20} />
                    Links
                  </CardTitle>
                  <CardDescription>
                    Adicione links para seus perfis em redes sociais e sites
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="linkedin"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Linkedin size={16} />
                          LinkedIn
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="linkedin.com/in/seuperfil" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="github"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Github size={16} />
                          GitHub
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="github.com/seuperfil" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="website"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="flex items-center gap-2">
                          <Globe size={16} />
                          Website
                        </FormLabel>
                        <FormControl>
                          <Input {...field} placeholder="seusite.com" />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>

              {/* Visibilidade */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <Eye size={20} />
                    Visibilidade do Perfil
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <FormField
                    control={form.control}
                    name="visibility"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <RadioGroup
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                            className="space-y-3"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="todos" id="todos" />
                              <FormLabel htmlFor="todos" className="font-normal cursor-pointer">
                                Todos podem ver meu perfil
                              </FormLabel>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="conexoes" id="conexoes" />
                              <FormLabel htmlFor="conexoes" className="font-normal cursor-pointer">
                                Apenas minhas conexões podem ver meu perfil completo
                              </FormLabel>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="apenas-eu" id="apenas-eu" />
                              <FormLabel htmlFor="apenas-eu" className="font-normal cursor-pointer">
                                Apenas eu posso ver meu perfil completo
                              </FormLabel>
                            </div>
                          </RadioGroup>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button type="submit" className="flex gap-2 bg-blue-500 hover:bg-blue-600">
                    <Save size={16} />
                    Salvar alterações
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default EditarPerfil;
