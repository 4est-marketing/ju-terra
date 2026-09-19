import Image from "next/image";
import Link from "next/link";
import { LOGO_DARK_BG } from "@/components/SiteHeader";

const HOTMART_LINK_MENSAL = "https://pay.hotmart.com/B107676361N?bid=1789782495190";
const HOTMART_LINK_TRIMESTRAL =
  "https://pay.hotmart.com/B107676361N?off=1z9ui7h1&bid=1789782519126";

const AUTHOR_PHOTO =
  "https://kulmdjdjpkcbghfoniuz.supabase.co/storage/v1/object/public/brand-assets/produtos/c969ed91-d6d9-4c1a-bdf0-4240d0ce4587/authorPhotoUrls-1788966233605.png";

const MEDIA_LOGOS = [
  {
    name: "Veja Rio",
    url: "https://kulmdjdjpkcbghfoniuz.supabase.co/storage/v1/object/public/brand-assets/produtos/c969ed91-d6d9-4c1a-bdf0-4240d0ce4587/attachmentUrls-1788982693712.png",
  },
  {
    name: "Aquarius",
    url: "https://kulmdjdjpkcbghfoniuz.supabase.co/storage/v1/object/public/brand-assets/produtos/c969ed91-d6d9-4c1a-bdf0-4240d0ce4587/attachmentUrls-1788982690151.png",
  },
  {
    name: "Prime Video",
    url: "https://kulmdjdjpkcbghfoniuz.supabase.co/storage/v1/object/public/brand-assets/produtos/c969ed91-d6d9-4c1a-bdf0-4240d0ce4587/attachmentUrls-1788982697543.png",
  },
  {
    name: "Globoplay",
    url: "https://kulmdjdjpkcbghfoniuz.supabase.co/storage/v1/object/public/brand-assets/produtos/c969ed91-d6d9-4c1a-bdf0-4240d0ce4587/attachmentUrls-1788982686045.png",
  },
];

const DORES = [
  "Você cuida de todo mundo e o seu momento é sempre o último da fila — quando sobra.",
  "O autocuidado virou mais uma tarefa na lista. Mais uma coisa que você “deveria” estar fazendo.",
  "Você olha no espelho e vê cansaço antes de ver idade. Mandíbula travada, testa tensa, olhar apagado.",
  "Você já começou práticas incríveis sozinha e parou na terceira semana. Não por preguiça — por falta de alguém segurando o ritmo com você.",
  "Você quer envelhecer bem, mas não quer entrar na guerra contra o tempo. Só quer se sentir bem dentro do próprio rosto.",
  "No fim do dia, o que você mais quer não é uma transformação radical. É paz.",
];

const BENEFICIOS = [
  {
    titulo: "Um compromisso amoroso, não uma meta",
    texto: "Você não vai perseguir um resultado. Vai construir uma relação. A constância vem sozinha quando a prática é gostosa de fazer.",
  },
  {
    titulo: "Alívio de verdade, no mesmo dia",
    texto: "Mandíbula, testa, região dos olhos, pescoço. Os pontos onde a tensão mora. Você sente a diferença ainda na primeira prática.",
  },
  {
    titulo: "Um rosto mais vivo, mais seu",
    texto: "Mais irrigação, mais tônus, mais expressão. Não é apagar marcas — é devolver luz e mobilidade ao que já é bonito em você.",
  },
  {
    titulo: "Sistema nervoso recalibrado",
    texto: "Toque, respiração e ressonância sonora. O rosto é a porta de entrada mais rápida para acalmar a mente.",
  },
  {
    titulo: "Ordem no meio do caos",
    texto: "Um encontro fixo por semana. Um ponto de âncora na agenda. Quando o ritmo se estabelece, o resto da vida se organiza junto.",
  },
  {
    titulo: "Presença consigo mesma",
    texto: "Trinta minutos em que você não é mãe, chefe, filha ou esposa. É só você, com você. E isso muda tudo.",
  },
];

const TEMPOS = [
  {
    numero: "3",
    nome: "Movimento",
    texto:
      "O início. Ativação, toque, respiração. Você desperta a musculatura do rosto e traz sangue, oxigênio e atenção para uma região que passa o dia inteiro esquecida — e travada.",
  },
  {
    numero: "6",
    nome: "Equilíbrio",
    texto:
      "O meio. Aqui entram o som e a ressonância. A vibração da própria voz atravessa os ossos da face e sinaliza segurança ao sistema nervoso. É o momento em que a mente desacelera de verdade.",
  },
  {
    numero: "9",
    nome: "Conclusão",
    texto:
      "O fim. Integração, silêncio, permanência. O corpo assenta o que foi feito. Você sai da prática diferente de como entrou — e leva isso para o resto do dia.",
  },
];

const PASSOS = [
  {
    titulo: "Você faz sua matrícula",
    texto: "Em poucos minutos. Acesso liberado na hora à área de membros com todo o acervo já disponível.",
  },
  {
    titulo: "Recebe boas-vindas no WhatsApp",
    texto:
      "Uma mensagem no privado, de pessoa pra pessoa, e o convite para o grupo da comunidade. É por ali que o link do encontro da semana chega até você.",
  },
  {
    titulo: "Encontra a Ju ao vivo, toda semana",
    texto: "Um encontro por semana pelo Zoom. Prática guiada do começo ao fim. Você não precisa saber nada antes — é só chegar, sentar e se deixar conduzir.",
  },
  {
    titulo: "Não deu pra ir ao vivo? Sem culpa.",
    texto: "Toda prática fica gravada na área de membros. Você assiste no seu tempo, no seu dia, quantas vezes quiser. Aqui ninguém perde nada.",
  },
  {
    titulo: "Aprofunda quando quiser",
    texto:
      "Além dos encontros semanais, você tem o Combo Yoga Facial completo: 3 programas com mais de 30 exercícios práticos, organizados por objetivo, pra fazer no seu ritmo.",
  },
];

const DEPOIMENTOS = [
  {
    texto: "Eu entrei achando que era sobre rugas. Não é. É sobre parar. Faz três meses que essa é a única meia hora da semana que é só minha — e ela mudou o resto dos meus dias.",
    autor: "aluna, 42 anos",
  },
  {
    texto: "Minha mandíbula vivia travada. Eu acordava com dor de cabeça quase todo dia. Na segunda semana de prática, percebi que tinha parado. Não sei explicar tecnicamente, só sei que parou.",
    autor: "aluna, 51 anos",
  },
  {
    texto: "Já comecei mil coisas e larguei tudo. Essa eu não larguei. Acho que é porque não tem cobrança — se eu falto, a aula tá lá gravada me esperando sem me julgar.",
    autor: "aluna, 38 anos",
  },
  {
    texto: "O que mais me pegou foi o som. Eu achava estranho no começo. Hoje é a parte que eu mais espero. Sai uma coisa de dentro que eu nem sabia que estava presa.",
    autor: "aluna, 47 anos",
  },
  {
    texto: "Meu marido perguntou se eu tinha feito alguma coisa no rosto. Eu não fiz nada. Só voltei a descansar.",
    autor: "aluna, 45 anos",
  },
];

const FAQS = [
  {
    pergunta: "Como é a prática, na verdade?",
    resposta:
      "Você senta confortável, com as mãos limpas e um óleo ou creme por perto. A Ju conduz do início ao fim: começa por respiração e ativação, passa pelo trabalho de toque nos músculos do rosto — testa, olhos, mandíbula, pescoço —, entra no trabalho de som e ressonância e fecha com integração e silêncio. Dura em torno de trinta minutos.",
  },
  {
    pergunta: "O que acontece nos encontros ao vivo?",
    resposta:
      "O link chega pelo grupo do WhatsApp e também fica na área de membros. Você entra no Zoom, câmera aberta ou fechada — do jeito que se sentir bem. A Ju conduz a prática do início ao fim e, quando faz sentido, abre espaço pra perguntas e ajustes. Depois, a gravação sobe pra área de membros.",
  },
  {
    pergunta: "Preciso de algum equipamento?",
    resposta:
      "Não. Uma toalhinha e um óleo vegetal, creme ou o hidratante que você já usa. Só. Nada de aparelhos, rolinhos, aplicativos ou compras extras.",
  },
  {
    pergunta: "Yoga Facial funciona mesmo? Por quê?",
    resposta:
      "O rosto é feito de músculo, fáscia, circulação e nervos. Mobilizar essa região com toque e movimento aumenta a irrigação sanguínea, solta padrões de tensão crônica e devolve tônus a áreas que passam o dia paradas. O que não funciona é fazer uma vez e esperar milagre — o que funciona é repetição gentil ao longo do tempo.",
  },
  {
    pergunta: "Pra quais idades o programa é recomendado?",
    resposta:
      "A partir dos 25 anos, sem limite superior. Foi desenhado pensando em mulheres de 35 anos pra cima, mas os exercícios se adaptam e os benefícios continuam em qualquer idade.",
  },
  {
    pergunta: "Nunca fiz yoga na vida. Consigo acompanhar?",
    resposta: "Sim. Não é preciso flexibilidade, condicionamento, tapete ou roupa específica. A prática acontece sentada, com as mãos no próprio rosto. Se você respira, você consegue.",
  },
  {
    pergunta: "E se eu não puder assistir ao vivo?",
    resposta: "Nada se perde. Toda prática é gravada e sobe pra área de membros, onde fica disponível pra você assistir quando e quantas vezes quiser.",
  },
  {
    pergunta: "Quanto tempo até eu ver resultado?",
    resposta:
      "Alívio de tensão: geralmente na primeira prática. Rosto mais desperto e olhar mais aberto: entre duas e quatro semanas. Mudanças mais estruturais de tônus: a partir do terceiro mês de constância — por isso o plano trimestral existe.",
  },
  {
    pergunta: "Isso substitui tratamento estético ou médico?",
    resposta:
      "Não. O PANDORA 369 não é procedimento estético nem tratamento médico. É uma prática de autocuidado corporal e de regulação, que convive bem com o que você já faz. Se você tem alguma condição de saúde específica, converse com sua médica ou seu médico antes.",
  },
  {
    pergunta: "Preciso mostrar meu rosto ou falar nos encontros?",
    resposta: "Nunca. Câmera e microfone são escolha sua, sempre. Tem gente que participa há meses de câmera fechada e aproveita integralmente.",
  },
  {
    pergunta: "Como faço pra cancelar?",
    resposta: "Direto na sua conta da Hotmart, em dois cliques, a qualquer momento. Sem multa, sem ligação, sem burocracia. Seu acesso permanece ativo até o fim do período já pago.",
  },
];

function CtaButton({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.12em] transition";
  const styles =
    variant === "primary"
      ? "bg-dourado text-noite hover:-translate-y-0.5 hover:bg-dourado-claro"
      : "border border-dourado/70 text-dourado hover:bg-dourado/10";
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${base} ${styles} ${className}`}>
      {children}
    </a>
  );
}

function Eyebrow({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <p className={`mb-3 text-[11px] font-medium uppercase tracking-[0.22em] ${dark ? "text-dourado" : "text-dourado"}`}>
      {children}
    </p>
  );
}

export default function PermitaSePage() {
  return (
    <>
      {/* HEADER MÍNIMO */}
      <header className="absolute inset-x-0 top-0 z-20 flex items-center justify-center px-6 py-7">
        <Link href="/" aria-label="Pandora 369" className="opacity-90 hover:opacity-100">
          <Image
            src={LOGO_DARK_BG}
            alt="Pandora 369"
            width={336}
            height={336}
            className="h-[240px] w-[240px] object-contain sm:h-[336px] sm:w-[336px]"
          />
        </Link>
      </header>

      {/* 1. HERO */}
      <section className="relative overflow-hidden bg-noite px-6 pt-[260px] pb-20 text-center text-marfim sm:px-10 sm:pb-24 sm:pt-[360px]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background: "radial-gradient(circle at 50% 0%, rgba(201,161,90,.18), transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-2xl">
          <Eyebrow>PANDORA 369 · Yoga Facial com Ju Terra</Eyebrow>
          <h1 className="font-display text-[34px] font-light leading-[1.15] sm:text-[46px]">
            Você não precisa de mais uma cobrança no seu dia.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-[16px] leading-[1.75] text-marfim/85">
            Precisa de um lugar pra respirar. O PANDORA 369 é uma prática semanal de Yoga Facial
            que devolve ordem, sentido e alívio à sua rotina — sem meta, sem culpa, sem espelho te
            julgando.
          </p>
          <p className="mx-auto mt-5 max-w-lg text-[14.5px] leading-[1.75] text-marfim/60">
            Um encontro ao vivo por semana com a Ju Terra. Trinta minutos que cabem na vida real. O
            cuidado com o seu rosto acontecendo junto com o cuidado com a sua mente — porque, no
            fundo, sempre foi a mesma coisa.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <CtaButton href={HOTMART_LINK_MENSAL}>Quero me permitir — R$ 96,30/mês</CtaButton>
            <a href="#como-funciona" className="text-[12.5px] text-marfim/60 underline decoration-dourado/40 underline-offset-4 hover:text-marfim">
              Ver como funciona por dentro ↓
            </a>
            <p className="text-[11.5px] text-marfim/45">
              Assinatura mensal. Cancele quando quiser. Acesso imediato ao acervo completo.
            </p>
          </div>
        </div>
        <p className="relative z-10 mx-auto mt-14 max-w-2xl border-t border-dourado/20 pt-6 text-[12px] uppercase tracking-[0.14em] text-marfim/50">
          Prática ao vivo toda semana · Aulas gravadas pra assistir quando der · +30 exercícios no
          Combo Yoga Facial
        </p>
      </section>

      {/* BARRA DE LOGOS */}
      <section className="bg-linho px-6 py-12 sm:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[11px] uppercase tracking-[0.2em] text-nevoa">Ju Terra por aí</p>
          <p className="mt-1 text-[13px] text-nevoa/80">
            Trabalho reconhecido por quem acompanha corpo, saúde e bem-estar no Brasil.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-70 grayscale">
            {MEDIA_LOGOS.map((logo) => (
              <Image key={logo.name} src={logo.url} alt={logo.name} width={360} height={144} className="h-32 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      {/* 2. DORES / BENEFÍCIOS */}
      <section className="bg-areia-luz px-6 py-24 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>A verdade que ninguém diz em voz alta</Eyebrow>
          <h2 className="font-display text-[30px] font-medium leading-tight text-tinta sm:text-[38px]">
            O problema nunca foi falta de disciplina. Foi excesso de cobrança.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-[1.8] text-nevoa">
            Você já tentou. Comprou o curso, baixou o app, separou o horário. E aí a vida
            aconteceu — e sobrou culpa. O PANDORA 369 nasceu justamente pra quebrar esse ciclo.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-[24px] border border-queimada/15 bg-white/50 p-8 sm:p-10">
          <p className="mb-5 text-[12px] font-medium uppercase tracking-[0.15em] text-queimada">
            Talvez você se reconheça aqui
          </p>
          <ul className="space-y-4">
            {DORES.map((dor) => (
              <li key={dor} className="flex gap-3 text-[14.5px] leading-[1.7] text-tinta/85">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-dourado" />
                {dor}
              </li>
            ))}
          </ul>
        </div>

        <p className="font-display mx-auto mt-12 max-w-xl text-center text-lg italic leading-snug text-queimada">
          Nada disso é falha sua. É só o efeito de tentar cuidar de si com a mesma energia com que
          se cumpre uma obrigação.
        </p>

        <div className="mx-auto mt-20 max-w-5xl text-center">
          <Eyebrow>O que muda quando você se permite</Eyebrow>
          <h3 className="font-display text-[28px] font-medium leading-tight text-tinta sm:text-[34px]">
            A beleza não nasce da cobrança. Ela floresce quando você para.
          </h3>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {BENEFICIOS.map((b) => (
              <div key={b.titulo} className="rounded-2xl border border-nevoa/10 bg-white/60 p-6">
                <h4 className="font-display text-lg text-queimada">{b.titulo}</h4>
                <p className="mt-3 text-[13.5px] leading-[1.7] text-nevoa">{b.texto}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <CtaButton href={HOTMART_LINK_MENSAL}>Começar minha prática →</CtaButton>
          </div>
        </div>
      </section>

      {/* 3. COMO FUNCIONA */}
      <section id="como-funciona" className="bg-noite px-6 py-24 text-marfim sm:px-10 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Método</Eyebrow>
          <h2 className="font-display text-[30px] font-medium sm:text-[38px]">Por que 3, 6 e 9?</h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.8] text-marfim/75">
            Nikola Tesla dizia que quem entendesse a magnificência do 3, do 6 e do 9 teria a chave
            do universo. Não por misticismo — por ritmo. O PANDORA 369 é construído sobre esse
            ciclo: movimento, integração, descanso.
          </p>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-6 sm:grid-cols-3">
          {TEMPOS.map((t) => (
            <div key={t.numero} className="rounded-2xl border border-dourado/15 bg-ameixa p-7 text-center">
              <span className="font-display text-5xl text-dourado">{t.numero}</span>
              <h3 className="font-display mt-3 text-lg uppercase tracking-[0.1em] text-marfim">{t.nome}</h3>
              <p className="mt-4 text-[13.5px] leading-[1.7] text-marfim/70">{t.texto}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-2xl text-center">
          <Eyebrow>Antes do &ldquo;como fazer&rdquo;, o &ldquo;por quê&rdquo;</Eyebrow>
          <p className="text-[15px] leading-[1.8] text-marfim/75">
            Seu rosto tem mais de quarenta músculos e é a parte do corpo com maior densidade de
            terminações nervosas. Quando você trava a mandíbula por horas ou franze a testa numa
            reunião, esse esforço não desaparece — fica registrado como padrão.
          </p>
          <p className="mt-4 text-[15px] leading-[1.8] text-marfim/75">
            Yoga Facial trabalha nos dois sentidos: solta o que está preso e tonifica o que está
            adormecido. Não é intensidade que reorganiza um padrão. É repetição gentil.
          </p>
        </div>

        <div className="mx-auto mt-24 max-w-3xl">
          <div className="text-center">
            <Eyebrow>Sua semana no PANDORA 369</Eyebrow>
            <h3 className="font-display text-[26px] font-medium sm:text-[30px]">Como acontece na prática</h3>
          </div>
          <ol className="mt-12 space-y-7">
            {PASSOS.map((p, i) => (
              <li key={p.titulo} className="flex gap-5">
                <span className="font-display shrink-0 text-2xl text-dourado">{i + 1}</span>
                <div>
                  <h4 className="text-[15px] font-medium text-marfim">{p.titulo}</h4>
                  <p className="mt-1.5 text-[14px] leading-[1.7] text-marfim/70">{p.texto}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-10 rounded-2xl border border-dourado/15 bg-ameixa/60 p-6 text-[13.5px] leading-[1.7] text-marfim/70">
            <strong className="text-marfim">O que você precisa: </strong>
            nada de equipamento. Uma toalhinha, um óleo ou creme que você já tenha em casa e um
            cantinho onde ninguém te interrompa por meia hora. O resto você já tem — está no seu
            rosto e nas suas mãos.
          </p>
          <div className="mt-10 text-center">
            <CtaButton href={HOTMART_LINK_MENSAL}>Quero entrar no PANDORA 369 →</CtaButton>
          </div>
        </div>
      </section>

      {/* 4. PROVA SOCIAL */}
      <section className="bg-areia-luz px-6 py-24 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-5xl gap-14 sm:grid-cols-[0.8fr_1.2fr] sm:items-start">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-xs overflow-hidden rounded-[24px]">
            <Image src={AUTHOR_PHOTO} alt="Ju Terra" fill sizes="(min-width: 640px) 320px, 80vw" className="object-cover" />
          </div>
          <div>
            <Eyebrow>Quem conduz</Eyebrow>
            <h2 className="font-display text-[26px] font-medium leading-tight text-tinta sm:text-[32px]">
              Autossabotagem virou autocuidado. Esse foi o meu caminho.
            </h2>
            <div className="mt-6 space-y-4 text-[14.5px] leading-[1.8] text-tinta/80">
              <p>Eu não cheguei aqui porque sempre tive disciplina. Cheguei porque não tinha nenhuma.</p>
              <p>
                Passei anos tentando me cuidar do jeito que ensinavam: com força, com meta, com
                regra. Funcionava por três semanas e desmoronava. Até entender que o problema não
                era eu — era o método.
              </p>
              <p>
                Comecei estudando Iyengar Yoga na Índia, com a própria família Iyengar. Depois fui
                pra Esalen, na Califórnia, e pro Omega Institute, em Nova York. Foi isso que me
                levou ao Soul Voice Method, que estudei na Suíça, na França, na Bélgica e na
                Itália — um jeito de usar som e ressonância pra reorganizar por dentro o que o
                corpo carrega por fora.
              </p>
              <p>
                Tudo isso virou o livro <em>Desperte seu Poder de Cura</em>. E agora vira o
                PANDORA 369: a reunião do que aprendi em uma vida inteira de estudo, organizada
                num formato que cabe na sua semana.
              </p>
              <p className="font-medium text-queimada">O corpo é caminho, não vitrine.</p>
            </div>
            <p className="font-display mt-5 text-base text-tinta">— Ju Terra</p>
            <p className="mt-4 text-[12px] uppercase tracking-[0.08em] text-nevoa">
              Iyengar Yoga · Índia — Esalen Institute · Califórnia — Omega Institute · Nova York —
              Soul Voice Method · Europa
            </p>
          </div>
        </div>

        <div className="mx-auto mt-24 max-w-5xl text-center">
          <h3 className="font-display text-[26px] font-medium text-tinta sm:text-[30px]">
            O que elas contam depois de algumas semanas
          </h3>
          <div className="mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3">
            {DEPOIMENTOS.map((d) => (
              <div key={d.autor} className="rounded-2xl border border-nevoa/10 bg-white/60 p-6">
                <p className="text-[14px] leading-[1.7] text-tinta/85">“{d.texto}”</p>
                <p className="mt-4 text-[12px] uppercase tracking-[0.08em] text-nevoa">— {d.autor}</p>
              </div>
            ))}
          </div>
          <p className="mx-auto mt-6 max-w-lg text-[11.5px] italic text-nevoa/60">
            Depoimentos ilustrativos — substituir por relatos reais e autorizados antes da
            publicação.
          </p>
        </div>
      </section>

      {/* 5. OFERTA */}
      <section id="matricula" className="bg-noite px-6 py-24 text-marfim sm:px-10 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <Eyebrow>Sua matrícula</Eyebrow>
          <h2 className="font-display text-[30px] font-medium sm:text-[38px]">
            Um compromisso amoroso custa menos do que você imagina
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-[15px] leading-[1.75] text-marfim/70">
            Pra ter uma prática viva, uma professora presente e um lugar pra onde voltar toda
            semana.
          </p>
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-2xl border border-dourado/15 bg-ameixa/50 p-8">
          <p className="mb-4 text-[12px] font-medium uppercase tracking-[0.15em] text-dourado">
            O que está incluído
          </p>
          <ul className="space-y-3 text-[14px] leading-[1.7] text-marfim/80">
            <li>• Uma prática ao vivo por semana com a Ju Terra, guiada pelo Zoom.</li>
            <li>• Todas as práticas gravadas, disponíveis a qualquer hora na área de membros.</li>
            <li>• Combo Yoga Facial completo — 3 programas com mais de 30 exercícios práticos.</li>
            <li>• Grupo exclusivo no WhatsApp, com os links dos encontros e troca com outras alunas.</li>
            <li>• Boas-vindas no privado — você é recebida por uma pessoa, não por um e-mail automático.</li>
            <li>• Acervo crescente: cada encontro novo entra na biblioteca e fica disponível enquanto sua assinatura estiver ativa.</li>
          </ul>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-dourado/20 bg-ameixa p-7 text-center">
            <p className="text-[12px] uppercase tracking-[0.15em] text-marfim/60">Mensal</p>
            <p className="font-display mt-2 text-3xl text-marfim">R$ 96,30/mês</p>
            <p className="mt-3 text-[13px] leading-[1.6] text-marfim/60">
              Renovação automática. Cancele quando quiser, sem multa e sem justificativa.
            </p>
            <CtaButton href={HOTMART_LINK_MENSAL} className="mt-6 w-full">
              Quero o plano mensal
            </CtaButton>
          </div>
          <div className="relative rounded-2xl border-2 border-dourado bg-ameixa p-7 text-center">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-dourado px-3 py-1 text-[10px] font-medium uppercase tracking-[0.1em] text-noite">
              Mais escolhido
            </span>
            <p className="text-[12px] uppercase tracking-[0.15em] text-marfim/60">Trimestral</p>
            <p className="font-display mt-2 text-3xl text-marfim">R$ 245,00</p>
            <p className="mt-3 text-[13px] leading-[1.6] text-marfim/60">
              Equivale a R$ 81,67/mês. Você economiza R$ 43,90 — três meses é o tempo em que a
              prática realmente se instala.
            </p>
            <CtaButton href={HOTMART_LINK_TRIMESTRAL} className="mt-6 w-full">
              Quero o plano trimestral
            </CtaButton>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-queimada/25 bg-queimada/10 p-7 text-center">
          <p className="text-[14.5px] leading-[1.7] text-marfim/85">
            <strong className="text-marfim">Se você já é aluna da Ju, este espaço é seu de outro jeito.</strong>
            <br />
            Condição especial: <strong className="text-dourado">R$ 69,30/mês nos três primeiros meses</strong>, com o
            cupom que você recebeu no seu e-mail ou no grupo. Se não encontrar, chama a gente no
            WhatsApp que a gente resolve.
          </p>
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-[13px] leading-[1.7] text-marfim/50">
          Você pode sair quando quiser. Sem fidelidade, sem multa, sem ligação de retenção. Compra
          100% segura processada pela Hotmart — acesso liberado imediatamente após a confirmação
          do pagamento.
        </p>

        <div className="mt-10 text-center">
          <CtaButton href={HOTMART_LINK_MENSAL}>Fazer minha matrícula agora</CtaButton>
        </div>
      </section>

      {/* 6. FAQ */}
      <section className="bg-areia-luz px-6 py-24 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Perguntas frequentes</Eyebrow>
          <h2 className="font-display text-[28px] font-medium text-tinta sm:text-[34px]">
            Seu rosto como sistema — e outras dúvidas
          </h2>
        </div>
        <div className="mx-auto mt-12 max-w-2xl divide-y divide-nevoa/15">
          {FAQS.map((faq) => (
            <details key={faq.pergunta} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-tinta">
                {faq.pergunta}
                <span className="shrink-0 text-dourado transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[14px] leading-[1.75] text-nevoa">{faq.resposta}</p>
            </details>
          ))}
        </div>
      </section>

      {/* 7. CTA FINAL */}
      <section className="bg-noite px-6 py-24 text-center text-marfim sm:px-10 sm:py-28">
        <div className="mx-auto max-w-xl">
          <Eyebrow>Manifesto</Eyebrow>
          <h2 className="font-display text-[28px] font-medium leading-tight sm:text-[36px]">
            Existe um lugar dentro de você que guarda tudo o que você é.
          </h2>
          <p className="mx-auto mt-6 text-[14.5px] leading-[1.85] text-marfim/70">
            A beleza não nasce da cobrança. Ela floresce no momento exato em que você decide parar,
            respirar e olhar para dentro. O PANDORA 369 é um convite pra abrir o que estava
            guardado — não com medo, mas com acolhimento e amor.
          </p>
          <p className="font-display mt-8 text-xl italic leading-relaxed text-dourado">
            Permita-se o alívio.
            <br />
            Encontre o seu ritmo.
            <br />
            Desperte a sua paz.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <CtaButton href={HOTMART_LINK_MENSAL}>Permita-se — começar por R$ 96,30/mês</CtaButton>
            <a href="#matricula" className="text-[12.5px] text-marfim/60 underline decoration-dourado/40 underline-offset-4 hover:text-marfim">
              Ou garanta 3 meses por R$ 245,00 →
            </a>
            <p className="mt-2 text-[11.5px] text-marfim/45">
              Acesso imediato · Encontro ao vivo toda semana · Cancele quando quiser
            </p>
          </div>
        </div>
        <p className="font-display mt-16 text-sm text-marfim/40">PANDORA 369 · com Ju Terra · Terra Tigre</p>
      </section>
    </>
  );
}
