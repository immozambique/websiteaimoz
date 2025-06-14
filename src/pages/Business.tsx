import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Globe, Users, TrendingUp, CheckCircle, ArrowRight, Building, Handshake } from 'lucide-react';

export const Business: React.FC = () => {
  const corporatePrograms = [
    {
      title: 'Global Talent for Companies',
      description: 'Receba jovens talentos internacionais para estágios e projectos específicos na sua empresa.',
      benefits: [
        'Acesso a talentos globais diversificados',
        'Perspectivas internacionais inovadoras',
        'Custos reduzidos de recrutamento',
        'Suporte completo durante todo o processo'
      ],
      icon: Briefcase,
      color: 'bg-green-500'
    },
    {
      title: 'Corporate Volunteer Programs',
      description: 'Desenvolva programas de responsabilidade social corporativa com impacto mensurável.',
      benefits: [
        'Projectos alinhados com ODS',
        'Desenvolvimento de equipas',
        'Impacto social positivo',
        'Relatórios de impacto detalhados'
      ],
      icon: Globe,
      color: 'bg-blue-500'
    },
    {
      title: 'Leadership Development',
      description: 'Programas personalizados de desenvolvimento de liderança para jovens profissionais.',
      benefits: [
        'Metodologia AIESEC comprovada',
        'Experiências práticas de liderança',
        'Mentoria especializada',
        'Certificação internacional'
      ],
      icon: TrendingUp,
      color: 'bg-purple-500'
    }
  ];

  const successStories = [
    {
      company: 'Standard Bank Moçambique',
      program: 'Global Talent',
      result: 'Contratação de 3 estagiários internacionais que trouxeram inovação aos processos digitais',
      impact: '25% aumento na eficiência',
      logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      company: 'Vodacom Moçambique',
      program: 'Corporate Volunteer',
      result: 'Programa de educação digital em 5 comunidades rurais',
      impact: '500+ crianças impactadas',
      logo: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      company: 'Mozal',
      program: 'Leadership Development',
      result: 'Desenvolvimento de 20 jovens líderes em programa de 6 meses',
      impact: '90% taxa de promoção',
      logo: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const sponsorshipPackages = [
    {
      name: 'Título',
      price: 'A partir de $10,000',
      benefits: [
        'Logo principal em todos os materiais',
        'Discurso de abertura',
        'Stand premium no evento',
        '5 passes VIP',
        'Cobertura mediática exclusiva'
      ],
      featured: true
    },
    {
      name: 'Ouro',
      price: 'A partir de $5,000',
      benefits: [
        'Logo em materiais principais',
        'Stand no evento',
        '3 passes VIP',
        'Menção em redes sociais',
        'Relatório pós-evento'
      ],
      featured: false
    },
    {
      name: 'Prata',
      price: 'A partir de $2,500',
      benefits: [
        'Logo em materiais secundários',
        'Mesa de divulgação',
        '2 passes standard',
        'Certificado de participação'
      ],
      featured: false
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-green-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Parcerias que
              <span className="block text-orange-400">Transformam Negócios</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed mb-8">
              Conecte a sua empresa com jovens talentos globais e contribua para o desenvolvimento 
              sustentável através de parcerias estratégicas com a AIESEC.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors flex items-center justify-center space-x-2">
                <span>Tornar-se Parceiro</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors">
                Agendar Reunião
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Programs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Programas Corporativos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções personalizadas para empresas que querem inovar, desenvolver talentos 
              e criar impacto social positivo.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {corporatePrograms.map((program, index) => {
              const IconComponent = program.icon;
              return (
                <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                  <div className={`w-16 h-16 ${program.color} rounded-lg flex items-center justify-center mb-6`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{program.description}</p>
                  <ul className="space-y-3">
                    {program.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Casos de Sucesso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra como as nossas parcerias têm transformado empresas e comunidades em Moçambique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <img
                    src={story.logo}
                    alt={story.company}
                    className="w-16 h-16 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{story.company}</h3>
                    <span className="text-blue-600 font-semibold">{story.program}</span>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed mb-4">{story.result}</p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-2xl font-bold text-blue-700 mb-1">{story.impact}</div>
                  <p className="text-blue-600 text-sm">Impacto mensurável</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsorship Opportunities */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Oportunidades de Patrocínio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Apoie os nossos eventos e projectos enquanto aumenta a visibilidade da sua marca 
              junto ao público jovem e profissional.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sponsorshipPackages.map((package_, index) => (
              <div key={index} className={`rounded-2xl p-8 ${
                package_.featured 
                  ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white transform scale-105' 
                  : 'bg-gray-50 border border-gray-200'
              }`}>
                {package_.featured && (
                  <div className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                    Mais Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold mb-2 ${package_.featured ? 'text-white' : 'text-gray-900'}`}>
                  {package_.name}
                </h3>
                <div className={`text-3xl font-bold mb-6 ${package_.featured ? 'text-white' : 'text-blue-700'}`}>
                  {package_.price}
                </div>
                <ul className="space-y-3 mb-8">
                  {package_.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                        package_.featured ? 'text-orange-300' : 'text-green-500'
                      }`} />
                      <span className={package_.featured ? 'text-white' : 'text-gray-700'}>
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                  package_.featured
                    ? 'bg-white text-blue-700 hover:bg-gray-100'
                    : 'bg-blue-700 text-white hover:bg-blue-800'
                }`}>
                  Escolher Pacote
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Como Tornar-se Parceiro
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Processo simples e transparente para estabelecer uma parceria estratégica 
              que beneficia tanto a sua empresa quanto as comunidades moçambicanas.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Contacto Inicial</h3>
              <p className="opacity-90">Entre em contacto connosco para discutir as suas necessidades</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Análise de Necessidades</h3>
              <p className="opacity-90">Reunião para entender os seus objectivos e desafios</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Proposta Personalizada</h3>
              <p className="opacity-90">Desenvolvimento de soluções à medida da sua empresa</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Implementação</h3>
              <p className="opacity-90">Execução do projecto com acompanhamento contínuo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Vamos Trabalhar Juntos
            </h2>
            <p className="text-xl text-gray-600">
              Preencha o formulário abaixo e entraremos em contacto para discutir 
              as melhores oportunidades de parceria para a sua empresa.
            </p>
          </div>

          <div className="bg-gray-50 rounded-2xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome da Empresa
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Digite o nome da sua empresa"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sector de Actividade
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Seleccione o sector</option>
                    <option>Banca e Finanças</option>
                    <option>Telecomunicações</option>
                    <option>Energia</option>
                    <option>Educação</option>
                    <option>Tecnologia</option>
                    <option>Outro</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome do Contacto
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="O seu nome"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="email@empresa.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tipo de Parceria de Interesse
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Global Talent</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Corporate Volunteer</span>
                  </label>
                  <label className="flex items-center space-x-3">
                    <input type="checkbox" className="rounded text-blue-600" />
                    <span>Patrocínio de Eventos</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Conte-nos mais sobre os seus objectivos e como podemos ajudar..."
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-800 transition-colors flex items-center space-x-2 mx-auto"
                >
                  <span>Enviar Proposta</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};