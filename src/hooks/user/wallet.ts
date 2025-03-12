import { digitalOrder } from 'src/types/components/user'
import { useGetMaterialPrice } from '../data/getMaterialPrice'

export const calculateUserWalletBalance = (digitalOrders: digitalOrder[] | undefined) => {
  const userCreditBalance: Record<string, number> = {}
  const userDebitBalance: Record<string, number> = {}
  const userInvestedAmount: Record<string, number> = {}
  const [materialPrice] = useGetMaterialPrice()
  const digitalMaterials = materialPrice.filter((data) => data.digitalOrder === true)

  digitalMaterials.forEach((data) => {
    userCreditBalance[data.material_type] = 0
    userDebitBalance[data.material_type] = 0
    userInvestedAmount[data.material_type] = 0
  })

  digitalOrders?.forEach((data) => {
    if (data.transactionType === 'Credit' && data.paymentStatus === 'Success') {
      userCreditBalance[data.material_type.material_type] += data.grams
      userInvestedAmount[data.material_type.material_type] += data.orderPrice ?? 0
    }
    if (data.transactionType === 'Debit' && data.paymentStatus === 'Success') {
      userDebitBalance[data.material_type.material_type] += data.grams
      userInvestedAmount[data.material_type.material_type] -= data.orderPrice ?? 0
    }
  })

  const calculateProfitLossPercentage = (investedAmount: number, currentMarketValue: number): number => {
    if (investedAmount <= 0) return 0 // Prevents incorrect percentage calculation
    return ((currentMarketValue - investedAmount) / investedAmount) * 100
  }

  return { userCreditBalance, userDebitBalance, userInvestedAmount, calculateProfitLossPercentage }
}
