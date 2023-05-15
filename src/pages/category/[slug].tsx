import CategoryNav from "@/components/Hero/CategoryNav"
import Product from "@/components/Product"
import {
  request,
  createRequestString,
  flattenedCategory,
  flattenedProd,
} from "@/utils/helpers"
import type { Category, Product as ProductType } from "@/utils/types"

const CategoryPage = ({
  products,
  slug,
  navCategories,
}: {
  products: ProductType[]
  navCategories: Category[]
  slug: string
}) => {
  return (
    <div className="mb-16 pt-40 lg:pt-0 min-h-[820px]">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          <CategoryNav navCategories={navCategories} />
          <main>
            {/* title */}
            <div className="py-3 text-xl uppercase text-center lg:text-left">
              {slug} cameras
            </div>
            {/* product grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
              {products?.map((product: any) => {
                return <Product product={product} key={product.id} />
              })}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

export default CategoryPage

export async function getStaticPaths() {
  const { data } = await request.get("/categories")

  const paths = data.data.map((category: any) => ({
    params: {
      slug: category.attributes.title as string,
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const { data: prodData } = await request.get(
    createRequestString("/products", {
      populate: "*",
      filters: {
        categories: {
          title: params.slug,
        },
      },
    })
  )

  const { data: navData } = await request.get(
    createRequestString("/categories")
  )

  const products = prodData.data.map((i: any) => flattenedProd(i))
  const navCategories = navData.data.map((i: any) => flattenedCategory(i))

  return {
    props: {
      products,
      navCategories,
      slug: params.slug,
    },
  }
}
