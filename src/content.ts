export const REGISTER_URL = 'https://rzp.io/rzp/yCKp4Vyi'

export const REGISTER_LINK_PROPS = {
  href: REGISTER_URL,
  target: '_blank',
  rel: 'noopener noreferrer',
} as const

export const FEE_COPY = '₹295 per person'

export const event = {
  presents: 'CittaAI Presents',
  name: 'CittaAI RISE',
  acronym: 'R.I.S.E. — Rapid Idea-to-Agent Sprint Experience',
  edition: 'Idea2Agent Edition',
  tagline: 'Where Ideas Become Agents.',
  category: 'A 10-Hour AI Agent Building Hackathon',
  date: '29th August 2026',
  dateShort: '29 Aug 2026',
  day: 'Saturday',
  time: '9:15 AM – 8:00 PM',
  venue: 'LeapStart Academy',
  venueArea: 'Nanakramguda Financial District',
  venueMapsUrl: 'https://maps.app.goo.gl/d66v3G57nU5Bkkif7',
  teamSize: '3–5 members',
  entryFee: FEE_COPY,
  hashtag: '#CittaAIRISE',
  contactPhone: '7680842847',
  contactTel: 'tel:+917680842847',
  shortDescription:
    'CittaAI RISE (Rapid Idea-to-Agent Sprint Experience) — Idea2Agent Edition — is a 10-hour, in-person AI hackathon for builders who want to go from a raw idea to a working AI agent in a single day. Teams of 3–5 tackle real-world problem statements with AI integration at the core, guided by industry mentors, and pitch working prototypes to a live jury by evening.',
  elevatorPitch:
    'Builders turn a single idea into a working AI agent in one day. No fluff, no theory — real problem statements, real mentors, and real AI systems shipped by sundown. It’s not about writing a prompt. It’s about building something that thinks.',
} as const

export const riseLetters = [
  {
    letter: 'R',
    word: 'Rapid',
    meaning:
      'The entire arc — idea to working agent — happens in a single day, start to finish.',
  },
  {
    letter: 'I',
    word: 'Idea',
    meaning:
      'Every team starts with nothing but a raw idea. This is the I2A entry point.',
  },
  {
    letter: 'S',
    word: 'Sprint',
    meaning:
      'The intense, timed build phase where the idea gets built into something real.',
  },
  {
    letter: 'E',
    word: 'Experience',
    meaning:
      'The full day — mentorship, pitching, judging, prizes — not just the code.',
  },
] as const

export const eventArc = [
  {
    title: 'Pre-round',
    detail:
      'Problem statements drop 21 Aug. Submit by 25 Aug. Shortlisted teams announced 26 Aug.',
  },
  {
    title: 'Build day',
    detail: '10 hours on site: brief, build, mentor check-ins, and a final sprint.',
  },
  {
    title: 'Pitch & prize',
    detail:
      'Live demo to a jury of industry mentors. Top teams walk away with cash, LORs, and internship shots.',
  },
] as const

export const preRound = [
  { label: 'Problem statements live', date: 'Fri 21 Aug 2026' },
  { label: 'Deadline for submission', date: 'Tue 25 Aug 2026' },
  { label: 'Shortlisted teams announced', date: 'Wed 26 Aug 2026' },
] as const

export const schedule = [
  { time: '09:15 AM', activity: 'Doors Open & Registration' },
  {
    time: '09:45 AM',
    activity: 'Opening Ceremony & Briefing, problem statement introduction',
  },
  { time: '10:00 AM', activity: 'CODING & BUILDING BEGINS', highlight: true },
  { time: '12:45 PM', activity: 'Lunch Break 45 mins' },
  { time: '01:30 PM', activity: 'Building' },
  { time: '06:45–07:45 PM', activity: 'Jury Deliberation & Scoring (1 hr)' },
  {
    time: '07:45–08:00 PM',
    activity: 'Winner Announcement, vote of thanks and concluding',
  },
] as const

export const scheduleDisclaimer =
  'Timings may vary if there are any delays in any step of the flow.'

export const judgingCriteria = [
  'Problem Understanding',
  'Solution Innovation',
  'Technical Implementation',
  'AI Integration',
  'Presentation & Demo',
] as const

export const prizes = [
  {
    place: '1st Place',
    amount: '₹20,000',
    extras: 'Coupons · Certificate · LOR & internship opportunities',
  },
  {
    place: '2nd Place',
    amount: '₹10,000',
    extras: 'Coupons · Certificate of Achievement',
  },
] as const

export const included = [
  'Lunch and refreshments',
  'ID card / badge',
  'Printed notepad and pen',
  'Access to mentors and resources',
] as const

export const registerDetails = {
  fee: FEE_COPY,
  team: 'Teams of 3–5',
  refund:
    'Participants not selected for 2nd round will be refunded complete money.',
} as const
