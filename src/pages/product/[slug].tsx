import RelatedProducts from "@/components/Product/RelatedProducts"
import { request, createRequestString, flattenedProd } from "@/utils/helpers"
import type { Product } from "@/utils/types"
import useCart from "@/utils/useCart"
import { useState } from "react"

const ProductPage = ({ product }: { product: Product }) => {
  const {
    dispatch,
    REDUCER_ACTIONS,
    cart,
    state: { isOpen },
  } = useCart()

  const onAddToCart = (product: Product) => {
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } })
    dispatch({ type: REDUCER_ACTIONS.OPEN })
  }

  return (
    <div className="mb-16 pt-44 lg:pt-[30px] xl:pt-0">
      <div className="container mx-auto">
        {/* product details */}
        <div className="flex flex-col lg:flex-row gap-[30px] mb-[30px]">
          <div className="flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={product.img}
              alt=""
              className="relative w-full max-w-[65%]"
            />
          </div>
          <div className="flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center">
            {/* product category */}
            <div className="uppercase text-acecnt text-lg font-medium mb-2">
              {product.category} cameras
            </div>
            {/* product title */}
            <h2 className="h2 mb-4">{product.title}</h2>
            {/* product description */}
            <p className="mb-12">{product.description}</p>
            {/* product price & add to cart button */}
            <div className="flex items-center gap-x-8 ">
              {/* product price */}
              <div className="text-3xl text-accent font-semibold">
                ${product.price}
              </div>
              {/* add to cart button */}
              <button
                onClick={() => onAddToCart(product)}
                className="btn btn-accent"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
        {/* related products */}
        <RelatedProducts categoryTitle={product.category} />
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

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { data } = await request.get(
    createRequestString("/products", {
      populate: "*",
      filters: {
        slug: params.slug,
      },
    })
  )

  const product = data.data.map((i: any) => flattenedProd(i))[0]

  return {
    props: {
      product,
    },
    revalidate: 200,
  }
}
