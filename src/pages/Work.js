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
        />
        <WorkCard
          title="Project N 1"
          thumbnail={passwordGenerator}
          tech="React JS"
        />
        <WorkCard
          title="Project 2"
          thumbnail={passwordGenerator}
          tech="React Native"
        />{' '}
        <WorkCard
          title="Project 3"
          thumbnail={passwordGenerator}
          tech="React Native"
        />
        <WorkCard
          title="Project 3"
          thumbnail={passwordGenerator}
          tech="React Native"
        />
      </WorkContainer>
      <Button route="/contact" as={Linker} contact>
        Contact
      </Button>
    </>
  )
}

export default Work
