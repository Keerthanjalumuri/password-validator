import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #24263c;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  border-radius: 8px;
  background-color: #383a4e;
  height: 50vh;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 38px;
  font-weight: bold;
`

export const Paragraph = styled.p`
  color: #f8fafc;
  font-size: 12px;
  font-family: 'Roboto';
  margin-bottom: 30px;
`

export const PasswordInput = styled.input`
  width: 100%;
  background-color: #edeeff;
  padding: 4px;
  border-radius: 4px;
  border: none;
  outline: none;
  height: 40px;
`

export const ErrorMessage = styled.p`
  color: #ef4444;
  font-size: 12px;
  font-family: 'Roboto';
`
