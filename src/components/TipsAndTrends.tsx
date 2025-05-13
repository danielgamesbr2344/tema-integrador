
import React from "react";
import { Button } from "@/components/ui/button";
import { TrendingUp, Award, Book, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TipsAndTrends = () => {
  const trends = [
    {
      id: 1,
      title: "Inteligência Artificial no Desenvolvimento",
      description:
        "A IA está transformando o desenvolvimento web com ferramentas de código assistido, testes automatizados e otimização de desempenho.",
      icon: <TrendingUp className="h-10 w-10 text-secondary" />,
    },
    {
      id: 2,
      title: "Arquiteturas Headless e JAMstack",
      description:
        "Separar o front-end do back-end permite maior flexibilidade, melhor desempenho e segurança aprimorada para aplicações web modernas.",
      icon: <Lightbulb className="h-10 w-10 text-secondary" />,
    },
    {
      id: 3,
      title: "WebAssembly e Aplicações de Alto Desempenho",
      description:
        "WebAssembly está abrindo novas possibilidades para aplicações web de alto desempenho, aproximando a velocidade de aplicações nativas.",
      icon: <TrendingUp className="h-10 w-10 text-secondary" />,
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Developer",
      provider: "Amazon Web Services",
      focus: "Cloud e serviços AWS",
    },
    {
      name: "Meta Front-End Developer",
      provider: "Meta (Facebook)",
      focus: "React e desenvolvimento front-end",
    },
    {
      name: "Google Professional Cloud Developer",
      provider: "Google Cloud",
      focus: "Desenvolvimento em ambientes cloud",
    },
    {
      name: "Microsoft Certified: Azure Developer Associate",
      provider: "Microsoft",
      focus: "Desenvolvimento com Microsoft Azure",
    },
  ];

  const learningResources = [
    "freeCodeCamp - Cursos gratuitos com certificados",
    "The Odin Project - Currículo completo de desenvolvimento web",
    "MDN Web Docs - Documentação de qualidade para web",
    "Codecademy - Aprendizado interativo de programação",
    "CS50 - Curso introdutório de Harvard sobre ciência da computação",
  ];

  return (
    <section className="page-section bg-gray-50" id="tips-trends">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Dicas e Tendências
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Mantenha-se atualizado com as últimas tendências em desenvolvimento web
            e descubra recursos valiosos para impulsionar sua carreira.
          </p>
        </div>

        {/* Trends Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {trends.map((trend) => (
            <div
              key={trend.id}
              className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="bg-secondary-100 p-4 inline-block rounded-lg mb-6">
                {trend.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">
                {trend.title}
              </h3>
              <p className="text-gray-600">{trend.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="bg-white rounded-lg p-8 border border-gray-100 shadow-sm mb-16">
          <div className="flex items-center mb-6">
            <Award className="h-10 w-10 text-primary mr-4" />
            <h3 className="text-2xl font-bold text-primary">
              Certificações Relevantes
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="p-4 border border-gray-100 rounded-lg hover:border-secondary transition-colors"
              >
                <h4 className="font-bold text-lg mb-1">{cert.name}</h4>
                <p className="text-gray-600 mb-2">Provedor: {cert.provider}</p>
                <p className="text-secondary text-sm">Foco: {cert.focus}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="bg-primary-50 rounded-lg p-8 mb-8">
          <div className="flex items-center mb-6">
            <Book className="h-10 w-10 text-primary mr-4" />
            <h3 className="text-2xl font-bold text-primary">
              Recursos de Aprendizado
            </h3>
          </div>
          <ul className="space-y-4">
            {learningResources.map((resource, index) => (
              <li
                key={index}
                className="flex items-center text-gray-700 bg-white p-4 rounded-lg border border-gray-100"
              >
                <span className="bg-primary-100 text-primary w-8 h-8 flex items-center justify-center rounded-full mr-4">
                  {index + 1}
                </span>
                {resource}
              </li>
            ))}
          </ul>
        </div>

        <div className="text-center">
          <Button asChild size="lg" className="bg-secondary hover:bg-secondary-600">
            <Link to="/tips">
              Explorar Mais Dicas
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TipsAndTrends;
