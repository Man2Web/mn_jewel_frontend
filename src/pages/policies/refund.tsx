import SectionSeperator from 'src/components/home/section-seperator'

const RefundPolicy = () => {
  return (
    <div className="px-4 py-6">
      <SectionSeperator title="Refund Policy" description="" />
      <p className="text-justify font-serif text-lg">
        We will notify you once we’ve received and inspected your return, and let you know if the refund was approved or
        not. If approved, the refund will be credited to original payment method within 7-10 business days. Please
        remember it can take some time for your bank or credit card company to process and post the refund too.
      </p>
    </div>
  )
}

export default RefundPolicy
