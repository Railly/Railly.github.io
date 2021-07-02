import React, { useLayoutEffect } from 'react'

import { Button, Linker } from '../components/button'
import { WorkContainer } from '../components/container'
import { WorkCard } from '../components/card'

import passwordGenerator from '../images/password-generator.png'
import scheduleCreator from '../images/schedule-creator.jpeg'
import underBuilding from '../images/under_building.jpg'
import foody from '../images/foody.png'
import portfolio from '../images/portfolio.png'

const Work = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <WorkContainer>
        <WorkCard
          title="App de Recetas"
          thumbnail={foody}
          repo="https://github.com/Railly/next-cooking-app"
          demo="https://next-cooking-app.vercel.app/"
        >
          Aplicación FullStack hecha con Firebase🔥 y Next.js🖤.
          <br />
          ✅Server Side Rendering
          <br />
          ✅Rutas Dinámicas
          <br />
          ✅Usa la autentificación de Google <br />
          ✅Permite crear libros de cocina. <br />
          ✅Los libros contienen recetas. <br />
          ✅Las recetas contiene ingredientes, pasos y una imagen. <br />
        </WorkCard>

        <WorkCard
          title="Generador de contraseñas"
          thumbnail={passwordGenerator}
          tech="React Native"
          repo="https://github.com/Railly/PassGen"
          demo="https://expo.io/@axra11/projects/PassGen"
        >
          Aplicación hecha con React Native ⚛️ y Expo💥
          <br />
          Se puede generar una contraseña con los siguientes parámetros:
          <br />
          ✅Mayúsculas <br />
          ✅Minúsculas <br />
          ✅Números <br />
          ✅Caracteres especiaes <br />
          ✅Contraseña al portapapeles con un clic
        </WorkCard>

        <WorkCard
          title="Creador de Horarios"
          thumbnail={scheduleCreator}
          tech="React JS"
          repo="https://github.com/Railly/schedule-creator"
          demo="https://schedule-creator.vercel.app/"
        >
          Aplicación hecha con CRA (create-react-app)⚛️
          <br />
          Mediante un formulario crea tus horarios instantáneamente
          <br />
          ✅Permite seleccionar el color del curso <br />
          ✅El color de la fuente se decide por el contraste
          <br />
          ✅Admite solo horas exactas.
        </WorkCard>

        <WorkCard
          title="Portafolio 2021"
          thumbnail={portfolio}
          tech="React JS"
          repo="https://github.com/Railly/portfolio-2021"
          demo="https://www.raillyhugo.com/"
        >
          Aplicación hecha con CRA (create-react-app)⚛️
          <br />
          ✅Styled Components <br />
          ✅React Router <br />
          ✅Deploy en Vercel <br />
        </WorkCard>

        <WorkCard
          title="Under Construction..."
          thumbnail={underBuilding}
          tech="..."
        />
        <WorkCard
          title="Under Construction..."
          thumbnail={underBuilding}
          tech="..."
        />
      </WorkContainer>
      <Button route="/contact" as={Linker} contact>
        Contact
      </Button>
    </>
  )
}

export default Work
