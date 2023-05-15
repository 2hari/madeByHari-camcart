import React from "react"
import Link from "next/link"
import type { Category } from "@/utils/types"

const CategoryNav = ({
  navCategories,
  isLoading,
}: {
  navCategories: Category[]
  isLoading?: boolean
}) => {
  return (
    <aside className="hidden xl:flex">
      <div className="bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden">
        <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center">
          Browse Categories
        </div>
        <div className="flex flex-col gap-y-6 p-6">
          {!navCategories || isLoading ? (
            <div className="animate-pulse space-y-6">
              {[...Array(5).keys()].map((i) => (
                <div key={i} className="w-48 bg-gray-600 h-6 rounded-md "></div>
              ))}
            </div>
          ) : (
            navCategories.map((category) => {
              return (
                <Link
                  href={`/category/${category.title}`}
                  className="cursor-pointer uppercase"
                  key={category.id}
                >
                  {category.title} Cameras
                </Link>
              )
            })
          )}
        </div>
      </div>
    </aside>
  )
}

export default CategoryNav
