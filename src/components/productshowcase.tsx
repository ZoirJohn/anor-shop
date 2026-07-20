import { Container, Grid } from '@mantine/core'
import ProductCard from './card'
import LinkCaption from './linkCaption'
import { useProductsAmount, useProductsDeletion } from '../hooks/useProducts'
import ProductCardSkeleton from './cardSkeleton'

export default function ProductShowcase() {
  const { data, error, isLoading, isError } = useProductsAmount(9)
  const { mutate } = useProductsDeletion()
  if (isError) {
    return <h1>{error.message}</h1>
  }

  return (
    <section>
      <Container size={1296} pt={40}>
        <LinkCaption caption="Choose the product" />
        <Grid>
          {isLoading
            ? new Array(9).fill(0).map((_, i) => (
                <Grid.Col span={4} key={i}>
                  <ProductCardSkeleton />
                </Grid.Col>
              ))
            : data?.map((product) => (
                <Grid.Col span={4} key={product.id}>
                  <ProductCard
                    product={product}
                    onDelete={() => mutate(product.id)}
                  />
                </Grid.Col>
              ))}
        </Grid>
      </Container>
    </section>
  )
}
