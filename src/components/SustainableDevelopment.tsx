
import React from "react";
import { Globe, Leaf, Zap, Cpu, Users, Heart } from "lucide-react";

const SustainableDevelopment = () => {
  const sustainableGoals = [
    {
      title: "Inovação e Infraestrutura",
      icon: <Cpu className="h-10 w-10 text-blue-600" />,
      description:
        "Através do desenvolvimento de software eficiente e acessível, contribuímos para construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação (ODS 9).",
      color: "border-blue-600",
      number: "9",
    },
    {
      title: "Consumo Responsável",
      icon: <Leaf className="h-10 w-10 text-green-600" />,
      description:
        "Desenvolvimento web sustentável significa criar sites e aplicações que consomem menos energia, otimizam recursos de servidor e minimizam desperdício digital (ODS 12).",
      color: "border-green-600",
      number: "12",
    },
    {
      title: "Energia Acessível e Limpa",
      icon: <Zap className="h-10 w-10 text-yellow-600" />,
      description:
        "Criando aplicações energeticamente eficientes e utilizando serviços de hospedagem verde, contribuímos para o objetivo de garantir acesso à energia confiável, sustentável e moderna para todos (ODS 7).",
      color: "border-yellow-600",
      number: "7",
    },
    {
      title: "Parcerias e Meios de Implementação",
      icon: <Users className="h-10 w-10 text-purple-600" />,
      description:
        "A comunidade de desenvolvimento web promove o compartilhamento de conhecimento, tecnologias e colaboração internacional para alcançar os objetivos sustentáveis globais (ODS 17).",
      color: "border-purple-600",
      number: "17",
    },
  ];

  const practices = [
    {
      title: "Otimização de Performance",
      description: "Reduzir o consumo de energia através de código otimizado e carregamento eficiente."
    },
    {
      title: "Hospedagem Verde",
      description: "Utilizar provedores de hospedagem que usam fontes de energia renovável."
    },
    {
      title: "Design Acessível",
      description: "Criar sites inclusivos que possam ser usados por pessoas com diferentes habilidades."
    },
    {
      title: "Redução da Pegada Digital",
      description: "Minimizar o tamanho de arquivos e otimizar recursos para reduzir o impacto ambiental."
    },
  ];

  return (
    <section className="page-section bg-gray-50" id="sustainable-development">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="inline-block p-2 bg-green-100 rounded-full mb-4">
            <Globe className="h-8 w-8 text-green-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Desenvolvimento Web e Sustentabilidade
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Como o desenvolvimento web pode contribuir para os Objetivos de 
            Desenvolvimento Sustentável (ODS) da ONU e criar um futuro digital mais verde.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {sustainableGoals.map((goal, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-8 border-l-4 ${goal.color} shadow-sm hover:shadow-md transition-all duration-300`}
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="bg-gray-100 h-16 w-16 rounded-full flex items-center justify-center">
                    {goal.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 flex items-center">
                    <span className="bg-primary text-white text-sm rounded-full h-6 w-6 flex items-center justify-center mr-2">
                      {goal.number}
                    </span>
                    {goal.title}
                  </h3>
                  <p className="text-gray-600">{goal.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <h3 className="text-2xl font-bold mb-6 text-primary flex items-center">
            <Heart className="h-6 w-6 text-accent mr-2" />
            Práticas Sustentáveis em Desenvolvimento Web
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {practices.map((practice, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-6 hover:border-green-300 transition-colors">
                <h4 className="font-bold text-lg mb-2 text-gray-800">{practice.title}</h4>
                <p className="text-gray-600">{practice.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 bg-green-50 p-6 rounded-lg">
            <h4 className="font-bold text-lg mb-3 text-green-800">Impacto do Desenvolvimento Web Sustentável</h4>
            <p className="text-gray-700">
              Um site médio pode produzir cerca de 1,76g de CO2 por visualização de página. 
              Para um site com 10.000 visualizações mensais, isso representa 211kg de CO2 por ano. 
              Adotar práticas sustentáveis em desenvolvimento web pode reduzir significativamente 
              esta pegada de carbono, contribuindo para um futuro digital mais limpo e sustentável.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainableDevelopment;
