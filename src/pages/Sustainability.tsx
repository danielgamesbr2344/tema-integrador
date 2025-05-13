
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Globe, Leaf, Zap, Cpu, Users, Heart, Check, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const Sustainability = () => {
  const sustainableGoals = [
    {
      id: 9,
      title: "Inovação e Infraestrutura",
      icon: <Cpu className="h-12 w-12 text-blue-600" />,
      description:
        "O desenvolvimento web contribui diretamente para a inovação tecnológica e construção de infraestruturas resilientes através de plataformas digitais acessíveis.",
      color: "border-blue-600 bg-blue-50",
      practices: [
        "Desenvolver plataformas que democratizem o acesso à tecnologia",
        "Criar soluções inovadoras para problemas sociais",
        "Construir infraestrutura digital para comunidades carentes"
      ]
    },
    {
      id: 4,
      title: "Educação de Qualidade",
      icon: <Book className="h-12 w-12 text-green-600" />,
      description:
        "Plataformas de aprendizado online e recursos educacionais digitais estão expandindo o acesso à educação de qualidade globalmente.",
      color: "border-green-600 bg-green-50",
      practices: [
        "Desenvolver plataformas educacionais acessíveis",
        "Criar conteúdo educativo gratuito sobre tecnologia",
        "Apoiar iniciativas de inclusão digital em escolas"
      ]
    },
    {
      id: 8,
      title: "Trabalho Decente e Crescimento Econômico",
      icon: <TrendingUp className="h-12 w-12 text-yellow-600" />,
      description:
        "O setor de desenvolvimento web gera empregos de qualidade e fomenta o crescimento econômico sustentável através da inovação digital.",
      color: "border-yellow-600 bg-yellow-50",
      practices: [
        "Promover práticas laborais justas na indústria tech",
        "Criar oportunidades de trabalho remoto em regiões carentes",
        "Desenvolver tecnologias que impulsionem pequenos negócios"
      ]
    },
    {
      id: 10,
      title: "Redução das Desigualdades",
      icon: <Users className="h-12 w-12 text-orange-600" />,
      description:
        "Tecnologias web acessíveis podem reduzir desigualdades ao fornecer oportunidades de aprendizado e trabalho independentemente da localização geográfica.",
      color: "border-orange-600 bg-orange-50",
      practices: [
        "Desenvolver sites e apps com design universal e acessível",
        "Criar soluções para áreas rurais ou com infraestrutura limitada",
        "Apoiar iniciativas de inclusão digital para idosos"
      ]
    }
  ];

  const sustainableTips = [
    {
      title: "Otimize o desempenho",
      description: "Websites otimizados consomem menos energia nos servidores e dispositivos dos usuários.",
      icon: <Zap className="h-6 w-6 text-yellow-600" />
    },
    {
      title: "Use hospedagem verde",
      description: "Escolha provedores de hospedagem que usam energia renovável para seus data centers.",
      icon: <Leaf className="h-6 w-6 text-green-600" />
    },
    {
      title: "Implemente design responsivo",
      description: "Sites responsivos funcionam bem em dispositivos antigos, reduzindo a necessidade de atualizações de hardware.",
      icon: <Smartphone className="h-6 w-6 text-blue-600" />
    },
    {
      title: "Minimize transferência de dados",
      description: "Otimize imagens e recursos para reduzir o consumo de largura de banda e energia.",
      icon: <Download className="h-6 w-6 text-purple-600" />
    }
  ];

  function Book(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
      </svg>
    )
  }

  function Download(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" x2="12" y1="15" y2="3" />
      </svg>
    )
  }
  
  function Smartphone(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    )
  }
  
  function TrendingUp(props: any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
        <polyline points="16 7 22 7 22 13" />
      </svg>
    )
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-600 to-primary text-white py-20">
          <div className="container-custom">
            <div className="flex items-center justify-center mb-6">
              <Globe className="h-16 w-16 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold">
                Desenvolvimento Web Sustentável
              </h1>
            </div>
            <p className="text-xl max-w-3xl mx-auto text-center">
              Como o setor de desenvolvimento web contribui para os Objetivos de 
              Desenvolvimento Sustentável (ODS) da ONU e promove um futuro mais verde.
            </p>
          </div>
        </section>

        {/* Introduction */}
        <section className="page-section bg-white">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-primary mb-6">
                A Interseção entre Tecnologia e Sustentabilidade
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Embora possa não parecer óbvio à primeira vista, o desenvolvimento web 
                tem um papel significativo na construção de um mundo mais sustentável. 
                Através de tecnologias eficientes, soluções digitais que reduzem o consumo 
                de recursos físicos, e plataformas que promovem educação e conscientização, 
                desenvolvedores web contribuem para diversos Objetivos de Desenvolvimento 
                Sustentável (ODS) da ONU.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                A indústria digital não apenas impulsiona a inovação e o crescimento econômico, 
                mas também oferece ferramentas poderosas para enfrentar desafios ambientais e 
                sociais urgentes, desde a redução da pegada de carbono até a promoção da inclusão 
                e acessibilidade.
              </p>
            </div>
            <div className="flex justify-center">
              <img 
                src="https://placehold.co/1200x400/e9f7ef/0F3460?text=Desenvolvimento+Sustentável"
                alt="Objetivos de Desenvolvimento Sustentável" 
                className="rounded-lg shadow-md max-w-full"
              />
            </div>
          </div>
        </section>

        {/* ODS Section */}
        <section className="page-section bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <Heart className="h-12 w-12 text-accent mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-primary mb-4">
                Contribuindo para os ODS
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Conheça como o desenvolvimento web conecta-se diretamente 
                a vários Objetivos de Desenvolvimento Sustentável da ONU.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sustainableGoals.map((goal) => (
                <div
                  key={goal.id}
                  className={`rounded-lg p-8 shadow-sm ${goal.color}`}
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4 bg-white p-3 rounded-full shadow-sm">
                      {goal.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2">
                        <span className="bg-primary text-white text-sm rounded-full h-6 w-6 inline-flex items-center justify-center mr-2">
                          {goal.id}
                        </span>
                        {goal.title}
                      </h3>
                      <p className="text-gray-700 mb-4">{goal.description}</p>
                      <ul className="space-y-2">
                        {goal.practices.map((practice, idx) => (
                          <li key={idx} className="flex items-center">
                            <Check className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                            <span className="text-gray-800">{practice}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sustainable Practices */}
        <section className="page-section bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Práticas Sustentáveis no Desenvolvimento Web
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
              {sustainableTips.map((tip, index) => (
                <div key={index} className="flex">
                  <div className="bg-gray-50 p-4 rounded-lg mr-4">
                    {tip.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2 text-primary-800">
                      {tip.title}
                    </h3>
                    <p className="text-gray-700">{tip.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 p-8 rounded-lg max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-primary">
                O Impacto da Eficiência Digital
              </h3>
              <p className="text-gray-700 mb-4">
                Um site típico pode gerar entre 1,76g a 2,5g de CO₂ por visualização 
                de página. Para um site com 10.000 visitas mensais, isso representa 
                cerca de 211 kg a 300 kg de CO₂ por ano.
              </p>
              <p className="text-gray-700 mb-4">
                Implementando práticas sustentáveis de desenvolvimento web, é possível 
                reduzir essa pegada de carbono em até 50%, o que equivaleria a economizar 
                aproximadamente 150 kg de CO₂ por ano para um único site médio.
              </p>
              <p className="text-gray-700">
                Considerando milhões de websites ativos no mundo, o potencial de 
                redução do impacto ambiental é substancial e significativo.
              </p>

              <div className="mt-8 text-center">
                <Button asChild className="bg-green-600 hover:bg-green-700">
                  <a 
                    href="https://www.websitecarbon.com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    Calcule a Pegada de Carbono do Seu Site
                    <ExternalLink size={16} className="ml-2" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="page-section bg-primary text-white">
          <div className="container-custom text-center">
            <Leaf className="h-16 w-16 text-white mx-auto mb-6 opacity-50" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Tome Parte na Mudança
            </h2>
            <p className="text-xl max-w-3xl mx-auto mb-8">
              Como desenvolvedores web, temos o poder de criar um futuro digital 
              mais verde e inclusivo. Cada linha de código otimizada e cada decisão 
              consciente de design contribui para um mundo mais sustentável.
            </p>
            <Button asChild size="lg" className="bg-white text-primary hover:bg-gray-100">
              <a 
                href="https://sdgs.un.org/goals" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                Saiba Mais Sobre os ODS da ONU
                <ExternalLink size={16} className="ml-2" />
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Sustainability;
