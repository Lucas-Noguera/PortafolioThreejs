import { About } from './sections/About'
import { Certifications } from './sections/Certifications'
import { Contact } from './sections/Contact'
import { Hero } from './sections/Hero'
import { Navbar } from './sections/Navbar'
import { Projects } from './sections/Projects'

function App() {

  return (
    <main className="max-w-7xl mx-auto p-4">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact/>
    </main>
  )
}

export default App
