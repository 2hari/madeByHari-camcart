import Link from "next/link"
import { IoClose } from "react-icons/io5"

import Qty from "./Qty"
import { CartItem, Product } from "@/utils/types"
import useCart from "@/utils/useCart"

const CartItem = ({ item }: { item: CartItem }) => {
  const { dispatch, REDUCER_ACTIONS } = useCart()
  const removeFromCart = (product: CartItem) =>
    dispatch({ type: REDUCER_ACTIONS.REMOVE, payload: product })
  return (
    <div className="flex gap-x-8">
      <Link href={`product/${item.id}`} className="w-[70px] h-[70px]">
        <img src={item.img} alt="" />
      </Link>
      <div className="flex-1">
        {/* title & remove icon */}
        <div className="flex gap-x-4 mb-3 ">
          <Link href={`product/${item.id}`}>{item.title}</Link>
          <div
            onClick={() => removeFromCart(item)}
            className="cursor-pointer text-[24px] hover:text-accent transition-all"
          >
            <IoClose />
          </div>
        </div>
        <div className="flex items-center gap-x-12">
          {/* quantity */}
          <div className="flex gap-x-4 mb-2">
            <Qty item={item} />
          </div>
          <div className="text-accent text-xl">$ {item.price * item.qty}</div>
        </div>
        {/*  price */}
        <div>
          <span className="text-accent">$ {item.price} per piece</span>
        </div>
      </div>
    </div>
  )
}

export default CartItem
