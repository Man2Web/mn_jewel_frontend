import { monthsData } from 'src/data/components/months'
import { SchemeTransaction } from 'src/types/components/schemes'

const DigitalSchemeTransaction = ({ orderData }: { orderData: SchemeTransaction | undefined }) => {
  const orderTimeDetails = orderData?.createdAt ? new Date(orderData.createdAt) : null
  const orderPaymentStatusColor = (paymentStatus: string) => {
    if (paymentStatus === 'Success') return 'text-green-600'
    else if (paymentStatus === 'Failed') return 'text-red-600'
    return 'text-brandAccent-darker'
  }
  return (
    <div className="justify-between gap-4 rounded-lg border border-brandColor lg:flex-row lg:gap-0">
      <div className="flex items-center justify-between rounded-lg bg-brandSecondary p-2 font-serif">
        <div className="flex items-center gap-2 text-sm">
          <div>
            <img className="max-h-4" src={orderData?.scheme?.logo.url} />
          </div>
          <div>
            <p>{orderData?.transactionId}</p>
            <p>{`${orderTimeDetails?.getDate()} / ${
              orderTimeDetails ? monthsData[orderTimeDetails.getMonth()] : ''
            } / ${orderTimeDetails?.getFullYear()}`}</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className={`text-sm`}>{orderData?.scheme.name}</p>
          {/* <p className={`${orderPaymentStatusColor(orderData?.paymentStatus)} text-sm`}>{orderData?.paymentStatus}</p> */}
          <p className={`${orderPaymentStatusColor(orderData?.paymentStatus ?? '')} text-sm`}>
            {Number(orderData?.amountPaid).toLocaleString()} /-
          </p>
        </div>
      </div>
    </div>
  )
}

export default DigitalSchemeTransaction
