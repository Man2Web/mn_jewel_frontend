import DigitalOrder from 'src/components/user/wallet/digital-order'
// import PlaceOrderModal from 'src/components/user/wallet/place-order'
import WalletData from 'src/components/user/wallet/wallet-data'
import { useGetUserWallet } from 'src/hooks/user/user'
import { calculateUserWalletBalance } from 'src/hooks/user/wallet'
import DigitalBuy from '../booking/digital-buy'

const Wallet = () => {
  const { walletData } = useGetUserWallet()
  const { userCreditBalance, userDebitBalance, userInvestedAmount, calculateProfitLossPercentage } =
    calculateUserWalletBalance(walletData)
  return (
    <section className="flex w-full flex-col gap-4 p-4 lg:flex-row lg:justify-between lg:px-6 lg:py-8">
      {/* <PlaceOrderModal /> */}
      <div className="w-full lg:w-1/2">
        <div className="my-2">
          <h1 className="font-serif text-2xl ">Wallet</h1>
          <span className="block h-0.5 w-1/5 bg-red-400 md:w-[100px]" />
        </div>
        <WalletData
          userCreditBalance={userCreditBalance}
          userDebitBalance={userDebitBalance}
          userInvestedAmount={userInvestedAmount}
          calculateProfitLossPercentage={calculateProfitLossPercentage}
        />
        <div className="my-2">
          <DigitalBuy />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex max-h-[80vh] w-full flex-col lg:max-h-[70vh]">
          <div className="my-2">
            <h1 className="font-serif text-2xl ">Transactions</h1>
            <span className="block h-0.5 w-1/5 bg-red-400 md:w-[100px]" />
          </div>
          <div className="scrollbar-hide no-scrollbar flex h-full w-full flex-col gap-2 overflow-y-scroll">
            {Number(walletData.length) > 0 &&
              walletData.map((data, index) => {
                return (
                  <div key={index}>
                    <DigitalOrder orderData={data} />
                  </div>
                )
              })}
            {Number(walletData.length) === 0 && <h1 className="font-serif text-xl">No Transactions Available</h1>}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Wallet
