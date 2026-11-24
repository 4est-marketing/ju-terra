import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Ju Terra · Links",
  description:
    "Yoga Facial com Ju Terra: Permita-se, cursos, grupo gratuito no WhatsApp, livro Desperte seu Poder de Cura e aulas gratuitas no YouTube.",
};

const BANNER_COMBO = "/bio/combo-yoga-facial.webp";
const COMBO_URL =
  "https://siteterratigre.kpages.online/yoga-facial-com-ju-terra-d789daae-b95d-4409-a598-d42bd27c4906";
const BIO_URL = "www.juterra.com.br/bio";

type Item = { titulo: string; detalhe?: string; href: string; patrocinado?: boolean };

const SECOES: { titulo: string; itens: Item[] }[] = [
  {
    titulo: "Yoga Facial",
    itens: [
      { titulo: "Combo Yoga Facial com Ju Terra", detalhe: "3 programas por R$ 58,60", href: COMBO_URL },
      { titulo: "Todos os cursos de Yoga Facial", detalhe: "Área de membros na Hotmart", href: "https://hotmart.com/pt-br/club/terra-tigre-yoga" },
      { titulo: "Grupo gratuito no WhatsApp", detalhe: "Comunidade aberta, entre quando quiser", href: "https://chat.whatsapp.com/LCOcu9CIKZ5HLznPYseV50" },
    ],
  },
  {
    titulo: "Livro Desperte seu Poder de Cura",
    itens: [
      { titulo: "Loja Kindle", detalhe: "E-book na Amazon", href: "https://www.amazon.com.br/dp/B0D6ZRBFGF" },
      { titulo: "Livro físico", detalhe: "Loja Terra Tigre", href: "https://www.terratigre.com/category/all-products" },
    ],
  },
  {
    titulo: "Produtos que recomendo",
    itens: [
      { titulo: "Escova facial de contorno linfático", href: "https://amzn.to/4sJrJpo", patrocinado: true },
      { titulo: "Gua Sha · massageador linfático", href: "https://amzn.to/41aDLMM", patrocinado: true },
    ],
  },
  {
    titulo: "Aulas de Yoga",
    itens: [
      {
        titulo: "Aulas gratuitas da Terra Tigre no YouTube",
        href: "https://www.youtube.com/channel/UCQRzXjMat-1GkgFgAveAZ5g?sub_confirmation=1",
      },
    ],
  },
];

function IconeInstagram() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconeYoutube() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5" fill="currentColor">
      <path d="M21.6 7.2a2.5 2.5 0 0 0-1.8-1.8C18.2 5 12 5 12 5s-6.2 0-7.8.4A2.5 2.5 0 0 0 2.4 7.2 26 26 0 0 0 2 12a26 26 0 0 0 .4 4.8 2.5 2.5 0 0 0 1.8 1.8C5.8 19 12 19 12 19s6.2 0 7.8-.4a2.5 2.5 0 0 0 1.8-1.8A26 26 0 0 0 22 12a26 26 0 0 0-.4-4.8ZM10 15V9l5.2 3L10 15Z" />
    </svg>
  );
}

function Seta() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M7 4l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function QrCode({ className = "" }: { className?: string }) {
  // QR code de https://www.juterra.com.br/bio (gerado uma vez; não depende de serviço externo)
  return (
    <svg viewBox="-2 -2 33 33" className={className} role="img" aria-label="QR code para abrir esta página no celular" shapeRendering="crispEdges">
      <rect x="-2" y="-2" width="33" height="33" fill="#f2e9de" />
      <path d="M0 0h7v1h-7zM8 0h2v1h-2zM11 0h2v1h-2zM15 0h2v1h-2zM18 0h1v1h-1zM22 0h7v1h-7zM0 1h1v1h-1zM6 1h1v1h-1zM9 1h2v1h-2zM13 1h2v1h-2zM16 1h1v1h-1zM18 1h1v1h-1zM20 1h1v1h-1zM22 1h1v1h-1zM28 1h1v1h-1zM0 2h1v1h-1zM2 2h3v1h-3zM6 2h1v1h-1zM8 2h2v1h-2zM11 2h1v1h-1zM14 2h4v1h-4zM22 2h1v1h-1zM24 2h3v1h-3zM28 2h1v1h-1zM0 3h1v1h-1zM2 3h3v1h-3zM6 3h1v1h-1zM9 3h2v1h-2zM14 3h1v1h-1zM17 3h1v1h-1zM19 3h1v1h-1zM22 3h1v1h-1zM24 3h3v1h-3zM28 3h1v1h-1zM0 4h1v1h-1zM2 4h3v1h-3zM6 4h1v1h-1zM9 4h3v1h-3zM13 4h3v1h-3zM18 4h1v1h-1zM22 4h1v1h-1zM24 4h3v1h-3zM28 4h1v1h-1zM0 5h1v1h-1zM6 5h1v1h-1zM8 5h2v1h-2zM12 5h1v1h-1zM15 5h1v1h-1zM17 5h2v1h-2zM20 5h1v1h-1zM22 5h1v1h-1zM28 5h1v1h-1zM0 6h7v1h-7zM8 6h1v1h-1zM10 6h1v1h-1zM12 6h1v1h-1zM14 6h1v1h-1zM16 6h1v1h-1zM18 6h1v1h-1zM20 6h1v1h-1zM22 6h7v1h-7zM12 7h1v1h-1zM14 7h3v1h-3zM19 7h1v1h-1zM0 8h1v1h-1zM2 8h1v1h-1zM6 8h2v1h-2zM9 8h2v1h-2zM13 8h2v1h-2zM19 8h2v1h-2zM23 8h1v1h-1zM26 8h1v1h-1zM28 8h1v1h-1zM2 9h1v1h-1zM4 9h1v1h-1zM8 9h1v1h-1zM12 9h3v1h-3zM19 9h2v1h-2zM22 9h2v1h-2zM27 9h2v1h-2zM0 10h7v1h-7zM8 10h1v1h-1zM11 10h1v1h-1zM15 10h1v1h-1zM18 10h4v1h-4zM23 10h1v1h-1zM25 10h2v1h-2zM28 10h1v1h-1zM3 11h2v1h-2zM7 11h4v1h-4zM13 11h1v1h-1zM19 11h2v1h-2zM22 11h4v1h-4zM0 12h3v1h-3zM6 12h2v1h-2zM10 12h1v1h-1zM13 12h1v1h-1zM15 12h2v1h-2zM20 12h1v1h-1zM22 12h2v1h-2zM28 12h1v1h-1zM0 13h1v1h-1zM3 13h2v1h-2zM11 13h1v1h-1zM16 13h1v1h-1zM18 13h2v1h-2zM21 13h2v1h-2zM27 13h2v1h-2zM1 14h1v1h-1zM5 14h2v1h-2zM8 14h1v1h-1zM10 14h2v1h-2zM13 14h2v1h-2zM16 14h1v1h-1zM18 14h2v1h-2zM22 14h1v1h-1zM28 14h1v1h-1zM1 15h1v1h-1zM4 15h1v1h-1zM10 15h1v1h-1zM14 15h3v1h-3zM21 15h1v1h-1zM23 15h1v1h-1zM0 16h2v1h-2zM6 16h2v1h-2zM10 16h2v1h-2zM13 16h2v1h-2zM18 16h3v1h-3zM22 16h1v1h-1zM28 16h1v1h-1zM1 17h3v1h-3zM5 17h1v1h-1zM7 17h1v1h-1zM9 17h2v1h-2zM13 17h2v1h-2zM17 17h1v1h-1zM19 17h5v1h-5zM26 17h3v1h-3zM0 18h2v1h-2zM3 18h2v1h-2zM6 18h5v1h-5zM15 18h1v1h-1zM19 18h2v1h-2zM22 18h1v1h-1zM25 18h1v1h-1zM28 18h1v1h-1zM2 19h3v1h-3zM7 19h1v1h-1zM13 19h1v1h-1zM18 19h2v1h-2zM23 19h1v1h-1zM0 20h5v1h-5zM6 20h3v1h-3zM10 20h4v1h-4zM15 20h2v1h-2zM19 20h7v1h-7zM27 20h1v1h-1zM8 21h4v1h-4zM16 21h1v1h-1zM19 21h2v1h-2zM24 21h3v1h-3zM28 21h1v1h-1zM0 22h7v1h-7zM8 22h3v1h-3zM12 22h3v1h-3zM16 22h1v1h-1zM18 22h1v1h-1zM20 22h1v1h-1zM22 22h1v1h-1zM24 22h1v1h-1zM28 22h1v1h-1zM0 23h1v1h-1zM6 23h1v1h-1zM11 23h2v1h-2zM14 23h3v1h-3zM19 23h2v1h-2zM24 23h1v1h-1zM28 23h1v1h-1zM0 24h1v1h-1zM2 24h3v1h-3zM6 24h1v1h-1zM9 24h3v1h-3zM13 24h2v1h-2zM16 24h1v1h-1zM19 24h7v1h-7zM0 25h1v1h-1zM2 25h3v1h-3zM6 25h1v1h-1zM10 25h1v1h-1zM14 25h1v1h-1zM17 25h1v1h-1zM20 25h2v1h-2zM23 25h5v1h-5zM0 26h1v1h-1zM2 26h3v1h-3zM6 26h1v1h-1zM8 26h2v1h-2zM13 26h1v1h-1zM15 26h1v1h-1zM17 26h5v1h-5zM24 26h1v1h-1zM27 26h2v1h-2zM0 27h1v1h-1zM6 27h1v1h-1zM11 27h1v1h-1zM13 27h4v1h-4zM18 27h4v1h-4zM23 27h3v1h-3zM0 28h7v1h-7zM8 28h2v1h-2zM11 28h2v1h-2zM16 28h1v1h-1zM20 28h1v1h-1zM22 28h1v1h-1zM24 28h1v1h-1zM28 28h1v1h-1z" fill="#30231f" />
    </svg>
  );
}

export default function BioPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-cacau px-5 pt-8 pb-16 text-marfim sm:pt-12">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(216,185,143,.18), transparent 50%), radial-gradient(circle at 100% 100%, rgba(154,101,71,.25), transparent 55%)",
        }}
      />

      <div className="relative z-10 mx-auto w-full max-w-md">
        {/* BANNER COMBO YOGA FACIAL */}
        <a
          href={COMBO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group block overflow-hidden rounded-[28px] border border-champagne/40 bg-marfim shadow-[0_24px_60px_-24px_rgba(0,0,0,.7)] transition hover:-translate-y-0.5"
        >
          <Image
            src={BANNER_COMBO}
            alt="Combo Yoga Facial com Ju Terra: rejuvenesça com as próprias mãos"
            width={800}
            height={800}
            sizes="(min-width: 480px) 448px, 92vw"
            priority
            className="block h-auto w-full"
          />
          <div className="flex items-center justify-between gap-4 border-t border-cobre/15 px-5 py-4 text-cacau">
            <span>
              <span className="block whitespace-nowrap text-[12.5px] text-nevoa">
                3 programas · <span className="line-through">R$ 80,70</span>
              </span>
              <span className="font-display block text-[26px] leading-tight text-vinho">R$ 58,60</span>
            </span>
            <span className="flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-vinho px-4 py-3 text-[12px] font-medium uppercase tracking-[0.08em] text-marfim transition group-hover:bg-cacau sm:px-5 sm:text-[12.5px]">
              Quero o Combo <Seta />
            </span>
          </div>
        </a>

        {/* PERFIL */}
        <header className="mt-10 flex flex-col items-center text-center">
          <h1 className="font-display text-[34px] font-light leading-none">Juliana Terra</h1>
          <p className="mt-3 text-[13px] uppercase tracking-[0.2em] text-champagne">Yoga Facial · Yoga Medicinal</p>
          <div className="mt-5 flex items-center gap-3">
            <a
              href="https://instagram.com/terraju"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @terraju"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-marfim/20 text-marfim/80 transition hover:border-champagne hover:text-champagne"
            >
              <IconeInstagram />
            </a>
            <a
              href="https://www.youtube.com/@TerraTigreYoga"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube Terra Tigre Yoga"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-marfim/20 text-marfim/80 transition hover:border-champagne hover:text-champagne"
            >
              <IconeYoutube />
            </a>
          </div>
        </header>

        {/* BANNER PERMITA-SE */}
        <section className="relative mt-10 overflow-hidden rounded-[26px] border border-champagne/50 bg-vinho p-7 text-center shadow-[0_20px_50px_-20px_rgba(0,0,0,.6)]">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{ background: "radial-gradient(circle at 50% -10%, rgba(216,185,143,.35), transparent 60%)" }}
          />
          <div className="relative">
            <span className="inline-block rounded-full bg-champagne px-3.5 py-1.5 text-[11.5px] font-medium uppercase tracking-[0.14em] text-cacau">
              Ao vivo toda semana
            </span>
            <h2 className="font-display mt-4 text-[32px] font-medium leading-tight">Permita-se</h2>
            <p className="mx-auto mt-3 max-w-xs text-[14.5px] leading-[1.7] text-marfim/85">
              Yoga Facial ao vivo com a Ju, em encontros de 30 minutos. Mais leveza, presença e um rosto mais solto.
            </p>
            <p className="font-display mt-4 text-[26px] leading-none text-champagne">R$ 96,30/mês</p>
            <p className="mt-2 text-[12.5px] text-marfim/70">Combo Yoga Facial completo incluído</p>
            <Link
              href="/permita-se"
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-full bg-champagne py-3.5 text-[13px] font-medium uppercase tracking-[0.1em] text-cacau transition hover:bg-marfim"
            >
              Quero entrar no Permita-se <Seta />
            </Link>
          </div>
        </section>

        {/* LINKS */}
        {SECOES.map((s) => (
          <section key={s.titulo} className="mt-9">
            <h2 className="mb-4 text-center text-[14px] font-medium uppercase tracking-[0.18em] text-champagne sm:text-[15px]">{s.titulo}</h2>
            <ul className="space-y-3">
              {s.itens.map((i) => (
                <li key={i.href}>
                  <a
                    href={i.href}
                    target="_blank"
                    rel={i.patrocinado ? "sponsored noopener noreferrer" : "noopener noreferrer"}
                    className="group flex items-center justify-between gap-4 rounded-2xl bg-marfim px-5 py-4 text-cacau shadow-sm transition hover:-translate-y-0.5 hover:bg-linho"
                  >
                    <span>
                      <span className="block text-[15px] font-medium leading-snug">{i.titulo}</span>
                      {i.detalhe && <span className="mt-0.5 block text-[12.5px] text-nevoa">{i.detalhe}</span>}
                    </span>
                    <span className="text-cobre transition group-hover:translate-x-0.5">
                      <Seta />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        ))}

        <footer className="mt-14 text-center text-[11.5px] leading-relaxed text-marfim/45">
          <Link href="/" className="font-display text-base text-marfim/80 hover:text-champagne">
            Yoga Facial <span className="italic text-champagne">com Ju Terra</span>
          </Link>
          <p className="mt-2">Terra Tigre Produções Artísticas</p>
        </footer>
      </div>

      {/* QR CODE (só no computador) */}
      <aside className="fixed right-8 bottom-8 z-20 hidden w-44 rounded-3xl border border-champagne/30 bg-cacau/90 p-4 text-center backdrop-blur lg:block">
        <div className="overflow-hidden rounded-xl">
          <QrCode className="block h-auto w-full" />
        </div>
        <p className="mt-3 text-[12px] leading-snug text-marfim/80">Aponte a câmera do celular para abrir esta página</p>
        <p className="mt-1 text-[10.5px] text-marfim/45">{BIO_URL}</p>
      </aside>
    </main>
  );
}
