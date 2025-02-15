import { zodResolver } from '@hookform/resolvers/zod'
import { Controller, useForm } from 'react-hook-form'
import { LoginFormInterface, LoginFormInterfaceSchema } from 'src/types/forms/auth'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../ui/input-otp'
import userLogin from 'src/hooks/form/user-login'

const LoginForm = () => {
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormInterface>({
    resolver: zodResolver(LoginFormInterfaceSchema),
  })
  return (
    <form onSubmit={handleSubmit((data) => userLogin(data))}>
      <div>
        <Label>Phone Number</Label>
        <div className="flex items-center gap-2">
          <Button className="flex h-full w-[125px] items-center font-semibold" variant="outline">
            <img className="h-6 pr-2" src="/assets/flag.png" alt="flag" /> +91
          </Button>
          <Input {...register('username')} placeholder="8790988098" type="tel" />
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
                  <InputOTPSlot key={index} index={index} />
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
        Login
      </Button>
    </form>
  )
}

export default LoginForm
