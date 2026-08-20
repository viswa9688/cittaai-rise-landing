import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { RiseBreakdown } from './components/RiseBreakdown'
import { Venue } from './components/Venue'
import { EventArc } from './components/EventArc'
import { Schedule } from './components/Schedule'
import { Prizes } from './components/Prizes'
import { Included } from './components/Included'
import { RegisterCTA } from './components/RegisterCTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <RiseBreakdown />
        <Venue />
        <EventArc />
        <Schedule />
        <Prizes />
        <Included />
        <RegisterCTA />
      </main>
      <Footer />
    </>
  )
}
