/** Drop the real Citta AI portal URL here when ready. */
export const REGISTER_URL = '#register'

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
  time: '9:45 AM – 7:45 PM',
  venue: 'LeapStart Academy',
  venueArea: 'Nanakramguda Financial District',
  teamSize: '3–5 members',
  entryFee: '₹250 per person',
  capacity: '20–25 teams',
  hashtag: '#CittaAIRISE',
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
    detail: 'Problem statements drop 24 Aug. Submit by 26 Aug. Results 27 Aug.',
  },
  {
    title: 'Build day',
    detail: '10 hours on site: brief, build, mentor check-ins, and a final sprint.',
  },
  {
    title: 'Pitch & prize',
    detail: 'Live demo to a jury of industry mentors. Top teams walk away with cash, LORs, and internship shots.',
  },
] as const

export const preRound = [
  { label: 'Statements live', date: '24 Aug 2026' },
  { label: 'Submission deadline', date: '26 Aug 2026' },
  { label: 'Results', date: '27 Aug 2026' },
] as const

export const schedule = [
  { time: '09:15 AM', activity: 'Doors Open & Registration' },
  { time: '09:45 AM', activity: 'Opening Ceremony & Briefing' },
  { time: '10:15 AM', activity: 'Problem Statement Introduction' },
  { time: '10:35 AM', activity: 'Coding & Building Begins' },
  { time: '12:45 PM', activity: 'Lunch Break' },
  { time: '01:30 PM', activity: 'Building Continues' },
  { time: '05:00 PM', activity: 'Refreshment Break' },
  { time: '05:15 PM', activity: 'Final Sprint & Polish' },
  { time: '06:45 PM', activity: 'Submission Deadline' },
  { time: '06:50 PM', activity: 'Jury Deliberation & Scoring' },
  { time: '07:20 PM', activity: 'Winner Announcement' },
  { time: '07:35 PM', activity: 'Vote of Thanks & Closing' },
  { time: '07:45 PM', activity: 'Event Concludes' },
] as const

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
    amount: '₹15,000',
    extras: 'Coupons · Certificate · LOR & internship opportunities',
  },
  {
    place: '2nd Place',
    amount: '₹10,000',
    extras: 'Coupons · Certificate of Achievement',
  },
] as const

export const included = [
  'Lunch, refreshments, and dinner',
  'ID card / badge',
  'Printed notepad and pen',
  'Access to mentors and resources',
] as const

export const registerDetails = {
  fee: '₹250 per person',
  team: 'Teams of 3–5',
  capacity: '20–25 teams max · ~60–125 builders',
  refund:
    'Full refund for non-selected participants within 5–7 business days.',
  steps: [
    'Team lead creates an account on the Citta AI portal',
    'Enter team name, college/company, and focus area',
    'Add 3–5 members and pay ₹250/person',
    'Get confirmation — then watch for problem statements on 24 Aug',
  ],
} as const
