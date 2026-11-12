import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Permita-se · Yoga Facial com Ju Terra",
  description:
    "Yoga Facial ao vivo toda semana com Ju Terra, em encontros de 1 hora. Mais leveza e presença na sua rotina, sem meta e sem culpa. Entre no Permita-se.",
};

export default function PermitaSeLayout({ children }: LayoutProps<"/permita-se">) {
  return <div className="bg-areia-luz text-tinta">{children}</div>;
}
