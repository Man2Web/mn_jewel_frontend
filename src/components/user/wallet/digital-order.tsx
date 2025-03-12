import { monthsData } from 'src/data/components/months'
import { digitalOrder } from 'src/types/components/user'

const DigitalOrder = ({ orderData }: { orderData: digitalOrder }) => {
  const orderTimeDetails = orderData?.createdAt ? new Date(orderData.createdAt) : null
  const orderPaymentStatusColor = (paymentStatus: string) => {
    if (paymentStatus === 'Success') return 'text-green-600'
    else if (paymentStatus === 'Failed') return 'text-red-600'
    return ''
  }
  return (
    <div className="justify-between gap-4 rounded-lg border border-red-400 lg:flex-row lg:gap-0">
      <div className="flex items-center justify-between rounded-lg bg-red-50 p-2 font-serif">
        <div className="flex items-center gap-2 text-sm">
          <div>
            <img className="max-h-4" src={orderData.material_type.digitalIcon.url} />
          </div>
          <div>
            <p className={``}>{orderData.transactionId}</p>
            <p>{`${orderTimeDetails?.getDate()} / ${
              orderTimeDetails ? monthsData[orderTimeDetails.getMonth()] : ''
            } / ${orderTimeDetails?.getFullYear()}`}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className={`text-sm ${orderData.transactionType === 'Debit' ? 'text-red-600' : 'text-green-600'}`}>
            {orderData.transactionType === 'Debit' ? '- ' : '+ '}
            {Number(orderData.grams.toFixed(2)).toLocaleString()} gms
          </p>
          {/* <p className={`${orderPaymentStatusColor(orderData.paymentStatus)} text-sm`}>{orderData.paymentStatus}</p> */}
          <p className={`${orderPaymentStatusColor(orderData.paymentStatus)} text-sm`}>
            {Number(orderData.orderPrice.toFixed(2)).toLocaleString()} /-
          </p>
        </div>
      </div>
    </div>
  )
}

export default DigitalOrder
