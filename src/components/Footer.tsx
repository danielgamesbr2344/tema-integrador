
import React from "react";
import { Link } from "react-router-dom";
import { Code, Github, Instagram, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-800 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Code size={24} className="text-secondary" />
              <span className="font-bold text-xl">WebDevPath</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Um recurso dedicado ao desenvolvimento web, carreira na área de TI
              e tendências tecnológicas para ajudar futuros profissionais.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/DanielFlox1"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://instagram.com/daniel_silva913"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-700 hover:bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="mailto:contato@example.com"
                className="bg-gray-700 hover:bg-gray-600 h-10 w-10 rounded-full flex items-center justify-center transition-colors"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Navegação</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  Sobre a Profissão
                </Link>
              </li>
              <li>
                <Link to="/tips" className="text-gray-300 hover:text-white transition-colors">
                  Dicas e Tendências
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Redes e Contatos
                </Link>
              </li>
              <li>
                <Link to="/sustainability" className="text-gray-300 hover:text-white transition-colors">
                  Sustentabilidade
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Recursos</h3>
            <ul className="space-y-3">
              <li>
                <a 
                  href="https://developer.mozilla.org/pt-BR/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  MDN Web Docs
                </a>
              </li>
              <li>
                <a 
                  href="https://www.w3schools.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  W3Schools
                </a>
              </li>
              <li>
                <a 
                  href="https://www.freecodecamp.org/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  freeCodeCamp
                </a>
              </li>
              <li>
                <a 
                  href="https://github.com/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 text-gray-400 text-sm flex flex-col md:flex-row justify-between items-center">
          <p>© {currentYear} WebDevPath. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Termos de Uso
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Privacidade
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
