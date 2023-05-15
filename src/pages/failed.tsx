import React from "react"
import Link from "next/link"

const Failed = () => {
  return (
    <div className="min-h-[650px] flex items-center">
      <div className="max-w-[600px] rounded-lg p-5 border border-gray-600 mx-auto flex flex-col">
        <div className="text-4xl font-bold text-red-400">Payment failed!</div>
        <div className="text-base mt-5">
          For any product related query, drop an email to
        </div>
        <div className="underline">shoeshopcontact@shop.com</div>

        <Link href="/" className="font-bold mt-5 text-accent">
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}

export default Failed
