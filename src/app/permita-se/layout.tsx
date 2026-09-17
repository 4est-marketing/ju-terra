import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permita-se — PANDORA 369 | Ju Terra",
  description:
    "Uma prática semanal de Yoga Facial ao vivo com Ju Terra. Devolva ordem, sentido e alívio à sua rotina — sem meta, sem culpa. Matricule-se no PANDORA 369.",
};

export default function PermitaSeLayout({ children }: LayoutProps<"/permita-se">) {
  return <div className="bg-areia-luz text-tinta">{children}</div>;
}
