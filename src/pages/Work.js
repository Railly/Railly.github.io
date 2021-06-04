import React, { useLayoutEffect } from 'react'

import { Button, Linker } from '../components/button'
import { WorkContainer } from '../components/container'
import { WorkCard } from '../components/card'

import passwordGenerator from '../images/password-generator.png'
import scheduleCreator from '../images/schedule-creator.jpeg'
import underBuilding from '../images/under_building.jpg'

const Work = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  })

  return (
    <>
      <WorkContainer>
        <WorkCard
          title="Password Generator"
          thumbnail={passwordGenerator}
          tech="React Native"
          repo="https://github.com/Railly/PassGen"
          demo="https://expo.io/@axra11/projects/PassGen"
        />
        <WorkCard
          title="Schedule Creator"
          thumbnail={scheduleCreator}
          tech="React JS"
          repo="https://github.com/Railly/schedule-creator"
          demo="https://schedule-creator.vercel.app/"
        />
        <WorkCard
          title="Under Building..."
          thumbnail={underBuilding}
          tech="..."
          repo="#"
          demo="#"
        />
        <WorkCard
          title="Under Building..."
          thumbnail={underBuilding}
          tech="..."
          repo="#"
          demo="#"
        />
      </WorkContainer>
      <Button route="/contact" as={Linker} contact>
        Contact
      </Button>
    </>
  )
}

export default Work
