
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Code, Monitor, Server, Database, Cloud, LineChart } from "lucide-react";

const About = () => {
  const skills = [
    {
      name: "HTML/CSS",
      level: 90,
      icon: <Code className="h-6 w-6 text-primary" />,
    },
    {
      name: "JavaScript",
      level: 85,
      icon: <Code className="h-6 w-6 text-primary" />,
    },
    {
      name: "React",
      level: 80,
      icon: <Monitor className="h-6 w-6 text-primary" />,
    },
    {
      name: "Node.js",
      level: 75,
      icon: <Server className="h-6 w-6 text-primary" />,
    },
    {
      name: "SQL/NoSQL",
      level: 70,
      icon: <Database className="h-6 w-6 text-primary" />,
    },
    {
      name: "Cloud Services",
      level: 65,
      icon: <Cloud className="h-6 w-6 text-primary" />,
    },
  ];

  const salaryInfo = [
    { role: "Junior Developer", range: "R$ 2.500 - R$ 4.500" },
    { role: "Mid-level Developer", range: "R$ 4.500 - R$ 8.000" },
    { role: "Senior Developer", range: "R$ 8.000 - R$ 15.000+" },
    { role: "Tech Lead", range: "R$ 12.000 - R$ 20.000+" },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-primary text-white py-20">
          <div className="container-custom">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sobre a Profissão
            </h1>
            <p className="text-xl max-w-3xl">
              Descubra tudo sobre a carreira de desenvolvimento web, habilidades
              necessárias, oportunidades do mercado e perspectivas de crescimento.
            </p>
          </div>
        </section>

        {/* Profession Overview */}
        <section className="page-section bg-white">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-primary mb-6">
                  O que faz um Desenvolvedor Web?
                </h2>
                <p className="text-gray-700 mb-4">
                  Um desenvolvedor web é responsável por criar e manter sites e
                  aplicações web. O trabalho envolve tanto a parte visual que o
                  usuário interage (front-end) quanto a infraestrutura por trás
                  (back-end).
                </p>
                <p className="text-gray-700 mb-4">
                  Esses profissionais transformam ideias e necessidades em soluções
                  digitais funcionais, combinando habilidades técnicas com
                  criatividade para resolver problemas e melhorar a experiência do
                  usuário.
                </p>
                <p className="text-gray-700">
                  A área é extremamente versátil e em constante evolução, exigindo
                  aprendizado contínuo e adaptabilidade para acompanhar novas
                  tecnologias e tendências.
                </p>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-6">
                  Habilidades Principais
                </h3>
                <div className="space-y-6">
                  {skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex items-center justify-between mb-2">
                        <div className="flex items-center">
                          {skill.icon}
                          <span className="ml-2 font-medium">{skill.name}</span>
                        </div>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Market Information */}
        <section className="page-section bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <LineChart className="h-12 w-12 text-primary mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Mercado de Trabalho
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                O mercado para desenvolvedores web está em constante crescimento,
                com demanda alta por profissionais qualificados em empresas de
                todos os portes.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Demanda de Mercado
                </h3>
                <p className="text-gray-700">
                  A transformação digital acelerada pós-pandemia aumentou
                  significativamente a demanda por desenvolvedores web. Segundo
                  pesquisas recentes, há um déficit de profissionais qualificados
                  no Brasil, com mais vagas disponíveis do que candidatos
                  adequados.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Modalidades de Trabalho
                </h3>
                <p className="text-gray-700">
                  As opções são diversas: CLT em empresas de tecnologia ou
                  departamentos de TI, prestação de serviços como PJ, trabalho
                  freelancer, ou mesmo empreendedorismo. O trabalho remoto se
                  consolidou, possibilitando colaborar com empresas de qualquer
                  lugar do mundo.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-4">
                  Crescimento na Carreira
                </h3>
                <p className="text-gray-700">
                  Desenvolvedores podem seguir caminhos técnicos (especialistas,
                  arquitetos) ou gerenciais (tech leads, gerentes de projeto,
                  CTOs). A progressão geralmente ocorre de junior para pleno, e
                  então para sênior, com oportunidades de crescimento constantes
                  baseadas em conhecimento e experiência.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold text-primary mb-6">
                Faixas Salariais Médias no Brasil
              </h3>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white">
                  <thead className="bg-primary text-white">
                    <tr>
                      <th className="py-3 px-6 text-left">Cargo</th>
                      <th className="py-3 px-6 text-left">Faixa Salarial (mensal)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {salaryInfo.map((item, index) => (
                      <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : ""}>
                        <td className="py-4 px-6">{item.role}</td>
                        <td className="py-4 px-6">{item.range}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-sm text-gray-500">
                *Valores aproximados, podendo variar conforme localização, tamanho da
                empresa e experiência específica.
              </p>
            </div>
          </div>
        </section>

        {/* Education and Career Path */}
        <section className="page-section bg-white">
          <div className="container-custom">
            <h2 className="text-3xl font-bold text-primary mb-12 text-center">
              Formação e Trilha de Carreira
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              <div>
                <h3 className="text-xl font-bold text-primary mb-6">
                  Formação Acadêmica
                </h3>
                <div className="border-l-2 border-primary pl-6 space-y-12">
                  <div>
                    <h4 className="font-bold text-lg mb-2">Cursos Superiores Relacionados</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Ciência da Computação</li>
                      <li>Análise e Desenvolvimento de Sistemas</li>
                      <li>Engenharia de Software</li>
                      <li>Sistemas de Informação</li>
                      <li>Design Digital</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2">Alternativas de Formação</h4>
                    <p className="text-gray-700 mb-4">
                      Embora um diploma seja valioso, muitos desenvolvedores web são
                      autodidatas ou formados em bootcamps intensivos. O que realmente
                      conta no mercado é seu portfólio de projetos e conhecimento
                      técnico demonstrável.
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Bootcamps de programação</li>
                      <li>Cursos online especializados</li>
                      <li>Aprendizado autodidata com projetos pessoais</li>
                      <li>Certificações específicas de tecnologias</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-6">
                  Trilha de Carreira
                </h3>
                <div className="space-y-6">
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Nível Iniciante (0-2 anos)</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Aprender fundamentos: HTML, CSS, JavaScript</li>
                      <li>Familiarizar-se com controle de versão (Git)</li>
                      <li>Desenvolver projetos pessoais simples</li>
                      <li>Começar como estagiário ou desenvolvedor júnior</li>
                    </ul>
                  </div>
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Nível Intermediário (2-5 anos)</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Dominar frameworks e bibliotecas (React, Angular, Vue.js)</li>
                      <li>Aprofundar conhecimentos em back-end</li>
                      <li>Entender aspectos de segurança e performance</li>
                      <li>Participar de projetos mais complexos</li>
                    </ul>
                  </div>
                  <div className="bg-primary-50 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">Nível Avançado (5+ anos)</h4>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700">
                      <li>Especializar-se em áreas específicas</li>
                      <li>Liderar equipes técnicas e orientar juniors</li>
                      <li>Participar de decisões de arquitetura</li>
                      <li>Mentorar outros desenvolvedores</li>
                      <li>Contribuir para a comunidade de código aberto</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
