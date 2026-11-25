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
  fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
  padding: "40px 16px 32px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  boxSizing: "border-box",
};

const cardStyle: CSSProperties = {
  maxWidth: 560,
  width: "100%",
  background: CARD,
  border: `1px solid ${GOLD}55`,
  borderRadius: 16,
  padding: 24,
  marginBottom: 16,
  boxSizing: "border-box",
};

const goldButtonStyle: CSSProperties = {
  display: "block",
  width: "100%",
  textAlign: "center",
  background: GOLD,
  color: "#111",
  padding: "14px 16px",
  borderRadius: 12,
  fontWeight: 700,
  textDecoration: "none",
  marginTop: 16,
  boxSizing: "border-box",
};

const ghostButtonStyle: CSSProperties = {
  display: "block",
  width: "100%",
  textAlign: "center",
  background: "transparent",
  color: GOLD_SOFT,
  border: `1px solid ${GOLD}`,
  padding: "14px 16px",
  borderRadius: 12,
  fontWeight: 700,
  textDecoration: "none",
  marginTop: 12,
  boxSizing: "border-box",
};

const sectionTitleStyle: CSSProperties = {
  fontSize: 22,
  color: GOLD,
  margin: "8px 0 4px",
  textAlign: "center",
};

const grupoTitleStyle: CSSProperties = {
  fontSize: 13,
  letterSpacing: 2,
  textTransform: "uppercase",
  color: MUTED,
  margin: "20px 0 8px",
};

const itemButtonStyle: CSSProperties = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: 12,
  width: "100%",
  background: "#1f1f1f",
  border: `1px solid ${GOLD}33`,
  color: TEXT,
  padding: "13px 14px",
  borderRadius: 12,
  textDecoration: "none",
  marginBottom: 8,
  boxSizing: "border-box",
  fontSize: 15,
  textAlign: "left",
};

const itemLabelStyle: CSSProperties = { flex: 1 };
const arrowStyle: CSSProperties = { color: GOLD, fontWeight: 700 };
const footerStyle: CSSProperties = {
  marginTop: 24,
  color: MUTED,
  fontSize: 13,
  textAlign: "center",
};
const smallNoteStyle: CSSProperties = {
  fontSize: 13,
  color: MUTED,
  marginTop: 8,
  textAlign: "center",
};

export default function App() {
  return (
    <main style={pageStyle}>
      <header style={{ textAlign: "center", marginBottom: 24 }}>
        <h1
          style={{
            fontSize: 32,
            margin: "0 0 8px",
            letterSpacing: 2,
            color: GOLD,
          }}
        >
          HCS SYSTEM
        </h1>
        <p style={{ margin: 0, color: MUTED, fontSize: 15 }}>
          Sistemas, sites e automações para o seu negócio.
        </p>
      </header>

      <section style={cardStyle}>
        <h2 style={{ margin: "0 0 8px", fontSize: 20, color: GOLD_SOFT }}>
          Salão de beleza ou barbearia?
        </h2>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5 }}>
          Tenha um sistema de agendamento com sinal online, lembretes
          automáticos e visual feito pro seu salão.
        </p>
        <a style={goldButtonStyle} href={WA_SALAO} target="_blank" rel="noreferrer">
          Quero a prévia do meu salão
        </a>
        <a
          style={ghostButtonStyle}
          href={`${SITE}/demo/khel`}
          target="_blank"
          rel="noreferrer"
        >
          Ver uma prévia funcionando
        </a>
      </section>

      <section style={cardStyle}>
        <h2 style={{ margin: "0 0 8px", fontSize: 20, color: GOLD_SOFT }}>
          Outro tipo de negócio?
        </h2>
        <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5 }}>
          Adega, farmácia, restaurante ou outro segmento — criamos um site ou
          sistema sob medida pra você.
        </p>
        <a style={goldButtonStyle} href={WA_ORCAMENTO} target="_blank" rel="noreferrer">
          Quero um orçamento
        </a>
        <p style={smallNoteStyle}>Resposta rápida no WhatsApp.</p>
      </section>

      <section
        style={{ maxWidth: 560, width: "100%", boxSizing: "border-box" }}
      >
        <h2 style={sectionTitleStyle}>Sistemas prontos</h2>
        <p
          style={{
            textAlign: "center",
            color: MUTED,
            fontSize: 14,
            margin: "0 0 8px",
          }}
        >
          Toque para abrir e conhecer cada sistema.
        </p>
        {GRUPOS.map((grupo) => (
          <div key={grupo.titulo}>
            <h3 style={grupoTitleStyle}>{grupo.titulo}</h3>
            {grupo.itens.map((item) => (
              <a
                key={item.href}
                style={itemButtonStyle}
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                <span style={itemLabelStyle}>{item.rotulo}</span>
                <span style={arrowStyle}>→</span>
              </a>
            ))}
          </div>
        ))}
      </section>

      <footer style={footerStyle}>
        HCS System · Feito para o seu negócio crescer.
      </footer>
    </main>
  );
}
