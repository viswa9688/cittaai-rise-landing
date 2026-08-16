import { motion } from 'framer-motion'
import { event, registerDetails, REGISTER_URL } from '../content'

export function RegisterCTA() {
  return (
    <section id="register" className="section-pad relative overflow-hidden bg-ink text-mist">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 20% 30%, rgba(255,31,31,0.28), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 80%, rgba(209,0,0,0.2), transparent 50%)',
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
          <p className="eyebrow text-sm text-mint">Register</p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl font-bold tracking-wide uppercase md:text-6xl">
            Your idea is about to become an agent.
          </h2>
          <p className="mt-4 max-w-xl text-base font-medium text-mist/70">
            {event.date} ({event.day}) · {event.time}
            <br />
            {event.venue}, {event.venueArea}
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm">
          <p>
            <span className="text-mist/50">Fee </span>
            <span className="font-display text-lg font-bold tracking-wide text-mint">
              {registerDetails.fee}
            </span>
          </p>
          <p>
            <span className="text-mist/50">Team </span>
            <span className="font-semibold">{registerDetails.team}</span>
          </p>
          <p>
            <span className="text-mist/50">Capacity </span>
            <span className="font-semibold">{registerDetails.capacity}</span>
          </p>
        </div>

        <ol className="mt-12 max-w-xl space-y-3">
          {registerDetails.steps.map((step, i) => (
            <li key={step} className="flex gap-3 text-sm font-medium text-mist/75">
              <span className="font-display font-bold text-mint">{i + 1}.</span>
              {step}
            </li>
          ))}
        </ol>

        <p className="mt-6 max-w-xl text-xs text-mist/45">{registerDetails.refund}</p>

        <motion.a
          href={REGISTER_URL}
          className="mt-10 inline-flex items-center justify-center rounded-md bg-mint px-8 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-mint-deep"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          Register on Citta AI portal
        </motion.a>
      </div>
    </section>
  )
}
