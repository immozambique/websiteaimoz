import React, { useState } from 'react';
import { Download, FileText, Shield, HelpCircle, BookOpen, Search, Filter, ExternalLink } from 'lucide-react';

export const Resources: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const resources = [
    {
      id: 1,
      title: 'Relatório Anual 2023',
      category: 'relatorios',
      type: 'PDF',
      size: '2.3 MB',
      description: 'Resumo completo das actividades, impacto e resultados financeiros de 2023.',
      downloadUrl: '#',
      date: '2024-01-15'
    },
    {
      id: 2,
      title: 'Guia de Candidatura - Global Volunteer',
      category: 'guias',
      type: 'PDF',
      size: '1.8 MB',
      description: 'Passo-a-passo completo para candidatura ao programa Global Volunteer.',
      downloadUrl: '#',
      date: '2024-02-01'
    },
    {
      id: 3,
      title: 'Política de Privacidade',
      category: 'politicas',
      type: 'PDF',
      size: '0.5 MB',
      description: 'Como tratamos e protegemos os seus dados pessoais.',
      downloadUrl: '#',
      date: '2024-01-01'
    },
    {
      id: 4,
      title: 'Código de Conduta',
      category: 'politicas',
      type: 'PDF',
      size: '0.8 MB',
      description: 'Padrões de comportamento esperados de todos os membros e participantes.',
      downloadUrl: '#',
      date: '2024-01-01'
    },
    {
      id: 5,
      title: 'Manual de Preparação Cultural',
      category: 'guias',
      type: 'PDF',
      size: '3.2 MB',
      description: 'Guia essencial para preparação antes de intercâmbios internacionais.',
      downloadUrl: '#',
      date: '2024-02-15'
    },
    {
      id: 6,
      title: 'Relatório de Impacto - Projectos Comunitários',
      category: 'relatorios',
      type: 'PDF',
      size: '4.1 MB',
      description: 'Análise detalhada do impacto dos nossos projectos nas comunidades locais.',
      downloadUrl: '#',
      date: '2023-12-01'
    }
  ];

  const faqs = [
    {
      question: 'Como posso candidatar-me aos programas da AIESEC?',
      answer: 'Pode candidatar-se através do nosso site oficial ou contactando-nos directamente. Cada programa tem requisitos específicos que estão detalhados nas respectivas páginas.'
    },
    {
      question: 'Qual é o custo dos programas de intercâmbio?',
      answer: 'Os custos variam conforme o programa e destino. Oferecemos várias opções de financiamento e bolsas para tornar os programas acessíveis a todos os jovens qualificados.'
    },
    {
      question: 'Preciso de falar inglês para participar?',
      answer: 'Para a maioria dos intercâmbios internacionais, um nível básico a intermédio de inglês é necessário. Oferecemos preparação linguística como parte do processo.'
    },
    {
      question: 'Quanto tempo duram os programas?',
      answer: 'Global Volunteer: 6-8 semanas, Global Talent: 6-18 meses, Membership: 1-2 anos. Os prazos podem variar conforme disponibilidade e acordo entre as partes.'
    },
    {
      question: 'Que suporte é oferecido durante o intercâmbio?',
      answer: 'Oferecemos suporte 24/7, mentoria local, seguro de saúde, orientação cultural e acompanhamento contínuo durante toda a experiência.'
    },
    {
      question: 'Como posso tornar-me membro da AIESEC?',
      answer: 'Participe nos nossos eventos de recrutamento, preencha a candidatura online e passe pelo processo de selecção que inclui entrevistas e actividades práticas.'
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-PT', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    });
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Centro de
              <span className="block text-orange-400">Recursos</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Acede a relatórios, guias, políticas e recursos de apoio para maximizar 
              a tua experiência com a AIESEC Moçambique.
            </p>
          </div>
        </div>
      </section>

      {/* Help & Support Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Como Podemos Ajudar?
            </h2>
            <p className="text-xl text-gray-600  max-w-3xl mx-auto">
              Encontre rapidamente as informações que precisa ou entre em contacto 
              connosco para suporte personalizado.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 bg-blue-50 rounded-xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Suporte Geral</h3>
              <p className="text-gray-600 mb-6">
                Questões sobre programas, candidaturas ou informações gerais.
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contactar Suporte
              </button>
            </div>

            <div className="text-center p-8 bg-green-50 rounded-xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Guias e Tutoriais</h3>
              <p className="text-gray-600 mb-6">
                Documentação detalhada para todos os nossos programas e processos.
              </p>
              <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                Ver Guias
              </button>
            </div>

            <div className="text-center p-8 bg-purple-50 rounded-xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Políticas e Termos</h3>
              <p className="text-gray-600 mb-6">
                Informações sobre privacidade, termos de uso e código de conduta.
              </p>
              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors">
                Ver Políticas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Downloads e Documentos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Acesse relatórios anuais, guias de candidatura, políticas e outros 
              documentos importantes da AIESEC Moçambique.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-12">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Pesquisar documentos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center space-x-4">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Todas as Categorias</option>
                <option value="relatorios">Relatórios</option>
                <option value="guias">Guias</option>
                <option value="politicas">Políticas</option>
              </select>
            </div>
          </div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <FileText className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs font-semibold">
                        {resource.type}
                      </span>
                      <p className="text-xs text-gray-500 mt-1">{resource.size}</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                  {resource.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {resource.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500">
                    {formatDate(resource.date)}
                  </span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredResources.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <FileText className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhum documento encontrado
              </h3>
              <p className="text-gray-600">
                Tenta ajustar os teus filtros de pesquisa.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-gray-600">
              Respostas às questões mais comuns sobre os nossos programas e processos.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Não encontrou a resposta que procurava?
            </p>
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contactar Suporte
            </button>
          </div>
        </div>
      </section>

      {/* External Links */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Links Úteis
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Recursos externos e plataformas oficiais da AIESEC para complementar 
              a sua experiência e conhecimento.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://aiesec.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold">AIESEC Global</h3>
                <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100" />
              </div>
              <p className="opacity-90 text-sm">
                Site oficial da AIESEC internacional
              </p>
            </a>

            <a
              href="https://opportunities.aiesec.org"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold">Oportunidades</h3>
                <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100" />
              </div>
              <p className="opacity-90 text-sm">
                Plataforma de candidaturas a intercâmbios
              </p>
            </a>

            <a
              href="https://myaiesec.net"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold">myAIESEC</h3>
                <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100" />
              </div>
              <p className="opacity-90 text-sm">
                Portal de membros e gestão de perfil
              </p>
            </a>

            <a
              href="https://aiesec.org/sdgs"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold">ODS</h3>
                <ExternalLink className="w-5 h-5 opacity-70 group-hover:opacity-100" />
              </div>
              <p className="opacity-90 text-sm">
                Objectivos de Desenvolvimento Sustentável
              </p>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};