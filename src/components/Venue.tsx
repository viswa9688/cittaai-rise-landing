import { motion } from 'framer-motion'
import { event } from '../content'

export function Venue() {
  return (
    <section id="venue" className="section-pad bg-fog">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow text-sm text-mint">Venue</p>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-wide text-ink uppercase md:text-6xl">
            <a
              href={event.venueMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-mint/50 underline-offset-8 transition hover:text-mint"
            >
              {event.venue}
            </a>
          </h2>
          <p className="mt-4 max-w-xl text-base font-medium text-slate">
            {event.venueArea}
          </p>
        </motion.div>

        <motion.figure
          className="mt-10 overflow-hidden rounded-lg border border-ink/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={`${import.meta.env.BASE_URL}leapstart-academy.png`}
            alt="LeapStart School of Technology building at Nanakramguda Financial District"
            className="h-auto w-full object-cover"
          />
        </motion.figure>
      </div>
    </section>
  )
}
