import { motion } from 'framer-motion'
import { included } from '../content'

export function Included() {
  return (
    <section id="included" className="section-pad bg-mist/60">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow text-sm text-mint">What’s included</p>
          <h2 className="font-display mt-4 text-4xl font-bold tracking-wide text-ink uppercase md:text-6xl">
            Show up ready to build.
          </h2>
        </motion.div>

        <ul className="mt-12 grid gap-6 sm:grid-cols-2">
          {included.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-start gap-4 border-b border-ink/10 pb-6"
            >
              <span
                className="mt-1 inline-block h-2.5 w-2.5 shrink-0 rounded-full bg-mint"
                aria-hidden
              />
              <span className="text-base font-semibold text-ink md:text-lg">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
