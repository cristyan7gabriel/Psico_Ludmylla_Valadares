import React, { useEffect, useState, useRef } from 'react';
import { ArrowRight, Instagram, MapPin, Phone, Menu, X, CheckCircle2, ChevronDown, User, Heart, Brain, Star } from 'lucide-react';
import './index.css';

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);
}

const WHATSAPP_LINK = "https://wa.me/5562994515447?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Psic%C3%B3loga%20Ludmylla!";
const INSTAGRAM_LINK = "https://www.instagram.com/psi.ludmyllavaladares/";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#F9F5F1] shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#inicio" className="font-heading text-2xl font-bold tracking-tight text-[#4A3F35]">
          Ludmylla Valadares
        </a>

        <div className="hidden md:flex gap-10 items-center">
          <a href="#sobre" className="text-[13px] font-semibold text-[#4A3F35] hover:text-[#BFA785] transition-colors">Sobre</a>
          <a href="#servicos" className="text-[13px] font-semibold text-[#4A3F35] hover:text-[#BFA785] transition-colors">Serviços</a>
          <a href="#faq" className="text-[13px] font-semibold text-[#4A3F35] hover:text-[#BFA785] transition-colors">Dúvidas</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-[13px] font-bold text-[#F9F5F1] bg-[#BFA785] px-6 py-3 rounded-full hover:bg-[#4A3F35] transition-all duration-300">
            Agendar Sessão
          </a>
        </div>

        <button className="md:hidden text-[#4A3F35]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-[#F9F5F1] border-t border-[#4A3F35]/10 flex flex-col items-center py-6 gap-6 transition-all duration-300 shadow-xl ${isOpen ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0 py-0 overflow-hidden'}`}>
        <a href="#sobre" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-[#4A3F35]">Sobre</a>
        <a href="#servicos" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-[#4A3F35]">Serviços</a>
        <a href="#faq" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-[#4A3F35]">Dúvidas</a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-sm font-bold text-[#F9F5F1] bg-[#BFA785] px-8 py-3 rounded-full mt-2">
          Agendar Sessão
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="inicio" className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 md:px-12 bg-[#F9F5F1] overflow-hidden min-h-[90vh] flex items-center relative">
      {/* Decorative background shape */}
      <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-[#BFA785]/10 blob-shape-1 blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center relative z-10">

        {/* Left Side: Text */}
        <div className="reveal-left flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <div className="inline-block border border-[#BFA785] text-[#BFA785] rounded-full px-4 py-1.5 text-xs font-bold tracking-wide uppercase mb-6">
            Psicologia Clínica
          </div>

          <h1 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-extrabold text-[#4A3F35] leading-[1.1] mb-6">
            Sua saúde mental <br />
            <span className="text-[#BFA785]">em primeiro lugar.</span>
          </h1>

          <p className="text-[#4A3F35]/80 text-lg md:text-xl font-medium mb-10 max-w-lg leading-relaxed">
            Descubra um espaço acolhedor e seguro para compreender suas emoções, vencer a ansiedade e construir uma vida com mais propósito.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-[#4A3F35] text-[#F9F5F1] px-8 py-4 rounded-full font-bold text-sm hover:bg-[#BFA785] hover:scale-105 transition-all duration-300 shadow-xl shadow-[#4A3F35]/15">
              Começar minha terapia
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Side: Image with Organic Shape */}
        <div className="reveal-right order-1 lg:order-2 flex justify-center lg:justify-end relative">
          <div className="relative w-[300px] h-[400px] sm:w-[400px] sm:h-[500px] lg:w-[450px] lg:h-[600px]">
            {/* Background blob */}
            <div className="absolute inset-0 bg-[#BFA785] blob-shape-2 transform translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6" />

            {/* Main Image with blob shape */}
            <img
              src="/fotos/Ludmylla5.png"
              alt="Psicóloga Ludmylla Valadares"
              className="absolute inset-0 w-full h-full object-cover blob-shape-1 shadow-xl z-10"
            />

            {/* Floating badge */}
            <div className="absolute bottom-10 -left-6 sm:-left-12 bg-white px-6 py-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 animate-float">
              <div className="w-12 h-12 rounded-full bg-[#F9F5F1] flex items-center justify-center shrink-0">
                <Heart className="w-6 h-6 text-[#BFA785]" fill="#BFA785" />
              </div>
              <div>
                <p className="text-[#4A3F35] font-bold text-sm leading-tight">CRP 09/20060</p>
                <p className="text-[#4A3F35]/60 text-xs font-medium">Profissional Registrada</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 px-6 md:px-12 bg-[#F0EBE1] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* Left Side: Image Collage */}
        <div className="reveal-left relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
          {/* Main Large Image */}
          <div className="absolute top-0 left-0 w-[70%] h-[70%] rounded-[2rem] overflow-hidden shadow-2xl z-10">
            <img src="/fotos/Ludmylla3.png" alt="Consultório" className="w-full h-full object-cover" />
          </div>
          {/* Secondary Image Overlapping */}
          <div className="absolute bottom-10 right-0 w-[55%] h-[50%] rounded-[2rem] overflow-hidden shadow-2xl border-8 border-[#F0EBE1] z-20">
            <img src="/fotos/Ludmylla4.png" alt="Ludmylla Valadares" className="w-full h-full object-cover" />
          </div>
          {/* Decorative Dot pattern or small shape */}
          <div className="absolute top-[65%] left-[-5%] w-24 h-24 bg-[#BFA785] rounded-full opacity-20 -z-10" />
        </div>

        {/* Right Side: Text */}
        <div className="reveal-right">
          <h3 className="text-[#BFA785] font-bold tracking-widest uppercase text-sm mb-4 border-b-2 border-[#BFA785] inline-block pb-1">Conheça a Profissional</h3>

          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#4A3F35] leading-tight mb-8">
            Muito prazer, sou a <br />
            <span className="text-[#BFA785]">Ludmylla Valadares.</span>
          </h2>

          <div className="space-y-6 text-[#4A3F35]/80 font-medium text-lg leading-relaxed">
            <p>
              Atuo como Psicóloga Clínica ajudando jovens e adultos a lidarem com a ansiedade, estresse e desafios nos relacionamentos. Meu consultório é um ambiente livre de julgamentos, focado totalmente no seu bem-estar.
            </p>
            <p>
              Acredito que a psicoterapia não é apenas para tratar transtornos, mas uma ferramenta poderosa de autoconhecimento. Juntos, vamos identificar padrões de comportamento que te paralisam e construir caminhos mais saudáveis para o seu dia a dia.
            </p>
          </div>

          <div className="mt-10 flex gap-12">
            <div>
              <p className="font-heading text-3xl font-bold text-[#4A3F35]">Psicologia</p>
              <p className="text-sm font-semibold text-[#BFA785] uppercase tracking-wider">Clínica</p>
            </div>
            <div>
              <p className="font-heading text-3xl font-bold text-[#4A3F35]">Online</p>
              <p className="text-sm font-semibold text-[#BFA785] uppercase tracking-wider">e Presencial</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      icon: <User className="w-7 h-7 text-[#F9F5F1]" />,
      title: 'Terapia Individual',
      desc: 'Um espaço totalmente seu para trabalhar questões emocionais profundas, conflitos e autoconhecimento.'
    },
    {
      icon: <Brain className="w-7 h-7 text-[#F9F5F1]" />,
      title: 'Gestão da Ansiedade',
      desc: 'Técnicas e acolhimento para reduzir o impacto da ansiedade na sua rotina e devolver sua qualidade de vida.'
    },
    {
      icon: <Heart className="w-7 h-7 text-[#F9F5F1]" />,
      title: 'Relacionamentos',
      desc: 'Apoio na resolução de conflitos familiares, amorosos ou profissionais, focando na comunicação assertiva.'
    },
    {
      icon: <Star className="w-7 h-7 text-[#F9F5F1]" />,
      title: 'Desenvolvimento Pessoal',
      desc: 'Direcionamento para quem busca clareza em transições de vida, carreira e fortalecimento da autoestima.'
    }
  ];

  return (
    <section id="servicos" className="py-24 md:py-32 px-6 md:px-12 bg-[#F9F5F1]">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-20 reveal-up">
          <h3 className="text-[#BFA785] font-bold tracking-widest uppercase text-sm mb-4 border-b-2 border-[#BFA785] inline-block pb-1">Especialidades</h3>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#4A3F35] leading-tight">
            Como a terapia <br />
            <span className="text-[#BFA785]">pode te ajudar?</span>
          </h2>
        </div>

        {/* 2x2 Grid (or 3x2 if 6 items) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 max-w-5xl mx-auto">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-[2rem] p-10 shadow-lg shadow-[#4A3F35]/5 hover:-translate-y-2 transition-transform duration-300 reveal-up" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="w-16 h-16 bg-[#BFA785] rounded-2xl flex items-center justify-center mb-6">
                {service.icon}
              </div>
              <h3 className="font-heading text-2xl font-bold text-[#4A3F35] mb-4">{service.title}</h3>
              <p className="text-[#4A3F35]/70 font-medium text-base leading-relaxed mb-8">
                {service.desc}
              </p>
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-[#BFA785] font-bold text-sm uppercase tracking-wide group">
                Saiba Mais
                <span className="bg-[#BFA785]/10 w-8 h-8 rounded-full flex items-center justify-center group-hover:bg-[#BFA785] group-hover:text-white transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </span>
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function Testimonials() {
  const scrollRef = useRef(null);

  const reviews = [
    { name: 'Ana S.', text: 'Excelente profissional. Me ajudou a passar por uma crise de ansiedade terrível com muita paciência e empatia. Recomendo demais!' },
    { name: 'Carlos M.', text: 'A terapia com a Ludmylla mudou minha forma de ver os problemas. O ambiente do consultório é acolhedor e a escuta dela é muito atenta.' },
    { name: 'Mariana C.', text: 'Fazer terapia online com ela tem sido tão eficaz quanto presencial. Me sinto muito à vontade para conversar sobre qualquer assunto.' },
    { name: 'João P.', text: 'A Ludmylla é fantástica. Muito assertiva nas pontuações e me fez entender coisas sobre mim que eu nunca havia percebido.' }
  ];

  return (
    <section className="py-24 md:py-32 px-6 md:px-12 bg-[#F0EBE1] overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

        {/* Left Col: Text */}
        <div className="lg:col-span-4 reveal-left">
          <h3 className="text-[#BFA785] font-bold tracking-widest uppercase text-sm mb-4 border-b-2 border-[#BFA785] inline-block pb-1">Depoimentos</h3>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#4A3F35] leading-tight mb-6">
            O que dizem os <span className="text-[#BFA785]">pacientes.</span>
          </h2>
          <p className="text-[#4A3F35]/80 font-medium text-lg mb-8">
            O relato e a evolução de quem já iniciou a jornada de autoconhecimento e cuidado através da psicoterapia.
          </p>
        </div>

        {/* Right Col: Horizontal Scroll Slider */}
        <div className="lg:col-span-8 reveal-right">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto hide-scrollbar pb-8 pt-4 px-4 -mx-4 cursor-grab active:cursor-grabbing"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            {reviews.map((review, idx) => (
              <div key={idx} className="min-w-[300px] md:min-w-[350px] bg-white rounded-[2rem] p-8 shadow-lg shadow-[#4A3F35]/5 shrink-0" style={{ scrollSnapAlign: 'start' }}>
                <div className="flex gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-5 h-5 fill-[#D4AF37] text-[#D4AF37]" />
                  ))}
                </div>
                <p className="text-[#4A3F35]/80 font-medium text-base leading-relaxed italic mb-8">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-4 border-t border-[#4A3F35]/10 pt-6">
                  <div className="w-12 h-12 bg-[#BFA785]/20 rounded-full flex items-center justify-center text-[#BFA785] font-bold text-xl">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold text-[#4A3F35]">{review.name}</p>
                    <p className="text-xs text-[#4A3F35]/60 font-semibold uppercase tracking-widest">Paciente</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: 'Como funcionam os atendimentos?', a: 'As sessões ocorrem semanalmente, com duração de 50 minutos. Podem ser realizadas de forma presencial no consultório em Goiânia ou online para todo o mundo.' },
    { q: 'Qual a diferença da terapia online para a presencial?', a: 'A terapia online possui a mesma eficácia da presencial. O diferencial é a comodidade de ser atendido no conforto da sua casa, bastando um celular ou computador com internet e um ambiente privativo.' },
    { q: 'Você atende planos de saúde?', a: 'Meus atendimentos são particulares, mas emito recibo para que você possa solicitar o reembolso junto à sua operadora de saúde (consulte as regras do seu plano).' },
    { q: 'Nunca fiz terapia, o que devo falar na primeira sessão?', a: 'Não se preocupe em preparar um roteiro. A primeira sessão é um bate-papo acolhedor para nos conhecermos, onde eu te ajudarei com perguntas guiadas para entender o que te levou a buscar ajuda.' },
    { q: 'Quanto tempo dura o tratamento psicológico?', a: 'Não há um tempo pré-determinado. A alta terapêutica depende das demandas individuais de cada paciente e do seu desenvolvimento ao longo do processo.' },
    { q: 'Como agendar minha sessão?', a: 'Basta clicar em qualquer botão de agendamento aqui no site, e você será direcionado para o meu WhatsApp, onde minha equipe ou eu encontraremos o melhor horário para você.' }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    if (openIndex === index) {
      setOpenIndex(null);
    } else {
      setOpenIndex(index);
    }
  };

  return (
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12 bg-[#F9F5F1]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h3 className="text-[#BFA785] font-bold tracking-widest uppercase text-sm mb-4 border-b-2 border-[#BFA785] inline-block pb-1">Tire suas dúvidas</h3>
          <h2 className="font-heading text-4xl sm:text-5xl font-extrabold text-[#4A3F35]">
            Perguntas Frequentes
          </h2>
        </div>

        {/* 2 Columns FAQ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div className="space-y-6">
            {faqs.slice(0, 3).map((faq, index) => (
              <div key={index} className="bg-white rounded-[1.5rem] p-2 shadow-sm border border-[#4A3F35]/5 reveal-up" style={{ transitionDelay: `${index * 100}ms` }}>
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full px-6 py-4 flex justify-between items-center text-left"
                >
                  <span className="font-bold text-[#4A3F35] text-base md:text-lg pr-4">{faq.q}</span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-[#BFA785] text-white' : 'bg-[#F9F5F1] text-[#BFA785]'}`}>
                    <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[#4A3F35]/70 font-medium text-base leading-relaxed">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="space-y-6">
            {faqs.slice(3, 6).map((faq, index) => {
              const actualIndex = index + 3;
              return (
                <div key={actualIndex} className="bg-white rounded-[1.5rem] p-2 shadow-sm border border-[#4A3F35]/5 reveal-up" style={{ transitionDelay: `${actualIndex * 100}ms` }}>
                  <button
                    onClick={() => toggleFaq(actualIndex)}
                    className="w-full px-6 py-4 flex justify-between items-center text-left"
                  >
                    <span className="font-bold text-[#4A3F35] text-base md:text-lg pr-4">{faq.q}</span>
                    <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIndex === actualIndex ? 'bg-[#BFA785] text-white' : 'bg-[#F9F5F1] text-[#BFA785]'}`}>
                      <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openIndex === actualIndex ? 'rotate-180' : ''}`} />
                    </div>
                  </button>
                  <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === actualIndex ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <p className="text-[#4A3F35]/70 font-medium text-base leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[#4A3F35] pt-24 pb-12 px-6 md:px-12 text-[#F9F5F1]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 mb-16 reveal-up">

        {/* Left Side: Brand & Contact */}
        <div className="flex-1">
          <a href="#inicio" className="font-heading text-3xl font-extrabold tracking-tight text-white mb-8 block">
            Ludmylla<span className="text-[#BFA785]">.</span>
          </a>

          <p className="text-[#F9F5F1]/80 font-medium text-lg leading-relaxed max-w-sm mb-10">
            Dê o primeiro passo para cuidar de quem realmente importa: você. Agende sua sessão hoje mesmo.
          </p>

          <div className="flex items-center gap-4 mb-12">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#F9F5F1]/10 flex items-center justify-center hover:bg-[#BFA785] transition-colors">
              <Instagram className="w-5 h-5 text-white" />
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-[#F9F5F1]/10 flex items-center justify-center hover:bg-[#BFA785] transition-colors">
              <Phone className="w-5 h-5 text-white" />
            </a>
          </div>
        </div>

        {/* Right Side: Map & Info */}
        <div className="flex-1 flex flex-col md:flex-row gap-12 lg:gap-16">
          <div className="flex-1">
            <p className="font-bold text-white text-lg mb-6">Atendimento</p>
            <ul className="space-y-4 font-medium text-[#F9F5F1]/70">
              <li className="flex gap-3">
                <MapPin className="w-6 h-6 text-[#BFA785] shrink-0" />
                <span>Av. Goiás Norte, 12.373<br />Qd 16, Lt 25 - Res. Recanto do Bosque<br />Goiânia - GO, 74474-310</span>
              </li>
              <li className="flex gap-3 pt-2">
                <Phone className="w-6 h-6 text-[#BFA785] shrink-0" />
                <span>(62) 99451-5447</span>
              </li>
              <li className="flex gap-3 pt-2">
                <CheckCircle2 className="w-6 h-6 text-[#BFA785] shrink-0" />
                <span>Atendimento Online para todo o Brasil</span>
              </li>
            </ul>
          </div>

          <div className="flex-1 h-[200px] md:h-auto rounded-[2rem] overflow-hidden opacity-90 hover:opacity-100 transition-opacity">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.4278453488824!2d-49.289133!3d-16.6178006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef7a2ad08e5c3%3A0x6b44a30e84b7280!2sPsic%C3%B3loga%20Ludmylla%20Valadares!5e0!3m2!1spt-BR!2sbr!4v1714000000000!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização"
            />
          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto border-t border-[#F9F5F1]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold text-[#F9F5F1]/50 tracking-wider">
        <p>© {new Date().getFullYear()} Ludmylla Valadares. Todos os direitos reservados.</p>
        <p>Psicóloga Clínica • CRP 09/20060</p>
      </div>
    </footer>
  );
}

function App() {
  useReveal();
  return (
    <div className="font-sans antialiased text-[#4A3F35] overflow-x-hidden selection:bg-[#BFA785]/30">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
