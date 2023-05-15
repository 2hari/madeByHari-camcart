import Link from "next/link"
import Image from "next/image"

const Product = ({
  product,
  isLoading,
}: {
  product: any
  isLoading?: boolean
}) => {
  console.log(product)
  if (isLoading || !product) {
    return (
      <div className="animate-pulse grad w-full h-[362px] max-w-[360px] rounded-[8px] overflow-hidden relative group px-6">
        {/* image */}
        <div className="w-full h-[200px] flex items-center justify-center relative">
          <div className="h-40 w-full bg-gray-600 rounded-md"></div>
        </div>
        {/* text */}
        <div className="pb-8 flex flex-col">
          {/* category title */}
          <div className="w-48 bg-gray-600 h-4 mb-3 rounded-md"></div>
          {/* title */}
          <div className="w-48 bg-gray-600 h-4 mb-4 lg:mb-9 rounded-md"></div>
          {/* price */}
          <div className="w-20 bg-gray-600 h-5 rounded-md"></div>
        </div>
      </div>
    )
  }
  return (
    <Link href={`/product/${product.attributes.slug}`}>
      <div className="grad w-full h-[362px] rounded-[8px] overflow-hidden relative group">
        {/* badge */}
        {product.attributes.isNew ? (
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
            src={product.attributes.image.data?.attributes.url}
            width={160}
            height={160}
            alt={product.attributes.categories.data[0].attributes.title}
          />
        </div>
        {/* text */}
        <div className="px-6 pb-8 flex flex-col">
          {/* category title */}
          <div className="text-sm text-accent capitalize mb-2">
            {product.attributes.categories.data[0].attributes.title}
          </div>
          {/* title */}
          <div className="text-[15px] mb-4 lg:mb-9">
            {product.attributes.title.substring(0, 35)}...
          </div>
          {/* price */}
          <div className="text-lg text-accent">${product.attributes.price}</div>
        </div>
      </div>
    </Link>
  )
}

export default Product
