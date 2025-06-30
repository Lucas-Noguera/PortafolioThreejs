import Translate from '../components/Translate'
import { About } from './sections/About'
import { Certifications } from './sections/Certifications'
import { Contact } from './sections/Contact'
import { Experience } from './sections/Experience'
import { Footer } from './sections/Footer'
import { Hero } from './sections/Hero'
import { Navbar } from './sections/Navbar'
import { Projects } from './sections/Projects'
import { useLanguage } from './hooks/useLanguage'

function App() {
  useLanguage()

  return (
    <main className="max-w-7xl mx-auto p-4">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Experience />
      <Contact />
      <Footer />
      <Translate />
    </main>
  )
}

export default App
