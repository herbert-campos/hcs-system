import type { CSSProperties } from "react";

const GOLD = "#d4af37";
const GOLD_SOFT = "#f5d76e";
const BG = "#0b0b0b";
const CARD = "#161616";
const TEXT = "#f5f5f5";
const MUTED = "#b8b8b8";

const WA_SALAO =
  "https://wa.me/5511984473244?text=Oi!%20Quero%20a%20pr%C3%A9via%20sem%20compromisso%20do%20sistema%20de%20agendamento%20pro%20meu%20sal%C3%A3o.";
const WA_ORCAMENTO =
  "https://wa.me/5511984473244?text=Oi!%20Quero%20um%20or%C3%A7amento%20de%20site%2Fsistema%20pra%20minha%20empresa.";
const SITE = "https://brilho-com-hora-marcada.lovable.app";

const GRUPOS: { titulo: string; itens: { rotulo: string; href: string }[] }[] = [
  {
    titulo: "Salões e barbearia",
    itens: [
      {
        rotulo: "LoveRapunzelle — salão com agendamento e sinal online",
        href: "https://loverapunzellee.lovable.app",
      },
      { rotulo: "Fanny Concept — salão", href: "https://fannyconcept.lovable.app" },
      {
        rotulo: "Brunin du Corte — barbearia",
        href: "https://preview--brunin-hair-booking-studio.lovable.app",
      },
      { rotulo: "Khel Lima — salão", href: `${SITE}/demo/khel` },
      { rotulo: "Kymberlly — salão", href: `${SITE}/demo/kymberlly` },
      { rotulo: "Studio D — salão", href: `${SITE}/demo/studio-d` },
      { rotulo: "Nádila Andrade — salão", href: `${SITE}/demo/nadila` },
      { rotulo: "Juliete Beauty — salão", href: `${SITE}/demo/juliete` },
      {
        rotulo: "Studio Vi Stofel — cílios e estética",
        href: `${SITE}/demo/vistofel`,
      },
    ],
  },
  {
    titulo: "Adega",
    itens: [
      {
        rotulo: "Adega do Eduardo — sistema de balcão",
        href: "https://pour-and-pantry.lovable.app",
      },
      {
        rotulo: "Adega do Eduardo — delivery",
        href: "https://pix-and-pills-delivery.lovable.app",
      },
    ],
  },
  {
    titulo: "Outros",
    itens: [
      {
        rotulo: "Farmácia — sistema de delivery (demo)",
        href: "https://pixel-perfect-replay-82375.lovable.app",
      },
      {
        rotulo: "Restaurante — protótipo",
        href: "https://screenshot-to-spark-4184.lovable.app",
      },
    ],
  },
];

const pageStyle: CSSProperties = {
  minHeight: "100vh",
  background: BG,
  color: TEXT,
  fontFamily:
    "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
  padding: "32px 16px 40px",
  display: "flex",
  justifyContent: "center",
};

const innerStyle: CSSProperties = { width: "100%", maxWidth: 480 };

const cardStyle: CSSProperties = {
  background: CARD,
  border: "1px solid #2b2b2b",
  borderRadius: 16,
  padding: 20,
  marginBottom: 16,
};

const cardTitleStyle: CSSProperties = {
  fontSize: 18,
  margin: "0 0 8px",
  lineHeight: 1.35,
};

const cardTextStyle: CSSProperties = {
  color: MUTED,
  fontSize: 15,
  lineHeight: 1.55,
  margin: "0 0 16px",
};

function botaoBase(destaque: boolean): CSSProperties {
  return {
    display: "block",
    width: "100%",
    boxSizing: "border-box",
    padding: "16px 18px",
    borderRadius: 12,
    fontSize: 16,
    fontWeight: 700,
    lineHeight: 1.35,
    textAlign: "center",
    textDecoration: "none",
    marginBottom: 10,
    background: destaque
      ? `linear-gradient(135deg, ${GOLD_SOFT}, ${GOLD})`
      : "transparent",
    color: destaque ? "#111111" : GOLD_SOFT,
    border: `1px solid ${GOLD}`,
  };
}

function linkProjetoStyle(): CSSProperties {
  return {
    display: "block",
    background: "#1e1e1e",
    border: "1px solid #2a2a2a",
    borderLeft: `3px solid ${GOLD}`,
    borderRadius: 12,
    padding: "14px 16px",
    color: TEXT,
    textDecoration: "none",
    fontSize: 15,
    fontWeight: 600,
    lineHeight: 1.4,
    marginBottom: 10,
  };
}

export default function App() {
  return (
    <main style={pageStyle}>
      <div style={innerStyle}>
        <header style={{ textAlign: "center", marginBottom: 8 }}>
          <h1
            style={{
              color: GOLD,
              fontSize: 34,
              letterSpacing: 2,
              margin: "0 0 8px",
            }}
          >
            HCS System
          </h1>
          <p style={{ color: MUTED, fontSize: 15, margin: 0, lineHeight: 1.5 }}>
            Sistemas, sites e automações para o seu negócio
          </p>
          <h2 style={{ fontSize: 22, margin: "28px 0 20px" }}>
            O que você precisa hoje?
          </h2>
        </header>

        <section style={cardStyle}>
          <h3 style={cardTitleStyle}>💇 Sistema de agendamento para salões</h3>
          <p style={cardTextStyle}>
            Sua cliente agenda sozinha, 24h, e você recebe tudo organizado no
            WhatsApp.
          </p>
          <a
            style={botaoBase(false)}
            href={`${SITE}/demo/khel`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver uma prévia funcionando
          </a>
          <a
            style={{ ...botaoBase(true), marginBottom: 0 }}
            href={WA_SALAO}
            target="_blank"
            rel="noopener noreferrer"
          >
            Quero a prévia do meu salão
          </a>
        </section>

        <section style={cardStyle}>
          <h3 style={cardTitleStyle}>🏪 Site ou sistema pro seu comércio</h3>
          <p style={cardTextStyle}>
            Adegas, restaurantes, pet shops, farmácias e mais: pedidos e delivery
            sem pagar taxa por pedido.
          </p>
          <a
            style={{ ...botaoBase(true), marginBottom: 0 }}
            href={WA_ORCAMENTO}
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar orçamento no WhatsApp
          </a>
        </section>

        <section>
          <h2
            style={{
              color: GOLD,
              fontSize: 19,
              margin: "28px 0 16px",
              lineHeight: 1.4,
            }}
          >
            👀 Sistemas prontos — toque pra ver funcionando
          </h2>

          {GRUPOS.map((grupo) => (
            <div key={grupo.titulo}>
              <h3
                style={{
                  color: GOLD,
                  fontSize: 12,
                  textTransform: "uppercase",
                  letterSpacing: 2,
                  margin: "20px 0 10px",
                }}
              >
                {grupo.titulo}
              </h3>
              {grupo.itens.map((item) => (
                <a key={item.rotulo} style={linkProjetoStyle()} href={item.href}>
                  {item.rotulo}
                </a>
              ))}
            </div>
          ))}
        </section>

        <footer
          style={{
            textAlign: "center",
            color: MUTED,
            fontSize: 13,
            lineHeight: 1.5,
            margin: "32px 0 8px",
            paddingTop: 20,
            borderTop: "1px solid #2b2b2b",
          }}
        >
          HCS System — sistemas que trabalham por você.
        </footer>
      </div>
    </main>
  );
}
