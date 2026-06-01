import React, { useEffect, useState } from 'react';
import { ArrowRight, Instagram, MapPin, Phone, Menu, X, ChevronDown, Heart, Brain, Globe, Users, Smile, Shield, Sparkles, MessageCircle, Calendar, Leaf, Check } from 'lucide-react';
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

const WHATSAPP_LINK = "https://wa.me/556294515447";
const INSTAGRAM_LINK = "#";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[var(--color-brand-light)] shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#inicio" className="flex items-center">
          <img src="/fotos/Logomarca(1).png" alt="Logomarca Ludmylla Valadares" className="h-14 md:h-16 lg:h-20 w-auto object-contain" />
        </a>

        <div className="hidden md:flex gap-10 items-center">
          <a href="#publico" className="text-[13px] font-semibold text-[var(--color-brand-dark)] hover:text-[var(--color-brand-accent)] transition-colors uppercase tracking-wider">Atendimento</a>
          <a href="#demandas" className="text-[13px] font-semibold text-[var(--color-brand-dark)] hover:text-[var(--color-brand-accent)] transition-colors uppercase tracking-wider">Especialidades</a>
          <a href="#sobre" className="text-[13px] font-semibold text-[var(--color-brand-dark)] hover:text-[var(--color-brand-accent)] transition-colors uppercase tracking-wider">Sobre</a>
          <a href="#faq" className="text-[13px] font-semibold text-[var(--color-brand-dark)] hover:text-[var(--color-brand-accent)] transition-colors uppercase tracking-wider">Dúvidas</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-[13px] font-bold text-white bg-[var(--color-brand-accent)] px-6 py-3 rounded-full hover:bg-[var(--color-brand-wine)] transition-all duration-300 shadow-lg shadow-[var(--color-brand-accent)]/20 uppercase tracking-wide">
            Agendar Sessão
          </a>
        </div>

        <button className="md:hidden text-[var(--color-brand-dark)]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      <div className={`md:hidden absolute top-full left-0 w-full bg-[var(--color-brand-light)] border-t border-[var(--color-brand-dark)]/10 flex flex-col items-center py-6 gap-6 transition-all duration-300 shadow-xl ${isOpen ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0 py-0 overflow-hidden'}`}>
        <a href="#publico" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-[var(--color-brand-dark)]">Atendimento</a>
        <a href="#demandas" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-[var(--color-brand-dark)]">Especialidades</a>
        <a href="#sobre" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-[var(--color-brand-dark)]">Sobre</a>
        <a href="#faq" onClick={() => setIsOpen(false)} className="text-sm font-semibold text-[var(--color-brand-dark)]">Dúvidas</a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-sm font-bold text-white bg-[var(--color-brand-accent)] px-8 py-3 rounded-full mt-2">
          Agendar Sessão
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100vh] flex flex-col md:block overflow-hidden bg-white md:bg-transparent">
      
      {/* Desktop Background Image (Hidden on mobile) */}
      <div className="absolute inset-0 z-0 hidden md:block">
        <img
          src="/fotos/Back.png"
          alt="Psicóloga Ludmylla Valadares"
          className="absolute top-0 left-0 w-[calc(100%+5rem)] h-[calc(100%+5rem)] max-w-none object-cover object-center"
        />
      </div>

      {/* Text Content - Takes top space on mobile, positioned normally over bg on desktop */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-20 flex-1 flex flex-col justify-center pt-32 pb-8 md:pt-48 md:pb-32">
        <div className="reveal-left max-w-xl lg:max-w-2xl flex flex-col items-start text-left">
          <div className="text-[var(--color-brand-olive)] uppercase tracking-widest text-xs sm:text-sm font-bold mb-4 md:mb-5 drop-shadow-sm flex items-center gap-2">
            <span>Psicóloga Clínica</span>
            <span>•</span>
            <span>CRP: 09/20060</span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-[5rem] font-normal text-[var(--color-brand-dark)] leading-[1.1] mb-6 md:mb-8 drop-shadow-sm tracking-tight">
            Redescubra sua força e assuma o controle da sua <span className="text-[var(--color-brand-accent)] italic pr-2">saúde emocional.</span>
          </h1>

          <p className="text-[var(--color-brand-dark)]/90 md:text-[var(--color-brand-dark)]/80 text-base sm:text-lg md:text-xl font-medium md:font-normal mb-8 md:mb-10 leading-relaxed drop-shadow-sm max-w-[95%] md:max-w-[90%]">
            Através de uma psicoterapia integrativa e humanizada, vamos além dos sintomas para construir o bem-estar que você merece.
          </p>

          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-[var(--color-brand-accent)] text-white px-6 py-4 md:px-8 md:py-4 rounded-full font-bold text-sm hover:bg-[var(--color-brand-wine)] hover:scale-105 transition-all duration-300 shadow-xl shadow-[var(--color-brand-accent)]/30 uppercase tracking-wide w-full sm:w-auto">
            Agendar minha primeira sessão
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Mobile Image - Exclusively at the bottom, taking up remaining space (Hidden on desktop) */}
      <div className="relative w-full h-[45vh] sm:h-[50vh] md:hidden z-10 mt-auto shrink-0">
        <img
          src="/fotos/Back.png"
          alt="Psicóloga Ludmylla Valadares"
          className="w-full h-full object-cover object-[75%_top]"
        />
        {/* Gradient to blend the hard top edge of the image into the white background */}
        <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-white via-white/80 to-transparent"></div>
      </div>
    </section>
  );
}

function TargetAudience() {
  const audiences = [
    {
      icon: <Smile className="w-8 h-8 text-[var(--color-brand-light)]" />,
      title: 'Adultos',
      desc: 'Atendimento focado nas questões da vida adulta e desenvolvimento pessoal.'
    },
    {
      icon: <Users className="w-8 h-8 text-[var(--color-brand-light)]" />,
      title: 'Casais',
      desc: 'Mediação para melhorar a comunicação e fortalecer o relacionamento.'
    },
    {
      icon: <Globe className="w-8 h-8 text-[var(--color-brand-light)]" />,
      title: 'Brasileiros no Exterior',
      desc: 'Suporte emocional para questões de adaptação, solidão e não pertencimento.'
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-[var(--color-brand-light)]" />,
      title: 'Grupos Terapêuticos',
      desc: 'Espaço de escuta, troca, acolhimento e identificação através da vivência em grupo.'
    }
  ];

  return (
    <section id="publico" className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-brand-beige)] relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 reveal-up">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--color-brand-dark)] mb-6">
            Quem eu atendo?
          </h2>
          <div className="w-24 h-1 bg-[var(--color-brand-accent)] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
          {audiences.map((item, idx) => (
            <div key={idx} className="bg-[var(--color-brand-olive)] rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-8 text-[var(--color-brand-light)] hover:-translate-y-2 transition-transform duration-300 reveal-up shadow-xl shadow-[var(--color-brand-dark)]/5" style={{ transitionDelay: `${idx * 100}ms` }}>
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[var(--color-brand-dark)]/20 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6">
                {React.cloneElement(item.icon, { className: "w-6 h-6 md:w-8 md:h-8 text-[var(--color-brand-light)]" })}
              </div>
              <h3 className="font-heading text-lg md:text-2xl font-bold mb-2 md:mb-4">{item.title}</h3>
              <p className="font-medium text-xs sm:text-sm md:text-base leading-relaxed opacity-90">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Specialties() {
  const specialties = [
    { title: 'Ansiedade', icon: <Sparkles className="w-5 h-5 text-[var(--color-brand-accent)]" /> },
    { title: 'Autoestima', icon: <Heart className="w-5 h-5 text-[var(--color-brand-accent)]" /> },
    { title: 'Relacionamentos', icon: <Users className="w-5 h-5 text-[var(--color-brand-accent)]" /> },
    { title: 'Sobrecarga Emocional', icon: <Brain className="w-5 h-5 text-[var(--color-brand-accent)]" /> },
    { title: 'Autoconhecimento', icon: <Smile className="w-5 h-5 text-[var(--color-brand-accent)]" /> },
    { title: 'Dificuldades Familiares', icon: <Shield className="w-5 h-5 text-[var(--color-brand-accent)]" /> },
    { title: 'Transtornos de Humor', icon: <Sparkles className="w-5 h-5 text-[var(--color-brand-accent)]" /> },
    { title: 'Processos de Recomeço', icon: <Globe className="w-5 h-5 text-[var(--color-brand-accent)]" /> }
  ];

  return (
    <section id="demandas" className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-brand-light)]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 reveal-up flex flex-col items-center justify-center">
          <span className="text-[var(--color-brand-olive)] uppercase tracking-widest text-xs md:text-sm font-bold mb-4 drop-shadow-sm">Especialidades</span>
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[4rem] font-normal text-[var(--color-brand-dark)] mb-6 tracking-tight leading-tight">
            Como posso te ajudar
          </h2>
          <p className="text-[var(--color-brand-dark)]/80 text-lg md:text-xl font-normal max-w-2xl mx-auto leading-relaxed">
            Apoio psicológico para o seu bem-estar, atendimento voltado para suas necessidades.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {specialties.map((item, idx) => (
            <div key={idx} className="bg-[var(--color-brand-green-sage)]/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 hover:bg-[var(--color-brand-green-sage)] transition-colors duration-300 reveal-up border border-[var(--color-brand-olive)]/10" style={{ transitionDelay: `${idx * 50}ms` }}>
              <div className="bg-white p-3 rounded-full shadow-sm">
                {item.icon}
              </div>
              <h3 className="font-bold text-[var(--color-brand-dark)] text-[15px]">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-brand-green-sage)]/20 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

        {/* Left Side: Text */}
        <div className="reveal-left order-2 lg:order-1">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--color-brand-dark)] mb-6">
            Sobre Ludmylla Valadares
          </h2>
          <div className="w-24 h-1 bg-[var(--color-brand-accent)] mb-8 rounded-full"></div>

          <div className="space-y-6 text-[var(--color-brand-dark)]/80 font-medium text-lg md:text-xl leading-relaxed">
            <p>
              Sou psicóloga clínica e acredito que existe vida além da dor, dos rótulos e dos diagnósticos. Meu trabalho é oferecer um espaço de escuta, acolhimento e transformação, ajudando cada pessoa a compreender sua história com mais clareza, fortalecer sua saúde emocional e construir uma relação mais saudável consigo mesma.
            </p>
            <p>
              Atuo de forma humanizada, respeitando o tempo, a individualidade e a realidade de cada paciente.
            </p>
          </div>

          <div className="mt-10">
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[var(--color-brand-dark)] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[var(--color-brand-olive)] hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-[var(--color-brand-dark)]/20 uppercase tracking-wide">
              Falar com a Ludmylla
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="reveal-right relative w-full h-[400px] sm:h-[500px] lg:h-[600px] order-1 lg:order-2">
          <div className="absolute inset-0 bg-[var(--color-brand-olive)]/20 rounded-[2rem] transform rotate-3 scale-105"></div>
          <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white bg-[var(--color-brand-beige)] flex items-center justify-center">
            <img
              src="/fotos/Ludmylla5.png"
              alt="Ludmylla Valadares"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    { q: 'Qual a duração da sessão?', a: 'A duração média de cada sessão é de 50 minutos.' },
    { q: 'Você atende por plano de saúde/convênio?', a: 'Não atendo convênio, os atendimentos são particulares, mas emito recibo para que você possa solicitar o reembolso junto ao seu plano.' },
    { q: 'Quais as formas de pagamento?', a: 'Aceito pagamentos via Pix, transferência bancária ou dinheiro.' },
    { q: 'Onde é o atendimento presencial?', a: 'Meu consultório fica localizado na Av. Goiás Norte, 12373 - Residencial Recanto do Bosque.' }
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
    <section id="faq" className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-brand-light)]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 reveal-up">
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-[var(--color-brand-dark)] mb-6">
            Dúvidas Frequentes
          </h2>
          <div className="w-24 h-1 bg-[var(--color-brand-accent)] mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-[1rem] p-1 shadow-sm border border-[var(--color-brand-olive)]/20 reveal-up" style={{ transitionDelay: `${index * 100}ms` }}>
              <button
                onClick={() => toggleFaq(index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <span className="font-bold text-[var(--color-brand-dark)] text-base md:text-lg pr-4">{faq.q}</span>
                <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${openIndex === index ? 'bg-[var(--color-brand-accent)] text-white' : 'bg-[var(--color-brand-beige)] text-[var(--color-brand-dark)]'}`}>
                  <ChevronDown className={`w-6 h-6 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
                </div>
              </button>
              <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${openIndex === index ? 'max-h-[500px] pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                <p className="text-[var(--color-brand-dark)]/80 font-medium text-base md:text-lg leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const steps = [
    { title: 'Agendamento', desc: 'Entre em contato para agendar sua primeira sessão. Responderei o mais rápido possível.' },
    { title: 'Primeira Sessão', desc: 'Conversamos sobre suas questões e começamos a construir juntos o caminho terapêutico.' },
    { title: 'Acompanhamento', desc: 'Sessões regulares em um processo de cuidado contínuo.' }
  ];

  return (
    <section id="processo" className="py-24 md:py-32 px-6 md:px-12 bg-[var(--color-brand-green-sage)]/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
        
        {/* Left Side: Visual Card */}
        <div className="reveal-left bg-[var(--color-brand-beige)] rounded-[2rem] p-10 md:p-16 relative overflow-hidden flex items-center justify-center min-h-[350px] md:min-h-[450px]">
          {/* A simple horizontal step visual */}
          <div className="relative z-10 flex items-center justify-between w-full max-w-sm">
            {/* Connecting Line */}
            <div className="absolute top-[2rem] left-[10%] right-[10%] h-[2px] bg-[var(--color-brand-olive)]/30 z-0"></div>
            
            {/* Steps */}
            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm border border-[var(--color-brand-olive)]/10 text-[var(--color-brand-olive)]">
                <Calendar className="w-6 h-6" />
              </div>
              <span className="font-bold text-[var(--color-brand-dark)] text-sm md:text-base">Agendar</span>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm border border-[var(--color-brand-olive)]/10 text-[var(--color-brand-olive)]">
                <MessageCircle className="w-6 h-6" />
              </div>
              <span className="font-bold text-[var(--color-brand-dark)] text-sm md:text-base">Conversar</span>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-sm border border-[var(--color-brand-olive)]/10 text-[var(--color-brand-olive)]">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="font-bold text-[var(--color-brand-dark)] text-sm md:text-base">Evoluir</span>
            </div>
          </div>
        </div>

        {/* Right Side: Text & Steps */}
        <div className="reveal-right flex flex-col items-start text-left">
          <span className="text-[var(--color-brand-olive)] uppercase tracking-widest text-xs md:text-sm font-bold mb-4 drop-shadow-sm">PROCESSO</span>
          
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-[4rem] font-normal text-[var(--color-brand-dark)] mb-10 tracking-tight leading-tight">
            Como funciona o atendimento
          </h2>

          <div className="space-y-8 mb-12">
            {steps.map((step, idx) => (
              <div key={idx} className="flex items-start gap-5">
                <div className="mt-1 bg-[var(--color-brand-olive)] rounded-full p-1 text-white shrink-0 shadow-sm">
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>
                <div>
                  <h3 className="font-bold text-[var(--color-brand-dark)] text-lg mb-2">{step.title}</h3>
                  <p className="text-[var(--color-brand-dark)]/80 text-base leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 bg-[var(--color-brand-accent)] text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-[var(--color-brand-wine)] hover:scale-105 transition-all duration-300 shadow-xl shadow-[var(--color-brand-accent)]/30 uppercase tracking-wide">
            Agendar minha primeira sessão
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-[var(--color-brand-dark)] py-16 px-6 md:px-12 text-[var(--color-brand-light)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10 reveal-up">

        {/* Info */}
        <div className="text-center md:text-left">
          <img src="/fotos/Logomarca(1).png" alt="Logomarca Ludmylla Valadares" className="h-20 md:h-24 lg:h-28 w-auto mx-auto md:mx-0 mb-6 object-contain" />
          <p className="text-[var(--color-brand-beige)] font-medium text-base mb-2">Psicóloga Clínica</p>
          <div className="flex items-center justify-center md:justify-start gap-2 text-[var(--color-brand-beige)]/80 text-sm">
            <MapPin className="w-4 h-4" />
            <p>Av. Goiás Norte, 12373 - Residencial Recanto do Bosque</p>
          </div>
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-4">
            <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-brand-accent)] transition-colors text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[var(--color-brand-accent)] transition-colors text-white">
              <Phone className="w-5 h-5" />
            </a>
          </div>
          <p className="text-xs font-medium text-[var(--color-brand-beige)]/50 tracking-wider">
            Copyright © {new Date().getFullYear()} - Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}

function App() {
  useReveal();
  return (
    <div className="font-sans antialiased text-[var(--color-brand-dark)] overflow-x-hidden selection:bg-[var(--color-brand-accent)]/30">
      <Navbar />
      <Hero />
      <TargetAudience />
      <Specialties />
      <About />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
