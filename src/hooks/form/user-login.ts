import axios from 'axios'
import { toast } from 'react-hot-toast'
import { LoginFormInterface } from 'src/types/forms/auth'

async function userLogin(data: LoginFormInterface) {
  try {
    const response = await axios.post(`${import.meta.env.VITE_STRAPI_API}/auth/local`, {
      identifier: data.username,
      password: data.password,
    })
    response.status ? toast.success('User created loggin you in...') : toast.error('Something went wrong')
    localStorage.setItem('token', response.data.jwt)
    window.location.href = '/'
  } catch (error) {
    console.error(error)
    toast.error('Invalid credentials')
  }
}

export default userLogin
