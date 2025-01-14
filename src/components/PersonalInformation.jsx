import '../css/Cv.css'

export function PersonalInformation () {
  return (
    <section className='section-cv'>
      <h1>Personal information</h1>

      <h2>Experience</h2>
      <div className='container-titles'>
        <p className='answer'> +3 year development personal projects and working with customers.</p>
      </div>

      <h2>Certifications</h2>
      <div className='container-titles'>
        <label className='cv-titles'> Udemy:
          <p className='answer'> Aprende React + firebase 2021 (6.5 hours) [2021]</p>
          <p style={{ display: 'block' }} className='answer'> Programa tus primeros juegos HTML5 con Javascript (8.5 hours) [2020]</p>
          <p style={{ display: 'block' }} className='answer'> Aprende a desarrollar videojuegos con unity 2021 (5.5 hours) [2021]</p>
          <p style={{ display: 'block' }} className='answer'> TailwindCSS from A to Z: Master TailwindCSS Quickly (1.5 hours) [2024]</p>
        </label>
        <label className='cv-titles'> University:
          <p className='answer'> V Jornadas académicas internacionales y I congreso internacional de ciencias de la computación (24 hours) [2018]</p>
          <p style={{ display: 'block' }} className='answer'> Encuentro internacional tendencias de la inteligencia artificial [2020]</p>
          <p style={{ display: 'block' }} className='answer' id='university'> Medios digitales (20 hours) [2020]</p>
        </label>
        <label className='cv-titles'> Cisco:
          <p className='answer'> Introducción a la Seguridad Cibernética de Cisco Networking Academy [2020]</p>
        </label>
        <label className='cv-titles'> Platzi:
          <p className='answer'> Testing de videojuegos [2021]</p>
        </label>
        <label className='cv-titles'> Domestika:
          <p className='answer'> Introducción a Unity para videojuegos 2D (10 hours) [2021]</p>
        </label>
      </div>

      <h2>Studies</h2>
      <div className='container-titles'>
        <label className='cv-titles'>Elementary School:
          <p className='answer'> Virgen del Rosario (Spain)</p>
        </label>
        <label className='cv-titles'>Middle School:
          <p className='answer'> I.E.S Sierra de Guadarrama (Spain) [1 year]</p>
          <p style={{ display: 'block' }} className='answer'> U.E Las Lomas (Ecuador) [2 years]</p>
        </label>
        <label className='cv-titles'>High School:
          <p className='answer'> U.E Las Lomas [3 years]</p>
        </label>
        <label className='cv-titles'>University:
          <p className='answer'> Software Engineering - Universidad Tecnica del Norte</p>
        </label>
      </div>

      <h2>Basic information</h2>
      <div className='container-titles'>
        <label className='cv-titles'>Full name:
          <p className='answer'> Bryan Armando Gordon Echeverria </p>
        </label>
        <label className='cv-titles'>Address:
          <p className='answer'> Quiroga - Cotacachi - Imbabura - Ecuador</p>
        </label>
        <label className='cv-titles'>Email:
          <p className='answer'> bryanbge92@gmail.com / bryanbge98@outlook.com</p>
        </label>
      </div>

    </section>
  )
}
