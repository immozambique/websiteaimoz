import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Facebook, Instagram, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-aiesec-blue rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">AIESEC</span>
                <span className="text-aiesec-teal -mt-1">Moçambique</span>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Desenvolvendo líderes jovens através de experiências práticas de liderança,
              intercâmbios internacionais e projectos de impacto social em Moçambique.
            </p>
          </div>

          {/* Programas */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Programas</h3>
            <ul className="space-y-2">
              <li><Link to="/programas#membership" className="text-gray-300 hover:text-aiesec-teal transition-colors">Membership</Link></li>
              <li><Link to="/programas#gv" className="text-gray-300 hover:text-aiesec-teal transition-colors">Global Volunteer</Link></li>
              <li><Link to="/programas#gt" className="text-gray-300 hover:text-aiesec-teal transition-colors">Global Talent</Link></li>
              <li><Link to="/programas#igv" className="text-gray-300 hover:text-aiesec-teal transition-colors">Incoming Volunteer</Link></li>
            </ul>
          </div>

          {/* Sobre */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Sobre</h3>
            <ul className="space-y-2">
              <li><Link to="/sobre#historia" className="text-gray-300 hover:text-aiesec-teal transition-colors">Nossa História</Link></li>
              <li><Link to="/sobre#equipa" className="text-gray-300 hover:text-aiesec-teal transition-colors">Equipa</Link></li>
              <li><Link to="/sobre#alumni" className="text-gray-300 hover:text-aiesec-teal transition-colors">Alumni</Link></li>
              <li><Link to="/parcerias" className="text-gray-300 hover:text-aiesec-teal transition-colors">Parcerias</Link></li>
            </ul>
          </div>

          {/* Recursos & Contacto */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Recursos</h3>
            <ul className="space-y-2 mb-6">
              <li><Link to="/recursos#relatorios" className="text-gray-300 hover:text-aiesec-teal transition-colors">Relatórios</Link></li>
              <li><Link to="/recursos#politicas" className="text-gray-300 hover:text-aiesec-teal transition-colors">Políticas</Link></li>
              <li><Link to="/recursos#ajuda" className="text-gray-300 hover:text-aiesec-teal transition-colors">Ajuda</Link></li>
            </ul>
            
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Mail className="w-4 h-4" />
                <span>info@aiesec.org.mz</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <Phone className="w-4 h-4" />
                <span>+258 XX XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-300">
                <MapPin className="w-4 h-4" />
                <span>Maputo, Moçambique</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="https://facebook.com/aiesecmozambique" target="_blank" rel="noopener noreferrer" 
               className="text-gray-400 hover:text-aiesec-teal transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://instagram.com/aiesecmozambique" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-aiesec-teal transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://linkedin.com/company/aiesecmozambique" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-aiesec-teal transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://twitter.com/aiesecmozambique" target="_blank" rel="noopener noreferrer"
               className="text-gray-400 hover:text-aiesec-teal transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
          </div>
          <p className="text-gray-400 text-sm">
            © 2024 AIESEC Moçambique. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};