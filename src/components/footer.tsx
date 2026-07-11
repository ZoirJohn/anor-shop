import { Button, Container, Flex, List, Text } from '@mantine/core'
import { LINKS } from '../consts'
import { Link } from 'react-router'

export default function footer() {
  return (
    <footer>
      <Container size={1200} pt={60}>
        <Flex justify={'space-between'}>
          <Flex w={280}>
            <Text size="20" style={{ lineHeight: '1.5' }} fw={600}>
              Faucibus faucibus pellentesque dictum turpis. Id pellentesque
              turpis massa a id iaculis lorem turpis euismod
            </Text>
          </Flex>
          <List spacing={16}>
            <Text mb={24} size="20" lh={1} fw={600}>
              Useful links
            </Text>
            {LINKS.map(({ title, link }) => (
              <List.Item style={{ listStyleType: 'none' }}>
                <Link
                  to={link}
                  style={{ textDecoration: 'none', color: 'black' }}
                >
                  {title}
                </Link>
              </List.Item>
            ))}
          </List>
          <List>
            <Text mb={24} size="20" lh={1} fw={600}>
              Products
            </Text>
            <List.Item style={{ listStyleType: 'none' }}>Home</List.Item>
          </List>
          <Flex direction={'column'}>
            <Button>App Store</Button>
            <Button>Google Play</Button>
          </Flex>
        </Flex>
      </Container>
    </footer>
  )
}
