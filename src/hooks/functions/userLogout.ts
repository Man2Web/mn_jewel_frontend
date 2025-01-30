import { toast } from 'react-hot-toast'

export const userLogout = () => {
  localStorage.removeItem('token')
  toast.success('User logged out')
  window.location.href = '/'
}
