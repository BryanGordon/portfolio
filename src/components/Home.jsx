import { Skills } from './Skills'
import { About } from './About'
import { Projects } from './Projects'

export function Home () {
  return (
    <section>
      <Projects />
      <About />
      <Skills />
    </section>
  )
}
