import { Box } from '@chakra-ui/react'
import { FormRegister } from '../features/auth/components/FormRegister'

const Register = () => {
  return (
    <Box style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
      <FormRegister/>
    </Box>
  )
}

export default Register
