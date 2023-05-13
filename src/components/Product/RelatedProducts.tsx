import ProductSlider from "./ProductSlider"
import useFetch from "@/utils/useFetch"

const RelatedProducts = ({ categoryTitle }: { categoryTitle: string }) => {
  const { data } = useFetch(
    `/products?populate=*&filters[categories][title]=${categoryTitle}`
  )

  return (
    <div className=" mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Related Products</h2>
        <ProductSlider data={data} />
      </div>
    </div>
  )
}

export default RelatedProducts
