
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Github, Instagram, Mail, Share2, ExternalLink, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      username: "DanielFlox1",
      url: "https://github.com/DanielFlox1",
      icon: <Github className="h-12 w-12" />,
      color: "bg-gray-800",
      textColor: "text-gray-800",
      description: "Confira meus projetos e repositórios de código",
      bgColor: "bg-gray-50",
    },
    {
      name: "Instagram",
      username: "daniel_silva913",
      url: "https://instagram.com/daniel_silva913",
      icon: <Instagram className="h-12 w-12" />,
      color: "bg-gradient-to-r from-purple-500 to-pink-500",
      textColor: "text-pink-600",
      description: "Siga-me para acompanhar atualizações e conteúdos sobre desenvolvimento web",
      bgColor: "bg-pink-50",
    }
  ];

  const communities = [
    {
      name: "Stack Overflow",
      url: "https://stackoverflow.com/",
      description: "Faça e responda perguntas técnicas",
    },
    {
      name: "Dev.to",
      url: "https://dev.to/",
      description: "Comunidade de desenvolvedores com diversos artigos",
    },
    {
      name: "GitHub Discussions",
      url: "https://github.com/features/discussions",
      description: "Participe de discussões em projetos open source",
    },
    {
      name: "Reddit r/webdev",
      url: "https://www.reddit.com/r/webdev/",
      description: "Subreddit para discussões sobre desenvolvimento web",
    },
  ];

  const events = [
    {
      name: "Meetups de Tecnologia",
      description: "Encontros locais de desenvolvedores para networking e aprendizado",
      url: "https://www.meetup.com/",
    },
    {
      name: "Conferências Web",
      description: "JSConf, React Conf, Vue Conf e outras conferências de tecnologias web",
      url: "https://confs.tech/",
    },
    {
      name: "Hackathons",
      description: "Competições para desenvolver soluções criativas em tempo limitado",
      url: "https://devpost.com/hackathons",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Redes e Contatos
            </h1>
            <p className="text-xl max-w-3xl">
              Conecte-se comigo através das redes sociais e descubra comunidades 
              para expandir seu networking no mundo do desenvolvimento web.
            </p>
          </div>
        </section>

        {/* Social Networks */}
        <section className="page-section bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Minhas Redes Sociais
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {socialLinks.map((social) => (
                <div
                  key={social.name}
                  className={`${social.bgColor} rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300`}
                >
                  <div className={`${social.color} text-white p-8 flex justify-center`}>
                    {social.icon}
                  </div>
                  <div className="p-8 text-center">
                    <h3 className={`text-2xl font-bold mb-1 ${social.textColor}`}>
                      {social.name}
                    </h3>
                    <p className="text-gray-600 mb-4 font-medium">@{social.username}</p>
                    <p className="text-gray-700 mb-6">
                      {social.description}
                    </p>
                    <Button asChild variant="outline" className="w-full">
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center"
                      >
                        Visitar Perfil
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-16 max-w-2xl mx-auto text-center">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-600">
                <a href="mailto:daniel011040.mdq@gmail.com" className="flex items-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Entre em Contato via Email
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Communities Section */}
        <section className="page-section bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Share2 className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-primary mb-4">
                Comunidades Recomendadas
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Participe dessas comunidades para expandir seu network, aprender 
                com outros desenvolvedores e compartilhar conhecimento.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {communities.map((community, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-2 text-primary-800">
                    {community.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{community.description}</p>
                  <div className="flex justify-end">
                    <Button asChild variant="ghost" className="text-secondary hover:text-secondary-600 hover:bg-secondary-50 -mr-2">
                      <a
                        href={community.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        Visitar
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section className="page-section bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-primary mb-4">
                Eventos de Networking
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Participe de eventos presenciais e online para conhecer outros 
                profissionais e ampliar sua rede de contatos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {events.map((event, index) => (
                <div key={index} className="bg-primary-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-primary-800">
                    {event.name}
                  </h3>
                  <p className="text-gray-700 mb-4">{event.description}</p>
                  <Button asChild variant="link" className="text-primary p-0 h-auto">
                    <a
                      href={event.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center"
                    >
                      Saiba Mais
                      <ExternalLink size={14} className="ml-1" />
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
