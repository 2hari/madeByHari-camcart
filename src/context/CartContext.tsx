import {
  useMemo,
  useReducer,
  createContext,
  ReactElement,
  useEffect,
} from "react"
import { CartItem } from "@/utils/types"

type CartStateType = {
  cart: CartItem[]
  isOpen: boolean
  totalPrice: string
  totalItems: string
}

const initCartState: CartStateType = {
  cart: [],
  isOpen: false,
  totalItems: "0",
  totalPrice: "0",
}

const REDUCER_ACTION_TYPE = {
  ADD: "ADD",
  REMOVE: "REMOVE",
  QUANTITY: "QUANTITY",
  SUBMIT: "SUBMIT",
  OPEN: "OPEN",
  CLOSE: "CLOSE",
  UPDATECARTQTY: "UPDATECARTQTY",
  UPDATECARTTOTAL: "UPDATECARTTOTAL",
}

export type ReducerActionType = typeof REDUCER_ACTION_TYPE

export type ReducerAction = {
  type: string
  payload?: CartItem | string
}

const reducer = (
  state: CartStateType,
  action: ReducerAction
): CartStateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.ADD: {
      if (!action.payload) {
        throw new Error("action.payload missing in ADD action")
      }

      const { id } = action.payload as CartItem

      const filteredCart: CartItem[] = state.cart.filter(
        (item) => item.id !== id
      )

      const itemExists: CartItem | undefined = state.cart.find(
        (item) => item.id === id
      )

      const qty: number = itemExists ? itemExists.qty + 1 : 1

      return {
        ...state,
        cart: [...filteredCart, { ...(action.payload as CartItem), qty }],
      }
    }
    case REDUCER_ACTION_TYPE.REMOVE: {
      if (!action.payload) {
        throw new Error("action.payload missing in REMOVE action")
      }

      const { id } = action.payload as CartItem

      const filteredCart: CartItem[] = state.cart.filter(
        (item) => item.id !== id
      )

      return { ...state, cart: [...filteredCart] }
    }
    case REDUCER_ACTION_TYPE.QUANTITY: {
      if (!action.payload) {
        throw new Error("action.payload missing in QUANTITY action")
      }

      const { id, qty } = action.payload as CartItem

      const itemExists: CartItem | undefined = state.cart.find(
        (item) => item.id === id
      )

      if (!itemExists) {
        throw new Error("Item must exist in order to update quantity")
      }

      const updatedItem: CartItem = { ...itemExists, qty }

      const filteredCart: CartItem[] = state.cart.filter(
        (item) => item.id !== id
      )

      return { ...state, cart: [...filteredCart, updatedItem] }
    }
    case REDUCER_ACTION_TYPE.SUBMIT: {
      return { ...state, cart: [] }
    }
    case REDUCER_ACTION_TYPE.UPDATECARTQTY: {
      if (!action.payload) {
        throw new Error("action.payload missing in CART QUANTITY action")
      }
      return { ...state, totalItems: action.payload as string }
    }
    case REDUCER_ACTION_TYPE.UPDATECARTTOTAL: {
      if (!action.payload) {
        throw new Error("action.payload missing in CART TOTAL action")
      }
      return { ...state, totalPrice: action.payload as string }
    }
    case REDUCER_ACTION_TYPE.OPEN: {
      return { ...state, isOpen: true }
    }
    case REDUCER_ACTION_TYPE.CLOSE: {
      return { ...state, isOpen: false }
    }
    default:
      throw new Error("Unidentified reducer action type")
  }
}

const useCartContext = (initCartState: CartStateType) => {
  const [state, dispatch] = useReducer(reducer, initCartState)

  const REDUCER_ACTIONS = useMemo(() => {
    return REDUCER_ACTION_TYPE
  }, [])

  const cart = useMemo(() => state.cart, [state.cart])

  useEffect(() => {
    const totalItems = cart.reduce((previousValue, cartItem) => {
      return previousValue + cartItem.qty
    }, 0)

    const totalPrice = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(
      cart.reduce((previousValue, cartItem) => {
        return previousValue + cartItem.qty * cartItem.price
      }, 0)
    )

    dispatch({
      type: REDUCER_ACTIONS.UPDATECARTQTY,
      payload: totalItems.toString(),
    })
    dispatch({
      type: REDUCER_ACTIONS.UPDATECARTTOTAL,
      payload: totalPrice,
    })
  }, [cart, REDUCER_ACTIONS])

  return { dispatch, REDUCER_ACTIONS, cart, state }
}

export type UseCartContextType = ReturnType<typeof useCartContext>

const initCartContextState: UseCartContextType = {
  dispatch: () => {},
  REDUCER_ACTIONS: REDUCER_ACTION_TYPE,
  cart: [],
  state: initCartState,
}

const CartContext = createContext<UseCartContextType>(initCartContextState)

type ChildrenType = { children?: ReactElement | ReactElement[] }

export const CartProvider = ({ children }: ChildrenType): ReactElement => {
  return (
    <CartContext.Provider value={useCartContext(initCartState)}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContext
