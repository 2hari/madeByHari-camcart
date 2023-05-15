import Image from "next/image"
import Link from "next/link"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper"

const sliderData = [
  {
    img: "/assets/camera.png",
    pretitle: "Special Offer",
    titlePart1: "Save 20%",
    titlePart2: "On your",
    titlePart3: "first order",
    btnText: "Shop now",
  },
  {
    img: "/assets/camera.png",
    pretitle: "Dream Camera",
    titlePart1: "50% Off",
    titlePart2: "On Combo",
    titlePart3: "Order",
    btnText: "Shop now",
  },
  {
    img: "/assets/camera.png",
    pretitle: "Black Friday",
    titlePart1: "Flat 70%",
    titlePart2: "On all",
    titlePart3: "bulk order",
    btnText: "Shop now",
  },
]

const MainSlider = () => {
  return (
    <Swiper
      modules={[Pagination, Autoplay]}
      loop={true}
      navigation={false}
      pagination={{
        clickable: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      className="mainSlider h-full bg-primary xl:bg-mainSlider xl:bg-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl"
    >
      <>
        {sliderData.map((slide, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]">
                {/* text */}
                <div className="w-full lg:flex-1">
                  <div className="uppercase mb-1 text-center lg:text-left">
                    {slide.pretitle}
                  </div>
                  <div className="text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20">
                    {slide.titlePart1} <br />
                    {slide.titlePart2} <br />
                    {slide.titlePart3}
                  </div>
                  <Link href={"/category/dslr"}>
                    <button className="btn btn-accent mx-auto lg:mx-0">
                      Shop now
                    </button>
                  </Link>
                </div>
                {/* img */}
                <div className="flex-1">
                  <Image
                    className="xl:absolute xl:-right-16 xl:-bottom-12"
                    src={slide.img}
                    alt="Hero image"
                    width={608}
                    height={481}
                  />
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </>
    </Swiper>
  )
}

export default MainSlider
