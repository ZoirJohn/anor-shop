import { useQuery } from '@tanstack/react-query'
import { $api } from '../api/api'

export function useCategories() {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () =>
      $api.get<ICategory[]>('/categories').then((data) => data.data),
  })
}

export function useCategoriesAmount(limit: number, offset = 0) {
  return useQuery({
    queryKey: ['categories'],
    queryFn: () =>
      $api
        .get<ICategory[]>('/categories', {
          params: {
            limit,
            offset,
          },
        })
        .then((data) => data.data),
  })
}
