import { Card, Image, Text, Button, Stack } from '@mantine/core'
import { Link } from 'react-router'

type TProduct = {
	id:number
	title:string
	slug:string
	price:number
	description:string
	category:{
		id:number,
		name:string,
		slug:string,
		image:string,
		creationAt:string,
		updatedAt:string
	}
	images:string[]
	creationAt:string
	updatedAt:string
}

type TProps = {
  product: TProduct
}

export default function ProductCard({ product }: TProps) {
  return (
    <Card
      shadow="sm"
      padding="lg"
      withBorder
      component={Link}
      to={"/details/"+product.id}
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
        <Text mb={16} c="gray">{product.category.name}</Text>
        <Text mb={16} c="#A30041" size="xl" fw={600}>
          ${product.price}
        </Text>
        <Text lineClamp={2} mb={16}>
          {product.description}
        </Text>
        <Button color="#A30041" fullWidth mt="md">
          View details
        </Button>
      </Stack>
    </Card>
  )
}
	