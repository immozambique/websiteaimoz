import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Search, Filter, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Events: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const events = [
    {
      id: 1,
      title: 'Youth Leadership Summit 2024',
      type: 'Conferência',
      date: '2024-03-15',
      time: '09:00 - 17:00',
      location: 'Hotel Cardoso, Maputo',
      participants: 150,
      description: 'Conferência anual que reúne jovens líderes de todo o país para discussões sobre desenvolvimento sustentável e inovação social.',
      image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'upcoming',
      program: 'geral',
      edition: '5ª Edição',
      partners: ['USAID', 'UNDP', 'Youth Fund'],
      testimonials: [
        {
          name: 'Ana Silva',
          text: 'Uma experiência transformadora que mudou a minha perspectiva sobre liderança jovem.'
        }
      ]
    },
    {
      id: 2,
      title: 'Global Volunteer Preparation Weekend',
      type: 'Workshop',
      date: '2024-03-22',
      time: '08:00 - 18:00',
      location: 'Universidade Eduardo Mondlane',
      participants: 30,
      description: 'Workshop intensivo de preparação para intercambistas que irão participar em projectos de voluntariado internacional.',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'upcoming',
      program: 'gv',
      edition: '2ª Edição',
      partners: ['UEM', 'British Council'],
      testimonials: []
    },
    {
      id: 3,
      title: 'Career Development Fair',
      type: 'Feira',
      date: '2024-04-10',
      time: '10:00 - 16:00',
      location: 'Centro de Conferências Joaquim Chissano',
      participants: 200,
      description: 'Feira de carreiras com empresas nacionais e internacionais, focada em oportunidades para jovens graduados.',
      image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'upcoming',
      program: 'gt',
      edition: '3ª Edição',
      partners: ['Standard Bank', 'Vodacom', 'Mozal'],
      testimonials: []
    },
    {
      id: 4,
      title: 'Community Impact Project Launch',
      type: 'Projecto',
      date: '2024-02-28',
      time: '14:00 - 17:00',
      location: 'Bairro da Polana Caniço',
      participants: 80,
      description: 'Lançamento oficial do projecto de educação digital para crianças em comunidades carenciadas.',
      image: 'https://images.pexels.com/photos/1170412/pexels-photo-1170412.jpeg?auto=compress&cs=tinysrgb&w=800',
      status: 'completed',
      program: 'igv',
      edition: '1ª Edição',
      partners: ['UNICEF', 'Fundação Aga Khan'],
      testimonials: [
        {
          name: 'João Matsimbe',
          text: 'Ver o impacto directo nas crianças foi a parte mais gratificante da minha experiência na AIESEC.'
        }
      ]
    }
  ];

  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || event.program === selectedFilter || event.status === selectedFilter;
    return matchesSearch && matchesFilter;
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
      <section className="py-20 bg-gradient-to-br from-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Eventos &
              <span className="block text-orange-400">Projectos</span>
            </h1>
            <p className="text-xl md:text-2xl opacity-90 leading-relaxed">
              Participa em experiências transformadoras, conferências inspiradoras 
              e projectos de impacto que fazem a diferença nas nossas comunidades.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Pesquisar eventos ou projectos..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-400 w-5 h-5" />
              <select
                value={selectedFilter}
                onChange={(e) => setSelectedFilter(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">Todos</option>
                <option value="upcoming">Próximos</option>
                <option value="completed">Realizados</option>
                <option value="gv">Global Volunteer</option>
                <option value="gt">Global Talent</option>
                <option value="igv">Incoming Volunteer</option>
                <option value="geral">Geral</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="relative">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      event.status === 'upcoming' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {event.status === 'upcoming' ? 'Próximo' : 'Realizado'}
                    </span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                      {event.type}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{formatDate(event.date)}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{event.participants} participantes</span>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {event.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-700">
                      {event.edition}
                    </span>
                    <button className="text-blue-700 hover:text-blue-800 font-semibold text-sm flex items-center space-x-1">
                      <span>Ver Detalhes</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Calendar className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Nenhum evento encontrado
              </h3>
              <p className="text-gray-600">
                Tenta ajustar os teus filtros de pesquisa ou verifica mais tarde por novos eventos.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Upcoming Events Highlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Próximos Grandes Eventos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Não percas as oportunidades de participar nos nossos eventos mais impactantes do ano.
            </p>
          </div>

          <div className="bg-gradient-to-r from-blue-700 to-purple-700 rounded-2xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center bg-white/20 rounded-full px-4 py-2 mb-6">
                  <Calendar className="w-5 h-5 mr-2" />
                  <span className="font-semibold">15 de Março, 2024</span>
                </div>
                <h3 className="text-3xl font-bold mb-4">Youth Leadership Summit 2024</h3>
                <p className="text-xl opacity-90 mb-6">
                  A maior conferência de liderança jovem em Moçambique. Três dias de aprendizagem, 
                  networking e inspiração com líderes nacionais e internacionais.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Inscrever-me Agora
                  </button>
                  <button className="border-2 border-white/30 text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                    Saber Mais
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Youth Leadership Summit"
                  className="rounded-xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-orange-500 text-white p-4 rounded-xl shadow-lg">
                  <div className="text-2xl font-bold">150+</div>
                  <div className="text-sm">Participantes</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Fica Sempre Informado
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Subscreve a nossa newsletter e sê o primeiro a saber sobre novos eventos, 
            projectos e oportunidades de desenvolvimento.
          </p>
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="O teu email"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              Subscrever
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};