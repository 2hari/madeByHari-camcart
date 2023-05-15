import { useRouter } from "next/router"
import useFetch from "@/utils/useFetch"
import {
  request,
  createRequestString,
  flattenedCategory,
  flattenedProd,
} from "@/utils/helpers"
import type { Category } from "@/utils/types"
import CategoryNav from "@/components/Hero/CategoryNav"
import Product from "@/components/Product"
import ProductCardLoader from "@/components/Loaders/ProductCardLoader"

const Search = ({ navCategories }: { navCategories: Category[] }) => {
  const router = useRouter()
  const searchTerm = router.query.query
  const { data, isLoading } = useFetch(
    `/products?populate=*&filters[title][$contains]=${searchTerm}`
  )
  // console.log(data);
  return (
    <div className="mb-[30px] pt-40 lg:pt-4 xl:pt-0">
      <div className="container mx-auto">
        <div className="flex gap-x-[30px]">
          <CategoryNav navCategories={navCategories} />
          {isLoading ? (
            <div>
              <div className="py-3 text-xl uppercase text-center lg:text-left">
                Looking for results ...
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
                {[1, 2, 3, 4].map((n, i) => {
                  return <ProductCardLoader key={n} />
                })}
              </div>
            </div>
          ) : (
            data && (
              <div>
                <div className="py-3 text-xl uppercase text-center lg:text-left">
                  {(data as any[]).length > 0
                    ? `${(data as any[]).length} results for "${searchTerm}"`
                    : `no result found for "${searchTerm}"`}
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]">
                  {(data as any[])
                    ?.map((i) => flattenedProd(i))
                    .map((product) => {
                      return <Product product={product} key={product.id} />
                    })}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Search

export async function getStaticProps() {
  const { data: navData } = await request.get(
    createRequestString("/categories")
  )

  const navCategories = navData.data.map((i: any) => flattenedCategory(i))

  return {
    props: {
      // fix for serializing errors
      navCategories: JSON.parse(JSON.stringify(navCategories)),
    },
  }
}
