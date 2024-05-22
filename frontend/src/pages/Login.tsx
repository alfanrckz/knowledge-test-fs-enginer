import { Box } from '@chakra-ui/react'
import { FormLogin } from '../features/auth/components/FormLogin'

const Login = () => {
  return (
    <Box style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <FormLogin/>
    </Box>
  )
}

export default Login
