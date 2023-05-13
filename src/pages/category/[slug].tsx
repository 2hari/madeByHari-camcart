import CategoryNav from "@/components/Hero/CategoryNav"
import Product from "@/components/Product"
import { request, createRequestString } from "@/utils/helpers"

const CategoryPage = ({ products, slug }: { products: any; slug: string }) => {
  return (
    <div className="mb-16 pt-40 lg:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          <CategoryNav />
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

// @ts-ignore
export async function getStaticProps({ params }) {
  const { data } = await request.get(
    createRequestString("/products", {
      populate: "*",
      filters: {
        categories: {
          title: params.slug,
        },
      },
    })
  )

  return {
    props: {
      products: data.data,
      slug: params.slug,
    },
  }
}
