import { useEffect, useState } from 'react'
import SignUpForm from 'src/components/auth/signup-form'
import LoginForm from 'src/components/auth/login-form'
import { useNavigate } from 'react-router-dom'

const Auth = () => {
  const [login, setLogin] = useState(true)
  const navigate = useNavigate()
  useEffect(() => {
    const jwt = localStorage.getItem('token')
    if (jwt) {
      navigate('/')
    }
  }, [navigate])
  return (
    <div className="mx-auto flex h-screen max-w-md flex-col px-6 py-4 lg:mx-0 lg:max-w-none lg:flex-row lg:px-6 lg:py-4">
      <div className="order-2 px-0 py-0 lg:order-1 lg:w-1/2 lg:px-32 lg:py-16">
        <div className="flex flex-col gap-2 py-4">
          <h1 className="text-2xl">Welcome Back👋</h1>
          <p className="text-sm">
            Today is a new day. It&apos;s your day. You shape it. Sign in to start managing your projects.
          </p>
        </div>
        {login ? <LoginForm /> : <SignUpForm />}
        <p className="flex justify-center pt-8 text-sm">
          Dont have an Account?{' '}
          <div onClick={() => setLogin((prev) => !prev)} className="cursor-pointer pl-1 text-red-400">
            {login ? 'Sign Up' : 'Sign In'}
          </div>
        </p>
      </div>
      <div className="order-1 h-48 w-full lg:order-2 lg:h-full lg:w-1/2">
        <img className="h-full w-full rounded-lg" src="https://images4.alphacoders.com/133/1339103.png" />
      </div>
    </div>
  )
}

export default Auth
