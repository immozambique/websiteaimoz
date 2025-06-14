import React, { useState } from 'react';
import { ArrowRight, Users, Globe, Briefcase, Heart, CheckCircle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Programs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('gv');

  const exchangePrograms = {
    gv: {
      title: 'Outgoing Global Volunteer',
      description: 'Contribui para os Objectivos de Desenvolvimento Sustentável através de projectos de voluntariado internacional.',
      impact: { exchanges: 85, countries: 45, duration: '6-8 semanas' },
      destinations: ['Brasil', 'Índia', 'Turquia', 'Egito', 'Colômbia', 'Malásia'],
      process: [
        'Candidatura online',
        'Entrevista e av
        aliação',
        'Matching com projecto',
        'Preparação cultural',
        'Experiência no destino',
        'Follow-up e certificação'
      ],
      testimonial: {
        name: 'Carlos Mubai',
        text: 'O voluntariado na Índia abriu-me os olhos para questões globais e desenvolveu a minha capacidade de adaptação e liderança.',
        image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    },
    gt: {
      title: 'Outgoing Global Talent',
      description: 'Acelera a tua carreira através de estágios profissionais em empresas internacionais.',
      impact: { exchanges: 45, countries: 25, duration: '6-18 meses' },
      destinations: ['Alemanha', 'Polónia', 'Roménia', 'Ucrânia', 'Brasil', 'Turquia'],
      process: [
        'Perfil profissional',
        'Preparação de CV internacional',
        'Matching com empresa',
        'Suporte para visto',
        'Orientação profissional',
        'Acompanhamento contínuo'
      ],
      testimonial: {
        name: 'Amélia Sitoe',
        text: 'O estágio na Alemanha não só melhorou as minhas competências técnicas, mas também expandiu a minha rede profissional internacional.',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    },
    igv: {
      title: 'Incoming Global Volunteer',
      description: 'Recebe voluntários internacionais para projectos de desenvolvimento local em Moçambique.',
      impact: { volunteers: 60, projects: 15, communities: 8 },
      destinations: ['Maputo', 'Beira', 'Nampula', 'Pemba'],
      process: [
        'Identificação de necessidades',
        'Desenvolvimento de projectos',
        'Recrutamento internacional',
        'Acolhimento de voluntários',
        'Gestão de projectos',
        'Avaliação de impacto'
      ],
      testimonial: {
        name: 'Dr. Pedro Nhantumbo',
        text: 'Os voluntários internacionais trouxeram perspectivas frescas e energia renovada aos nossos projectos comunitários.',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
      }
    }
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-aiesec-blue to-aiesec-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transforma-te Através dos
              <span className="block text-aiesec-orange">Nossos Programas</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Descobre oportunidades únicas de desenvolvimento pessoal e profissional 
              através de intercâmbios internacionais e experiências de liderança.
            </p>
          </div>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-aiesec-light-blue text-aiesec-blue px-4 py-2 rounded-full mb-6">
                <Users className="w-5 h-5 mr-2" />
                <span className="font-semibold">Membership</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Junta-te à Nossa Equipa de Líderes
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Torna-te membro da AIESEC e desenvolve competências de liderança através de projectos reais, 
                eventos impactantes e uma rede global de jovens líderes. A experiência de membership 
                é a base para todas as outras oportunidades.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-aiesec-blue mb-2">120+</div>
                  <p className="text-gray-600">Membros Activos</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-aiesec-blue mb-2">40+</div>
                  <p className="text-gray-600">Projectos Liderados</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-aiesec-blue mb-2">2000+</div>
                  <p className="text-gray-600">Horas de Liderança</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-aiesec-blue mb-2">95%</div>
                  <p className="text-gray-600">Taxa de Satisfação</p>
                </div>
              </div>

              <Link
                to="/eventos"
                className="inline-flex items-center bg-aiesec-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-aiesec-blue/90 transition-colors"
              >
                <span>Junta-te aos Membros</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>

            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Cargos Disponíveis</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-aiesec-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Vice-Presidente de Intercâmbios</h4>
                      <p className="text-gray-600 text-sm">Liderar programas de GV, GT e iGV</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-aiesec-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Vice-Presidente de Marketing</h4>
                      <p className="text-gray-600 text-sm">Estratégia digital e comunicação</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-aiesec-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Vice-Presidente de Finanças</h4>
                      <p className="text-gray-600 text-sm">Gestão financeira e sustentabilidade</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-aiesec-green mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Coordenador de Projectos</h4>
                      <p className="text-gray-600 text-sm">Implementação de iniciativas locais</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Valores da AIESEC</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-aiesec-orange rounded-full flex items-center justify-center mx-auto mb-2">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-gray-900">Activar Liderança</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-aiesec-orange rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-gray-900">Demonstrar Integridade</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-aiesec-orange rounded-full flex items-center justify-center mx-auto mb-2">
                      <Globe className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-gray-900">Viver Diversidade</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-aiesec-orange rounded-full flex items-center justify-center mx-auto mb-2">
                      <Heart className="w-6 h-6 text-white" />
                    </div>
                    <p className="font-semibold text-gray-900">Desfrutar Participação</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Exchange Programs Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Programas de Intercâmbio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expande os teus horizontes através de experiências internacionais 
              que transformam perspectivas e aceleram o desenvolvimento pessoal e profissional.
            </p>
          </div>

          {/* Tab Navigation */}
          <div className="flex justify-center mb-12">
            <div className="bg-white p-1 rounded-lg shadow-lg flex space-x-1">
              <button
                onClick={() => setActiveTab('gv')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeTab === 'gv'
                    ? 'bg-aiesec-red text-white shadow-lg'
                    : 'text-gray-700 hover:text-aiesec-red'
                }`}
              >
                <Heart className="w-5 h-5" />
                <span>Global Volunteer</span>
              </button>
              <button
                onClick={() => setActiveTab('gt')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeTab === 'gt'
                    ? 'bg-aiesec-green text-white shadow-lg'
                    : 'text-gray-700 hover:text-aiesec-green'
                }`}
              >
                <Briefcase className="w-5 h-5" />
                <span>Global Talent</span>
              </button>
              <button
                onClick={() => setActiveTab('igv')}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 flex items-center space-x-2 ${
                  activeTab === 'igv'
                    ? 'bg-aiesec-blue text-white shadow-lg'
                    : 'text-gray-700 hover:text-aiesec-blue'
                }`}
              >
                <Globe className="w-5 h-5" />
                <span>Incoming Volunteer</span>
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {exchangePrograms[activeTab as keyof typeof exchangePrograms].title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {exchangePrograms[activeTab as keyof typeof exchangePrograms].description}
                </p>

                {/* Impact Metrics */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {Object.entries(exchangePrograms[activeTab as keyof typeof exchangePrograms].impact).map(([key, value]) => (
                    <div key={key} className="text-center">
                      <div className="text-2xl font-bold text-aiesec-blue mb-1">{value}</div>
                      <p className="text-sm text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                    </div>
                  ))}
                </div>

                {/* Destinations */}
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">Destinos Disponíveis</h4>
                  <div className="flex flex-wrap gap-2">
                    {exchangePrograms[activeTab as keyof typeof exchangePrograms].destinations.map((destination) => (
                      <span key={destination} className="bg-aiesec-light-blue text-aiesec-blue px-3 py-1 rounded-full text-sm">
                        {destination}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="bg-aiesec-blue text-white px-8 py-4 rounded-lg font-semibold hover:bg-aiesec-blue/90 transition-colors flex items-center space-x-2">
                  <span>Candidatar-me Agora</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-8">
                {/* Process */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-6">Processo de Candidatura</h4>
                  <div className="space-y-4">
                    {exchangePrograms[activeTab as keyof typeof exchangePrograms].process.map((step, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-aiesec-blue text-white rounded-full flex items-center justify-center text-sm font-bold">
                          {index + 1}
                        </div>
                        <span className="text-gray-700">{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <img
                      src={exchangePrograms[activeTab as keyof typeof exchangePrograms].testimonial.image}
                      alt={exchangePrograms[activeTab as keyof typeof exchangePrograms].testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-semibold text-gray-900">
                        {exchangePrograms[activeTab as keyof typeof exchangePrograms].testimonial.name}
                      </div>
                      <div className="text-sm text-gray-600">Ex-intercambista</div>
                    </div>
                  </div>
                  <blockquote className="text-gray-700 italic">
                    "{exchangePrograms[activeTab as keyof typeof exchangePrograms].testimonial.text}"
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Community Section */}
      <section className="py-20 bg-gradient-to-r from-aiesec-purple to-aiesec-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comunidade Alumni
            </h2>
            <p className="text-xl opacity-90 leading-relaxed mb-8">
              Junta-te a uma rede global de mais de 1 milhão de alumni da AIESEC espalhados pelo mundo. 
              A tua jornada não termina aqui - ela apenas começa.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Rede Global</h3>
                <p className="opacity-90">Conecta-te com alumni em mais de 120 países</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Eventos Exclusivos</h3>
                <p className="opacity-90">Participa em conferências e encontros alumni</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                <h3 className="text-2xl font-bold mb-4">Mentoria</h3>
                <p className="opacity-90">Recebe orientação de profissionais experientes</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Começa a Tua Jornada Hoje
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Não esperes mais para transformar o teu futuro. Junta-te à AIESEC e faz parte 
            de uma comunidade global de jovens líderes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/eventos"
              className="bg-aiesec-blue text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-aiesec-blue/90 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Candidatar-me Agora</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/sobre"
              className="border-2 border-aiesec-blue text-aiesec-blue px-8 py-4 rounded-lg font-semibold text-lg hover:bg-aiesec-light-blue transition-colors"
            >
              Saber Mais Sobre Nós
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};