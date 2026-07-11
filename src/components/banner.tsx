import { Button, Container, Flex, Select, Text } from '@mantine/core'
import { DateInput } from '@mantine/dates'
import { useMediaQuery } from '@mantine/hooks'
import { Link } from 'react-router'

export default function Banner() {
  const lg = useMediaQuery('(max-width: 1024px)')
  const md = useMediaQuery('(max-width: 768px)')
  const inputWidth = !lg ? 366 : !md ? 286 : 246
  return (
    <section>
      <Container size={1200} style={{}}>
        <Flex
          style={{
            background: '#A30041',
            borderRadius: '24px',
            padding: lg ? '48px 32px' : '78px 32px',
            display: 'flex',
            gap: '42px',
            alignItems: 'center',
          }}
        >
          <Flex
            c="#fff"
            direction={'column'}
            gap={28}
            align={'start'}
            style={{ paddingTop: '45px' }}
          >
            <Text
              style={{
                fontSize: !lg ? 60 : !md ? 40 : 32,
                fontWeight: 'bold',
                lineHeight: '1',
              }}
            >
              Experience the road like never before
            </Text>
            <Text>
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida. Quis nunc interdum gravida
              ullamcorper
            </Text>
            <Button bg="orange" component={Link} to="/products">
              View all products
            </Button>
          </Flex>
          <Flex
            bg="white"
            style={{
              borderRadius: '24px',
              padding: !lg ? '40px' : !md ? '30px' : '20px',
            }}
            direction={'column'}
            gap={'20px'}
          >
            <Text>Select product</Text>
            <Select
              placeholder="Car type"
              w={inputWidth}
              data={['React', 'Angular', 'Vue', 'Svelte']}
            />
            <Select
              placeholder="Place of rental"
              w={inputWidth}
              data={['React', 'Angular', 'Vue', 'Svelte']}
            />
            <Select
              placeholder="Place of return"
              w={inputWidth}
              data={['React', 'Angular', 'Vue', 'Svelte']}
            />
            <DateInput placeholder="Arrival date" />
          </Flex>
        </Flex>
      </Container>
    </section>
  )
}
