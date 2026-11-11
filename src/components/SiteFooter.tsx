export function SiteFooter() {
  return (
    <footer className="bg-cacau px-6 pt-14 pb-28 text-marfim/70 sm:px-10 sm:pb-14">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <p className="font-display text-xl text-marfim">
          Yoga Facial <span className="italic text-champagne">com Ju Terra</span> · Permita-se
        </p>
        <p className="text-[13px] tracking-[0.04em]">
          Terra Tigre Produções Artísticas ·{" "}
          <a
            href="https://instagram.com/terraju"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-champagne/50 underline-offset-4 hover:text-marfim"
          >
            @terraju
          </a>
        </p>
        <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-marfim/40">
          Presença que transforma o tempo
        </p>
        <p className="mt-4 max-w-xl text-[11.5px] leading-relaxed text-marfim/40">
          Os resultados variam de pessoa para pessoa. O conteúdo não substitui acompanhamento médico.
        </p>
      </div>
    </footer>
  );
}
