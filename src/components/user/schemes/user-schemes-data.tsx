import { Calendar, IndianRupeeIcon } from 'lucide-react'
import { useGetUserSchemes } from 'src/hooks/user/scheme'

const UserSchemesData = () => {
  const [userSchemes] = useGetUserSchemes()
  const userActiveSchemes = userSchemes.filter((data) => data.schemeStatus === 'In-Progress')
  const userCompletedSchemes = userSchemes.filter((data) => data.schemeStatus === 'Completed')
  return (
    <div className="flex w-full flex-col gap-2 font-serif lg:mx-auto lg:flex-row">
      {userSchemes.length > 0 &&
        userSchemes.map((data, index) => (
          <div
            key={index}
            className="flex w-full flex-col gap-2 rounded-lg border border-brandColor bg-brandSecondary p-2"
          >
            <div className="flex items-center justify-between">
              <h1 className="font-serif text-xl text-brandColor">{data.scheme.name}</h1>
              <img className="h-8 w-auto" src={data?.scheme.logo?.url} />
            </div>
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-1">
                <span className="text-brandColor">
                  <Calendar size={14} />
                </span>
                <p>{data.paymentsLeft} Months</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-brandColor">
                  <IndianRupeeIcon size={14} />
                </span>
                <p>{Number(data.amountPaid).toLocaleString()} Paid</p>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-brandColor">
                  <Calendar size={14} />
                </span>
                <p>{data.schemeStatus}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  )
}

export default UserSchemesData
