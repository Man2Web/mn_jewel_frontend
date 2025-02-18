import NoDataAvailable from 'src/components/user/no-data-available'
import OrderDetails from 'src/components/user/orders/order-details'
import { useGetUserData } from 'src/hooks/user/user'

// const OrderDetails = lazy(() => import('src/components/user/orders/order-details'))

const Orders = () => {
  const { userData } = useGetUserData()
  //   console.log(userData)
  return (
    <section>
      {userData && userData?.orders.length > 0 ? (
        <div className="p-4 lg:px-6 lg:py-8">
          <div className="my-2">
            <h1 className="font-serif text-2xl ">Orders</h1>
            <span className="block h-0.5 w-1/5 bg-red-400 md:w-[100px]" />
          </div>
          <div className="flex flex-col gap-4">
            {userData.orders.map((data, index) => (
              <OrderDetails key={index} order={data} />
            ))}
          </div>
        </div>
      ) : (
        <NoDataAvailable title="No Orders Available" />
      )}
    </section>
  )
}

export default Orders
