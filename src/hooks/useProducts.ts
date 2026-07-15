import { useQuery } from '@tanstack/react-query'
import { $api } from '../api/api'

export function useProducts() {
  return useQuery({
    queryKey: ['products', 'all'],
    queryFn: () => $api.get<IProduct[]>('/products').then((data) => data.data),
  })
}

export function useProductsAmount(limit: number, offset = 0) {
  return useQuery({
    queryKey: ['products', limit, offset],
    queryFn: () =>
      $api
        .get<IProduct[]>('/products', {
          params: {
            limit,
            offset,
          },
        })
        .then((data) => data.data),
  })
}

export function useProductsByCategorySlug(categorySlug: string) {
  return useQuery({
    queryKey: ['products', categorySlug],
    queryFn: () =>
      $api
        .get<IProduct[]>('/products', {
          params: {
            categorySlug,
          },
        })
        .then((data) => data.data),
  })
}
