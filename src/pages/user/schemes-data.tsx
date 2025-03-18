import { useGetUserSchemes, useGetUserSchemeTransactions } from 'src/hooks/user/scheme'
import DigitalSchemeTransaction from 'src/components/user/schemes/digital-order'
import UserSchemesData from 'src/components/user/schemes/user-schemes-data'

const SchemesData = () => {
  const [userSchemes] = useGetUserSchemes()
  const [digitalTransactions] = useGetUserSchemeTransactions()
  return (
    <section className="flex w-full flex-col gap-4 p-4 lg:flex-row lg:justify-between lg:px-6 lg:py-8">
      <div className="w-full lg:w-1/2">
        <div className="my-2">
          <h1 className="font-serif text-2xl ">User Schcmes</h1>
          <span className="block h-0.5 w-1/5 bg-brandColor md:w-[100px]" />
        </div>
        <UserSchemesData />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex max-h-[80vh] w-full flex-col">
          <div className="my-2">
            <h1 className="font-serif text-2xl ">Transactions</h1>
            <span className="block h-0.5 w-1/5 bg-brandColor md:w-[100px]" />
          </div>
          <div className="scrollbar-hide no-scrollbar flex h-full w-full flex-col gap-2 overflow-y-scroll">
            {Number(digitalTransactions.length) > 0 &&
              digitalTransactions.map((data, index) => {
                return (
                  <div key={index}>
                    <DigitalSchemeTransaction orderData={data} />
                  </div>
                )
              })}
            {Number(digitalTransactions.length) === 0 && (
              <h1 className="font-serif text-xl">No Transactions Available</h1>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SchemesData
