import { motion } from 'framer-motion'
import { event, riseLetters } from '../content'

export function RiseBreakdown() {
  return (
    <section id="about" className="section-pad bg-fog">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-sm font-semibold tracking-[0.16em] text-mint-deep uppercase">
            What is RISE
          </p>
          <h2 className="font-display mt-3 max-w-3xl text-3xl font-bold tracking-tight text-ink md:text-5xl">
            From spark to software — in one day.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate md:text-lg">
            {event.shortDescription}
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {riseLetters.map((item, i) => (
            <motion.div
              key={item.letter}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-display text-5xl font-extrabold text-mint-deep">{item.letter}</span>
              <h3 className="font-display mt-3 text-xl font-bold text-ink">{item.word}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{item.meaning}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
