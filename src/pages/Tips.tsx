
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Lightbulb, TrendingUp, Award, Book, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Tips = () => {
  const tipsCategories = [
    {
      title: "Para Iniciantes",
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      tips: [
        "Comece com os fundamentos: HTML, CSS e JavaScript",
        "Construa projetos pequenos e pratique regularmente",
        "Use recursos gratuitos como freeCodeCamp e MDN",
        "Participe de comunidades online como Dev.to e Stack Overflow",
        "Não tente aprender tudo de uma vez, foque em uma coisa por vez"
      ]
    },
    {
      title: "Crescimento Profissional",
      icon: <TrendingUp className="h-10 w-10 text-primary" />,
      tips: [
        "Construa um portfólio impressionante com projetos diversos",
        "Contribua para projetos open source no GitHub",
        "Networking: participe de eventos e meetups da área",
        "Mantenha-se atualizado com newsletters e blogs técnicos",
        "Busque feedback constante sobre seu código e projetos"
      ]
    },
    {
      title: "Aprendizado Contínuo",
      icon: <Book className="h-10 w-10 text-primary" />,
      tips: [
        "Reserve tempo semanalmente para aprender algo novo",
        "Siga desenvolvedores influentes nas redes sociais",
        "Experimente hackathons para testar suas habilidades",
        "Leia documentação oficial de linguagens e frameworks",
        "Ensine outros: explicar conceitos ajuda a solidificar conhecimento"
      ]
    }
  ];

  const latestTrends = [
    {
      title: "Web Components",
      description: "Elementos personalizados reutilizáveis para interfaces web independentes de framework."
    },
    {
      title: "Progressive Web Apps (PWAs)",
      description: "Aplicações web que funcionam como apps nativos, com funcionalidades offline e melhor desempenho."
    },
    {
      title: "Jamstack",
      description: "Arquitetura baseada em JavaScript, APIs e Markup pré-renderizado para sites mais rápidos e seguros."
    },
    {
      title: "Serverless",
      description: "Desenvolvimento sem preocupação com infraestrutura, usando funções como serviço (FaaS)."
    },
    {
      title: "Web3 e Blockchain",
      description: "Aplicações descentralizadas e desenvolvimento baseado em tecnologia blockchain."
    },
    {
      title: "Design Systems",
      description: "Coleção de componentes reutilizáveis guiados por padrões claros para desenvolvimento consistente."
    },
  ];

  const recommendedTools = [
    { name: "VS Code", category: "Editor de código", url: "https://code.visualstudio.com/" },
    { name: "GitHub", category: "Controle de versão", url: "https://github.com/" },
    { name: "Figma", category: "Design", url: "https://www.figma.com/" },
    { name: "Chrome DevTools", category: "Debugging", url: "https://developers.google.com/web/tools/chrome-devtools" },
    { name: "Vercel", category: "Hospedagem", url: "https://vercel.com/" },
    { name: "Postman", category: "Teste de API", url: "https://www.postman.com/" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Dicas e Tendências
            </h1>
            <p className="text-xl max-w-3xl">
              Descubra as melhores práticas, tendências emergentes e conselhos valiosos 
              para impulsionar sua carreira em desenvolvimento web.
            </p>
          </div>
        </section>

        {/* Tips Sections */}
        <section className="page-section bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Dicas para Desenvolvedores
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {tipsCategories.map((category, index) => (
                <div key={index} className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
                  <div className="bg-primary-100 p-4 inline-block rounded-lg mb-6">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-6 text-primary-800">
                    {category.title}
                  </h3>
                  <ul className="space-y-3">
                    {category.tips.map((tip, idx) => (
                      <li key={idx} className="flex items-start">
                        <ArrowRight className="h-5 w-5 text-secondary mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Latest Trends */}
        <section className="page-section bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <TrendingUp className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-primary mb-4">
                Tendências Atuais
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                O mundo do desenvolvimento web evolui constantemente. 
                Fique por dentro das tecnologias e abordagens emergentes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {latestTrends.map((trend, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold mb-3 text-primary-800">
                    {trend.title}
                  </h3>
                  <p className="text-gray-700">{trend.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild className="bg-secondary hover:bg-secondary-600">
                <a 
                  href="https://stateofjs.com/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Explorar Mais Tendências
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Recommended Tools */}
        <section className="page-section bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Ferramentas Recomendadas
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {recommendedTools.map((tool, index) => (
                <a 
                  key={index}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <h3 className="text-lg font-bold mb-2 text-primary-800">
                    {tool.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{tool.category}</p>
                  <div className="flex justify-end">
                    <span className="text-secondary text-sm flex items-center">
                      Visitar
                      <ArrowRight className="h-4 w-4 ml-1" />
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Resources */}
        <section className="page-section bg-primary-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Award className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-primary mb-4">
                Recursos de Aprendizado
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Confira esses excelentes recursos para aprimorar suas habilidades e manter-se atualizado.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-primary-800">Plataformas de Cursos</h3>
                <ul className="space-y-4">
                  <li className="border-b border-gray-100 pb-4">
                    <a 
                      href="https://www.freecodecamp.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-secondary transition-colors"
                    >
                      freeCodeCamp
                    </a>
                    <p className="text-gray-600 text-sm">Certificações gratuitas em desenvolvimento web.</p>
                  </li>
                  <li className="border-b border-gray-100 pb-4">
                    <a 
                      href="https://www.udemy.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-secondary transition-colors"
                    >
                      Udemy
                    </a>
                    <p className="text-gray-600 text-sm">Cursos acessíveis sobre praticamente qualquer tecnologia web.</p>
                  </li>
                  <li className="border-b border-gray-100 pb-4">
                    <a 
                      href="https://www.coursera.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-secondary transition-colors"
                    >
                      Coursera
                    </a>
                    <p className="text-gray-600 text-sm">Cursos universitários de alta qualidade em ciência da computação.</p>
                  </li>
                  <li>
                    <a 
                      href="https://www.theodinproject.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-secondary transition-colors"
                    >
                      The Odin Project
                    </a>
                    <p className="text-gray-600 text-sm">Currículo completo e gratuito para desenvolvimento web.</p>
                  </li>
                </ul>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-6 text-primary-800">Documentação e Referências</h3>
                <ul className="space-y-4">
                  <li className="border-b border-gray-100 pb-4">
                    <a 
                      href="https://developer.mozilla.org/pt-BR/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-secondary transition-colors"
                    >
                      MDN Web Docs
                    </a>
                    <p className="text-gray-600 text-sm">A melhor documentação sobre tecnologias web.</p>
                  </li>
                  <li className="border-b border-gray-100 pb-4">
                    <a 
                      href="https://css-tricks.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-secondary transition-colors"
                    >
                      CSS-Tricks
                    </a>
                    <p className="text-gray-600 text-sm">Artigos e tutoriais sobre CSS e design web.</p>
                  </li>
                  <li className="border-b border-gray-100 pb-4">
                    <a 
                      href="https://javascript.info/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-secondary transition-colors"
                    >
                      JavaScript.info
                    </a>
                    <p className="text-gray-600 text-sm">Tutorial moderno de JavaScript do básico ao avançado.</p>
                  </li>
                  <li>
                    <a 
                      href="https://web.dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold hover:text-secondary transition-colors"
                    >
                      web.dev
                    </a>
                    <p className="text-gray-600 text-sm">Orientações do Google para criação de sites modernos.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Tips;
