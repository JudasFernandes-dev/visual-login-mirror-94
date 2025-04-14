
import React, { useState } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Popover, PopoverTrigger, PopoverContent, ChatPopoverContent } from "@/components/ui/popover";
import { useToast } from "@/hooks/use-toast";
import { MoreHorizontal, X, Paperclip, Send, Search } from "lucide-react";

const LinkedInChat = () => {
  const { toast } = useToast();
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");
  
  const contacts = [
    {
      id: 1,
      name: "Ana Silva",
      avatar: "https://via.placeholder.com/40",
      lastMessage: "Olá! Vi seu projeto de UI/UX e adorei o trabalho.",
      time: "11 de abr.",
      online: true,
      unread: true
    },
    {
      id: 2,
      name: "Isabella Furbino",
      avatar: "https://via.placeholder.com/40",
      lastMessage: "Você tem problemas com Controle de Versão?",
      time: "7 de abr.",
      online: false,
      unread: false
    },
    {
      id: 3,
      name: "Fabrício Cantieri",
      avatar: "https://via.placeholder.com/40",
      lastMessage: "Seja bem vinda Jéssica, tudo bem?",
      time: "6 de abr.",
      online: true,
      unread: false
    },
    {
      id: 4,
      name: "Natan Tomé",
      avatar: "https://via.placeholder.com/40",
      lastMessage: "Você: Oi, Natan! Tudo certinho? Que massa!!!",
      time: "31 de mar.",
      online: true,
      unread: false
    }
  ];

  const handleSend = () => {
    if (message.trim()) {
      toast({
        title: "Mensagem enviada",
        description: "Sua mensagem foi enviada com sucesso!",
      });
      setMessage("");
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Popover open={isOpen} onOpenChange={setIsOpen}>
        <PopoverTrigger asChild>
          <Button 
            variant="outline" 
            className={`w-60 min-w-60 rounded-md p-3 shadow-lg border border-gray-300 ${isOpen ? 'bg-blue-100' : 'bg-white'} hover:bg-blue-50`}
          >
            <div className="flex items-center space-x-2">
              <Avatar className="h-8 w-8 border border-gray-300">
                <AvatarImage src="/lovable-uploads/63498272-71ed-42ba-8c2f-2666d4afa1fd.png" alt="Profile" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
              {!isOpen && (
                <>
                  <span className="font-medium text-gray-700">Mensagens</span>
                  <div className="h-2 w-2 bg-green-500 rounded-full absolute top-1 right-1"></div>
                </>
              )}
            </div>
          </Button>
        </PopoverTrigger>
        <ChatPopoverContent 
          className="p-0 w-80 h-[400px] flex flex-col rounded-t-lg shadow-xl border-gray-300"
          sideOffset={0}
        >
          <div className="border-b border-gray-200 p-3 flex justify-between items-center bg-gray-50">
            <div className="flex items-center space-x-2">
              <h3 className="font-medium text-gray-900">Mensagens</h3>
            </div>
            <div className="flex space-x-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="p-2 border-b border-gray-200">
            <div className="relative">
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
              <Input 
                placeholder="Pesquisar mensagens" 
                className="pl-8 py-1 h-8 text-sm"
              />
            </div>
            
            <div className="flex mt-2">
              <Button 
                variant="ghost"
                className="flex-1 py-1 h-8 text-sm border-b-2 border-blue-500 text-blue-700 rounded-none"
              >
                Prioritárias
              </Button>
              <Button 
                variant="ghost"
                className="flex-1 py-1 h-8 text-sm text-gray-500 rounded-none"
              >
                Outras
              </Button>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {contacts.map((contact) => (
              <div 
                key={contact.id}
                className={`flex items-center p-2 hover:bg-gray-100 cursor-pointer border-b border-gray-200 ${contact.unread ? 'bg-blue-50' : ''}`}
              >
                <div className="relative">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src={contact.avatar} alt={contact.name} />
                    <AvatarFallback>{contact.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  {contact.online && (
                    <div className="absolute bottom-0 right-0 h-2.5 w-2.5 bg-green-500 rounded-full border border-white"></div>
                  )}
                </div>
                <div className="ml-3 flex-1 min-w-0">
                  <div className="flex justify-between">
                    <p className={`font-medium text-sm truncate ${contact.unread ? 'text-black' : 'text-gray-700'}`}>{contact.name}</p>
                    <span className="text-xs text-gray-500">{contact.time}</span>
                  </div>
                  <p className={`text-xs truncate ${contact.unread ? 'text-gray-800' : 'text-gray-500'}`}>{contact.lastMessage}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="p-2 border-t border-gray-200 bg-white">
            <div className="flex items-center">
              <Input 
                placeholder="Escreva sua mensagem..."
                className="text-sm focus-visible:ring-0"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
              />
              <div className="flex ml-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Paperclip className="h-4 w-4 text-gray-500" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8" onClick={handleSend}>
                  <Send className="h-4 w-4 text-blue-500" />
                </Button>
              </div>
            </div>
          </div>
        </ChatPopoverContent>
      </Popover>
    </div>
  );
};

export default LinkedInChat;
