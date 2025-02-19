import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { SignUpFormInterface, SignUpFormInterfaceSchema } from 'src/types/forms/auth'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp'
import userRegister from 'src/hooks/form/user-register'

const SignUpForm = () => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<SignUpFormInterface>({
    resolver: zodResolver(SignUpFormInterfaceSchema),
  })
  return (
    <form onSubmit={handleSubmit((data) => userRegister(data))}>
      <div>
        <Label>Email</Label>
        <Input {...register('email')} placeholder="John Doe" type="text" />
        {errors.email && <p className="mt-2 text-sm text-red-400">{errors.email.message}</p>}
      </div>
      <div>
        <Label>Phone Number</Label>
        <div className="flex items-center gap-2">
          <Button type="button" className="flex h-full w-[125px] items-center font-semibold" variant="outline">
            <img className="h-6 pr-2" src="/assets/flag.png" /> +91
          </Button>
          <Input
            {...register('username')}
            placeholder="8790988098"
            type="tel"
            pattern="\d*"
            maxLength={10}
            onInput={(e) => {
              e.currentTarget.value = e.currentTarget.value.replace(/\D/g, '')
            }}
          />
        </div>
        {errors.username && <p className="mt-2 text-sm text-red-400">{errors.username.message}</p>}
      </div>
      <div>
        <Label>Password</Label>
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <InputOTP maxLength={6} {...field} onChange={(value) => field.onChange(value)}>
              <InputOTPGroup className="w-full">
                {[...Array(6)].map((_, index) => (
                  <InputOTPSlot className="otp-slot" key={index} index={index} />
                ))}
              </InputOTPGroup>
            </InputOTP>
          )}
        />
        {errors.password && <p className="mt-2 text-sm text-red-400">{errors.password.message}</p>}
      </div>
      <a className="flex justify-end pt-2 text-sm text-red-400" href="#">
        Forgot Password?
      </a>
      <Button type="submit" className="my-2 w-full" variant="primary">
        Sign Up
      </Button>
    </form>
  )
}

export default SignUpForm
