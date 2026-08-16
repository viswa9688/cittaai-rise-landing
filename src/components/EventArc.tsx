import { motion } from 'framer-motion'
import { eventArc, preRound } from '../content'

export function EventArc() {
  return (
    <section id="arc" className="section-pad relative overflow-hidden bg-ink text-mist">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 85% 20%, rgba(61,255,181,0.22), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(245,185,66,0.15), transparent 50%)',
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold tracking-[0.16em] text-mint uppercase">The arc</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
            Idea in. Agent out.
          </h2>
          <p className="mt-4 max-w-xl text-base text-mist/70">
            A pre-round filter, then one intense build day. Judged on whether the agent actually works.
          </p>
        </motion.div>

        <ol className="mt-14 grid gap-12 md:grid-cols-3 md:gap-8">
          {eventArc.map((step, i) => (
            <motion.li
              key={step.title}
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-display text-sm font-bold text-amber">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display mt-3 text-2xl font-bold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-mist/65">{step.detail}</p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/10 pt-8">
          {preRound.map((item) => (
            <div key={item.label}>
              <p className="text-xs tracking-wide text-mist/50 uppercase">{item.label}</p>
              <p className="mt-1 font-semibold text-mint">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
