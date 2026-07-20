import { Card, Image, Text, Button, Stack } from '@mantine/core'
import { Link } from 'react-router'

type TProps = {
  product: IProduct
  onDelete: () => void
}

export default function ProductCard({ product, onDelete }: TProps) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      withBorder
      component={Link}
      to={'/details/' + product.id}
      bg="#fafafa"
    >
      <Image
        src={product.category.image}
        height={240}
        alt="Norway"
        fallbackSrc="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
      />

      <Stack align="start" mt="md" gap={0}>
        <Text fw={500} size="lg">
          {product.title}
        </Text>

        <Text mb={16} c="gray">
          {product.category.name}
        </Text>
        <Text mb={16} c="#A30041" size="xl" fw={600}>
          ${product.price}
        </Text>
        <Text lineClamp={2} mb={16}>
          {product.description}
        </Text>
        <Button color="#A30041" fullWidth mt="md">
          View details
        </Button>
        <Button
          color="red"
          fullWidth
          mt="md"
          onClick={(e) => {
            e.stopPropagation()
            e.preventDefault()
            onDelete()
          }}
        >
          Delete
        </Button>
      </Stack>
    </Card>
  )
}
