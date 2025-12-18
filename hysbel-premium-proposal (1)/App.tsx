
import React, { useState, useEffect, useRef } from 'react';
import { 
  Check, 
  X, 
  Clock, 
  Zap, 
  Smartphone, 
  ShieldCheck, 
  ArrowRight, 
  Star, 
  MessageSquare, 
  ExternalLink,
  ChevronDown,
  Monitor,
  Search,
  Code,
  Layers,
  FileText,
  Calendar,
  DollarSign,
  TrendingUp,
  Layout
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';

// --- Types & Constants ---

const WHATSAPP_NUMBER = '5527996894947';
const CONSULTANT_NAME = 'Gustavo';
const CLIENT_NAME = 'Felipe';
const COMPANY_NAME = 'Hysbel';

const COLORS = {
  bg: {
    primary: '#000000',
    secondary: '#0A0A0A',
    tertiary: '#111111',
  },
  surface: {
    default: '#161616',
    hover: '#1E1E1E',
    active: '#252525',
  },
  border: {
    subtle: '#1F1F1F',
    default: '#2A2A2A',
    strong: '#3A3A3A',
  },
  text: {
    primary: '#FFFFFF',
    secondary: '#B3B3B3',
    tertiary: '#737373',
    muted: '#525252',
  },
  accent: {
    green: '#22C55E',
    red: '#EF4444',
  }
};

// --- Helper Components ---

const Section = ({ children, className = "", id = "" }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-24 px-6 md:px-12 lg:px-24 overflow-hidden ${className}`}>
    <div className="max-w-7xl mx-auto">
      {children}
    </div>
  </section>
);

const SectionHeader = ({ title, subtitle, align = "center" }: { title: string; subtitle?: string; align?: "center" | "left" }) => (
  <div className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}>
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-4xl md:text-5xl font-bold text-gradient mb-6"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-lg text-[#B3B3B3] max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

const Button = ({ 
  children, 
  variant = 'primary', 
  className = "", 
  onClick,
  href
}: { 
  children: React.ReactNode; 
  variant?: 'primary' | 'outline' | 'ghost' | 'success'; 
  className?: string;
  onClick?: () => void;
  href?: string;
}) => {
  const baseClasses = "px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center gap-2 text-sm md:text-base";
  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 shadow-[0_0_20px_rgba(255,255,255,0.15)]",
    outline: "bg-transparent border border-[#2A2A2A] text-white hover:bg-[#161616]",
    ghost: "bg-transparent text-[#B3B3B3] hover:text-white underline-offset-4 hover:underline",
    success: "bg-[#22C55E] text-white hover:bg-[#1ea34d] shadow-[0_0_20px_rgba(34,197,94,0.3)] animate-pulse-subtle",
  };

  const Component = href ? 'a' : 'button';

  return (
    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
      <Component 
        href={href}
        onClick={onClick}
        className={`${baseClasses} ${variants[variant]} ${className}`}
      >
        {children}
      </Component>
    </motion.div>
  );
};

// --- Section Components ---

const Hero = () => {
  const date = new Date();
  date.setDate(date.getDate() + 7);
  const formattedDate = date.toLocaleDateString('pt-BR');

  return (
    <Section className="min-h-screen flex items-center relative pt-32 pb-16">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-[#22C55E] rounded-full blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-white rounded-full blur-[150px]" />
      </div>

      <div className="flex flex-col items-center text-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex items-center gap-3 glass px-4 py-2 rounded-full border-[#1F1F1F] mb-8"
        >
          <div className="w-2 h-2 bg-[#22C55E] rounded-full animate-pulse" />
          <span className="text-xs md:text-sm font-medium tracking-wider text-[#B3B3B3] uppercase">Proposta Exclusiva</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 text-[#737373] mb-6"
        >
          <Clock size={16} />
          <span className="text-xs md:text-sm">Condições especiais válidas até {formattedDate}</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold text-gradient mb-8 leading-tight tracking-tight"
        >
          <span className="text-white">Hysbel</span> de cara nova — Um site à altura do seu potencial
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-xl text-[#B3B3B3] max-w-3xl mb-12 leading-relaxed"
        >
          Um site construído do zero com código puro, design premium e performance que impressiona — feito para representar a Hysbel pelos próximos 10 anos.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col md:flex-row gap-6 items-center"
        >
          <Button href="#problema">Ver Proposta Completa <ArrowRight size={18} /></Button>
          <span className="text-[#525252] text-sm">
            Preparada especialmente para <span className="text-white font-medium">{CLIENT_NAME}</span> — {COMPANY_NAME}
          </span>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-[10px] text-[#525252] uppercase tracking-[0.2em]">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#2A2A2A] to-transparent" />
        </motion.div>
      </div>
    </Section>
  );
};

const Problem = () => {
  const painPoints = [
    "Clientes não encontram você quando pesquisam no Google",
    "Sua empresa não tem uma vitrine digital profissional",
    "Concorrentes com sites melhores passam na frente",
    "Propostas comerciais genéricas que não impressionam",
    "Visitantes confusos não viram clientes",
    "Sem um canal que trabalhe pra você 24 horas"
  ];

  return (
    <Section id="problema" className="bg-[#0A0A0A]">
      <SectionHeader 
        title="O que está impedindo a Hysbel de crescer online?"
        subtitle="Identificamos gargalos críticos que podem estar segurando o potencial da sua marca no ambiente digital."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {painPoints.map((point, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 glass hover:bg-[#1E1E1E] transition-colors rounded-3xl group"
          >
            <div className="w-12 h-12 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <X className="text-[#EF4444]" size={24} />
            </div>
            <p className="text-lg text-white font-medium leading-relaxed">{point}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const Solution = () => {
  const solutions = [
    { title: "Site Veloz", text: "Um site que carrega em menos de 1 segundo e mantém visitantes engajados.", icon: <Zap /> },
    { title: "Design Atemporal", text: "Visual moderno que continua elegante por 10 anos, sem parecer datado.", icon: <Layout /> },
    { title: "Autonomia Total", text: "Código seu, sem dependências, evolua quando quiser.", icon: <ShieldCheck /> },
    { title: "Conversão Real", text: "Cada elemento pensado para transformar visitante em cliente.", icon: <TrendingUp /> }
  ];

  return (
    <Section>
      <SectionHeader title="Imagine se a Hysbel pudesse..." />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {solutions.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 glass rounded-3xl border-[#1F1F1F] hover:border-[#22C55E]/30 transition-all group"
          >
            <div className="w-14 h-14 rounded-2xl bg-[#22C55E]/10 flex items-center justify-center mb-8 text-[#22C55E] group-hover:scale-110 transition-transform">
              {React.cloneElement(item.icon as React.ReactElement<any>, { size: 28 })}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-[#B3B3B3] leading-relaxed">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const Showcase = () => {
  const cards = [
    {
      icon: <Layers />,
      title: "Design que Impressiona",
      badge: "100% Personalizado",
      items: [
        "Layout exclusivo para a Hysbel",
        "Identidade visual consistente",
        "Hierarquia visual que guia o olhar",
        "Estética premium e moderna"
      ]
    },
    {
      icon: <Code />,
      title: "Performance Máxima",
      badge: "Você é o Dono",
      items: [
        "HTML/CSS/JS otimizado",
        "Carregamento ultrarrápido",
        "Sem frameworks pesados",
        "Hospede onde quiser"
      ]
    },
    {
      icon: <FileText />,
      title: "Proposta que Fecha",
      badge: "BÔNUS GRÁTIS",
      items: [
        "PDF de 14 páginas redesenhado",
        "Design visual impactante",
        "Estrutura persuasiva",
        "Pronto pra impressionar"
      ],
      highlight: true
    }
  ];

  return (
    <Section className="bg-[#0A0A0A]">
      <SectionHeader 
        title="O que você vai receber" 
        subtitle="Três pilares que vão transformar a presença digital da Hysbel"
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className={`relative p-10 glass rounded-[40px] border transition-all duration-500 hover:scale-[1.02] group ${
              card.highlight 
                ? 'border-[#22C55E]/40 bg-[#22C55E]/5 shadow-[0_0_60px_rgba(34,197,94,0.1)]' 
                : 'border-[#1F1F1F] hover:border-[#3A3A3A]'
            }`}
          >
            {/* Badge */}
            <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase ${
              card.highlight 
                ? 'bg-[#22C55E]/20 text-[#22C55E] border border-[#22C55E]/30' 
                : 'bg-white/5 text-[#737373] border border-white/10'
            }`}>
              {card.badge}
            </div>

            {/* Icon */}
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300 group-hover:scale-110 ${
              card.highlight 
                ? 'bg-[#22C55E]/10 text-[#22C55E]' 
                : 'bg-white/5 text-white group-hover:bg-white/10'
            }`}>
              {React.cloneElement(card.icon as React.ReactElement<any>, { size: 32 })}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-6">{card.title}</h3>

            {/* Items */}
            <ul className="space-y-4">
              {card.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check size={18} className={`mt-0.5 flex-shrink-0 ${card.highlight ? 'text-[#22C55E]' : 'text-[#22C55E]'}`} />
                  <span className="text-[#B3B3B3] leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {/* Glow effect on highlight card */}
            {card.highlight && (
              <div className="absolute -inset-[1px] bg-gradient-to-b from-[#22C55E]/20 to-transparent rounded-[40px] -z-10 blur-xl opacity-50" />
            )}
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const Transformation = () => {
  const before = [
    "Sem presença digital profissional",
    "Clientes não te encontram online", 
    "Concorrentes à frente nas buscas",
    "Proposta em PDF sem impacto",
    "Oportunidades perdidas todo dia",
    "Dependendo só de indicação"
  ];
  const after = [
    "Site premium que impressiona",
    "Encontrado nas primeiras páginas",
    "Autoridade visual sobre concorrentes",
    "Proposta que fecha negócios (GRÁTIS)",
    "Clientes chegando pelo site 24/7",
    "Canal de vendas trabalhando pra você"
  ];

  return (
    <Section className="bg-[#0A0A0A]">
      <SectionHeader title="A Evolução da Hysbel" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-10 glass border-[#EF4444]/20 rounded-[40px] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <X size={80} className="text-[#EF4444]" />
          </div>
          <h3 className="text-2xl font-bold text-[#EF4444] mb-8 flex items-center gap-3">
            Onde você está
          </h3>
          <ul className="space-y-6">
            {before.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-[#B3B3B3]">
                <div className="mt-1"><X size={18} className="text-[#EF4444]" /></div>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-10 glass border-[#22C55E]/40 rounded-[40px] relative overflow-hidden bg-[#22C55E]/5"
        >
          <div className="absolute top-0 right-0 p-6 opacity-10">
            <Check size={80} className="text-[#22C55E]" />
          </div>
          <h3 className="text-2xl font-bold text-[#22C55E] mb-8 flex items-center gap-3">
            Onde você vai estar
          </h3>
          <ul className="space-y-6">
            {after.map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-white">
                <div className="mt-1"><Check size={18} className="text-[#22C55E]" /></div>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </Section>
  );
};

const Differentiators = () => {
  const items = [
    { title: "Código Puro", desc: "HTML/CSS/JS sem frameworks pesados. Performance máxima garantida.", icon: <Code /> },
    { title: "Design que Dura", desc: "Sites criados para durar 10 anos sem parecer ultrapassados.", icon: <Star /> },
    { title: "100% Seu", desc: "Código entregue, hospede onde quiser, sem lock-in.", icon: <ShieldCheck /> },
    { title: "Mobile-First", desc: "Pensado do celular pro desktop. Perfeito em qualquer tela.", icon: <Smartphone /> },
    { title: "SEO Nativo", desc: "Estrutura técnica otimizada para Google desde o início.", icon: <Search /> },
    { title: "Proposta Grátis", desc: "Redesign completo da sua proposta comercial incluída.", icon: <FileText /> }
  ];

  return (
    <Section>
      <SectionHeader title="O que torna isso único" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="p-8 glass rounded-3xl border-[#1F1F1F] hover:bg-[#1E1E1E] transition-all group"
          >
            <div className="text-white mb-6 group-hover:scale-110 group-hover:text-[#22C55E] transition-all duration-300">
              {React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-[#B3B3B3] leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

const Process = () => {
  const steps = [
    { 
      title: "SEMANA 1 - Discovery & Design", 
      items: ["Coleta de referências", "Criação do design", "Aprovação visual"] 
    },
    { 
      title: "SEMANA 2 - Desenvolvimento", 
      items: ["Codificação do site", "Otimização de performance", "Testes responsivos", "Revisão da proposta PDF"] 
    },
    { 
      title: "ENTREGA & LANÇAMENTO", 
      items: ["Ajustes finais", "Deploy em produção", "Configuração de domínio", "Handoff completo"] 
    }
  ];

  return (
    <Section>
      <SectionHeader title="Como funciona" />
      <div className="max-w-4xl mx-auto">
        <div className="relative border-l-2 border-[#1F1F1F] ml-6 pl-12 space-y-24">
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-[61px] top-0 w-12 h-12 bg-[#000000] border-2 border-[#2A2A2A] rounded-2xl flex items-center justify-center text-white font-bold group-hover:border-[#22C55E] transition-colors">
                {idx + 1}
              </div>
              <h3 className="text-2xl font-bold text-white mb-6">{step.title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {step.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#B3B3B3]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#22C55E]" />
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Guarantees = () => {
  const items = [
    { title: "Código Fonte Seu", desc: "Você recebe TUDO. Hospede onde quiser, altere quando quiser.", icon: <ShieldCheck /> },
    { title: "Suporte Pós-Entrega", desc: "Estamos junto pra dúvidas e ajustes finos.", icon: <MessageSquare /> },
    { title: "Satisfação Garantida", desc: "Revisões incluídas até você aprovar.", icon: <Star /> }
  ];

  return (
    <Section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="p-8 glass rounded-3xl border-[#1F1F1F] flex flex-col items-center text-center">
            <div className="text-[#22C55E] mb-6">{React.cloneElement(item.icon as React.ReactElement<any>, { size: 32 })}</div>
            <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
            <p className="text-[#B3B3B3] text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

const Bonuses = () => {
  const bonuses = [
    { title: "Proposta Comercial Redesenhada", val: "R$ 497", desc: "PDF de 14 páginas com design premium." },
    { title: "Otimização de Imagens", val: "R$ 197", desc: "Todas as imagens comprimidas e otimizadas." },
    { title: "Configuração de Analytics", val: "R$ 147", desc: "Google Analytics instalado e configurado." },
    { title: "1 Rodada Extra de Revisão", val: "R$ 200", desc: "Ajustes adicionais sem custo." }
  ];

  return (
    <Section className="bg-[#0A0A0A]">
      <div className="flex flex-col items-center mb-16">
        <span className="text-[10px] font-bold tracking-widest text-[#22C55E] uppercase bg-[#22C55E]/10 px-4 py-2 rounded-full mb-6">Bônus Exclusivos</span>
        <SectionHeader title="Inclusos gratuitamente" />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {bonuses.map((bonus, i) => (
          <div key={i} className="p-6 glass border-white/10 rounded-3xl flex flex-col">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-bold text-white text-lg">{bonus.title}</h3>
              <span className="text-[#EF4444] line-through text-xs font-medium">{bonus.val}</span>
            </div>
            <p className="text-[#B3B3B3] text-sm mb-4">{bonus.desc}</p>
            <span className="mt-auto text-[#22C55E] font-bold text-xs">GRÁTIS</span>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <p className="text-[#737373] text-sm">Total em bônus: <span className="line-through">R$ 1.041</span> <span className="text-[#22C55E] font-bold ml-1">(GRÁTIS)</span></p>
      </div>
    </Section>
  );
};

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const faqs = [
    { 
      q: "Quanto tempo leva para o site ficar pronto?", 
      a: "Em média 2 semanas, do kickoff ao lançamento." 
    },
    { 
      q: "E se eu quiser mudar algo depois?", 
      a: "O código é 100% seu! Você pode alterar quando quiser, ou contratar qualquer desenvolvedor para evoluir." 
    },
    { 
      q: "A proposta comercial está mesmo inclusa?", 
      a: "Sim! O redesign completo das 14 páginas sai de graça fechando o site. É um bônus exclusivo." 
    }
  ];

  return (
    <Section className="bg-[#0A0A0A]">
      <SectionHeader title="Perguntas Frequentes" />
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="glass border-[#1F1F1F] rounded-2xl overflow-hidden">
            <button 
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full p-6 text-left flex justify-between items-center text-white font-medium hover:bg-white/5 transition-colors"
            >
              {faq.q}
              <ChevronDown className={`transition-transform duration-300 ${openIdx === i ? "rotate-180" : ""}`} size={20} />
            </button>
            <AnimatePresence>
              {openIdx === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-[#B3B3B3] leading-relaxed">
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </Section>
  );
};

const FooterCTA = () => {
  const msg = encodeURIComponent(`Olá, Gustavo! Vi a proposta comercial para a Hysbel e quero fechar.`);
  return (
    <Section className="border-t border-[#1F1F1F] pb-12">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Pronto para a Hysbel brilhar online?</h2>
        <p className="text-[#B3B3B3] text-lg mb-12 max-w-xl">Essa proposta foi preparada exclusivamente para você.</p>
        
        <div className="flex flex-col md:flex-row gap-6 mb-24 w-full justify-center">
          <Button 
            variant="success" 
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`}
            className="w-full md:w-auto"
          >
            FALAR COM GUSTAVO <MessageSquare size={18} />
          </Button>
          <Button variant="outline" className="w-full md:w-auto">
            BAIXAR PDF DA PROPOSTA <FileText size={18} />
          </Button>
        </div>

        <div className="w-full pt-12 border-t border-[#1F1F1F] flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <div className="text-white font-bold text-xl mb-1">{CONSULTANT_NAME}</div>
            <div className="text-[#737373] text-sm">Web Designer & Developer</div>
            <div className="text-[#525252] text-xs mt-2">contatogustavordc@gmail.com</div>
          </div>
          <div className="text-[#525252] text-xs text-right">
            © 2025 Tavin Digital. Todos os direitos reservados.
          </div>
        </div>
      </div>
    </Section>
  );
};

const SpecialOfferPopup = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [paymentOption, setPaymentOption] = useState<'parcela' | 'pix' | 'negociar'>('parcela');

  const messages = {
    parcela: encodeURIComponent('Olá, Gustavo! Quero fechar a proposta da Hysbel com desconto especial - 4x de R$ 299,25 no cartão!'),
    pix: encodeURIComponent('Olá, Gustavo! Quero fechar a proposta da Hysbel com desconto especial - R$ 1.200 à vista no PIX!'),
    negociar: encodeURIComponent('Olá, Gustavo! Vi a proposta da Hysbel com desconto de R$ 1.200 e gostaria de negociar uma forma de pagamento.')
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-md">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="glass max-w-lg w-full rounded-[40px] p-8 md:p-12 relative border-white/20 shadow-[0_0_50px_rgba(34,197,94,0.15)]"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-[#737373] hover:text-white transition-colors">
              <X size={24} />
            </button>

            <div className="flex flex-col items-center text-center">
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#22C55E] uppercase mb-4">Oferta Relâmpago</span>
              <h2 className="text-4xl font-bold text-white mb-4 italic tracking-tight">ESPERA!</h2>
              <p className="text-[#B3B3B3] mb-8">Consegui uma condição especial pra você fechar <span className="text-white font-bold">HOJE</span>.</p>

              <div className="flex items-center gap-4 mb-10">
                <span className="text-[#EF4444] line-through text-lg">R$ 1.497</span>
                <ArrowRight size={20} className="text-[#525252]" />
                <span className="text-4xl font-bold text-white">R$ 1.200</span>
              </div>

              <div className="w-full space-y-3 mb-10">
                <button 
                  onClick={() => setPaymentOption('parcela')}
                  className={`w-full p-4 rounded-2xl border transition-all text-left flex justify-between items-center ${paymentOption === 'parcela' ? 'border-[#22C55E] bg-[#22C55E]/5' : 'border-[#2A2A2A] bg-[#111111]'}`}
                >
                  <span className={`text-sm ${paymentOption === 'parcela' ? 'text-white font-semibold' : 'text-[#737373]'}`}>4x de R$ 299,25 no cartão</span>
                  <div className={`w-4 h-4 rounded-full border ${paymentOption === 'parcela' ? 'border-[#22C55E] bg-[#22C55E]' : 'border-[#3A3A3A]'}`} />
                </button>
                <button 
                  onClick={() => setPaymentOption('pix')}
                  className={`w-full p-4 rounded-2xl border transition-all text-left flex justify-between items-center ${paymentOption === 'pix' ? 'border-[#22C55E] bg-[#22C55E]/5' : 'border-[#2A2A2A] bg-[#111111]'}`}
                >
                  <span className={`text-sm ${paymentOption === 'pix' ? 'text-white font-semibold' : 'text-[#737373]'}`}>R$ 1.200 à vista no PIX</span>
                  <div className={`w-4 h-4 rounded-full border ${paymentOption === 'pix' ? 'border-[#22C55E] bg-[#22C55E]' : 'border-[#3A3A3A]'}`} />
                </button>
                <button 
                  onClick={() => setPaymentOption('negociar')}
                  className={`w-full p-4 rounded-2xl border transition-all text-left flex justify-between items-center ${paymentOption === 'negociar' ? 'border-[#22C55E] bg-[#22C55E]/5' : 'border-[#2A2A2A] bg-[#111111]'}`}
                >
                  <span className={`text-sm ${paymentOption === 'negociar' ? 'text-white font-semibold' : 'text-[#737373]'}`}>Quero negociar outra forma</span>
                  <div className={`w-4 h-4 rounded-full border ${paymentOption === 'negociar' ? 'border-[#22C55E] bg-[#22C55E]' : 'border-[#3A3A3A]'}`} />
                </button>
              </div>

              <Button 
                variant="success" 
                className="w-full py-5 text-lg"
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${messages[paymentOption]}`}
              >
                QUERO ESSE DESCONTO <Zap size={18} />
              </Button>

              <button onClick={onClose} className="mt-6 text-[#525252] text-xs hover:text-[#B3B3B3] transition-colors flex items-center gap-1">
                Não, prefiro pagar o valor cheio <ArrowRight size={10} />
              </button>

              <div className="mt-8 flex items-center gap-2 text-[10px] text-[#22C55E] font-bold uppercase tracking-widest">
                <Clock size={12} /> Válido apenas para fechamento hoje
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

const Investment = () => {
  const [showPopup, setShowPopup] = useState(false);
  const pricingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        const hasShown = sessionStorage.getItem('hasShownOfferPopup');
        if (!hasShown) {
          const timer = setTimeout(() => {
            setShowPopup(true);
            sessionStorage.setItem('hasShownOfferPopup', 'true');
          }, 5000);
          return () => clearTimeout(timer);
        }
      }
    }, { threshold: 0.3 });

    if (pricingRef.current) observer.observe(pricingRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Section id="investimento" className="relative">
      <div ref={pricingRef} className="max-w-4xl mx-auto glass rounded-[60px] p-12 md:p-24 border-[#1F1F1F] shadow-2xl relative overflow-hidden">
        {/* Decorative point */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#22C55E]/10 rounded-full blur-[100px]" />

        <div className="text-center mb-16">
          <p className="text-[#EF4444] line-through text-lg md:text-xl font-medium mb-4">Valor de mercado: R$ 3.500+</p>
          <div className="inline-block px-6 py-2 bg-[#22C55E]/10 border border-[#22C55E]/30 rounded-full mb-8">
            <span className="text-[#22C55E] text-xs font-bold tracking-widest uppercase">Investimento Hoje</span>
          </div>
          <div className="text-5xl md:text-7xl font-bold text-white mb-4">4x de R$ 374,25</div>
          <p className="text-[#737373] text-lg">ou R$ 1.497 à vista</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12 mb-16 max-w-2xl mx-auto">
          {[
            "Redesign Completo Hysbel", "Código Puro (HTML/CSS/JS)", "Performance Ultra-rápida",
            "Autonomia Total do Código", "Mobile-First Design", "SEO Técnico Incluso",
            "Certificado SSL Grátis", "BÔNUS: Proposta Redesenhada"
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3 text-white">
              <Check size={18} className="text-[#22C55E] flex-shrink-0" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          <Button 
            variant="primary" 
            className="w-full max-w-md py-6 text-xl mb-6 shadow-2xl shadow-white/10"
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Olá, Gustavo! Vi a proposta para a Hysbel e quero fechar pelo valor de R$ 1.497.')}`}
          >
            QUERO ESSA PROPOSTA <Check size={24} />
          </Button>
          <p className="text-[#525252] text-sm flex items-center gap-2">
            <Calendar size={14} /> Entrega estimada: 2 semanas
          </p>
        </div>
      </div>

      <SpecialOfferPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
    </Section>
  );
};

// --- Main App Component ---

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative text-[#FFFFFF] selection:bg-[#22C55E] selection:text-white">
      {/* Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-[#22C55E] z-[110] origin-left"
        style={{ scaleX }}
      />

      <Hero />
      <Problem />
      <Solution />
      <Showcase />
      <Transformation />
      <Differentiators />
      <Process />
      <Guarantees />
      <Bonuses />
      <Investment />
      <FAQ />
      <FooterCTA />
    </div>
  );
};

export default App;
