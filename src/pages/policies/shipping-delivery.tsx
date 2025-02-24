import SectionSeperator from 'src/components/home/section-seperator'

const ShippingAndDelivery = () => {
  return (
    <div className="px-4 py-6">
      <SectionSeperator title="Shipping and Delivery" description="" />
      <p className="text-justify font-serif text-lg">
        We use reliable third-party courier services to deliver our products. While we strive to ensure timely delivery,
        we do not guarantee delivery times and are not responsible for delays caused by the shipping provider or
        unforeseen circumstances. You will be notified of the estimated delivery timeline at the time of purchase. All
        the orders will be dispatched in 3-4 business days and will be delivered in 7-10 business days.
      </p>
    </div>
  )
}

export default ShippingAndDelivery
