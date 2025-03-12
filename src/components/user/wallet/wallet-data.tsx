import React from 'react'
import { useGetMaterialPrice } from 'src/hooks/data/getMaterialPrice'
import { IndianRupeeIcon } from 'lucide-react'

interface WalletDataProps {
  userCreditBalance: { [key: string]: number }
  userDebitBalance: { [key: string]: number }
  userInvestedAmount: { [key: string]: number }
  calculateProfitLossPercentage: (
    totalCreditGrams: number,
    totalInvestedAmount: number,
    totalDebitGrams: number,
    currentMarketPrice: number,
  ) => number
}

const WalletData: React.FC<WalletDataProps> = ({
  userCreditBalance,
  userDebitBalance,
  userInvestedAmount,
  calculateProfitLossPercentage,
}) => {
  const [materialPrice] = useGetMaterialPrice()
  const digitalMaterials = materialPrice.filter((data) => data.digitalOrder === true)

  return (
    <div className="flex w-full flex-col gap-2 font-serif lg:mx-auto lg:flex-row">
      {digitalMaterials.map((data, index) => {
        const totalCreditGrams = userCreditBalance[data.material_type] || 0
        const totalDebitGrams = userDebitBalance[data.material_type] || 0
        const totalInvestedAmount = userInvestedAmount[data.material_type] || 0
        const currentMarketPrice = data.price

        const profitOrLoss = calculateProfitLossPercentage(
          totalCreditGrams,
          totalInvestedAmount,
          totalDebitGrams,
          currentMarketPrice,
        )

        return (
          <div
            key={index}
            className="relative flex w-full flex-col gap-2 rounded-lg border border-red-400 bg-red-50 p-2"
          >
            <div>
              <img className="h-8 w-auto" src={data?.digitalIcon?.url} />
            </div>
            <div>
              <p className="text-sm opacity-60">Weight:</p>
              <p className="text-xl">
                {Number(totalCreditGrams - totalDebitGrams).toLocaleString()}
                <span className="text-sm opacity-60"> gms</span>
              </p>
            </div>
            <div>
              <p className="text-sm opacity-60">Equivilant:</p>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <IndianRupeeIcon size={16} />
                  <p className="text-xl">
                    {Number(((totalCreditGrams - totalDebitGrams) * currentMarketPrice).toFixed(2)).toLocaleString()}{' '}
                  </p>
                </div>
                <div>
                  <p className={`text-sm ${Number(profitOrLoss) >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {Number(
                      ((totalCreditGrams - totalDebitGrams) * currentMarketPrice - totalInvestedAmount).toFixed(2),
                    ).toLocaleString()}{' '}
                    ({Number(profitOrLoss).toFixed(2)}%)
                  </p>
                </div>
              </div>
            </div>
            <h1 className="absolute right-0 top-0 mr-2 mt-2 font-serif text-xl text-red-400">{data.name}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default WalletData
