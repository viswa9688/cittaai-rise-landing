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
          <p className="text-sm font-semibold tracking-[0.16em] text-mint-deep uppercase">
            Judging & prizes
          </p>
          <h2 className="font-display mt-3 max-w-2xl text-3xl font-bold tracking-tight text-ink md:text-5xl">
            Scored on whether the agent works.
          </h2>
          <p className="mt-4 max-w-xl text-base text-slate">
            A live panel of industry mentors scores every team across five equal criteria — then
            deliberates on the top two.
          </p>
        </motion.div>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
          {judgingCriteria.map((c) => (
            <li key={c} className="text-sm font-semibold text-ink">
              <span className="mr-2 text-amber">▸</span>
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
              className="border-t-2 border-ink pt-6"
            >
              <p className="text-sm font-semibold tracking-wide text-slate uppercase">
                {prize.place}
              </p>
              <p className="font-display mt-2 text-4xl font-extrabold tracking-tight text-ink md:text-5xl">
                {prize.amount}
              </p>
              <p className="mt-3 text-sm text-slate">{prize.extras}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
