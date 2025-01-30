import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from 'src/components/ui/input-otp'
import { Label } from 'src/components/ui/label'

const ForgotPass = () => {
  const [isMobileTrue, setisMobileTrue] = useState(false)
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
          <h1 className="text-2xl">Forgot Password 😥</h1>
          <p className="text-sm">
            Today is a new day. It&apos;s your day. You shape it. Sign in to start managing your projects.
          </p>
        </div>
        {!isMobileTrue ? (
          <div>
            <Label>Phone Number</Label>
            <div className="flex items-center gap-2">
              <Button className="flex h-full w-[125px] font-semibold" variant="outline">
                🏁 (+91)
              </Button>
              <Input placeholder="8790988098" />
            </div>
          </div>
        ) : (
          // Here you need to add the OTP input field.
          <div className="flex w-full justify-center">
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        )}
        <Button onClick={() => setisMobileTrue(true)} className="my-4 w-full" variant="primary">
          Reset Password
        </Button>
        <p className="flex justify-center pt-8 text-sm">
          Remember Your Password?{' '}
          <a className="pl-1 text-red-400" href="#">
            Sign In
          </a>
        </p>
      </div>
      <div className="order-1 h-40 w-full lg:order-2 lg:h-full lg:w-1/2">
        <img className="h-full w-full rounded-lg" src="https://images4.alphacoders.com/133/1339103.png" />
      </div>
    </div>
  )
}

export default ForgotPass
