export type Category = {
  id: number
  title: string
  slug: string
}

export type Product = {
  id: number
  title: string
  slug: string
  description: string
  img: string
  isNew: boolean
  category: string
  price: number
}

export type CartItem = {
  qty: number
} & Product