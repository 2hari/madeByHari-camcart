import React from "react"

const ProductCardLoader = () => {
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

export default ProductCardLoader
