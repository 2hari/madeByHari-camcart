import ProductSlider from "./ProductSlider"
import useFetch from "@/utils/useFetch"
import { flattenedProd } from "@/utils/helpers"

const RelatedProducts = ({ categoryTitle }: { categoryTitle: string }) => {
  const { data, isLoading } = useFetch(
    `/products?populate=*&filters[categories][title]=${categoryTitle}`
  )

  return (
    <div className=" mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Related Products</h2>
        {data ? (
          <ProductSlider
            data={(data as any[]).map((i: any) => flattenedProd(i))}
            isLoading={isLoading}
          />
        ) : (
          <ProductSlider isLoading={isLoading} />
        )}
      </div>
    </div>
  )
}

export default RelatedProducts
