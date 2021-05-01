import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { send } from 'emailjs-com'

import { Card, TitleWrapper, Title } from '../components/card'
import { CenterContainer } from '../components/container'
import { Button } from '../components/button'
import {
  Form,
  Textarea,
  Input,
  Label,
  InputWrapper,
  ButtonWrapper,
} from '../components/styled-form-tags'

const TOAST_SEND_ERROR = 'id-send-error'
const TOAST_SEND_SUCCESS = 'id-send-succes'

const Contact = ({ history }) => {
  const [disabled, setDisabled] = useState(false)
  const [primary, setPrimary] = useState(true)
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  })

  const handleChange = e => {
    setToSend({ ...toSend, [e.target.name]: e.target.value })
  }

  const handleDisabled = () => {
    setDisabled(true)
    setPrimary(false)
    setTimeout(() => {
      setDisabled(false)
      setPrimary(true)
    }, 2500)
  }

  const isEmailAddress = str => {
    const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    return pattern.exec(str.match(pattern))
  }

  const onSubmit = e => {
    e.preventDefault()
    console.log('!isEmailAddress', !isEmailAddress)
    if (!isEmailAddress(toSend.reply_to)) {
      handleDisabled()
      toast.error('Email invalid!', {
        position: toast.POSITION.TOP_CENTER,
      })
      return
    }
    send(
      'service_mz32lyk',
      'template_o68iol9',
      toSend,
      'user_MuFRnPsyvtXB3vlIC63sO',
    ).then(
      () => {
        handleDisabled()
        toast.success('Mail sent successfully! 🤝', {
          position: toast.POSITION.TOP_CENTER,
          toastId: TOAST_SEND_SUCCESS,
          onClose: () => history.push('/contact/success'),
        })
      },
      () => {
        handleDisabled()
        toast.error('Error 🥺 try again!', {
          position: toast.POSITION.TOP_CENTER,
          toastId: TOAST_SEND_ERROR,
        })
      },
    )
  }

  return (
    <CenterContainer contact>
      <Card contact>
        <TitleWrapper>
          <Title content="Contact" />
        </TitleWrapper>
        <Form onSubmit={onSubmit}>
          <InputWrapper>
            <Label>Name: </Label>
            <Input
              type="text"
              name="from_name"
              placeholder="Your name"
              value={toSend.from_name}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Email: </Label>
            <Input
              type="email"
              name="reply_to"
              placeholder="Your email"
              value={toSend.reply_to}
              onChange={handleChange}
            />
          </InputWrapper>
          <InputWrapper>
            <Label>Message: </Label>
            <Textarea
              type="text"
              name="message"
              placeholder="Your message"
              value={toSend.message}
              onChange={handleChange}
            />
          </InputWrapper>
          <ButtonWrapper>
            <Button type="submit" disabled={disabled} primary={primary}>
              Submit
            </Button>
          </ButtonWrapper>
        </Form>
      </Card>
      <ToastContainer autoClose={2500} />
    </CenterContainer>
  )
}

export default Contact
