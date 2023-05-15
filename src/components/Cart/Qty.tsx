import { CartItem } from "@/utils/types"
import useCart from "@/utils/useCart"

const Qty = ({ item }: { item: CartItem }) => {
  const { dispatch, REDUCER_ACTIONS } = useCart()
  const updateQuantity = (product: CartItem, qty: number) =>
    dispatch({
      type: REDUCER_ACTIONS.QUANTITY,
      payload: { ...product, qty },
    })
  return (
    <div className="flex gap-x-6 items-center text-primary">
      {item.qty < 10 ? (
        <select
          onChange={(e) => updateQuantity(item, parseInt(e.target.value))}
          value={item.qty}
          className="p-2 rounded-lg w-[100px] h-12 outline-none text-primary"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10+</option>
        </select>
      ) : (
        <input
          onBlur={(e) => updateQuantity(item, parseInt(e.target.value))}
          className="text-primary placeholder:text-primary h-12 rounded-md p-4 w-[120px] outline-accent"
          type="text"
          placeholder={`${item.qty}`}
        />
      )}
    </div>
  )
}

export default Qty
