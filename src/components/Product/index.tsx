import Link from "next/link"
import Image from "next/image"
import type { Product } from "@/utils/types"
import ProductCardLoader from "@/components/Loaders/ProductCardLoader"

const Product = ({
  product,
  isLoading,
}: {
  product: Product
  isLoading?: boolean
}) => {
  if (isLoading || !product) {
    return <ProductCardLoader />
  }
  return (
    <Link href={`/product/${product.slug}`}>
      <div className="grad w-full h-[362px] rounded-[8px] overflow-hidden relative group">
        {/* badge */}
        {product.isNew ? (
          <div className="absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10">
            new
          </div>
        ) : (
          <></>
        )}
        {/* image */}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <Image
            className="group-hover:scale-90 transition-all"
            src={product.img}
            width={160}
            height={160}
            alt={product.title}
          />
        </div>
        {/* text */}
        <div className="px-6 pb-8 flex flex-col">
          {/* category title */}
          <div className="text-sm text-accent capitalize mb-2">
            {product.category}
          </div>
          {/* title */}
          <div className="text-[15px] mb-4 lg:mb-9">
            {product.title.substring(0, 35)}...
          </div>
          {/* price */}
          <div className="text-lg text-accent">${product.price}</div>
        </div>
      </div>
    </Link>
  )
}

export default Product
