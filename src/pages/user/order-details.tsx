import { useParams } from 'react-router-dom'

const OrderDetails = () => {
  const { orderId } = useParams()
  return <div>{orderId}</div>
}

export default OrderDetails
