import { useState } from 'react'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import { InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot } from 'src/components/ui/input-otp'
import { Label } from 'src/components/ui/label'

const Auth = () => {
  const [isMobileTrue, setisMobileTrue] = useState(false)

  return (
    <div className="mx-auto flex h-screen max-w-md flex-col px-6 py-4 lg:mx-0 lg:max-w-none lg:flex-row lg:px-6 lg:py-4">
      <div className="order-2 px-0 py-0 lg:order-1 lg:w-1/2 lg:px-32 lg:py-16">
        <div className="flex flex-col gap-2 py-4">
          <h1 className="text-2xl">Welcome Back👋</h1>
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
            <a className="flex justify-end pt-2 text-sm hover:text-red-400" href="#">
              Forgot Password?
            </a>
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
        <div className="my-4 flex gap-2">
          <Button onClick={() => setisMobileTrue(true)} className="w-full" variant="primary">
            Sign In with (Passcode)
          </Button>
          <Button onClick={() => setisMobileTrue(true)} className=" w-full" variant="primary">
            Sign In with (OTP)
          </Button>
        </div>
        <p className="flex justify-center pt-8 text-sm">
          Dont have an Account?{' '}
          <a className="pl-1 text-red-400" href="#">
            Sign Up
          </a>
        </p>
      </div>
      <div className="order-1 h-40 w-full lg:order-2 lg:h-full lg:w-1/2">
        <img className="h-full w-full rounded-lg" src="https://images4.alphacoders.com/133/1339103.png" />
      </div>
    </div>
  )
}

export default Auth
