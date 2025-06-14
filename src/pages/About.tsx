import React from 'react';
import { Globe, Users, Award, TrendingUp, MapPin, Calendar } from 'lucide-react';

export const About: React.FC = () => {
  const timeline = [
    {
      year: '2016',
      title: 'Estabelecimento em Moçambique',
      description: 'A AIESEC chega oficialmente a Moçambique com o primeiro comité local na Universidade Eduardo Mondlane.'
    },
    {
      year: '2017',
      title: 'Primeiros Intercâmbios',
      description: 'Realizamos os primeiros intercâmbios internacionais, enviando 5 jovens moçambicanos para experiências no Brasil e Índia.'
    },
    {
      year: '2018',
      title: 'Expansão Nacional',
      description: 'Expansão para a Beira com o segundo comité local, aumentando o nosso alcance nacional.'
    },
    {
      year: '2019',
      title: 'Projectos de Impacto',
      description: 'Lançamento dos primeiros projectos de desenvolvimento comunitário com foco nos ODS.'
    },
    {
      year: '2020',
      title: 'Adaptação Digital',
      description: 'Transição para programas virtuais durante a pandemia, mantendo o impacto através de plataformas digitais.'
    },
    {
      year: '2021',
      title: 'Parcerias Estratégicas',
      description: 'Estabelecimento de parcerias com organizações internacionais e empresas locais.'
    },
    {
      year: '2022',
      title: 'Certificação Nacional',
      description: 'Reconhecimento oficial como organização juvenil de utilidade pública em Moçambique.'
    },
    {
      year: '2023',
      title: 'Rede Alumni',
      description: 'Criação da rede oficial de alumni AIESEC Moçambique com mais de 200 membros.'
    }
  ];

  const team = [
    {
      name: 'Maria João Sitoe',
      position: 'Presidente Nacional',
      bio: 'Formada em Gestão pela UEM, liderou 3 projectos de desenvolvimento comunitário.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Carlos Mubai',
      position: 'Vice-Presidente de Intercâmbios',
      bio: 'Ex-intercambista Global Volunteer na Índia, especialista em desenvolvimento sustentável.',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Amélia Nhantumbo',
      position: 'Vice-Presidente de Marketing',
      bio: 'Especialista em comunicação digital e gestão de marca para organizações juvenis.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'João Santos',
      position: 'Vice-Presidente de Finanças',
      bio: 'Formado em Economia, com experiência em gestão financeira e sustentabilidade organizacional.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const values = [
    {
      icon: Users,
      title: 'Activar Liderança',
      description: 'Capacitamos jovens a descobrir e desenvolver o seu potencial de liderança através de experiências práticas e desafiadoras.'
    },
    {
      icon: Award,
      title: 'Demonstrar Integridade',
      description: 'Agimos com honestidade, transparência e responsabilidade em todas as nossas interações e decisões.'
    },
    {
      icon: Globe,
      title: 'Viver Diversidade',
      description: 'Celebramos e abraçamos as diferenças, criando um ambiente inclusivo onde todos podem contribuir.'
    },
    {
      icon: TrendingUp,
      title: 'Desfrutar Participação',
      description: 'Promovemos o envolvimento activo e a colaboração, criando experiências significativas e transformadoras.'
    }
  ];

  const alumni = [
    {
      name: 'Dr. Pedro Chissano',
      graduation: '2018',
      current: 'Director de Sustentabilidade, Mozal',
      achievement: 'Liderou implementação de programa de RSE que impactou 10,000+ pessoas'
    },
    {
      name: 'Ana Macamo',
      graduation: '2019',
      current: 'Fundadora, EduTech Mozambique',
      achievement: 'Startup de educação digital premiada internacionalmente'
    },
    {
      name: 'Tomás Bila',
      graduation: '2020',
      current: 'Consultor, Banco Mundial',
      achievement: 'Especialista em desenvolvimento económico para África Austral'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Sobre a
              <span className="block text-orange-400">AIESEC Moçambique</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Desde 2016, desenvolvemos jovens líderes em Moçambique através de experiências 
              transformadoras que criam impacto positivo nas nossas comunidades e no mundo.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                A Nossa Razão de Ser
              </h2>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-4">Missão</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Activar o potencial de liderança dos jovens moçambicanos para que estes tenham 
                    um impacto positivo na sociedade através do desenvolvimento de experiências 
                    práticas de liderança, intercâmbios culturais e projectos de desenvolvimento sustentável.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-blue-700 mb-4">Visão</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Contribuir para a paz e realização do potencial humano em Moçambique, 
                    desenvolvendo uma geração de líderes conscientes, competentes e comprometidos 
                    com o desenvolvimento sustentável do país.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="AIESEC Team"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-700 text-white p-6 rounded-xl shadow-lg">
                <div className="text-3xl font-bold mb-2">8+</div>
                <div className="text-sm">Anos de Impacto</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Nossa Jornada
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma cronologia dos marcos mais importantes da AIESEC em Moçambique, 
              desde o estabelecimento até aos dias de hoje.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-700 h-full"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                    <div className="bg-white rounded-xl shadow-lg p-6">
                      <div className="inline-block bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-bold mb-4">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full border-4 border-white shadow-lg"></div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Os Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Princípios fundamentais que guiam todas as nossas acções e decisões, 
              criando uma cultura organizacional forte e inspiradora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div key={index} className="text-center group">
                  <div className="w-20 h-20 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Nossa Equipa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Jovens líderes apaixonados que dedicam o seu tempo e energia para criar 
              oportunidades transformadoras para outros jovens moçambicanos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-700 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni Success Stories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Alumni de Sucesso
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ex-membros da AIESEC que continuam a fazer a diferença em Moçambique e no mundo, 
              demonstrando o impacto duradouro da nossa formação em liderança.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {alumni.map((person, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="w-5 h-5 text-blue-700" />
                  <span className="text-blue-700 font-semibold">Graduado em {person.graduation}</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{person.name}</h3>
                <p className="text-gray-700 font-semibold mb-4">{person.current}</p>
                <p className="text-gray-600 leading-relaxed">{person.achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press & Media */}
      <section className="py-20 bg-gradient-to-r from-blue-700 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Na Imprensa
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              O reconhecimento do nosso trabalho pelos media nacionais e internacionais.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">TVM - Televisão de Moçambique</h3>
              <p className="opacity-90 mb-4">
                "AIESEC promove intercâmbios que transformam jovens moçambicanos"
              </p>
              <p className="text-orange-300 text-sm">Janeiro 2024</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Jornal O País</h3>
              <p className="opacity-90 mb-4">
                "Organização juvenil lança projectos de desenvolvimento sustentável"
              </p>
              <p className="text-orange-300 text-sm">Dezembro 2023</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
              <h3 className="text-xl font-bold mb-4">Radio Moçambique</h3>
              <p className="opacity-90 mb-4">
                "AIESEC: 8 anos desenvolvendo líderes em Moçambique"
              </p>
              <p className="text-orange-300 text-sm">Novembro 2023</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Vamos Conectar
              </h2>
              <p className="text-xl opacity-90 leading-relaxed mb-8">
                Tens questões sobre a AIESEC? Queres saber mais sobre os nossos programas? 
                Ou talvez estejas interessado em tornar-te membro ou parceiro?
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-orange-400" />
                  <span>Av. Julius Nyerere, Campus da UEM, Maputo</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-orange-400" />
                  <span>info@aiesec.org.mz</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-orange-400" />
                  <span>+258 XX XXX XXXX</span>
                </div>
              </div>
            </div>

            <div className="bg-white/10 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Envie-nos uma Mensagem</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="O seu nome"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="O seu email"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="A sua mensagem"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};