import { Container } from '@mantine/core'
import Banner from '../components/banner'
import ProductCard from '../components/card'

export function HomePage() {
  return (
    <>
      <Banner />
      <Container size={1200}>
        <ProductCard />
      </Container>
    </>
  )
}
