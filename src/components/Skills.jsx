import '../css/Skills.css'
import Logo from '/html-logo.webp'
// import SkillsData from '../mocks/skillsData.json'
// import { useState, useEffect } from 'react'

export function Skills () {
  /*
  const [data, setData] = useState([])

  const getData = () => {
    const info = SkillsData
    setData(info)
  }

  useEffect(() => {
    getData()
  }, [])
  */
  return (
    <section>
      <header>
        <h1>Skills</h1>
      </header>

      <article className='skills-content'>
        <picture className='skill-card-container'>
          <img className='skill-cards' src={Logo} alt='img' />
        </picture>

        <picture className='skill-card-container'>
          <img className='skill-cards' src={Logo} alt='img' />
        </picture>

        <picture className='skill-card-container'>
          <img className='skill-cards' src={Logo} alt='img' />
        </picture>

        <picture className='skill-card-container'>
          <img className='skill-cards' src={Logo} alt='img' />
        </picture>

      </article>

    </section>
  )
}
