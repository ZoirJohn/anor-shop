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
      <Container size={1296}>
        <Flex
          bg="#A30041"
          bdrs={24}
          py={!lg ? 48 : 78}
          px={32}
          gap={42}
          align="center"
        >
          <Flex c="#fff" direction={'column'} gap={28} align={'start'} pt={45}>
            <Text fz={!lg ? 60 : !md ? 40 : 32} fw={700} lh={1}>
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
            bdrs={24}
            p={!lg ? 40 : !md ? 30 : 20}
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
            <Button bg="orange" component={Link} to="/products">
             Book now
            </Button>
          </Flex>
        </Flex>
      </Container>
    </section>
  )
}
