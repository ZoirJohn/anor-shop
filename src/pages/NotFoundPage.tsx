import { Container, Text } from '@mantine/core'

export function NotFoundPage() {
  return (
    <section style={{ display: 'flex', flex: 1 }}>
      <Container
        size={1296}
        display="flex"
        style={{ alignItems: 'center', justifyContent: 'center' }}
        mih="full"
      >
        <Text size="60" lh={1} display={'flex'}>
          404
        </Text>
      </Container>
    </section>
  )
}
