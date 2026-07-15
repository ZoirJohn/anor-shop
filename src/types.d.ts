interface ICategory {
  id: number
  name: string
  image: string
  slug: string
}

interface IProduct {
  id: number
  title: string
  slug: string
  price: number
  description: string
  category: ICategory
  images: string[]
}
