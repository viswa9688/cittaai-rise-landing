import { motion } from 'framer-motion'
import { schedule, scheduleDisclaimer } from '../content'

export function Schedule() {
  return (
    <section id="schedule" className="section-pad bg-mist/80">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow text-sm text-mint">Event day</p>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-wide text-ink uppercase md:text-6xl">
            Ten hours. One clock.
          </h2>
          <p className="mt-4 max-w-xl text-base font-medium text-slate">
            From doors open to winner announcement — the full day at LeapStart Academy.
          </p>
        </motion.div>

        <motion.ol
          className="mt-12 max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {schedule.map((row) => (
            <li
              key={row.time + row.activity}
              className="grid grid-cols-[7.5rem_1fr] gap-4 border-t border-ink/10 py-4 last:border-b md:grid-cols-[11rem_1fr] md:gap-8"
            >
              <time className="font-display text-sm font-bold tracking-wide text-mint tabular-nums">
                {row.time}
              </time>
              <span
                className={`text-sm md:text-base ${
                  'highlight' in row && row.highlight
                    ? 'font-bold text-ink'
                    : 'font-medium text-slate'
                }`}
              >
                {row.activity}
              </span>
            </li>
          ))}
        </motion.ol>

        <p className="mt-8 max-w-3xl text-sm font-medium text-slate/80 italic">
          {scheduleDisclaimer}
        </p>
      </div>
    </section>
  )
}
