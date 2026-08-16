import { motion } from 'framer-motion'
import { event, registerDetails, REGISTER_URL } from '../content'

export function RegisterCTA() {
  return (
    <section id="register" className="section-pad relative overflow-hidden bg-ink text-mist">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 20% 30%, rgba(61,255,181,0.18), transparent 55%), radial-gradient(ellipse 50% 40% at 90% 80%, rgba(245,185,66,0.12), transparent 50%)',
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
          <p className="text-sm font-semibold tracking-[0.16em] text-mint uppercase">Register</p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
            Your idea is about to become an agent.
          </h2>
          <p className="mt-4 max-w-xl text-base text-mist/70">
            {event.date} ({event.day}) · {event.time}
            <br />
            {event.venue}, {event.venueArea}
          </p>
        </motion.div>

        <div className="mt-10 flex flex-wrap gap-x-10 gap-y-4 text-sm">
          <p>
            <span className="text-mist/50">Fee </span>
            <span className="font-semibold text-amber">{registerDetails.fee}</span>
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
            <li key={step} className="flex gap-3 text-sm text-mist/75">
              <span className="font-mono text-mint">{i + 1}.</span>
              {step}
            </li>
          ))}
        </ol>

        <p className="mt-6 max-w-xl text-xs text-mist/45">{registerDetails.refund}</p>

        <motion.a
          href={REGISTER_URL}
          className="mt-10 inline-flex items-center justify-center rounded-md bg-mint px-8 py-3.5 text-sm font-bold text-ink transition hover:bg-mint-deep hover:text-white"
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
