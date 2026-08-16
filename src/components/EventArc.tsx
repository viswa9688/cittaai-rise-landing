import { motion } from 'framer-motion'
import { eventArc, preRound } from '../content'

export function EventArc() {
  return (
    <section id="arc" className="section-pad relative overflow-hidden bg-ink text-mist">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 85% 20%, rgba(255,31,31,0.35), transparent 55%), radial-gradient(ellipse 50% 40% at 10% 90%, rgba(209,0,0,0.22), transparent 50%)',
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
          <p className="eyebrow text-sm text-mint">The arc</p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl font-bold tracking-wide uppercase md:text-6xl">
            Idea in. Agent out.
          </h2>
          <p className="mt-4 max-w-xl text-base font-medium text-mist/70">
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
              <span className="font-display text-base font-bold tracking-wider text-mint">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="font-display mt-3 text-3xl font-bold tracking-wide uppercase">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed font-medium text-mist/65">{step.detail}</p>
            </motion.li>
          ))}
        </ol>

        <div className="mt-16 flex flex-wrap gap-x-10 gap-y-4 border-t border-white/15 pt-8">
          {preRound.map((item) => (
            <div key={item.label}>
              <p className="eyebrow text-xs text-mist/50">{item.label}</p>
              <p className="mt-2 font-display text-lg font-bold tracking-wide text-mint uppercase">
                {item.date}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
