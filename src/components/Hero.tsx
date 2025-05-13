
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Database, Globe, Laptop, Server } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-primary-100 to-white">
      <div className="container-custom pt-16 pb-24 md:pt-20 md:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 fade-in-element">
            <div className="inline-block px-4 py-1 bg-secondary-100 text-secondary-500 rounded-full text-sm font-semibold">
              Desenvolvimento Web
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-primary-800">
              Construa o Futuro <br />
              <span className="text-secondary">Digital</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Descubra o caminho para se tornar um desenvolvedor web profissional 
              e construir uma carreira de sucesso no mundo da tecnologia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary-600">
                <Link to="/about">
                  Explorar Carreira
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/tips">
                  Ver Tendências
                </Link>
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 fade-in-element">
            <div className="bg-white p-6 rounded-xl shadow-md card-hover">
              <Laptop className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-bold text-lg mb-2">Front-end</h3>
              <p className="text-gray-600">HTML, CSS, JavaScript, React e mais</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md card-hover">
              <Server className="h-12 w-12 text-secondary mb-4" />
              <h3 className="font-bold text-lg mb-2">Back-end</h3>
              <p className="text-gray-600">Node.js, Python, Java, PHP e mais</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md card-hover">
              <Database className="h-12 w-12 text-accent mb-4" />
              <h3 className="font-bold text-lg mb-2">Banco de Dados</h3>
              <p className="text-gray-600">SQL, MongoDB, Firebase e mais</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md card-hover">
              <Globe className="h-12 w-12 text-primary-400 mb-4" />
              <h3 className="font-bold text-lg mb-2">DevOps</h3>
              <p className="text-gray-600">CI/CD, Docker, Cloud e mais</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
