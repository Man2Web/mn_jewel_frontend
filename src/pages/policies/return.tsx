import SectionSeperator from 'src/components/home/section-seperator'

const ReturnPolicy = () => {
  return (
    <div className="px-4 py-6">
      <SectionSeperator title="Return Policy" description="" />
      <p className="text-justify font-serif text-lg">
        We have a 14 day return/exchange policy, which means you have 14 days after receiving your item to request a
        return/exchange. Once the return/exchange is approved it will be delivered in 7-10 business days. To be eligible
        for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in
        its original packaging. You’ll also need the receipt or proof of purchase.
      </p>
    </div>
  )
}

export default ReturnPolicy
