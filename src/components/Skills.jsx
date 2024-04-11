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
      <h1>Skills</h1>
      <div className='skills-content'>
        {
          data.map((item) => (
            <img className='skill-cards' key={item.skillAlt} src={item.imageSkill} alt={item.skillAlt} />
          ))
        }
      </div>
    </section>
  )
}
