import { motion } from 'framer-motion'
import { judgingCriteria, prizes } from '../content'

export function Prizes() {
  return (
    <section id="prizes" className="section-pad bg-fog">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="eyebrow text-sm text-mint">Judging & prizes</p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl font-bold tracking-wide text-ink uppercase md:text-6xl">
            Scored on whether the agent works.
          </h2>
          <p className="mt-4 max-w-xl text-base font-medium text-slate">
            A live panel of industry mentors scores every team across five equal criteria — then
            deliberates on the top two.
          </p>
        </motion.div>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          {judgingCriteria.map((c) => (
            <li key={c} className="text-sm font-bold tracking-wide text-ink uppercase">
              <span className="mr-2 text-mint">▸</span>
              {c}
            </li>
          ))}
        </ul>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {prizes.map((prize, i) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="border-t-4 border-mint pt-6"
            >
              <p className="eyebrow text-sm text-slate">{prize.place}</p>
              <p className="font-display mt-3 text-5xl font-bold tracking-wide text-ink md:text-6xl">
                {prize.amount}
              </p>
              <p className="mt-3 text-sm font-medium text-slate">{prize.extras}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
