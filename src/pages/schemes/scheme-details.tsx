import { ClockIcon, IndianRupeeIcon } from 'lucide-react'
import { useParams } from 'react-router-dom'
import Loader from 'src/components/layout/loader'
import { Button } from 'src/components/ui/button'
import { useGetSchemeData, useGetUserSchemeTransactions } from 'src/hooks/user/scheme'

const SchemeDetails = () => {
  const { id } = useParams()
  const [schemeData] = useGetSchemeData(id)
  const [digitalTransactions] = useGetUserSchemeTransactions()
  return (
    <section className="flex w-full flex-col gap-4 p-4 lg:px-6 lg:py-8">
      <div className="w-full">
        <div className="my-2">
          <h1 className="font-serif text-2xl">Scheme Details</h1>
          <span className="block h-0.5 w-1/5 bg-red-400 md:w-[100px]" />
        </div>
      </div>
      {schemeData ? (
        <div className="w-full">
          <div className="flex items-center justify-between">
            <h1 className="font-serif text-xl text-red-400">{schemeData?.name}</h1>
            <img className="h-8 w-auto" src={schemeData?.logo?.url} />
          </div>
          <div className="mt-4 flex flex-col gap-2">
            <p>{schemeData?.planDescription}</p>
            <div>
              <div className="flex items-center">
                <ClockIcon size={14} />
                <span className="pl-1">{Number(schemeData?.planDuration)} Months</span>
              </div>
              <div className="flex items-center">
                <IndianRupeeIcon size={14} />
                <span className="pl-1">{Number(schemeData?.minAmount).toLocaleString()} /- Min Amount</span>
              </div>
            </div>
          </div>
          <div>
            <div className="my-2">
              <h1 className="font-serif text-xl">Note</h1>
              <span className="block h-0.5 w-1/5 bg-red-400 md:w-[75px]" />
            </div>
            <div className="flex flex-col gap-2">
              <p>{schemeData?.planDescription}</p>
              <p>{schemeData?.termsAndConditions}</p>
              {schemeData?.gstChargeable && <p>GST will be applicable at the point of sale</p>}
              {schemeData?.vatChargeable && (
                <p>VA will be applicable for the purchase of jewelley made via this plan</p>
              )}
            </div>
          </div>
          <div className="my-2 flex justify-center">
            <Button
              onClick={() => {
                window.location.href = `/schemes/${schemeData?.documentId}`
              }}
              variant="primary"
              className="font-sans"
            >
              Enroll Now
            </Button>
          </div>
        </div>
      ) : (
        <div>
          <Loader />
        </div>
      )}
    </section>
  )
}

export default SchemeDetails
