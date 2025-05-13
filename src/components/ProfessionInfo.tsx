
import React from "react";
import { Code, Layout, Database, Server, Zap } from "lucide-react";

const ProfessionInfo = () => {
  const careerPaths = [
    {
      title: "Front-end Developer",
      icon: <Layout className="h-10 w-10 text-primary" />,
      description:
        "Especialista em criar interfaces de usuário interativas e responsivas usando HTML, CSS, JavaScript e frameworks modernos como React, Angular e Vue.",
      skills: ["HTML/CSS", "JavaScript", "React", "UI/UX", "Responsividade"],
    },
    {
      title: "Back-end Developer",
      icon: <Server className="h-10 w-10 text-primary" />,
      description:
        "Focado na lógica do servidor, criação de APIs e integração com bancos de dados usando tecnologias como Node.js, Python, Java ou PHP.",
      skills: ["Node.js", "Python", "APIs", "Segurança", "Arquitetura"],
    },
    {
      title: "Full-stack Developer",
      icon: <Code className="h-10 w-10 text-primary" />,
      description:
        "Profissional versátil que trabalha tanto no front-end quanto no back-end, dominando diversas tecnologias e entendendo o fluxo completo de desenvolvimento.",
      skills: ["Front-end", "Back-end", "DevOps", "Arquitetura", "Integração"],
    },
    {
      title: "Database Specialist",
      icon: <Database className="h-10 w-10 text-primary" />,
      description:
        "Especialista em modelagem, otimização e administração de bancos de dados, garantindo performance e segurança dos dados.",
      skills: ["SQL", "NoSQL", "Modelagem", "Performance", "Segurança"],
    },
    {
      title: "DevOps Engineer",
      icon: <Zap className="h-10 w-10 text-primary" />,
      description:
        "Combina desenvolvimento e operações de TI para automatizar processos de integração e entrega contínua, melhorando a eficiência do desenvolvimento.",
      skills: ["CI/CD", "Docker", "Cloud", "Monitoramento", "Automação"],
    },
  ];

  return (
    <section className="page-section bg-white" id="profession-info">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Desenvolvimento Web: Uma Carreira Multifacetada
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            O desenvolvimento web é uma área dinâmica com diversos caminhos de carreira, 
            tecnologias e especialidades. Conheça as principais vertentes e descubra qual 
            se alinha melhor com seus interesses e habilidades.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {careerPaths.map((path, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="bg-primary-100 p-4 inline-block rounded-lg mb-6">
                {path.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-primary-800">
                {path.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {path.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {path.skills.map((skill, idx) => (
                  <span 
                    key={idx} 
                    className="bg-primary-100 text-primary-700 text-sm px-3 py-1 rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-primary-50 p-8 rounded-lg">
          <h3 className="text-2xl font-bold mb-4 text-primary-800">Por que escolher desenvolvimento web?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-lg mb-2 text-primary-700">Alta demanda no mercado</h4>
              <p className="text-gray-700">
                O mundo digital está em constante expansão, criando uma necessidade contínua por 
                profissionais qualificados em desenvolvimento web, com boas oportunidades de emprego e remuneração.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-primary-700">Flexibilidade de trabalho</h4>
              <p className="text-gray-700">
                A área oferece possibilidades de trabalho remoto, freelancer ou em regime híbrido, 
                proporcionando maior equilíbrio entre vida pessoal e profissional.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-primary-700">Aprendizado contínuo</h4>
              <p className="text-gray-700">
                A tecnologia evolui rapidamente, o que significa que você estará sempre aprendendo 
                novas ferramentas e técnicas, mantendo sua carreira dinâmica e interessante.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-primary-700">Impacto real</h4>
              <p className="text-gray-700">
                Desenvolvedores web criam soluções que impactam milhões de pessoas, contribuindo 
                para resolver problemas reais através da tecnologia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionInfo;
