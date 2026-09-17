import Image from "next/image";
import Link from "next/link";
import { SiteHeader, LOGO_DARK_BG } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const AUTHOR_PHOTO =
  "https://kulmdjdjpkcbghfoniuz.supabase.co/storage/v1/object/public/brand-assets/produtos/c969ed91-d6d9-4c1a-bdf0-4240d0ce4587/authorPhotoUrls-1788966233605.png";
const COMBO_YOGA_FACIAL_URL =
  "https://siteterratigre.kpages.online/yoga-facial-com-ju-terra-d789daae-b95d-4409-a598-d42bd27c4906";

const TRILHOS = [
  {
    numero: "01",
    nome: "Neurociência",
    texto:
      "Nervo vago, eixo cérebro-rosto, neuroplasticidade — o embasamento teórico, sempre breve, sempre aplicado.",
  },
  {
    numero: "02",
    nome: "Fáscia & Meridianos",
    texto:
      "Alongamento longo, pressão sustentada, movimento em espiral — e a leitura emocional de cada zona trabalhada.",
  },
  {
    numero: "03",
    nome: "Yoga Facial",
    texto: "O toque direto — zigomático, mandíbula, a conexão mandíbula-pélvis — assinatura do trabalho de Ju Terra.",
  },
  {
    numero: "04",
    nome: "Voz da Alma",
    texto: "Vibração e ressonância sonora como mecanismo final — o que faz a corrente penetrar e reidratar o tecido.",
  },
];

const CIENCIA = [
  {
    titulo: "Fáscia e meridianos",
    subtitulo: "A mesma rede, dois mapas",
    texto:
      "A fáscia segue quase exatamente os mesmos trajetos que a Medicina Tradicional Chinesa descreve há milênios como meridianos. O colágeno da fáscia é piezoelétrico: gera corrente elétrica sob pressão. Onde a MTC via “Qi bloqueado”, a ciência hoje vê tecido aderido e pouco condutivo — a mesma verdade, em dois vocabulários.",
  },
  {
    titulo: "O nervo vago",
    subtitulo: "O maestro da regulação",
    texto:
      "Se a fáscia é a rede, o nervo vago é o maestro. Conecta rosto, coração e intestino numa única via de regulação — ativado diretamente por toque facial sustentado e vibração sonora, os dois pilares sensoriais centrais do método.",
  },
  {
    titulo: "Sistema glinfático",
    subtitulo: "A limpeza noturna do cérebro",
    texto:
      "Nenhum programa de longevidade está completo sem tratar o sono. Regulação vagal, toque e vibração sonora ajudam a criar o estado de repouso profundo que a rede de limpeza do cérebro precisa pra funcionar bem.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-cacau px-6 pt-28 pb-20 text-center text-marfim sm:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 15%, rgba(216,185,143,.16), transparent 55%), radial-gradient(circle at 85% 85%, rgba(154,101,71,.22), transparent 60%)",
          }}
        />
        <p className="relative z-10 mb-6 text-[11px] uppercase tracking-[0.3em] text-champagne">
          Proposta de conceito · Clínica de Longevidade
        </p>
        <Image
          src={LOGO_DARK_BG}
          alt="Pandora 369"
          width={140}
          height={140}
          priority
          className="relative z-10 mb-6 h-28 w-28 object-contain sm:h-36 sm:w-36"
        />
        <h1 className="font-display relative z-10 max-w-3xl text-[40px] font-light leading-[1.08] tracking-tight sm:text-[64px]">
          Programa de Longevidade
        </h1>
        <p className="font-display relative z-10 mt-3 max-w-2xl text-xl italic text-champagne sm:text-2xl">
          a Ciência da Vibração Viva
        </p>
        <p className="relative z-10 mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-marfim/75 sm:text-base">
          Neurociência, fáscia, yoga facial e voz reunidos num único método — o eixo terapêutico de
          uma clínica de longevidade que trata a pessoa inteira, não apenas a pele.
        </p>
        <a
          href="#visao"
          className="relative z-10 mt-12 flex flex-col items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-marfim/50 transition hover:text-marfim"
        >
          Conheça o programa
          <span className="h-8 w-px bg-marfim/40" />
        </a>
      </section>

      {/* A VISÃO */}
      <section id="visao" className="bg-marfim px-6 py-24 sm:px-10 sm:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-cobre">A visão</p>
          <h2 className="font-display text-3xl font-medium text-cacau sm:text-4xl">O rosto nunca mente</h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.8] text-cacau/80 sm:text-base">
            Durante quase uma década, Ju Terra ajudou milhares de pessoas a tocar o próprio rosto —
            e, nesse gesto simples, a tocar o que sentem por dentro. O rosto é o lugar onde o
            sistema nervoso, a fáscia e a história de uma vida se encontram e se revelam.
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-[1.8] text-cacau/80 sm:text-base">
            A PANDORA 369 nasce de uma pergunta simples: e se envelhecer bem não fosse sobre lutar
            contra o tempo, mas sobre manter o corpo — e o sistema nervoso — verdadeiramente vivos,
            condutivos, presentes?
          </p>
          <blockquote className="font-display mx-auto mt-10 max-w-xl text-xl italic leading-snug text-vinho sm:text-2xl">
            “Presença não é ficar alerta o tempo todo. Pelo contrário, é saber respirar quando o
            bicho pega.”
            <footer className="mt-3 font-body text-sm not-italic tracking-[0.1em] text-cobre">
              — Ju Terra
            </footer>
          </blockquote>
        </div>
      </section>

      {/* A OPORTUNIDADE */}
      <section className="bg-champagne/30 px-6 py-24 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-5xl gap-12 sm:grid-cols-2 sm:items-center">
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-cobre">A oportunidade</p>
            <h2 className="font-display text-3xl font-medium leading-tight text-cacau sm:text-4xl">
              A lacuna entre forma e estado interno
            </h2>
          </div>
          <div className="space-y-4 text-[15px] leading-[1.8] text-cacau/80">
            <p>
              O mercado de longevidade e estética avançada, em sua maior parte, trata sintomas de
              superfície — colágeno reposto, pele tensionada — sem tocar na causa: um sistema
              nervoso em alerta crônico, uma fáscia aderida e desidratada, uma pessoa desconectada
              da própria presença.
            </p>
            <p>
              Existem clínicas de estética avançada, que tratam a forma. Existem espaços de
              bem-estar, que tratam o estado interno. Poucos lugares oferecem as duas coisas na
              mesma sessão, com rigor científico e uma experiência sensorial de altíssimo nível.
            </p>
            <p className="font-medium text-vinho">
              A PANDORA 369 nasce para ocupar exatamente essa lacuna — com o protocolo clínico de
              um programa de longevidade e a linguagem sensorial que já engaja, organicamente, uma
              comunidade de dezenas de milhares de pessoas em torno do trabalho de Ju Terra.
            </p>
          </div>
        </div>
      </section>

      {/* A CIÊNCIA POR TRÁS */}
      <section className="bg-cacau px-6 py-24 text-marfim sm:px-10 sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-champagne">A ciência por trás</p>
          <h2 className="font-display text-3xl font-medium sm:text-4xl">
            Um encontro entre Oriente e Ocidente
          </h2>
          <div className="mt-14 grid gap-8 text-left sm:grid-cols-3">
            {CIENCIA.map((c) => (
              <div key={c.titulo} className="rounded-2xl border border-marfim/10 bg-marfim/[.04] p-7">
                <p className="text-[11px] uppercase tracking-[0.2em] text-champagne">{c.titulo}</p>
                <h3 className="font-display mt-2 text-xl text-marfim">{c.subtitulo}</h3>
                <p className="mt-4 text-[13.5px] leading-[1.75] text-marfim/70">{c.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O MÉTODO */}
      <section id="metodo" className="bg-marfim px-6 py-24 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="text-center">
            <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-cobre">O método</p>
            <h2 className="font-display text-3xl font-medium text-cacau sm:text-4xl">
              Quatro trilhos, uma única rede
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.8] text-cacau/70">
              Não são módulos separados — são camadas da mesma experiência, presentes em toda
              sessão.
            </p>
          </div>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {TRILHOS.map((t) => (
              <div key={t.numero} className="rounded-2xl border border-cobre/15 bg-white/40 p-6">
                <span className="font-display text-3xl text-champagne">{t.numero}</span>
                <h3 className="font-display mt-3 text-lg text-vinho">{t.nome}</h3>
                <p className="mt-3 text-[13px] leading-[1.7] text-cacau/70">{t.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUEM CONDUZ */}
      <section id="quem-conduz" className="bg-vinho px-6 py-24 text-marfim sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-5xl gap-14 sm:grid-cols-[0.85fr_1.15fr] sm:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[28px] border border-champagne/20">
            <Image
              src={AUTHOR_PHOTO}
              alt="Ju Terra"
              fill
              sizes="(min-width: 640px) 380px, 90vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-champagne">Quem conduz</p>
            <h2 className="font-display text-3xl font-medium sm:text-4xl">Por que Ju Terra</h2>
            <blockquote className="font-display mt-6 text-lg italic leading-snug text-champagne sm:text-xl">
              “Autossabotagem virou autocuidado. Uso o rosto e o corpo como instrumento para
              realizar coerência entre mente e coração.”
            </blockquote>
            <p className="mt-6 text-[15px] leading-[1.8] text-marfim/80">
              Professora de Yoga Facial e Yoga Medicinal, terapeuta pelo método Soul Voice, autora
              do livro <em>Desperte seu Poder de Cura</em>, com formação internacional na Índia, no
              Esalen Institute (Califórnia), no Omega Institute (Nova York) e em centros na Europa.
            </p>
            <p className="mt-4 text-[15px] leading-[1.8] text-marfim/80">
              À frente da Terra Tigre Produções Artísticas, construiu uma comunidade ativa e
              engajada — presença consolidada no Instagram, base de e-mail e comunidade de WhatsApp
              — validação orgânica de mercado que antecede qualquer investimento em mídia paga.
            </p>
          </div>
        </div>
      </section>

      {/* ESCOLHA SEU CAMINHO — as 2 saídas */}
      <section id="produtos" className="bg-marfim px-6 py-24 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-cobre">Comece agora</p>
          <h2 className="font-display text-3xl font-medium text-cacau sm:text-4xl">
            Escolha o seu caminho dentro da PANDORA 369
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            <div className="flex flex-col rounded-[28px] border border-cobre/20 bg-white/50 p-9 text-left">
              <p className="text-[11px] uppercase tracking-[0.2em] text-cobre">Porta de entrada</p>
              <h3 className="font-display mt-3 text-2xl text-vinho">Combo Yoga Facial</h3>
              <p className="mt-4 flex-1 text-[14.5px] leading-[1.8] text-cacau/75">
                Videoaulas gravadas de Yoga Facial com Ju Terra — o primeiro passo prático pra
                sentir o método no seu próprio rosto, no seu tempo.
              </p>
              <a
                href={COMBO_YOGA_FACIAL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-vinho px-6 py-3 text-[13px] font-medium uppercase tracking-[0.1em] text-marfim transition hover:bg-cacau"
              >
                Conhecer o combo
              </a>
            </div>
            <div className="flex flex-col rounded-[28px] border border-champagne bg-cacau p-9 text-left text-marfim">
              <p className="text-[11px] uppercase tracking-[0.2em] text-champagne">Prática semanal</p>
              <h3 className="font-display mt-3 text-2xl">Permita-se</h3>
              <p className="mt-4 flex-1 text-[14.5px] leading-[1.8] text-marfim/75">
                Assinatura com um encontro ao vivo por semana, aulas gravadas e o Combo Yoga Facial
                completo — o compromisso amoroso de se ter, semana após semana.
              </p>
              <Link
                href="/permita-se"
                className="mt-6 inline-flex items-center justify-center rounded-full bg-champagne px-6 py-3 text-[13px] font-medium uppercase tracking-[0.1em] text-cacau transition hover:bg-marfim"
              >
                Conhecer o Permita-se
              </Link>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
