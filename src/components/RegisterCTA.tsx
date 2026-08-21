import { motion } from 'framer-motion'
import { event, registerDetails, REGISTER_LINK_PROPS } from '../content'

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
            <a
              href={event.venueMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-mint underline decoration-mint/40 underline-offset-4 transition hover:text-white hover:decoration-white"
            >
              {event.venue}
            </a>
            , {event.venueArea}
          </p>
        </motion.div>

        <div className="mt-10 max-w-2xl">
          <p className="text-sm text-mist/50">Fee</p>
          <p className="font-display mt-1 text-3xl font-bold tracking-wide text-mint md:text-4xl">
            {registerDetails.fee}
          </p>
          <p className="mt-4 text-sm">
            <span className="text-mist/50">Team </span>
            <span className="font-semibold">{registerDetails.team}</span>
          </p>
        </div>

        <p className="mt-10 max-w-xl text-base font-bold text-white">
          {registerDetails.refund}
        </p>

        <p className="mt-6 text-sm font-medium text-mist/80">
          For more info: contact{' '}
          <a
            href={event.contactTel}
            className="font-bold text-mint underline decoration-mint/40 underline-offset-4 transition hover:text-white hover:decoration-white"
          >
            {event.contactPhone}
          </a>
        </p>

        <motion.a
          {...REGISTER_LINK_PROPS}
          className="mt-10 inline-flex items-center justify-center rounded-md bg-mint px-8 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-mint-deep"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.15 }}
        >
          Register now
        </motion.a>
      </div>
    </section>
  )
}
