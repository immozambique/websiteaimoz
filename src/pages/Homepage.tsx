import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Globe, Briefcase, Heart, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { AnimatedCounter } from '../components/AnimatedCounter';

export const Homepage: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 'gv',
      name: 'Ana Cardoso',
      program: 'Global Volunteer - Brasil',
      text: 'A experiência de voluntariado global transformou completamente a minha perspectiva sobre liderança e impacto social. Consegui desenvolver competências que uso até hoje na minha carreira profissional.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'gt',
      name: 'João Santos',
      program: 'Global Talent - Alemanha',
      text: 'O intercâmbio profissional na Alemanha foi o catalisador da minha carreira internacional. As competências técnicas e culturais que desenvolvi abriram portas que nunca imaginei.',
      image: 'https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      id: 'membership',
      name: 'Maria José',
      program: 'Membership - Vice-Presidente',
      text: 'Ser membro da AIESEC foi a melhor decisão da minha vida universitária. Liderei projectos que impactaram centenas de jovens e desenvolvi uma rede global incrível.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const products = [
    {
      icon: Heart,
      title: 'Global Volunteer',
      description: 'Experiências de voluntariado internacional focadas no desenvolvimento sustentável e impacto social.',
      link: '/programas#gv',
      color: 'bg-aiesec-red'
    },
    {
      icon: Briefcase,
      title: 'Global Talent',
      description: 'Estágios profissionais internacionais para acelerar o desenvolvimento da carreira.',
      link: '/programas#gt',
      color: 'bg-aiesec-green'
    },
    {
      icon: Users,
      title: 'Membership',
      description: 'Junta-te à nossa equipa e desenvolve competências de liderança através de projectos reais.',
      link: '/programas#membership',
      color: 'bg-aiesec-blue'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-aiesec-blue via-aiesec-blue to-aiesec-teal">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url(https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=1920)'
          }}
        ></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Desenvolve o Líder
            <span className="block text-aiesec-orange">que Há em Ti</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Junta-te à AIESEC Moçambique e transforma o mundo através de experiências 
            internacionais, projectos de impacto social e desenvolvimento de liderança.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/programas"
              className="bg-aiesec-orange hover:bg-aiesec-orange/90 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 transition-all duration-200 transform hover:scale-105"
            >
              <span>Junta-te à AIESEC</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center space-x-2 transition-all duration-200 hover:bg-white/10">
              <Play className="w-5 h-5" />
              <span>Ver Vídeo</span>
            </button>
          </div>
        </div>
      </section>

      {/* About AIESEC Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A Maior Organização Jovem do Mundo
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              A AIESEC é uma plataforma global que permite aos jovens desenvolverem o seu potencial 
              de liderança através de experiências práticas. Em Moçambique, conectamos jovens 
              talentosos com oportunidades transformadoras de intercâmbio, voluntariado e projectos 
              de impacto social que criam mudanças positivas nas nossas comunidades.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <h3 className="text-2xl font-bold text-aiesec-blue mb-2">Missão</h3>
                <p className="text-gray-600">Activar o potencial de liderança dos jovens</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-aiesec-blue mb-2">Visão</h3>
                <p className="text-gray-600">Paz e realização do potencial humano</p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-aiesec-blue mb-2">Valores</h3>
                <p className="text-gray-600">Activar liderança, demonstrar integridade, viver diversidade, desfrutar participação</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-aiesec-blue to-aiesec-teal text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O Nosso Impacto em Moçambique
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Números que reflectem o nosso compromisso com o desenvolvimento 
              de jovens líderes e o impacto positivo nas comunidades moçambicanas.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <AnimatedCounter end={150} suffix="+" />
              </div>
              <p className="text-sm opacity-90">Intercâmbios Realizados</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <AnimatedCounter end={25} />
              </div>
              <p className="text-sm opacity-90">Projectos Implementados</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <p className="text-sm opacity-90">Jovens Impactados</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <AnimatedCounter end={30} suffix="+" />
              </div>
              <p className="text-sm opacity-90">Parceiros Activos</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
              <div className="text-3xl md:text-4xl font-bold mb-2">
                <AnimatedCounter end={8} />
              </div>
              <p className="text-sm opacity-90">Anos em Moçambique</p>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Os Nossos Programas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descobre as diferentes formas de te desenvolveres como líder através 
              dos nossos programas inovadores e experiências transformadoras.
            </p>
          </div>

          <div className="flex overflow-x-auto space-x-6 pb-6 md:grid md:grid-cols-3 md:gap-8 md:space-x-0 md:overflow-visible">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div key={index} className="flex-none w-80 md:w-auto bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="p-8">
                    <div className={`w-16 h-16 ${product.color} rounded-lg flex items-center justify-center mb-6`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{product.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{product.description}</p>
                    <Link
                      to={product.link}
                      className="inline-flex items-center text-aiesec-blue font-semibold hover:text-aiesec-blue/80 transition-colors"
                    >
                      <span>Saber Mais</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Histórias de Transformação
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conhece as experiências de jovens que transformaram as suas vidas através da AIESEC.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex justify-center mb-12">
              <div className="bg-gray-100 p-1 rounded-lg flex space-x-1">
                <button
                  onClick={() => setActiveTestimonial(0)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTestimonial === 0
                      ? 'bg-aiesec-red text-white shadow-lg'
                      : 'text-gray-700 hover:text-aiesec-red'
                  }`}
                >
                  Global Volunteer
                </button>
                <button
                  onClick={() => setActiveTestimonial(1)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTestimonial === 1
                      ? 'bg-aiesec-green text-white shadow-lg'
                      : 'text-gray-700 hover:text-aiesec-green'
                  }`}
                >
                  Global Talent
                </button>
                <button
                  onClick={() => setActiveTestimonial(2)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    activeTestimonial === 2
                      ? 'bg-aiesec-blue text-white shadow-lg'
                      : 'text-gray-700 hover:text-aiesec-blue'
                  }`}
                >
                  Membership
                </button>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="relative">
              <div className="bg-gray-50 rounded-2xl p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                  <div className="flex-shrink-0">
                    <img
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-4">
                      "{testimonials[activeTestimonial].text}"
                    </blockquote>
                    <div>
                      <div className="font-bold text-gray-900 text-lg">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="text-gray-600">
                        {testimonials[activeTestimonial].program}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setActiveTestimonial(activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
              <button
                onClick={() => setActiveTestimonial(activeTestimonial === testimonials.length - 1 ? 0 : activeTestimonial + 1)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white shadow-lg rounded-full p-2 hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-aiesec-orange to-aiesec-red">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Pronto para Transformar o Teu Futuro?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Junta-te a centenas de jovens moçambicanos que já transformaram as suas vidas 
            através das oportunidades únicas da AIESEC.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/programas"
              className="bg-white text-aiesec-orange px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Explorar Programas</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/eventos"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              Ver Próximos Eventos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};