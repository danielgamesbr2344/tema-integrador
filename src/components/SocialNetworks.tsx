
import React from "react";
import { Github, Instagram, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const SocialNetworks = () => {
  const socialLinks = [
    {
      name: "GitHub",
      username: "DanielFlox1",
      url: "https://github.com/DanielFlox1",
      icon: <Github className="h-6 w-6" />,
      color: "bg-gray-800",
      hoverColor: "hover:bg-gray-700",
    },
    {
      name: "Instagram",
      username: "daniel_silva913",
      url: "https://instagram.com/daniel_silva913",
      icon: <Instagram className="h-6 w-6" />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      hoverColor: "hover:from-purple-600 hover:to-pink-600",
    },
    {
      name: "Email",
      username: "Contate-me",
      url: "mailto:daniel011040.mdq@gmail.com",
      icon: <Mail className="h-6 w-6" />,
      color: "bg-blue-600",
      hoverColor: "hover:bg-blue-700",
    },
  ];

  return (
    <section className="page-section bg-white" id="social-networks">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Redes e Contatos
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Conecte-se comigo nas redes sociais para ver meus projetos, 
            acompanhar meu trabalho e trocar experiências sobre desenvolvimento web.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {socialLinks.map((link) => (
            <div
              key={link.name}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className={`${link.color} text-white p-6 text-center`}>
                {link.icon}
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">{link.name}</h3>
                <p className="text-gray-600 mb-4">@{link.username}</p>
                <Button 
                  asChild 
                  variant="outline" 
                  className={`w-full border-gray-300 ${link.hoverColor} hover:text-white`}
                >
                  <a 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center"
                  >
                    Visitar
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-primary-50 rounded-lg p-8 text-center max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-primary">Vamos Colaborar!</h3>
          <p className="text-gray-700 mb-6">
            Estou sempre interessado em novos projetos e oportunidades de colaboração.
            Se você está procurando um desenvolvedor web ou simplesmente quer trocar ideias
            sobre tecnologia, não hesite em entrar em contato.
          </p>
          <Button 
            asChild
            size="lg" 
            className="bg-primary hover:bg-primary-600"
          >
            <a href="mailto:daniel011040.mdq@gmail.com">
              Enviar Mensagem
              <Mail size={18} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SocialNetworks;
