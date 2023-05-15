import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"
import Product from "."
import ProductCardLoader from "@/components/Loaders/ProductCardLoader"
import type { Product as ProductType } from "@/utils/types"

const ProductSlider = ({
  data,
  isLoading,
}: {
  data?: ProductType[]
  isLoading?: boolean
}) => {
  return (
    <Swiper
      modules={[Pagination, Navigation]}
      loop={false}
      navigation={true}
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
        1440: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      }}
      pagination={{
        clickable: true,
      }}
      className="productSlider mx-auto max-w-[360px] md:max-w-4xl xl:max-w-[1410px]"
    >
      <>
        {data &&
          data?.map((product) => {
            return (
              <SwiperSlide key={product.id}>
                <Product product={product} />
              </SwiperSlide>
            )
          })}
        {(isLoading || !data) &&
          [1, 2, 3, 4, 5].map((p, i) => (
            <SwiperSlide key={i}>
              <ProductCardLoader />
            </SwiperSlide>
          ))}
      </>
    </Swiper>
  )
}

export default ProductSlider
