import { Card, Image, Button, Stack, Skeleton } from '@mantine/core'

export default function ProductCardSkeleton() {
  return (
    <Card shadow="sm" padding="lg" withBorder bg={'fafafa'}>
      <Image
        src={''}
        height={240}
        alt="Norway"
        fallbackSrc="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
      />

      <Stack align="start" mt="md" gap={0}>
        <Skeleton height={28} mb={8} />
        <Skeleton height={28} mb={8} />
        <Skeleton height={28} mb={8} />
        <Skeleton height={28} mb={8} />
        <Button color="#A30041" fullWidth mt="md">
          View details
        </Button>
      </Stack>
    </Card>
  )
}
