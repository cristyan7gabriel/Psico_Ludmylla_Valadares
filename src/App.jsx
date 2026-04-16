import React, { useEffect, useState } from 'react';
import { ArrowRight, Instagram, MapPin, Phone, CheckCircle2, Menu, X, Heart, Apple, Leaf } from 'lucide-react';
import './index.css';

/* Intersection Observer Hook for animations */
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

const WHATSAPP_LINK = "https://wa.me/5531997917492?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20consulta%20com%20a%20Nutricionista%20Rayane%20Couto!";
const INSTAGRAM_LINK = "https://www.instagram.com/rayanecouto.nutri/";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-[#F2F0E9]/95 backdrop-blur-md border-b border-[#16423C]/10 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#inicio" className="font-serif text-2xl font-medium tracking-wide text-[#16423C]">
          Rayane Couto
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center cursor-pointer">
          <a href="#sobre" className="text-[11px] font-semibold uppercase tracking-widest text-[#1C1C1C]/80 hover:text-[#D4AF37] transition-colors">Sobre</a>
          <a href="#atendimento" className="text-[11px] font-semibold uppercase tracking-widest text-[#1C1C1C]/80 hover:text-[#D4AF37] transition-colors">Atendimento</a>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-[11px] uppercase tracking-widest font-semibold text-[#F2F0E9] bg-[#16423C] px-6 py-2.5 rounded-full hover:bg-opacity-90 transition-all">
            Agendar Consulta
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button className="md:hidden text-[#16423C]" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Content */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-[#F2F0E9] border-b border-[#16423C]/10 flex flex-col items-center py-6 gap-6 transition-all duration-300 ${isOpen ? 'opacity-100 visible h-auto' : 'opacity-0 invisible h-0 py-0 overflow-hidden'}`}>
        <a href="#sobre" onClick={() => setIsOpen(false)} className="text-xs uppercase tracking-widest font-semibold text-[#1C1C1C]/80">Sobre</a>
        <a href="#atendimento" onClick={() => setIsOpen(false)} className="text-xs uppercase tracking-widest font-semibold text-[#1C1C1C]/80">Atendimento</a>
        <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="text-xs uppercase tracking-widest font-semibold text-[#F2F0E9] bg-[#16423C] px-8 py-3 rounded-full mt-2">
          Agendar Consulta
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section id="inicio" className="pt-28 pb-20 md:pt-40 md:pb-32 px-6 md:px-12 min-h-screen flex items-center bg-[#F2F0E9] overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 w-full relative z-10">
        
        {/* Image Card */}
        <div className="flex-1 order-1 lg:order-2 w-[85%] sm:w-full max-w-[320px] lg:max-w-md reveal-right relative mt-6 lg:mt-0 mx-auto">
          
          {/* Background Shape */}
          <div className="absolute inset-0 bg-[#EBE7E0] rounded-[3rem] -rotate-6 scale-[1.05] -z-10 transition-transform hover:rotate-0" />
          
          <div className="relative w-full aspect-[4/5] object-cover rounded-[2.5rem] overflow-hidden shadow-2xl shadow-[#16423C]/10 border-[6px] border-[#F2F0E9]">
            <img src="/fotos/Rayane1.png" alt="Rayane Couto Nutricionista" className="w-full h-full object-cover object-[center_20%]" />
          </div>

          {/* Badge Top Right */}
          <div className="absolute -top-4 -right-6 lg:-right-12 bg-white/95 backdrop-blur-md px-3 py-2.5 lg:px-4 lg:py-3 rounded-2xl shadow-xl flex items-center gap-2 lg:gap-3 z-20">
            <Apple className="w-4 h-4 lg:w-5 lg:h-5 text-[#D4AF37]" strokeWidth={1.5} />
            <div className="text-left">
              <p className="text-[8px] lg:text-[9px] font-bold text-[#1C1C1C] leading-tight uppercase tracking-wider">Plano Alimentar</p>
              <p className="text-[8px] lg:text-[9px] font-bold text-[#1C1C1C] leading-tight uppercase tracking-wider">Personalizado</p>
            </div>
          </div>

          {/* Badge Bottom Left */}
          <div className="absolute -bottom-6 -left-6 lg:-left-12 bg-white/95 backdrop-blur-md px-4 py-3 lg:px-5 lg:py-4 rounded-3xl shadow-xl flex items-center gap-3 lg:gap-4 z-20">
            <div className="bg-[#EBE7E0] p-1.5 lg:p-2 rounded-full">
              <Heart className="w-4 h-4 lg:w-5 lg:h-5 text-[#16423C]" strokeWidth={1.5} />
            </div>
            <div className="text-left">
              <p className="text-[10px] lg:text-xs font-bold text-[#1C1C1C] mb-0.5">Nutrição Humanizada</p>
              <p className="text-[9px] lg:text-[10px] text-[#1C1C1C]/60 leading-tight">Cuidado individualizado</p>
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 reveal-left order-2 lg:order-1 text-center lg:text-left mt-10 lg:mt-0 flex flex-col items-center lg:items-start relative z-20">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 bg-[#EBE7E0] border border-[#16423C]/10 px-4 py-2 rounded-full mb-6">
             <Leaf className="w-3.5 h-3.5 text-[#16423C]" />
             <span className="text-[9px] md:text-[10px] uppercase tracking-[0.2em] text-[#16423C] font-semibold">Nutrição Clínica • CRN-9 31953/P</span>
          </div>

          <h1 className="font-serif text-[2.8rem] leading-[1.05] md:text-7xl lg:text-[5rem] text-[#1C1C1C] mb-8">
            Saúde de forma<br className="hidden lg:block"/> <i className="text-[#16423C] block lg:inline">responsável</i> e<br className="hidden lg:block"/> prazerosa.
          </h1>
          <p className="text-[#1C1C1C]/75 text-base md:text-xl font-light mb-10 max-w-[320px] lg:max-w-lg mx-auto lg:mx-0 leading-relaxed text-center lg:text-left">
            Te ajudo a melhorar sua relação com a alimentação e alcançar seus resultados de maneira leve, humana e sustentável.
          </p>
          <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 bg-[#16423C] text-[#F2F0E9] px-8 py-4 rounded-full uppercase text-[10px] md:text-xs tracking-widest font-semibold hover:bg-opacity-90 hover:scale-[1.02] transition-all duration-300 shadow-xl shadow-[#16423C]/20">
            Dar o primeiro passo
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
        
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 md:py-32 bg-[#EBE7E0] px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        <div className="flex-1 w-full max-w-md lg:max-w-full reveal-left">
          <div className="relative aspect-[4/5] max-w-[460px] mx-auto lg:mr-auto">
            <div className="absolute inset-0 bg-[#16423C]/5 translate-x-4 translate-y-4" />
            <img src="/fotos/Rayane2.png" alt="Rayane Couto no consultório" className="w-full h-full object-cover relative z-10 shadow-xl" />
          </div>
        </div>
        <div className="flex-1 reveal-right text-center lg:text-left">
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1C1C1C] mb-8 leading-tight">
            <i className="text-[#16423C]">Prazer,</i><br /> Rayane Couto.
          </h2>
          <div className="space-y-6 text-[#1C1C1C]/75 text-base md:text-lg font-light leading-relaxed">
            <p>
              Sou nutricionista pela Universidade Federal de Minas Gerais (UFMG) e atuo nas áreas de Nutrição Clínica e Esportiva. Meu principal propósito é mostrar que é possível ter mais saúde, disposição e resultados excelentes sem abrir mão do que você gosta de comer.
            </p>
            <p>
              Acredito profundamente em uma nutrição gentil e humana. O foco do nosso acompanhamento será sempre a construção de hábitos duradouros que se ajeitam à sua rotina real, e não dietas que não podem ser sustentadas a longo prazo.
            </p>
          </div>
          <div className="mt-10 pt-8 border-t border-[#16423C]/15 grid grid-cols-2 gap-6 md:gap-4 text-left">
            <div>
              <p className="font-serif text-3xl md:text-4xl text-[#16423C] leading-none mb-2">UFMG</p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#1C1C1C]/60 font-semibold">Formação</p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-[#16423C] leading-none mb-2">CRN-9</p>
              <p className="text-[10px] md:text-xs uppercase tracking-[0.15em] text-[#1C1C1C]/60 font-semibold">Nutricionista</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="atendimento" className="py-24 md:py-32 px-6 md:px-12 bg-[#F2F0E9]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-20 reveal-up">
          <p className="text-xs md:text-sm uppercase tracking-[0.2em] mb-4 text-[#D4AF37] font-semibold">O Método</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#1C1C1C] leading-tight">Como funciona o acompanhamento?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto">
          <div className="flex gap-6 reveal-up" style={{ transitionDelay: '0ms' }}>
            <div className="shrink-0 font-serif text-4xl md:text-5xl text-[#D4AF37] opacity-80">01</div>
            <div>
              <h3 className="text-lg md:text-xl font-medium text-[#16423C] mb-3 uppercase tracking-wider">Nutrição Clínica & Esportiva</h3>
              <p className="text-[#1C1C1C]/70 font-light leading-relaxed text-sm md:text-base">
                Planejamento focado nos seus objetivos estéticos e de saúde. Garantimos a nutrição e energia adequadas para perda de gordura, performance em treinos ou ajustes metabólicos gerais.
              </p>
            </div>
          </div>
          <div className="flex gap-6 reveal-up" style={{ transitionDelay: '100ms' }}>
            <div className="shrink-0 font-serif text-4xl md:text-5xl text-[#D4AF37] opacity-80">02</div>
            <div>
              <h3 className="text-lg md:text-xl font-medium text-[#16423C] mb-3 uppercase tracking-wider">Plano Individualizado</h3>
              <p className="text-[#1C1C1C]/70 font-light leading-relaxed text-sm md:text-base">
                Diga adeus a cardápios engessados. Criamos juntos uma estratégia alimentar na hora da consulta, prezando por viabilidade financeira, horários e suas comidas preferidas.
              </p>
            </div>
          </div>
          <div className="flex gap-6 reveal-up" style={{ transitionDelay: '200ms' }}>
            <div className="shrink-0 font-serif text-4xl md:text-5xl text-[#D4AF37] opacity-80">03</div>
            <div>
              <h3 className="text-lg md:text-xl font-medium text-[#16423C] mb-3 uppercase tracking-wider">Sem Caminhos Extremistas</h3>
              <p className="text-[#1C1C1C]/70 font-light leading-relaxed text-sm md:text-base">
                Te ensinarei a ter autonomia na hora de se alimentar, criando escolhas de forma inteligente. Comer com prazer é essencial para qualquer constância de longo prazo.
              </p>
            </div>
          </div>
          <div className="flex gap-6 reveal-up" style={{ transitionDelay: '300ms' }}>
            <div className="shrink-0 font-serif text-4xl md:text-5xl text-[#D4AF37] opacity-80">04</div>
            <div>
              <h3 className="text-lg md:text-xl font-medium text-[#16423C] mb-3 uppercase tracking-wider">Apoio a cada passo</h3>
              <p className="text-[#1C1C1C]/70 font-light leading-relaxed text-sm md:text-base">
                Atendimento presencial focado ou teleatendimento confortável de casa. Disponibilizo suporte via WhatsApp contínuo para eventuais dúvidas após sua consulta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Strip() {
  return (
    <div className="bg-[#16423C] py-20 px-6 md:px-12 text-center overflow-hidden">
      <p className="reveal-up font-serif text-[#F2F0E9] text-3xl md:text-5xl lg:text-6xl tracking-wide font-light max-w-4xl mx-auto italic leading-snug">
        "Descubra que o <span className="font-medium">equilíbrio</span> é o melhor caminho para resultados <span className="font-medium">consistentes.</span>"
      </p>
    </div>
  )
}

function LocationAndFooter() {
  return (
    <footer className="bg-[#EBE7E0] pt-24 pb-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 mb-20 reveal-up">
        <div className="flex-1">
          <p className="text-xs uppercase tracking-[0.2em] mb-4 text-[#D4AF37] font-semibold">Decida cuidar de você</p>
          <h2 className="font-serif text-4xl md:text-6xl text-[#1C1C1C] mb-10 leading-tight">Vamos começar?</h2>

          <div className="flex flex-col gap-8 font-light text-[#1C1C1C]/75 text-base lg:text-lg border-l border-[#16423C]/20 pl-6">
            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-[#16423C] shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-xs uppercase tracking-[0.15em] text-[#16423C] mb-1">Agendamentos / WhatsApp</p>
                <p>(31) 99791-7492</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-[#16423C] shrink-0 mt-1" />
              <div>
                <p className="font-semibold text-xs uppercase tracking-[0.15em] text-[#16423C] mb-1">Consultório</p>
                <p className="leading-relaxed">
                  Av. dos Engenheiros, 1208 - Castelo<br />
                  Belo Horizonte - MG<br />
                  CEP: 30150-250<br />
                  <em className="text-[#D4AF37] font-medium not-italic block mt-1">+ Atendimento Online (Brasil todo)</em>
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4">
              <a href={WHATSAPP_LINK} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 bg-[#16423C] text-[#F2F0E9] px-8 py-4 rounded-full uppercase text-[10px] md:text-xs tracking-widest font-semibold hover:bg-opacity-90 hover:scale-[1.02] transition-all">
                Agendar via WhatsApp
              </a>
              <a href={INSTAGRAM_LINK} target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 border border-[#16423C]/20 text-[#16423C] px-8 py-4 rounded-full uppercase text-[10px] md:text-xs tracking-widest font-semibold hover:bg-[#16423C]/5 transition-all">
                <Instagram className="w-4 h-4" /> Seguir Instagram
              </a>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[450px] h-[350px] lg:h-auto rounded-3xl overflow-hidden grayscale-[50%] contrast-[1.1] opacity-90 shadow-2xl hover:grayscale-0 hover:opacity-100 transition-all duration-700">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.9!2d-43.9418!3d-19.9225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU1JzIxLjAiUyA0M8KwNTYnMzAuNSJX!5e0!3m2!1spt-BR!2sbr!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do consultório Rayane Couto"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-[#16423C]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] md:text-xs font-semibold text-[#1C1C1C]/40 uppercase tracking-widest">
        <p>© {new Date().getFullYear()} Rayane Couto. Todos os direitos reservados.</p>
        <p>Nutricionista Clínica & Esportiva</p>
      </div>
    </footer>
  );
}

function App() {
  useReveal();
  return (
    <div className="font-sans antialiased text-[#1C1C1C] overflow-x-hidden selection:bg-[#D4AF37]/30">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Strip />
      <LocationAndFooter />
    </div>
  );
}

export default App;
