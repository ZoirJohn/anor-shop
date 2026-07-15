import { Container, Grid } from '@mantine/core'
import ProductCard from './card'
import LinkCaption from './linkCaption'
import { useProductsAmount } from '../hooks/useProducts'

export default function ProductShowcase() {
  const { data, isLoading, error, isError } = useProductsAmount(9)

  if (isLoading) {
    return <h1>Loading...</h1>
  }
  if (isError) {
    return <h1>{error.message}</h1>
  }

  return (
    <section>
      <Container size={1296} pt={40}>
        <LinkCaption caption="Choose the product" />
        <Grid>
          {data?.map((product) => (
            <Grid.Col span={4} key={product.id}>
              <ProductCard product={product} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  )
}
