import { UserIcon } from 'lucide-react'
import { Button } from 'src/components/ui/button'
import { Input } from 'src/components/ui/input'
import { Label } from 'src/components/ui/label'
import { useGetUserData } from 'src/hooks/user/user'

const Profile = () => {
  const [userData] = useGetUserData()
  return (
    <section className="p-4 lg:px-6 lg:py-8">
      <div className="my-2">
        <h1 className="font-serif text-2xl ">Profile</h1>
        <span className="block h-0.5 w-1/5 bg-red-400 md:w-[100px]" />
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex h-20 w-20 items-center justify-center rounded-full border border-red-400 bg-red-100 p-4">
          <span className="text-red-400">
            <UserIcon size={30} />
          </span>
        </div>
        <div className="w-full md:max-w-sm">
          <div>
            <Label>Email</Label>
            <Input type="email" placeholder="JohnDoe@gmail.com" value={userData?.email} disabled />
          </div>
        </div>
        <div className="w-full md:max-w-sm">
          <div>
            <Label>Phone Number</Label>
            <div className="flex items-center gap-2">
              <Button disabled className="flex h-full w-[125px] font-semibold" variant="outline">
                <img className="h-6 pr-2" src="\src\assets\icons\flag.png" /> +91
              </Button>
              <Input type="text" placeholder="8790988098" value={userData?.username} disabled />
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="w-full">
            <Button variant="primary">Update Details</Button>
          </div>
          <div className="w-full">
            <Button variant="primary">Update Details</Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Profile
