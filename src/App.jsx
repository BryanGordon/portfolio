import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { Home } from './components/Home'
import { Header } from './components/Header'
import { Projects } from './components/Projects'
import { Footer } from './components/Footer'
import { PersonalInformation } from './components/PersonalInformation'

function App () {
  return (
    <Router>
      <Header />
      <main>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/projects' element={<Projects />} />
          <Route exact path='/personal-information' element={<PersonalInformation />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  )
}

export default App
