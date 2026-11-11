import Link from "next/link";

// Cabeçalho fixo do site (Home). A LP /permita-se tem o próprio cabeçalho, minimalista.
export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-marfim/10 bg-cacau/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4 sm:px-10">
        <Link href="/" className="font-display text-[16px] font-medium tracking-[0.04em] text-marfim sm:text-[18px]">
          Yoga Facial <span className="italic text-champagne">com Ju Terra</span>
        </Link>
        <nav className="flex items-center gap-7 text-[12px] uppercase tracking-[0.18em] text-marfim/80">
          <a href="#permita-se" className="hidden hover:text-marfim md:inline">
            O Permita-se
          </a>
          <a href="#quem-conduz" className="hidden hover:text-marfim md:inline">
            Ju Terra
          </a>
          <a href="#duvidas" className="hidden hover:text-marfim md:inline">
            Dúvidas
          </a>
          <Link
            href="/permita-se"
            className="hidden rounded-full bg-champagne px-5 py-2.5 font-medium text-cacau transition hover:bg-marfim sm:inline-flex"
          >
            Entrar no Permita-se
          </Link>
        </nav>
      </div>
    </header>
  );
}
