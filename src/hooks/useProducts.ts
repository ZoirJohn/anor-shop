import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
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

export function useProductsMutation() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (product: {
      title: string
      price: number
      description: string
      categoryId: number
      images: string[]
    }) => $api.post('/products', product),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
  })
}

export function useProductsDeletion() {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (id: number) => $api.delete('/products/' + id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
    },
  })
}
