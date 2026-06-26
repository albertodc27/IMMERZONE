'use client'

// src/app/[locale]/vr-party-ads/VrPartyAds.tsx
// VR Party Box ad landing — uses the Vortex Play design system (globals.css tokens
// + helper classes: .section-dark, .container-vp, .section-y, .eyebrow, .btn-primary,
// .btn-ghost, .card-dark, .blue-glow). No external images, no new dependencies.

import { useState } from 'react'

/* ── CONFIG ────────────────────────────────────────────────────────────────── */
// International format, no "+", no spaces. TODO: verify / replace with the right number.
const WA_NUMBER = '34621368620'

/* ── Data ──────────────────────────────────────────────────────────────────── */
const STATS = [
  { n: '1.000+', l: 'clienti / mese nei locali partner' },
  { n: '4–8 mesi', l: 'ROI tipico sui partner attivi' },
  { n: '30+', l: 'esperienze VR incluse' },
  { n: '€0', l: 'royalty e canoni · per sempre' },
]

const HARDWARE = [
  { t: 'Visori Pico 4 Enterprise', d: '4 oppure 6, in base alla versione.' },
  { t: 'PC Gaming', d: 'La macchina che fa girare tutte le esperienze.' },
  { t: 'Batterie di riserva', d: 'Sessioni continue, nessun fermo.' },
  { t: 'Router dedicato', d: 'Rete locale stabile per i visori.' },
  { t: 'Valigia di trasporto', d: 'Flight case professionale, waterproof.' },
  { t: '30+ giochi VR inclusi', d: 'Catalogo attivo dal primo giorno.' },
]

const QUESTIONS = [
  {
    key: 'spazio',
    tag: 'Domanda 1 / 4 · Spazio',
    q: 'Hai almeno 4 × 4 m liberi nel tuo locale?',
    opts: ['Sì, ho lo spazio', 'Non sono sicuro, da verificare', 'No, ho meno spazio'],
  },
  {
    key: 'locale',
    tag: 'Domanda 2 / 4 · Locale',
    q: 'Il tuo locale è…',
    opts: ['Già attivo', 'In apertura', 'Ancora un’idea / sto valutando'],
  },
  {
    key: 'budget',
    tag: 'Domanda 3 / 4 · Budget',
    q: 'La Party Box parte da €10.000 (IVA escl.). È in linea con il tuo budget?',
    opts: ['Sì, è in linea', 'Sì, ma voglio capire il ritorno', 'È troppo per ora'],
  },
  {
    key: 'tempi',
    tag: 'Domanda 4 / 4 · Tempi',
    q: 'Quando vorresti partire?',
    opts: ['Entro 1 mese', '1–3 mesi', 'Oltre 3 mesi', 'Sto solo valutando'],
  },
] as const

const Check = ({ className = '' }: { className?: string }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" className={className} aria-hidden>
    <path d="M5 12l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

/* ── Component ─────────────────────────────────────────────────────────────── */
export default function VrPartyAds() {
  const TOTAL = 5 // 4 questions + contact
  const [step, setStep] = useState(0) // 0..3 questions, 4 contact, 5 done
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [nome, setNome] = useState('')
  const [struttura, setStruttura] = useState('')
  const [citta, setCitta] = useState('')
  const [waLink, setWaLink] = useState('#')

  const pick = (key: string, val: string) => {
    setAnswers((a) => ({ ...a, [key]: val }))
    setStep((s) => Math.min(s + 1, TOTAL - 1))
  }
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const send = () => {
    const msg =
      'Ciao, vengo dalla pagina VR Party Box.\n' +
      'Nome: ' + (nome || '—') + '\n' +
      'Struttura: ' + (struttura || '—') + (citta ? ' (' + citta + ')' : '') + '\n' +
      'Locale: ' + (answers.locale || '—') + '\n' +
      'Spazio 4×4 m: ' + (answers.spazio || '—') + '\n' +
      'Budget (da €10.000): ' + (answers.budget || '—') + '\n' +
      'Tempi: ' + (answers.tempi || '—')
    const link = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(msg)
    setWaLink(link)
    // Optional: fire a Meta Pixel Lead event here →  if (window.fbq) window.fbq('track','Lead')
    window.open(link, '_blank')
    setStep(TOTAL) // done
  }

  const progress = Math.min((step / TOTAL) * 100, 100)

  return (
    <main className="section-dark">
      {/* ── Header ───────────────────────────────────────────────── */}
      <header className="sticky top-0 z-40 border-b border-dark-500 bg-dark-900/85 backdrop-blur">
        <div className="container-vp flex h-16 items-center justify-between">
          <span className="flex items-center gap-2 font-display font-bold uppercase tracking-wide">
            <svg width="26" height="26" viewBox="0 0 48 48" fill="none" aria-hidden>
              <path d="M24 4l17 9.8v19.6L24 44 7 33.4V13.8L24 4z" stroke="#007fff" strokeWidth="2" />
              <path d="M16 18l8 13 8-13" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Vortex Play
          </span>
          <a href="#qualificati" className="btn-primary">Verifica se fa per te</a>
        </div>
      </header>

      {/* ── Hero ─────────────────────────────────────────────────── */}
      <section className="section-y">
        <div className="container-vp grid items-center gap-12 md:grid-cols-2">
          <div>
            <span className="eyebrow">Plug &amp; Play · VR Party Box</span>
            <h1 className="mt-3 text-4xl font-bold leading-[1.05] md:text-5xl">
              La VR nel tuo locale.<br />
              <span className="text-primary-500">Senza una sala dedicata.</span>
            </h1>
            <p className="mt-5 max-w-md text-lg text-dark-100">
              Stessa tecnologia delle arene, dentro una valigia. Apri il flight case e in 15 minuti
              sei operativo — hotel, ristoranti, bar, strutture ricettive e piccoli locali.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <a href="#qualificati" className="btn-primary">Verifica se fa per te →</a>
              <a href="#come-funziona" className="btn-ghost">Come funziona</a>
            </div>
          </div>

          {/* Spec / price card */}
          <div className="card-dark blue-glow p-7">
            <span className="eyebrow">Pronta in 15 minuti</span>
            <div className="mt-4 text-sm uppercase tracking-wide text-dark-200">VR Party Box · da</div>
            <div className="font-display text-5xl font-bold">€10.000</div>
            <div className="mt-2 text-sm text-dark-200">IVA esclusa · spedizione inclusa · 30+ giochi</div>
            <ul className="mt-5 space-y-2 border-t border-dark-500 pt-5 text-[15px] text-dark-100">
              <li className="flex items-center gap-2"><Check className="text-primary-500" /> Nessun lavoro, nessuna sala fissa</li>
              <li className="flex items-center gap-2"><Check className="text-primary-500" /> Bastano 4 × 4 m liberi</li>
              <li className="flex items-center gap-2"><Check className="text-primary-500" /> Fino a 6 giocatori in contemporanea</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── Stats ────────────────────────────────────────────────── */}
      <section className="section-dark-elevated border-y border-dark-500">
        <div className="container-vp grid grid-cols-2 gap-8 py-10 md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.l}>
              <div className="font-display text-2xl font-bold md:text-3xl">{s.n}</div>
              <div className="mt-1 text-sm text-dark-200">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Space / problem ──────────────────────────────────────── */}
      <section className="section-y">
        <div className="container-vp grid items-center gap-10 md:grid-cols-2">
          <div className="max-w-md">
            <span className="eyebrow">Lo spazio non è più un problema</span>
            <h2 className="mt-3 text-3xl font-bold">Se hai 4×4 metri liberi, hai una VR room.</h2>
            <p className="mt-4 text-dark-100">
              La Party Box porta la stessa tecnologia delle nostre arene in formato portatile.
              Niente opere, niente area riservata: si apre, si gioca, si richiude. Perfetta per
              testare la VR o per chi lo spazio per un’arena fissa non ce l’ha.
            </p>
          </div>
          <div className="card-dark p-7">
            {[
              ['Zero installazione.', 'Apri il flight case, accendi, sei operativo.'],
              ['Portatile.', 'La sposti tra sale, eventi e sedi diverse.'],
              ['Pronta in 15 minuti.', 'Setup rapido, fatto dal tuo staff.'],
              ['Formazione e supporto inclusi.', 'Ti seguiamo noi dall’avvio.'],
            ].map(([h, d]) => (
              <div key={h} className="flex items-start gap-3 py-2 text-[15px] text-dark-100">
                <Check className="mt-1 shrink-0 text-primary-500" />
                <div><strong className="text-white">{h}</strong> {d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Hardware ─────────────────────────────────────────────── */}
      <section className="section-dark-elevated section-y">
        <div className="container-vp">
          <span className="eyebrow">Cosa c’è incluso</span>
          <h2 className="mt-3 text-3xl font-bold">Tutto quello che ti serve, nella valigia.</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
            {HARDWARE.map((h) => (
              <div key={h.t} className="card-dark p-6">
                <div className="mb-3 inline-grid h-9 w-9 place-items-center rounded-md border border-dark-500 text-primary-500">
                  <Check />
                </div>
                <h3 className="font-sans text-base font-semibold">{h.t}</h3>
                <p className="mt-1 text-sm text-dark-200">{h.d}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-dark-200">
            Spedizione inclusa · consegna entro 30 giorni · formazione staff e supporto inclusi.
            Le sessioni si pagano solo quando i clienti giocano (€0,08–0,10 al minuto), nessun canone
            e nessuna royalty.
          </p>
        </div>
      </section>

      {/* ── How it works ─────────────────────────────────────────── */}
      <section id="come-funziona" className="section-y">
        <div className="container-vp">
          <span className="eyebrow">Come funziona</span>
          <h2 className="mt-3 text-3xl font-bold">Dall’ordine al primo cliente in tre passi.</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {[
              ['01', 'Ordini la Party Box', 'Scegli la versione 4 o 6 giocatori. Pensiamo noi a configurazione e formazione.'],
              ['02', 'Ricevi il flight case', 'Consegna entro 30 giorni, spedizione inclusa. Tutto già pronto dentro.'],
              ['03', 'Apri e fai giocare', '15 minuti di setup e i tuoi clienti sono in VR. Tu incassi le sessioni.'],
            ].map(([n, t, d]) => (
              <div key={n} className="card-dark p-6">
                <div className="font-display text-sm font-bold tracking-widest text-primary-500">{n}</div>
                <h3 className="mt-2 font-sans text-lg font-semibold">{t}</h3>
                <p className="mt-1 text-sm text-dark-200">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ──────────────────────────────────────────────── */}
      <section className="section-dark-elevated section-y">
        <div className="container-vp">
          <div className="mx-auto max-w-xl text-center">
            <span className="eyebrow">Prezzi chiari</span>
            <h2 className="mt-3 text-3xl font-bold">Due versioni. Nessun costo nascosto.</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-3xl gap-5 md:grid-cols-2">
            {/* Party Box 4 */}
            <div className="card-dark p-8">
              <div className="font-mono text-xs font-semibold uppercase tracking-widest text-dark-200">Party Box 4</div>
              <div className="text-sm text-dark-300">fino a 4 giocatori</div>
              <div className="mt-4 font-display text-4xl font-bold">€10.000</div>
              <ul className="mt-5 space-y-2 border-t border-dark-500 pt-5 text-[15px] text-dark-100">
                <li className="flex items-center gap-2"><Check className="text-primary-500" /> 4× Visori Pico 4 Enterprise</li>
                <li className="flex items-center gap-2"><Check className="text-primary-500" /> PC Gaming · Batterie · Router</li>
                <li className="flex items-center gap-2"><Check className="text-primary-500" /> Valigia di trasporto professionale</li>
                <li className="flex items-center gap-2"><Check className="text-primary-500" /> 30+ giochi inclusi</li>
              </ul>
            </div>
            {/* Party Box 6 */}
            <div className="card-dark blue-glow relative p-8">
              <span className="absolute right-5 top-5 rounded-full border border-dark-500 px-3 py-1 font-mono text-[11px] font-semibold uppercase tracking-widest text-primary-500">Più giocatori</span>
              <div className="font-mono text-xs font-semibold uppercase tracking-widest text-dark-200">Party Box 6</div>
              <div className="text-sm text-dark-300">fino a 6 giocatori</div>
              <div className="mt-4 font-display text-4xl font-bold text-primary-500">€12.000</div>
              <ul className="mt-5 space-y-2 border-t border-dark-500 pt-5 text-[15px] text-dark-100">
                <li className="flex items-center gap-2"><Check className="text-primary-500" /> 6× Visori Pico 4 Enterprise</li>
                <li className="flex items-center gap-2"><Check className="text-primary-500" /> PC Gaming · Batterie · Router</li>
                <li className="flex items-center gap-2"><Check className="text-primary-500" /> Valigia di trasporto professionale</li>
                <li className="flex items-center gap-2"><Check className="text-primary-500" /> 30+ giochi inclusi</li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-dark-200">
            Tutti i prezzi <strong className="text-dark-100">IVA esclusa</strong> · pagamento{' '}
            <strong className="text-dark-100">50% all’ordine / 50% alla consegna</strong> · spedizione inclusa ·{' '}
            <strong className="text-dark-100">ROI tipico 4–8 mesi</strong>.
          </p>
        </div>
      </section>

      {/* ── Qualifier ────────────────────────────────────────────── */}
      <section id="qualificati" className="section-y">
        <div className="container-vp">
          <div className="mx-auto max-w-xl text-center">
            <span className="eyebrow">1 minuto</span>
            <h2 className="mt-3 text-3xl font-bold">Vediamo se la Party Box fa per te.</h2>
            <p className="mt-3 text-dark-200">
              Quattro domande veloci. Se sei in target, ti rispondiamo su WhatsApp con tutto il necessario.
            </p>
          </div>

          <div className="card-dark mx-auto mt-8 max-w-2xl p-7 md:p-9">
            {/* progress */}
            <div className="mb-6 h-1.5 overflow-hidden rounded-full bg-dark-600">
              <div className="h-full rounded-full bg-primary-500 transition-all duration-300" style={{ width: `${progress}%` }} />
            </div>

            {/* question steps */}
            {step < QUESTIONS.length && (
              <div>
                <div className="font-mono text-xs font-semibold uppercase tracking-widest text-primary-500">{QUESTIONS[step].tag}</div>
                <h3 className="mb-5 mt-2 font-display text-xl font-semibold leading-tight">{QUESTIONS[step].q}</h3>
                {QUESTIONS[step].opts.map((o) => (
                  <button
                    key={o}
                    onClick={() => pick(QUESTIONS[step].key, o)}
                    className="mb-2.5 block w-full rounded-lg border border-dark-500 bg-dark-700 px-4 py-3.5 text-left text-base transition-colors hover:border-primary-500 hover:bg-dark-600"
                  >
                    {o}
                  </button>
                ))}
                {step > 0 && (
                  <button onClick={back} className="mt-1 text-sm text-dark-200 hover:text-white">← indietro</button>
                )}
              </div>
            )}

            {/* contact step */}
            {step === QUESTIONS.length && (
              <div>
                <div className="font-mono text-xs font-semibold uppercase tracking-widest text-primary-500">Ultimo passo</div>
                <h3 className="mb-5 mt-2 font-display text-xl font-semibold">Dove ti ricontattiamo?</h3>
                <input value={nome} onChange={(e) => setNome(e.target.value)} placeholder="Nome e cognome"
                  className="mb-2.5 w-full rounded-lg border border-dark-500 bg-dark-700 px-4 py-3.5 text-base outline-none focus:border-primary-500" />
                <input value={struttura} onChange={(e) => setStruttura(e.target.value)} placeholder="Nome del locale / struttura"
                  className="mb-2.5 w-full rounded-lg border border-dark-500 bg-dark-700 px-4 py-3.5 text-base outline-none focus:border-primary-500" />
                <input value={citta} onChange={(e) => setCitta(e.target.value)} placeholder="Città"
                  className="mb-2.5 w-full rounded-lg border border-dark-500 bg-dark-700 px-4 py-3.5 text-base outline-none focus:border-primary-500" />
                <button onClick={send} className="btn-primary mt-2 w-full justify-center">Scrivi su WhatsApp →</button>
                <button onClick={back} className="mt-2 block text-sm text-dark-200 hover:text-white">← indietro</button>
                <p className="mt-3 text-center text-[13px] text-dark-300">Ti apriamo WhatsApp con le tue risposte già compilate. Nessuno spam.</p>
              </div>
            )}

            {/* done */}
            {step >= TOTAL && (
              <div className="text-center">
                <h3 className="font-display text-xl font-semibold text-primary-500">Perfetto, ci siamo quasi.</h3>
                <p className="mt-2 text-dark-200">Se WhatsApp non si è aperto in automatico, tocca il pulsante qui sotto.</p>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary mt-4 w-full justify-center">Apri WhatsApp →</a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── Footer ───────────────────────────────────────────────── */}
      <footer className="border-t border-dark-500 section-dark">
        <div className="container-vp flex flex-wrap items-center justify-between gap-4 py-10">
          <div>
            <div className="font-display font-bold uppercase tracking-wide">Vortex Play</div>
            <div className="mt-2 text-[13px] text-dark-300">
              Attrazioni VR per locali · info@vortexplay.it · vortexplay.it<br />
              Tutti i prezzi IVA esclusa · listino valido 12 mesi.
            </div>
          </div>
          <a href="#qualificati" className="btn-ghost">Verifica se fa per te</a>
        </div>
      </footer>
    </main>
  )
}
