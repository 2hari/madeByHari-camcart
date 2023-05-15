import Image from "next/image"
import MainSlider from "./MainSlider"
import CategoryNav from "./CategoryNav"

const Hero = ({ navCategories }: { navCategories: any }) => {
  return (
    <section className="mb-[30px] pt-36 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-[30px] xl:flex-row xl:gap-x-[30px]">
          {/* sidebar */}
          <div>
            <CategoryNav navCategories={navCategories} />
          </div>
          {/* main slider */}
          <div className="w-full max-w-lg lg:max-w-[734px] mx-auto">
            <MainSlider />
          </div>
          {/* promos */}
          <div className="flex flex-col gap-y-[30px] w-full max-w-lg mx-auto h-[500px]">
            {/* promo img 1 */}
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              {/* text */}
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save 35% all dslr cameras
                </div>
                <a href="#" className="uppercase text-accent">
                  Shop now
                </a>
              </div>
              {/* img */}
              <Image
                className="absolute z-20 -top-2 -right-4"
                src="/assets/promo_img1.png"
                alt="Promo Image"
                height={213}
                width={238}
              />
            </div>
            {/* promo img 2 */}
            <div className="grad flex-1 h-[250px] rounded-[8px] overflow-hidden relative p-6">
              {/* text */}
              <div className="flex flex-col max-w-[144px] h-full justify-center">
                <div className="text-[20px] uppercase font-medium leading-tight mb-4">
                  Save 25% mirrorless cameras
                </div>
                <a href="#" className="uppercase text-accent">
                  Shop now
                </a>
              </div>
              {/* img */}
              <Image
                className="absolute top-0 -right-6"
                src="/assets/promo_img2.png"
                alt="Promo Image"
                height={217}
                width={182}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
