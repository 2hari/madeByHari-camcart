import { IoArrowForward, IoCartOutline, IoClose } from "react-icons/io5"
import CartItem from "./CartItem"
import { CartItem as CartItemType } from "@/utils/types"
import useCart from "@/utils/useCart"

const Cart = () => {
  const {
    cart,
    state: { totalItems, totalPrice, isOpen },
    dispatch,
    REDUCER_ACTIONS,
  } = useCart()

  const handlePayment = async () => {
    return "hello"
  }

  const closeCart = () => {
    dispatch({ type: REDUCER_ACTIONS.CLOSE })
  }

  const emptyCart = () => dispatch({ type: REDUCER_ACTIONS.SUBMIT })

  return (
    <div className="w-full h-full p-8 px-4 text-white">
      <div className="overflow-y-auto overflow-x-hidden h-[75vh]">
        {/* close icon */}
        <div
          onClick={closeCart}
          className="text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer"
        >
          <IoClose />
        </div>
        <div className="flex flex-col gap-y-10 px-2">
          {cart.map((item: CartItemType) => {
            return <CartItem item={item} key={item.id} />
          })}
        </div>
      </div>
      {/* subtotal & total */}
      {cart.length >= 1 && (
        <div className="px-6 py-10 flex flex-col">
          {/* subtotal */}
          <div className="flex justify-between text-lg">
            <div>Subtotal</div>
            <div>$ {totalItems}</div>
          </div>
          {/* total */}
          <div className="flex justify-between text-2xl">
            <div>Total</div>
            <div>$ {totalPrice}</div>
          </div>
        </div>
      )}

      {/* buttons */}
      <div className="px-6">
        {cart.length >= 1 ? (
          <div className="flex justify-between gap-x-4">
            <button
              onClick={emptyCart}
              className="btn btn-accent hover:bg-accent-hover text-primary"
            >
              clear cart
            </button>
            <button
              onClick={handlePayment}
              className="btn btn-accent hover:bg-accent-hover text-primary flex-1 px-2 gap-x-2"
            >
              Checkout
              <IoArrowForward className="text-lg" />
            </button>
          </div>
        ) : (
          <div className="h-full absolute top-0 right-0 left-0 flex justify-center items-center -z-10 flex-col text-white/30">
            <div className="text-2xl">Your cart is empty</div>
            <div className="text-6xl">
              <IoCartOutline />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart
