import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-top: 1em;
`

export const Textarea = styled.textarea`
  margin-bottom: 1em;
  margin-top: 0.5em;
  box-sizing: border-box;
  width: 60%;
  resize: none;
  padding: 1em;
  border-radius: 0.5em;
  border: 1px solid white;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  height: 10em;
  &:focus {
    outline: none;
  }
`

export const Input = styled.input`
  margin-bottom: 1em;
  margin-top: 0.5em;
  border-radius: 0.5em;
  border: 1px solid white;
  box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.06);
  padding: 1em;
  height: 0.5em;
  width: 60%;
  &:focus {
    outline: none;
  }
`

export const Label = styled.label`
  font-size: 0.9em;
  margin-top: 0.9em;
`

export const InputWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 100%;
`
