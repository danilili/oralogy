/* global React, ReactDOM */
const { useState, useEffect } = React;

function HomePage() {
  return (
    <>
      <window.SiteHeader current="home" />

      {/* HERO */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__copy">
            <span className="eyebrow">Centro de salud oral · Cdmx</span>
            <h1 className="hero__title" style={{ marginTop: "1.4rem" }}>
              No solo<br/>movemos<br/>dientes —<br/><em>corregimos funciones.</em>
            </h1>
            <p className="hero__sub">
              Enfoque integral en respiración, postura y sueño.
              Acompañamos a niños, adolescentes y adultos hacia
              una sonrisa que también funciona.
            </p>
            <div className="hero__ctas">
              <a href={window.WHATSAPP_URL} className="btn btn--primary" target="_blank" rel="noopener">
                Agendar una cita
                <svg className="arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M13 5l7 7-7 7"/>
                </svg>
              </a>
              <a href="#enfoque" className="btn btn--ghost">Conoce nuestro enfoque</a>
            </div>
            <div className="hero__meta">
              <div className="hero__meta-item">
                <span>Atendemos</span><strong>Niños · Adolescentes · Adultos</strong>
              </div>
              <div className="hero__meta-item">
                <span>Dirige</span><strong>Dra. Valeria Trejo</strong>
              </div>
              <div className="hero__meta-item">
                <span>Enfoque</span><strong>Funcional · Integral</strong>
              </div>
            </div>
          </div>

          <div className="hero__visual">
            <div className="hero__photo"></div>
            <div className="hero__badge hero__badge--tl">
              <span className="dot"></span>
              <div>
                <small>Especialidad</small>
                <strong>Ortodoncia funcional</strong>
              </div>
            </div>
            <div className="hero__badge hero__badge--br">
              <window.OralogyMark size={28} variant="terracota" />
              <div>
                <small>Filosofía</small>
                <strong>Respira, postura, sueña</strong>
              </div>
            </div>
            <img
              src="assets/logos/isotipo-sage.jpg"
              alt=""
              aria-hidden="true"
              className="hero__mark"
              style={{ mixBlendMode: "multiply", opacity: 0.18, objectFit: "contain" }}
            />
          </div>
        </div>
      </section>

      {/* VALUES STRIP */}
      <div className="values-strip">
        <div className="container values-strip__inner">
          <span className="value-pill">
            <Icon name="leaf"/> Enfoque funcional
          </span>
          <span className="value-pill">
            <Icon name="lung"/> Respiración consciente
          </span>
          <span className="value-pill">
            <Icon name="spine"/> Postura corporal
          </span>
          <span className="value-pill">
            <Icon name="moon"/> Sueño reparador
          </span>
          <span className="value-pill">
            <Icon name="heart"/> Trato humano
          </span>
        </div>
      </div>

      {/* ENFOQUE */}
      <section id="enfoque" className="section section--paper">
        <div className="container">
          <div className="section-head">
            <h2>El cuerpo es <em>un sistema</em>. La boca también.</h2>
            <p>
              Tratamos la cavidad oral en relación con el resto del cuerpo.
              Una mordida correcta empieza en cómo respiras, cómo duermes y
              cómo tu cuerpo se sostiene. Tres ejes, un mismo paciente.
            </p>
          </div>

          <div className="approach-grid">
            <div className="approach-card">
              <span className="approach-card__num">01 / Respiración</span>
              <h3>Aire por nariz, no por boca.</h3>
              <p>
                La respiración bucal modifica la forma del paladar y el desarrollo facial.
                Identificamos su origen — alergias, vías obstruidas, hábitos — y
                trabajamos sobre la función, no sólo el síntoma.
              </p>
            </div>
            <div className="approach-card">
              <span className="approach-card__num">02 / Postura</span>
              <h3>La cabeza pesa. La mandíbula la sigue.</h3>
              <p>
                Cabeza adelantada, hombros caídos, lengua mal posicionada:
                todo se traduce en presiones que mueven los dientes.
                Coordinamos con fisioterapia y mioterapia cuando hace falta.
              </p>
            </div>
            <div className="approach-card">
              <span className="approach-card__num">03 / Sueño</span>
              <h3>Dormir es reparar.</h3>
              <p>
                Apneas, ronquidos y bruxismo no son normales —
                ni en niños ni en adultos. Detectarlos a tiempo
                cambia el desarrollo, el humor y la energía diaria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICIOS */}
      <section id="servicios" className="section section--cream">
        <div className="container">
          <div className="section-head">
            <h2>Servicios <em>integrales</em></h2>
            <p>
              Cada plan es individual: comenzamos con un diagnóstico funcional completo
              antes de proponer cualquier tratamiento.
            </p>
          </div>

          <div className="services">
            {SERVICES.map((s, i) => (
              <a key={s.title} href={window.WHATSAPP_URL} target="_blank" rel="noopener" className="service">
                <span className="service__num">{String(i + 1).padStart(2, "0")}</span>
                <div className="service__body">
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                  <div className="service__tags">
                    {s.tags.map(t => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                <span className="service__arrow" aria-hidden="true">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d="M7 17 17 7M9 7h8v8"/>
                  </svg>
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* AUDIENCIAS */}
      <section className="section section--sage">
        <div className="container">
          <div className="section-head">
            <h2>Acompañamos <em>cada etapa</em>.</h2>
            <p>
              El momento ideal para una valoración funcional no es cuando hay un problema —
              es antes. Pero nunca es tarde.
            </p>
          </div>
          <div className="audience">
            <div className="audience-card">
              <span className="age">3 – 11 años</span>
              <h4>Niños</h4>
              <p>Guiamos el crecimiento maxilofacial mientras todavía es maleable. Hábitos, deglución, respiración.</p>
            </div>
            <div className="audience-card">
              <span className="age">12 – 18 años</span>
              <h4>Adolescentes</h4>
              <p>Ortodoncia funcional, alineadores y corrección postural durante la etapa de mayor cambio.</p>
            </div>
            <div className="audience-card">
              <span className="age">18 +</span>
              <h4>Adultos</h4>
              <p>Apnea, bruxismo, dolor de articulación, retratamientos. La salud oral no tiene edad.</p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALES */}
      <section id="testimoniales" className="section section--paper">
        <div className="container">
          <div className="section-head">
            <h2>Lo que dicen <em>quienes</em> nos visitan.</h2>
            <p>
              <span className="placeholder-note">Placeholder · reemplazar con testimoniales reales</span>
            </p>
          </div>
          <div className="testimonials">
            {TESTIMONIALS.map(t => (
              <article key={t.name} className="testimonial">
                <span className="testimonial__stars">★ ★ ★ ★ ★</span>
                <p className="testimonial__quote">{t.quote}</p>
                <div className="testimonial__person">
                  <span className="testimonial__avatar">{t.initials}</span>
                  <div>
                    <span className="testimonial__name">{t.name}</span>
                    <span className="testimonial__role">{t.role}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA grande */}
      <section className="section section--paper" style={{ paddingBlock: "0 var(--section-y)" }}>
        <div className="container">
          <div className="cta-band">
            <h2 className="cta-band__title">
              Agenda tu primera <em>valoración funcional</em>.
            </h2>
            <div className="cta-band__side">
              <p>Diagnóstico de respiración, postura, mordida y articulación. 60 minutos. Sin compromiso.</p>
              <a href={window.WHATSAPP_URL} className="btn btn--whatsapp" target="_blank" rel="noopener">
                <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                  <path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-.3-.1-1.2-.4-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5-.2 0-.4 0-.6 0s-.5.1-.8.4c-.3.3-1 1-1 2.4 0 1.4 1 2.8 1.2 3 .1.2 2 3.1 4.9 4.3 1.7.7 2.4.8 3.3.7.5-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.1-.3-.2-.6-.3z"/>
                  <path d="M20.5 3.5C18.2 1.2 15.2 0 12 0 5.4 0 0 5.4 0 12c0 2.1.6 4.2 1.6 6L0 24l6.2-1.6c1.7.9 3.7 1.4 5.7 1.4 6.6 0 12-5.4 12-12 .1-3.2-1.2-6.2-3.4-8.3zM12 21.8c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-3.7 1 1-3.6-.2-.4c-1-1.6-1.5-3.4-1.5-5.2 0-5.4 4.5-9.9 9.9-9.9 2.6 0 5.1 1 7 2.9 1.9 1.9 2.9 4.4 2.9 7-.1 5.4-4.5 9.8-9.9 9.8z"/>
                </svg>
                Escribir por WhatsApp
              </a>
            </div>
            <div className="cta-band__mark">
              <img
                src="assets/logos/isotipo-honeycomb.jpg"
                alt=""
                aria-hidden="true"
                style={{ width: "24rem", height: "24rem", mixBlendMode: "screen", opacity: 0.5, objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTACTO */}
      <section id="contacto" className="section section--paper" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head">
            <h2>Visítanos en <em>el consultorio</em>.</h2>
            <p>Atención previa cita. Te confirmamos tu hora por WhatsApp el día anterior.</p>
          </div>
          <div className="contact-grid">
            <dl className="contact-list">
              <div className="contact-row">
                <dt>WhatsApp</dt>
                <dd>
                  <a href={window.WHATSAPP_URL} target="_blank" rel="noopener">+52 55 5555 5555</a>
                  <span className="small placeholder-note">Placeholder — reemplazar</span>
                </dd>
              </div>
              <div className="contact-row">
                <dt>Email</dt>
                <dd>
                  <a href="mailto:hola@oralogy.mx">hola@oralogy.mx</a>
                </dd>
              </div>
              <div className="contact-row">
                <dt>Dirección</dt>
                <dd>
                  Av. Ejemplo 1234, piso 4<br/>
                  Col. Roma Norte, CDMX
                  <span className="small placeholder-note">Placeholder — confirmar dirección real</span>
                </dd>
              </div>
              <div className="contact-row">
                <dt>Horarios</dt>
                <dd>
                  Lun – Vie · 9:00 – 19:00<br/>
                  Sábado · 9:00 – 14:00
                </dd>
              </div>
              <div className="contact-row">
                <dt>Redes</dt>
                <dd>
                  <a href="#" target="_blank">@oralogy</a> en Instagram · <a href="#">Facebook</a>
                </dd>
              </div>
            </dl>
            <div className="contact-map" aria-label="Mapa">
              <div className="contact-map__pin">
                <span className="label">Oralogy®</span>
                <span className="dot"></span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <window.SiteFooter />
      <window.WhatsAppFAB />
      <TweaksMount />
    </>
  );
}

const SERVICES = [
  { title: "Ortodoncia funcional", desc: "Mucho más que alinear dientes: equilibramos la mordida en función de respiración y postura.", tags: ["Brackets", "Alineadores"] },
  { title: "Ortopedia maxilar", desc: "Guía del crecimiento de los maxilares en niños y adolescentes durante la ventana de oportunidad.", tags: ["3 – 14 años"] },
  { title: "Mioterapia & respiración", desc: "Reeducación de lengua, labios y patrón respiratorio para soportar el resultado en el tiempo.", tags: ["Funcional"] },
  { title: "Apnea y sueño", desc: "Detección y manejo de respiración nocturna disfuncional, ronquido y apnea obstructiva.", tags: ["Adultos", "Pediátrico"] },
  { title: "Disfunción de ATM", desc: "Dolor de articulación, bruxismo, chasquido. Diagnóstico y abordaje multidisciplinario.", tags: ["Dolor crónico"] },
  { title: "Estética dental funcional", desc: "Una sonrisa bonita que respeta la función y la armonía facial — no la pelea.", tags: ["Carillas", "Diseño"] },
];

const TESTIMONIALS = [
  { name: "María F.", role: "Paciente · 34 años", initials: "MF",
    quote: "Llegué pensando que era ortodoncia y salí con un plan que cambió mi forma de respirar y dormir. Hoy ronco menos y descanso de verdad." },
  { name: "Sofía R.", role: "Mamá de Lucas · 8 años", initials: "SR",
    quote: "Valeria nos explicó algo que ningún otro dentista había mencionado: por qué Lucas respiraba por la boca. La diferencia se nota cada día." },
  { name: "Andrés P.", role: "Paciente · 41 años", initials: "AP",
    quote: "Atención cálida, paciente y muy técnica. Te enseña qué está pasando y por qué el tratamiento tiene sentido. Recomendado mil." },
];

function Icon({ name }) {
  const props = { width: 16, height: 16, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };
  switch (name) {
    case "leaf":  return (<svg {...props}><path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14zM5 19l8-8"/></svg>);
    case "lung":  return (<svg {...props}><path d="M12 4v8M9 12c0 4-2 6-4 6s-3-2-3-5 1-5 3-7 4-1 4-1zM15 12c0 4 2 6 4 6s3-2 3-5-1-5-3-7-4-1-4-1z"/></svg>);
    case "spine": return (<svg {...props}><path d="M12 2v20M9 5h6M9 9h6M9 13h6M9 17h6M9 21h6"/></svg>);
    case "moon":  return (<svg {...props}><path d="M21 13A9 9 0 0 1 11 3a9 9 0 1 0 10 10z"/></svg>);
    case "heart": return (<svg {...props}><path d="M12 21s-7-4.5-9-9a5 5 0 0 1 9-3 5 5 0 0 1 9 3c-2 4.5-9 9-9 9z"/></svg>);
    default: return null;
  }
}

/* ---------------- Tweaks ---------------- */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "primary": "sage",
  "density": "default",
  "fontDisplay": "serif-display"
}/*EDITMODE-END*/;

function TweaksMount() {
  if (!window.TweaksPanel) return null;
  return <Tweaks />;
}

function Tweaks() {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks to the document
  useEffect(() => {
    document.body.dataset.primary = t.primary;
    document.body.dataset.density = t.density;
    document.body.dataset.font = t.fontDisplay;
  }, [t.primary, t.density, t.fontDisplay]);

  const { TweaksPanel, TweakSection, TweakRadio } = window;

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Color principal">
        <TweakRadio
          label="Paleta"
          value={t.primary}
          onChange={(v) => setTweak("primary", v)}
          options={[
            { value: "sage", label: "Sage" },
            { value: "terracota", label: "Terracota" },
            { value: "deep-blue", label: "Blue" },
          ]}
        />
      </TweakSection>
      <TweakSection label="Títulos">
        <TweakRadio
          label="Display"
          value={t.fontDisplay}
          onChange={(v) => setTweak("fontDisplay", v)}
          options={[
            { value: "serif-display", label: "Serif" },
            { value: "sans-display", label: "Sans" },
          ]}
        />
      </TweakSection>
      <TweakSection label="Densidad">
        <TweakRadio
          label="Spacing"
          value={t.density}
          onChange={(v) => setTweak("density", v)}
          options={[
            { value: "tight", label: "Compacto" },
            { value: "default", label: "Normal" },
            { value: "airy", label: "Aireado" },
          ]}
        />
      </TweakSection>
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<HomePage />);
