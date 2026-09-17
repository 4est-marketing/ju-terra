import Image from "next/image";
import { LOGO_DARK_BG } from "@/components/SiteHeader";

export function SiteFooter() {
  return (
    <footer className="bg-cacau px-6 py-14 text-marfim/70 sm:px-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center">
        <Image src={LOGO_DARK_BG} alt="Pandora 369" width={40} height={40} className="h-10 w-10 object-contain" />
        <p className="font-display text-lg text-marfim">PANDORA 369</p>
        <p className="text-[13px] tracking-[0.04em]">
          Ju Terra · Terra Tigre Produções Artísticas ·{" "}
          <a
            href="https://instagram.com/terraju"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-champagne/50 underline-offset-4 hover:text-marfim"
          >
            @terraju
          </a>
        </p>
        <p className="mt-4 text-[11px] uppercase tracking-[0.2em] text-marfim/40">
          Presença que transforma o tempo
        </p>
      </div>
    </footer>
  );
}
