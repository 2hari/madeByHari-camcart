import React from "react"
import Link from "next/link"

import useFetch from "@/utils/useFetch"

const CategoryNav = () => {
  const { data, isLoading } = useFetch("/categories")
  if (isLoading) return <p>loading ....</p>
  // console.log(data)
  return (
    <aside className="hidden xl:flex">
      <div className="bg-primary flex flex-col w-[286px] h-[500px] rounded-[8px] overflow-hidden">
        <div className="bg-accent py-4 text-primary uppercase font-semibold flex items-center justify-center">
          Browse Categories
        </div>
        <div className="flex flex-col gap-y-6 p-6">
          {data &&
            (data as unknown as any[]).map((category) => {
              return (
                <Link
                  href={`/category/${category.attributes.title}`}
                  className="cursor-pointer uppercase"
                  key={category.id}
                >
                  {category.attributes.title} Cameras
                </Link>
              )
            })}
        </div>
      </div>
    </aside>
  )
}

export default CategoryNav
