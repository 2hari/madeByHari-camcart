import Image from "next/image"

import RelatedProducts from "@/components/Product/RelatedProducts"
import { request, createRequestString } from "@/utils/helpers"

const ProductPage = ({ product }: { product: any }) => {
  // fetch product data base on the id
  //  const { data } = useFetch(`/products?populate=*&filters[id][$eq]=${id}`)

  // get the category title of the current product
  const categoryTitle = product.attributes.categories.data[0].attributes.title

  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        {/* product details */}
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.attributes.image.data.attributes.url}
              alt=""
              className="relative w-full max-w-[65%]"
            />
          </div>
          <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            {/* product category */}
            <div className="uppercase text-acecnt text-lg font-medium mb-2">
              {categoryTitle} cameras
            </div>
            {/* product title */}
            <h2 className="h2 mb-4">{product.attributes.title}</h2>
            {/* product description */}
            <p className="mb-12">{product.attributes.description}</p>
            {/* product price & add to cart button */}
            <div className="flex items-center gap-x-8 ">
              {/* product price */}
              <div className="text-3xl text-accent font-semibold">
                ${product.attributes.price}
              </div>
              {/* add to cart button */}
              <button onClick={() => {}} className="btn btn-accent">
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* related products */}
        <RelatedProducts categoryTitle={categoryTitle} />
      </div>
    </div>
  )
}

export default ProductPage

export async function getStaticPaths() {
  const { data } = await request.get("/products")

  const paths = data.data.map((product: any) => ({
    params: {
      slug: product.attributes.slug as string,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

// @ts-ignore
export async function getStaticProps({ params }) {
  const { data } = await request.get(
    createRequestString("/products", {
      populate: "*",
      filters: {
        slug: params.slug,
      },
    })
  )

  return {
    props: {
      product: data.data[0],
    },
  }
}
