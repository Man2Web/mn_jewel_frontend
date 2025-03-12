import axios from 'axios'
import { useEffect, useState } from 'react'
import { Coupon } from 'src/types/components/coupon'
import { UserCartData } from 'src/types/components/user'

function getAllCoupons(userCartData: UserCartData[]) {
  const [couponsData, setCouponsData] = useState<Coupon[]>([])
  useEffect(() => {
    getCouponsData()
    if (userCartData.length > 0) {
      userCartData.forEach(async (data) => {
        getCouponByProduct(data.product.id)
        getCouponByCategory(data.product.category.id)
      })
    }
  }, [userCartData])

  const getCouponsData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_STRAPI_API}/coupons`, {
        params: {
          populate: '*',
          'filters[isActive][$eq]': true,
          'filters[startDate][$lte]': new Date(),
          'filters[endDate][$gte]': new Date(),
          'filters[products][$null]': true,
          'filters[category][$null]': true,
        },
      })
      setCouponsData(response.data.data)
    } catch (error) {
      console.error(error)
    }
  }

  const getCouponByProduct = async (productId: number) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_STRAPI_API}/coupons`, {
        params: {
          populate: '*',
          'filters[products][id][$eq]': productId,
          'filters[isActive][$eq]': true,
          'filters[startDate][$lte]': new Date(),
          'filters[endDate][$gte]': new Date(),
        },
      })
      if (response.data.data.length > 0) setCouponsData((prevData) => [...prevData, response.data.data[0]])
    } catch (error) {
      console.error(error)
    }
  }

  const getCouponByCategory = async (categoryId: number) => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_STRAPI_API}/coupons`, {
        params: {
          populate: '*',
          'filters[category][id][$eq]': categoryId,
          'filters[isActive][$eq]': true,
          'filters[startDate][$lte]': new Date(),
          'filters[endDate][$gte]': new Date(),
        },
      })
      if (response.data.data.length > 0) setCouponsData((prevData) => [...prevData, response.data.data[0]])
    } catch (error) {
      console.error(error)
    }
  }

  return [couponsData]
}

function calculateDiscountedPrice(totalPrice: number, userSelectedCoupon: Coupon | undefined) {
  if (!userSelectedCoupon) return totalPrice // No coupon applied

  const { couponType, couponRate, couponLimit } = userSelectedCoupon

  let discountAmount = 0

  if (couponType === 'Percentage Discount') {
    discountAmount = Math.min((totalPrice * Number(couponRate)) / 100, Number(couponLimit))
  } else if (couponType === 'Flat Discount') {
    discountAmount = Math.min(Number(couponRate), totalPrice)
  }

  const discountedPrice = totalPrice - discountAmount

  return { discountAmount, discountedPrice }
}

export { getAllCoupons, calculateDiscountedPrice }
