import { monthsData } from 'src/data/components/months'
import { useGetOrderData } from 'src/hooks/user/user'
import { orderItemInterface } from 'src/types/components/user'
import ProductDetails from './product-details'

const OrderDetails = ({ order }: { order: orderItemInterface }) => {
  const [ordersData] = useGetOrderData(order.documentId)
  const orderTimeDetails = ordersData?.createdAt ? new Date(ordersData.createdAt) : null
  return (
    <div className="rounded-lg border-2 border-red-100">
      <div className="flex flex-col justify-between gap-4 bg-red-50 p-4 lg:flex-row lg:gap-0">
        <div className="flex gap-4">
          <div className="flex flex-col gap-1 text-sm">
            <p className="font-semibold">Ordered On</p>
            <p>{`${orderTimeDetails?.getDate()} ${
              monthsData[Number(orderTimeDetails?.getMonth())]
            } ${orderTimeDetails?.getFullYear()}`}</p>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <p className="font-semibold">Total</p>
            <p>{Number(ordersData?.totalPrice.toFixed(2)).toLocaleString()} /-</p>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <p className="font-semibold">Shiped To</p>
            <p>{ordersData?.userAddress.name}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col gap-1 text-sm">
            <p className="font-semibold">Order ID</p>
            <p>{order.documentId}</p>
          </div>
          <div className="flex flex-col gap-1 text-sm">
            <p className="font-semibold">Order Status</p>
            <p>{order.orderStatus ? 'Confirmed' : 'Failed'}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 bg-none p-4">
        {ordersData?.products.map((data, index) => (
          <div key={index}>
            <ProductDetails product={data.product} quantity={data.quantity} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default OrderDetails
