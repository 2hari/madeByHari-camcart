import Hero from "@/components/Hero"
import NewProducts from "@/components/Product/NewProducts"
import {
  request,
  createRequestString,
  flattenedCategory,
  flattenedProd,
} from "@/utils/helpers"
import type { Category, Product } from "@/utils/types"

export default function Home({
  newProducts,
  navCategories,
}: {
  newProducts: Product[]
  navCategories: Category[]
}) {
  return (
    <main className="">
      <Hero navCategories={navCategories} />
      <NewProducts newProducts={newProducts} />
    </main>
  )
}

export async function getStaticProps() {
  const { data: newProdData } = await request.get(
    createRequestString("/products", {
      populate: "*",
      filters: { isNew: true },
    })
  )
  const { data: navData } = await request.get(
    createRequestString("/categories")
  )

  const newProducts = newProdData.data.map((i: any) => flattenedProd(i))
  const navCategories = navData.data.map((i: any) => flattenedCategory(i))

  return {
    props: {
      // fix for serializing errors
      newProducts: JSON.parse(JSON.stringify(newProducts)),
      navCategories: JSON.parse(JSON.stringify(navCategories)),
    },
  }
}
