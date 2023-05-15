import ProductSlider from "./ProductSlider"
import type { Product } from "@/utils/types"

const NewProducts = ({ newProducts }: { newProducts: Product[] }) => {
  return (
    <div className=" mb-16">
      <div className="container mx-auto">
        <h2 className="h2 mb-6 text-center xl:text-left">Related Products</h2>
        <ProductSlider data={newProducts} />
      </div>
    </div>
  )
}

export default NewProducts
