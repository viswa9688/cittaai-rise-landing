import { event } from '../content'

export function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-fog px-[clamp(1.25rem,5vw,4rem)] py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl font-bold tracking-wide text-ink uppercase">
            CittaAI <span className="text-mint">RISE</span>
          </p>
          <p className="mt-1 text-sm font-medium text-slate">
            {event.dateShort} ·{' '}
            <a
              href={event.venueMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-ink underline decoration-mint/50 underline-offset-4 transition hover:text-mint"
            >
              {event.venue}
            </a>
            , {event.venueArea}
          </p>
          <p className="mt-3 text-sm font-medium text-slate">
            For more info: contact{' '}
            <a
              href={event.contactTel}
              className="font-bold text-ink underline decoration-mint/50 underline-offset-4 transition hover:text-mint"
            >
              {event.contactPhone}
            </a>
          </p>
          <p className="mt-3 font-display text-sm font-bold tracking-wider text-mint">
            {event.hashtag}
          </p>
        </div>
        <p className="text-sm font-medium text-slate">
          Presented by <span className="font-bold text-ink">CittaAI</span>
          <span className="mx-2 text-ink/20">·</span>
          <span className="font-display tracking-wide uppercase">{event.tagline}</span>
        </p>
      </div>
    </footer>
  )
}
