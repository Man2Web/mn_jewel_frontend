import axios from 'axios'
import { useEffect, useState } from 'react'

function useBannerHook() {
  const [bannerImages, setBannerImages] = useState<string[]>([])

  useEffect(() => {
    getBannerImages()
  }, [])

  const getBannerImages = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_STRAPI_API}/home-banners?populate=*`)
      const images = response.data.data.map((data: { cover_img: { url: string } }) => {
        return `${import.meta.env.VITE_STRAPI}${data.cover_img.url}`
      })
      setBannerImages(images)
    } catch (error) {
      console.error(error)
    }
  }

  return [bannerImages]
}

export default useBannerHook
