import '../css/Skills.css'

import SkillsData from '../mocks/skillsData.json'
import { useState, useEffect } from 'react'

export function Skills () {
  const [data, setData] = useState([])

  const getData = () => {
    const info = SkillsData
    setData(info)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <section>
      <header>
        <h1>Skills</h1>
      </header>

      <article className='skills-content'>
        {
          data.map((item) => (
            <picture key={item.skillAlt} className='skill-card-container'>
              <img className='skill-cards' src={item.imageSkill} alt={item.skillAlt} />
            </picture>
          ))
        }
      </article>

    </section>
  )
}
