import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Timeline from "@/components/TimeLine"
import EmpireSection from "@/components/EmpireSection"
import Rise from "@/components/Rise"
import LegacySection from "@/components/LegacySection"
import Footer from "@/components/Footer"
import SoundButton from "@/components/SoundButton"


export default function Home() {
  return (
    <main className="min-h-screen bg-black text-amber-100">
      <Navbar />
      <Hero />
      <Timeline />
      <Rise />
      <EmpireSection />
      <LegacySection />
      <SoundButton />
      <Footer />
    </main>
  )
}
