import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

const AUTHOR_PHOTO =
  "https://kulmdjdjpkcbghfoniuz.supabase.co/storage/v1/object/public/brand-assets/produtos/c969ed91-d6d9-4c1a-bdf0-4240d0ce4587/authorPhotoUrls-1788966233605.png";
// TODO: trocar pelo link do checkout do Combo na Hotmart quando a Ju enviar.
const COMBO_URL =
  "https://siteterratigre.kpages.online/yoga-facial-com-ju-terra-d789daae-b95d-4409-a598-d42bd27c4906";
const PERMITA_SE = "/permita-se";

// Conteúdos ainda NÃO definidos pela Ju. Enquanto estiverem vazios, os espaços aparecem só nas
// prévias da Vercel (caixas tracejadas "pendente") e ficam escondidos no site oficial.
const LIVRO_URL = "";
const DEPOIMENTOS: { nome: string; cidade: string; texto: string; foto: string }[] = [];
const MOSTRAR_PENDENCIAS = process.env.VERCEL_ENV !== "production";

function Pendente({ children, dark }: { children: React.ReactNode; dark?: boolean }) {
  if (!MOSTRAR_PENDENCIAS) return null;
  return (
    <div
      className={`rounded-2xl border-2 border-dashed p-6 text-center text-[12.5px] leading-relaxed ${
        dark ? "border-champagne/40 text-marfim/60" : "border-cobre/30 text-cacau/60"
      }`}
    >
      <strong className="uppercase tracking-[0.12em]">Pendente · </strong>
      {children}
    </div>
  );
}

function Botao({
  href,
  children,
  variante = "principal",
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  variante?: "principal" | "claro" | "contorno";
  className?: string;
}) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] transition";
  const estilos = {
    principal: "bg-champagne text-cacau hover:bg-marfim",
    claro: "bg-vinho text-marfim hover:bg-cacau",
    contorno: "border border-champagne/60 text-champagne hover:bg-champagne/10",
  }[variante];
  const externo = href.startsWith("http");
  return (
    <a
      href={href}
      {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${base} ${estilos} ${className}`}
    >
      {children}
    </a>
  );
}

function Selo({ children, claro }: { children: React.ReactNode; claro?: boolean }) {
  return (
    <p className={`mb-3 text-[11px] uppercase tracking-[0.25em] ${claro ? "text-champagne" : "text-cobre"}`}>
      {children}
    </p>
  );
}

const RECONHECE = [
  "Você olha o rosto e procura marcas, firmeza e cansaço.",
  "Quer se cuidar sem procedimentos invasivos e sem promessas milagrosas.",
  "Sente o rosto tenso (mandíbula, testa, olhos) e nem lembra quando isso começou.",
  "Quer um momento só seu no dia, simples, que caiba na rotina.",
  "Quer envelhecer bem, sem lutar contra o tempo.",
];

const PARTES = [
  {
    destaque: "Yoga Facial.",
    texto:
      "Posturas que ativam os músculos na direção certa, toque com alinhamento, para soltar a tensão do rosto e despertar a luminosidade natural. Drenagem linfática, liberação miofascial e boost sanguíneo.",
  },
  {
    destaque: "Respiração consciente, presença expandida:",
    texto:
      "técnicas simples para recalibrar o sistema nervoso. Para se sentir calma mesmo em meio ao caos.",
  },
  {
    destaque: "Neurociência aplicada.",
    texto: "O suficiente para você entender por que se sente assim, sem teoria vazia de sentido prático.",
  },
  {
    destaque: "Voz da Alma.",
    texto: "Som e vibração para soltar e sentir o rosto por dentro. Revele a sua essência.",
  },
];

const ESPERAR = [
  "Mais intimidade com o seu rosto e com o seu corpo.",
  "Um rosto mais solto, descansado e iluminado.",
  "Um ritual diário de autocuidado, simples e possível.",
  "Mais presença, no espelho e no dia a dia.",
];

const FAQS = [
  {
    pergunta: "Qual a diferença entre o Combo e o Permita-se?",
    resposta:
      "O Combo tem 3 programas gravados para você fazer no seu tempo. O Permita-se inclui o Combo e soma aulas ao vivo toda semana e gravações sempre atualizadas.",
  },
  {
    pergunta: "Nunca fiz yoga facial. Posso começar?",
    resposta: "Sim. O Combo é simples, passo a passo, e você pratica com segurança.",
  },
  {
    pergunta: "Quanto tempo por dia?",
    resposta: "Com apenas 10 minutos por dia você já sente os resultados.",
  },
  {
    pergunta: "Por quanto tempo tenho acesso?",
    resposta:
      "O Combo dá 1 ano de acesso online. No Permita-se, o acesso dura enquanto a sua assinatura estiver ativa.",
  },
  {
    pergunta: "Preciso de algum material?",
    resposta: "Um óleo vegetal, uma toalha e as suas mãos.",
  },
  {
    pergunta: "E se eu não gostar?",
    resposta: "Você tem 7 dias de garantia.",
  },
  {
    pergunta: "Substitui tratamento médico ou estético?",
    resposta:
      "Não. É uma prática de autocuidado e pode ser feita junto com o acompanhamento que você já tem.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      {/* TOPO */}
      <section className="relative flex min-h-[92vh] flex-col items-center justify-center overflow-hidden bg-cacau px-6 pt-32 pb-20 text-center text-marfim sm:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at 50% 15%, rgba(216,185,143,.16), transparent 55%), radial-gradient(circle at 85% 85%, rgba(154,101,71,.22), transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <Selo claro>Yoga Facial com Ju Terra · Permita-se</Selo>
          <h1 className="font-display text-[38px] font-light leading-[1.1] tracking-tight sm:text-[58px]">
            Envelhecer bem começa em tocar o seu próprio rosto
          </h1>
          <p className="mx-auto mt-7 max-w-2xl text-[15.5px] leading-[1.8] text-marfim/80 sm:text-[17px]">
            No Permita-se, você pratica Yoga Facial ao vivo toda semana, em encontros de 1 hora, com a
            Juliana Terra. Você aprende a tocar o seu rosto com calma e ganha mais intimidade com o seu
            corpo, mais leveza e mais presença no dia a dia.
          </p>
          <p className="mx-auto mt-5 max-w-xl text-[15.5px] font-semibold text-champagne sm:text-[17px]">
            Com apenas 10 minutos por dia você já sente os resultados.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4">
            <Botao href={PERMITA_SE}>Quero entrar no Permita-se</Botao>
            <a
              href={COMBO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] text-marfim/70 underline decoration-champagne/50 underline-offset-4 hover:text-marfim"
            >
              Prefere testar sozinha? Conheça o Combo Yoga Facial · R$ 58,60
            </a>
            <p className="text-[11.5px] tracking-[0.04em] text-marfim/50">
              Pagamento 100% seguro · Acesso imediato · Garantia de 7 dias
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-md">
            <Pendente dark>1 depoimento curto, com foto (a Ju vai enviar).</Pendente>
          </div>
        </div>
      </section>

      {/* VOCÊ SE RECONHECE AQUI? */}
      <section className="bg-marfim px-6 py-24 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-display text-3xl font-medium text-cacau sm:text-4xl">Você se reconhece aqui?</h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.8] text-cacau/80 sm:text-base">
            Com o passar dos anos, o espelho vira um lugar de checagem: o que mudou, o que ficou para
            trás. Existe um jeito mais gentil de olhar.
          </p>
        </div>
        <ul className="mx-auto mt-10 max-w-2xl space-y-4 rounded-[24px] border border-cobre/15 bg-white/50 p-8 sm:p-10">
          {RECONHECE.map((item) => (
            <li key={item} className="flex gap-3 text-[15px] leading-[1.7] text-cacau/85">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-cobre" />
              {item}
            </li>
          ))}
        </ul>
        <p className="font-display mx-auto mt-10 max-w-xl text-center text-xl italic text-vinho">
          Se você disse sim a pelo menos uma, esta página é para você.
        </p>
      </section>

      {/* O ROSTO NUNCA MENTE */}
      <section className="bg-champagne/30 px-6 py-24 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-display text-center text-3xl font-medium text-cacau sm:text-4xl">
            O rosto nunca mente
          </h2>
          <div className="mx-auto mt-8 max-w-2xl space-y-5 text-[15px] leading-[1.85] text-cacau/80 sm:text-base">
            <p>Há 25 anos eu conduzo as pessoas a ter intimidade com o próprio corpo.</p>
            <p>
              O método <strong className="text-vinho">Permita-se</strong> é a síntese de tudo o que
              estudo, experimento e ensino. É o néctar de uma vida dedicada ao corpo e aos seus
              desdobramentos.
            </p>
            <p>E, a partir do rosto, elas se aproximam também do que sentem por dentro.</p>
            <p>
              Sessão após sessão, vejo que o rosto guarda a nossa história: o que a gente sorriu, o que
              segurou, o que engoliu. Por isso ele é um ótimo lugar para começar a se cuidar.
            </p>
            <p>
              A ideia aqui é simples: envelhecer bem não é lutar contra o tempo. É manter o corpo vivo,
              presente e à vontade.
            </p>
            <p className="font-medium text-vinho">
              Beleza não é consertar a superfície. É o que você sente por dentro aparecendo por fora.
            </p>
          </div>
          <blockquote className="font-display mx-auto mt-12 max-w-xl text-center text-xl italic leading-snug text-vinho sm:text-2xl">
            “Presença não é ficar alerta o tempo todo. Pelo contrário, é saber respirar quando o bicho
            pega.”
            <footer className="mt-3 font-body text-sm not-italic tracking-[0.1em] text-cobre">
              — Juliana Terra
            </footer>
          </blockquote>
        </div>
      </section>

      {/* O QUE É O PERMITA-SE */}
      <section id="permita-se" className="scroll-mt-20 bg-cacau px-6 py-24 text-marfim sm:px-10 sm:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-medium sm:text-4xl">O que é o Permita-se</h2>
            <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.8] text-marfim/75">
              Muitos lugares cuidam da pele e das rugas. Outros cuidam da calma e do bem-estar. Aqui você
              cuida dos dois, na mesma prática. É isso que o Permita-se faz: cuida do seu rosto e de você.
              No seu ritmo e sem milagre.
            </p>
          </div>

          <p className="mt-14 text-center text-[12px] uppercase tracking-[0.2em] text-champagne">
            Quatro partes em toda aula
          </p>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {PARTES.map((p) => (
              <div key={p.destaque} className="rounded-2xl border border-marfim/10 bg-marfim/[.04] p-7">
                <p className="text-[14.5px] leading-[1.75] text-marfim/75">
                  <strong className="font-display text-lg font-medium text-champagne">{p.destaque}</strong>{" "}
                  {p.texto}
                </p>
              </div>
            ))}
          </div>

          <div className="mx-auto mt-16 max-w-2xl">
            <p className="text-center text-[12px] uppercase tracking-[0.2em] text-champagne">
              O que você pode esperar
            </p>
            <ul className="mt-6 space-y-3">
              {ESPERAR.map((e) => (
                <li key={e} className="flex gap-3 text-[15px] leading-[1.7] text-marfim/85">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-champagne" />
                  {e}
                </li>
              ))}
            </ul>
            <div className="mt-10 text-center">
              <Botao href={PERMITA_SE}>Quero entrar no Permita-se</Botao>
            </div>
          </div>
        </div>
      </section>

      {/* ESCOLHA O SEU CAMINHO */}
      <section id="planos" className="bg-marfim px-6 py-24 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="font-display text-3xl font-medium text-cacau sm:text-4xl">Escolha o seu caminho</h2>
          <div className="mt-14 grid gap-6 text-left lg:grid-cols-[1.15fr_0.85fr]">
            {/* Card 1 · Permita-se (destaque) */}
            <div className="relative flex flex-col rounded-[28px] border-2 border-champagne bg-cacau p-9 text-marfim">
              <span className="absolute -top-3 left-9 rounded-full bg-champagne px-3 py-1 text-[10px] font-medium uppercase tracking-[0.12em] text-cacau">
                O caminho completo
              </span>
              <h3 className="font-display text-3xl">Permita-se</h3>
              <p className="mt-4 text-[14.5px] leading-[1.8] text-marfim/80">
                Uma assinatura para você se cuidar toda semana, com companhia. Não é só conteúdo para
                assistir sozinha.
              </p>
              <ul className="mt-5 space-y-2.5 text-[14px] leading-[1.6] text-marfim/85">
                <li>✓ Combo Yoga Facial completo incluído (3 programas e mais de 30 exercícios)</li>
                <li>✓ Encontro ao vivo toda semana, com 1 hora de duração</li>
                <li>✓ Gravações sempre atualizadas</li>
              </ul>
              <p className="mt-5 text-[13px] text-marfim/60">
                O Combo, que separado custa R$ 58,60, já vem dentro da assinatura.
              </p>
              <p className="font-display mt-6 text-2xl text-champagne">
                R$ 96,30 por mês, ou 3 meses por R$ 245,00.
              </p>
              <p className="mt-3 text-[13.5px] leading-[1.6] text-marfim/75">
                Já é da comunidade? R$ 69,30 por mês nos 3 primeiros meses, com cupom.
              </p>
              <div className="mt-3">
                <Pendente dark>link e cupom da comunidade (a confirmar).</Pendente>
              </div>
              <Botao href={PERMITA_SE} className="mt-7 w-full">
                Quero entrar no Permita-se
              </Botao>
            </div>

            {/* Card 2 · Combo */}
            <div className="flex flex-col rounded-[28px] border border-cobre/20 bg-white/50 p-9">
              <p className="text-[11px] uppercase tracking-[0.2em] text-cobre">Para testar sozinha</p>
              <h3 className="font-display mt-2 text-2xl text-vinho">Combo Yoga Facial</h3>
              <p className="mt-4 text-[14.5px] leading-[1.8] text-cacau/75">
                Para quem quer sentir o método no próprio rosto, no seu tempo. Já vem incluído no
                Permita-se.
              </p>
              <ul className="mt-5 space-y-2.5 text-[14px] leading-[1.6] text-cacau/80">
                <li>
                  ✓ 3 programas completos: Rejuvenescendo de dentro para fora, Papada e Bigode Chinês e
                  Olhos e Testa
                </li>
                <li>✓ Mais de 30 exercícios práticos</li>
                <li>✓ Acesso online por 1 ano</li>
                <li>✓ Práticas que cabem na sua rotina</li>
              </ul>
              <p className="mt-6 flex-1 text-cacau">
                <span className="text-[14px] text-cacau/50 line-through">De R$ 80,70</span>{" "}
                <span className="font-display text-2xl text-vinho">por R$ 58,60</span>
              </p>
              <Botao href={COMBO_URL} variante="claro" className="mt-7 w-full">
                Quero só o Combo
              </Botao>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE DIZEM AS ALUNAS */}
      {(DEPOIMENTOS.length > 0 || MOSTRAR_PENDENCIAS) && (
        <section className="bg-champagne/30 px-6 py-24 sm:px-10 sm:py-28">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="font-display text-3xl font-medium text-cacau sm:text-4xl">O que dizem as alunas</h2>
            <div className="mt-12 grid gap-6 text-left sm:grid-cols-3">
              {DEPOIMENTOS.length > 0
                ? DEPOIMENTOS.map((d) => (
                    <div key={d.nome} className="rounded-2xl border border-cobre/15 bg-white/60 p-6">
                      <div className="flex items-center gap-3">
                        <Image src={d.foto} alt={d.nome} width={48} height={48} className="h-12 w-12 rounded-full object-cover" />
                        <p className="text-[13px] font-medium text-cacau">
                          {d.nome} <span className="font-normal text-cacau/60">· {d.cidade}</span>
                        </p>
                      </div>
                      <p className="mt-4 text-[14px] leading-[1.7] text-cacau/85">“{d.texto}”</p>
                    </div>
                  ))
                : [1, 2, 3].map((n) => (
                    <Pendente key={n}>depoimento {n}: foto, nome, cidade e texto (a Ju vai enviar).</Pendente>
                  ))}
            </div>
            <div className="mt-12">
              <Botao href={PERMITA_SE}>Quero entrar no Permita-se</Botao>
            </div>
          </div>
        </section>
      )}

      {/* QUEM CONDUZ */}
      <section id="quem-conduz" className="scroll-mt-20 bg-vinho px-6 py-24 text-marfim sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-5xl gap-14 sm:grid-cols-[0.85fr_1.15fr] sm:items-center">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-[28px] border border-champagne/20">
            <Image src={AUTHOR_PHOTO} alt="Juliana Terra" fill sizes="(min-width: 640px) 380px, 90vw" className="object-cover" />
          </div>
          <div>
            <Selo claro>Quem conduz</Selo>
            <blockquote className="font-display text-xl italic leading-snug text-champagne sm:text-2xl">
              “Autossabotagem virou autocuidado. Uso o rosto e o corpo como instrumento para realizar
              coerência entre mente e coração.”
            </blockquote>
            <p className="mt-6 text-[15px] leading-[1.8] text-marfim/80">
              Juliana Terra é professora de Yoga Facial e Yoga Medicinal e terapeuta pelo método Soul
              Voice. Estudou na Índia, no Esalen Institute (Califórnia), no Omega Institute (Nova York) e
              em centros na Europa. Pela Terra Tigre Produções Artísticas, criou uma comunidade ativa no
              Instagram (@terraju), no e-mail e no WhatsApp.
            </p>
            <p className="mt-4 text-[15px] leading-[1.8] text-marfim/80">
              Para ela, o rosto mostra o que a gente vive por dentro. Esse é o fio de tudo o que ela
              ensina.
            </p>
            <div className="mt-8 rounded-2xl border border-champagne/25 bg-marfim/[.05] p-6">
              <p className="text-[15px] leading-[1.7] text-marfim/85">
                Livro: <em className="font-display text-lg text-champagne">Desperte seu Poder de Cura</em> — um
                guia simples para o dia a dia. Para levar o cuidado de si para a rotina.
              </p>
              {LIVRO_URL ? (
                <Botao href={LIVRO_URL} variante="contorno" className="mt-5">
                  Quero o livro
                </Botao>
              ) : (
                <div className="mt-5">
                  <Pendente dark>botão &ldquo;Quero o livro&rdquo; (link a definir).</Pendente>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="bg-marfim px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-2xl rounded-[28px] border border-cobre/20 bg-white/50 p-10 text-center">
          <h2 className="font-display text-3xl font-medium text-cacau">Garantia incondicional de 7 dias</h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-[1.8] text-cacau/80">
            Você tem 7 dias para testar as práticas. Se não fizer sentido, peça o reembolso dentro do
            prazo. Sem perguntas e sem burocracia.
          </p>
          <p className="font-display mt-5 text-xl italic text-vinho">Risco zero. Cuidado verdadeiro.</p>
        </div>
      </section>

      {/* PERGUNTAS FREQUENTES */}
      <section id="duvidas" className="scroll-mt-20 bg-champagne/30 px-6 py-24 sm:px-10 sm:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-medium text-cacau sm:text-4xl">Perguntas frequentes</h2>
        </div>
        <div className="mx-auto mt-12 max-w-2xl divide-y divide-cobre/15">
          {FAQS.map((faq) => (
            <details key={faq.pergunta} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[15px] font-medium text-cacau">
                {faq.pergunta}
                <span className="shrink-0 text-cobre transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-[14.5px] leading-[1.75] text-cacau/75">{faq.resposta}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="bg-cacau px-6 py-24 text-center text-marfim sm:px-10 sm:py-28">
        <div className="mx-auto max-w-xl">
          <h2 className="font-display text-3xl font-medium leading-tight sm:text-[44px]">
            Seu rosto sente. Seu corpo agradece.
          </h2>
          <p className="mx-auto mt-5 text-[15.5px] leading-[1.8] text-marfim/75">
            Comece hoje com o que cabe na sua rotina.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Botao href={PERMITA_SE}>Quero entrar no Permita-se</Botao>
            <Botao href={COMBO_URL} variante="contorno">
              Combo · R$ 58,60
            </Botao>
          </div>
          <p className="mt-6 text-[12px] text-marfim/50">Pagamento 100% seguro com acesso imediato.</p>
        </div>
      </section>

      <SiteFooter />

      {/* BARRA FIXA NO CELULAR */}
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-champagne/20 bg-cacau/95 p-3 backdrop-blur sm:hidden">
        <Link
          href={PERMITA_SE}
          className="flex w-full items-center justify-center rounded-full bg-champagne py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] text-cacau"
        >
          Entrar no Permita-se
        </Link>
      </div>
    </>
  );
}
