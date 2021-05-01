import React, { useLayoutEffect } from 'react'

import { Button, Linker } from '../components/button'
import { WorkContainer } from '../components/container'
import { WorkCard } from '../components/card'

import passwordGenerator from '../images/password-generator.png'

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
          title="Project N 1"
          thumbnail={passwordGenerator}
          tech="React JS"
          repo="https://github.com/Railly/PassGen"
          demo="https://expo.io/@axra11/projects/PassGen"
        />
        <WorkCard
          title="Project 2"
          thumbnail={passwordGenerator}
          tech="React Native"
          repo="https://github.com/Railly/PassGen"
          demo="https://expo.io/@axra11/projects/PassGen"
        />{' '}
        <WorkCard
          title="Project 3"
          thumbnail={passwordGenerator}
          tech="React Native"
          repo="https://github.com/Railly/PassGen"
          demo="https://expo.io/@axra11/projects/PassGen"
        />
        <WorkCard
          title="Project 3"
          thumbnail={passwordGenerator}
          tech="React Native"
          repo="https://github.com/Railly/PassGen"
          demo="https://expo.io/@axra11/projects/PassGen"
        />
      </WorkContainer>
      <Button route="/contact" as={Linker} contact>
        Contact
      </Button>
    </>
  )
}

export default Work
