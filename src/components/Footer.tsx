import { event } from '../content'

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-fog px-[clamp(1.25rem,5vw,4rem)] py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-xl font-bold text-ink">{event.name}</p>
          <p className="mt-1 text-sm text-slate">
            {event.dateShort} · {event.venue}, {event.venueArea}
          </p>
          <p className="mt-3 text-sm font-semibold text-mint-deep">{event.hashtag}</p>
        </div>
        <p className="text-sm text-slate">
          Presented by <span className="font-semibold text-ink">CittaAI</span>
          <span className="mx-2 text-ink/20">·</span>
          {event.tagline}
        </p>
      </div>
    </footer>
  )
}
