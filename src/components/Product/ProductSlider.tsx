import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation } from "swiper"
import Product from "."

const ProductSlider = ({
  data,
  isLoading,
}: {
  data: any
  isLoading: boolean
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
          slidesPerView: 2,
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
      className="productSlider mx-auto max-w-[360px] md:max-w-lg xl:max-w-[1410px]"
    >
      <>
        {data &&
          data?.map((product: any) => {
            return (
              <SwiperSlide key={product.id}>
                <Product product={product} />
              </SwiperSlide>
            )
          })}
        {(isLoading || !data) &&
          [1, 2, 3, 4, 5].map((p: any, i) => (
            <SwiperSlide key={i}>
              <Product product={null} isLoading={isLoading} />
            </SwiperSlide>
          ))}
      </>
    </Swiper>
  )
}

export default ProductSlider
