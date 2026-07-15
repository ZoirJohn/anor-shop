import { Button, Container, Flex, Grid, Text } from '@mantine/core'
import ProductCard from '../components/card'
import { useCategoriesAmount } from '../hooks/useCategories'
import { useProductsByCategorySlug } from '../hooks/useProducts'
import { useState } from 'react'

export default function ProductsPage() {
  const [active, setActive] = useState('')
  const { data: categories } = useCategoriesAmount(4)
  const { data: products } = useProductsByCategorySlug(active)

  return (
    <section>
      <Container size={1296}>
        <Text fz={48} ta="center" py={20} fw={700}>
          Select a product
        </Text>
        <Flex pt={20} pb={40} gap={24} justify={'center'}>
          <Button
            variant="default"
            bd="none"
            bg={active === '' ? '#A30041' : ''}
            c={active === '' ? '#fff' : ''}
            onClick={() => setActive('')}
            tt={'capitalize'}
            radius={20}
            h={42}
            w={120}
          >
            All products
          </Button>
          {categories?.map((category) => {
            return (
              <Button
                variant="default"
                bd="none"
                bg={active === category.slug ? '#A30041' : ''}
                c={active === category.slug ? '#fff' : ''}
                onClick={() => {
                  setActive(category.slug)
                }}
                tt={'capitalize'}
                radius={20}
                h={42}
                w={120}
                key={category.slug}
              >
                {category.name}
              </Button>
            )
          })}
        </Flex>
        <Grid>
          {products?.map((product) => (
            <Grid.Col span={4} key={product.id}>
              <ProductCard product={product} />
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </section>
  )
}
