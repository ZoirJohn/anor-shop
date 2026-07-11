import { Card, Image, Text, Button, Group } from '@mantine/core'
import { useEffect, useState } from 'react'
import { Link } from 'react-router'

export default function ProductCard() {
  const [product, setProduct] = useState({})
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products/9')
      .then((res) => res.json())
      .then((data) => setProduct(data))
  }, [])

  console.log(product)

  return (
    <Card
      shadow="sm"
      padding="lg"
      withBorder
      w={416}
      h={513}
      component={Link}
      to="/products"
      bg="#fafafa"
    >
      <Card.Section>
        <Image
          src={
            'https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png'
          }
          height={240}
          alt="Norway"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs" gap={40}>
        <Text fw={500}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis
          optio necessitatibus, adipisci iure delectus omnis quidem minima ipsum
          nostrum facilis?
        </Text>
        <Button color="#A30041" fullWidth mt="md">
          View details
        </Button>
      </Group>
    </Card>
  )
}
