import React from "react"
import Link from "next/link"
import { FiX } from "react-icons/fi"

import useFetch from "@/utils/useFetch"

const CategoryNavMobile = ({
  setCatNavMobile,
}: {
  setCatNavMobile: (arg: boolean) => void
}) => {
  const { data, isLoading } = useFetch("/categories")
  if (isLoading) return <p>loading ....</p>
  return (
    <div className="w-full h-full bg-primary p-8">
      {/* close icon */}
      <div
        onClick={() => setCatNavMobile(false)}
        className="flex justify-end mb-8 cursor-pointer"
      >
        <FiX className="text-3xl" />
      </div>
      <div className="flex flex-col gap-y-8">
        {data &&
          (data as unknown as any[]).map((category: any) => {
            return (
              <Link
                href={`/category/${category.title}`}
                className="uppercase font-medium"
                key={category.id}
                onClick={() => setCatNavMobile(false)}
              >
                {category.attributes.title} Cameras
              </Link>
            )
          })}
      </div>
    </div>
  )
}

export default CategoryNavMobile
