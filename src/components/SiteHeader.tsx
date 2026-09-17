import Image from "next/image";
import Link from "next/link";

const LOGO_LIGHT_BG =
  "https://kulmdjdjpkcbghfoniuz.supabase.co/storage/v1/object/public/brand-assets/produtos/254d74fa-47f0-47a2-911a-ba41955b65e0/lightBackgroundLogoUrls-1789675787914.png";
const LOGO_DARK_BG =
  "https://kulmdjdjpkcbghfoniuz.supabase.co/storage/v1/object/public/brand-assets/produtos/254d74fa-47f0-47a2-911a-ba41955b65e0/darkBackgroundLogoUrls-1789675797505.png";

// Cabeçalho do site institucional (Home) — a LP /permita-se tem o próprio cabeçalho, minimalista
// de propósito (menos distração = menos atrito até o botão de matrícula).
export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 sm:px-10">
        <Link href="/" className="flex items-center gap-2.5">
          <Image src={LOGO_DARK_BG} alt="Pandora 369" width={28} height={28} className="h-7 w-7 object-contain" />
          <span className="font-display text-[15px] font-medium tracking-[0.08em] text-marfim">
            PANDORA 369
          </span>
        </Link>
        <nav className="hidden items-center gap-8 text-[12px] uppercase tracking-[0.18em] text-marfim/80 sm:flex">
          <a href="#metodo" className="hover:text-marfim">
            O método
          </a>
          <a href="#quem-conduz" className="hover:text-marfim">
            Ju Terra
          </a>
          <Link
            href="/permita-se"
            className="rounded-full border border-champagne/60 px-4 py-2 text-champagne hover:border-champagne hover:bg-champagne/10"
          >
            Permita-se
          </Link>
        </nav>
      </div>
    </header>
  );
}

export { LOGO_LIGHT_BG, LOGO_DARK_BG };
