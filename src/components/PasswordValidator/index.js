import {useState} from 'react'

import {
  AppContainer,
  CardContainer,
  Heading,
  Paragraph,
  PasswordInput,
  ErrorMessage,
} from './styledComponents'

const PasswordValidator = () => {
  const [password, setPassword] = useState('')
  const onChangePassword = event => {
    setPassword(event.target.value)
  }
  const showErrorMsg = password.length < 8
  return (
    <AppContainer>
      <CardContainer>
        <Heading>Password Validator</Heading>
        <Paragraph>Check how strong and secure is your password</Paragraph>
        <PasswordInput
          type="password"
          value={password}
          onChange={onChangePassword}
        />
        {showErrorMsg && (
          <ErrorMessage>
            Your password must be at least 8 characters
          </ErrorMessage>
        )}
      </CardContainer>
    </AppContainer>
  )
}

export default PasswordValidator
