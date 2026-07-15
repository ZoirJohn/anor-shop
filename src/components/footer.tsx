import { Anchor, Button, Container, Flex, List, Text } from '@mantine/core'
import { LINKS } from '../consts'
import { Link } from 'react-router'
import { AppStoreLogoIcon, GooglePlayLogoIcon } from '@phosphor-icons/react'

export default function footer() {
  return (
    <footer>
      <Container size={1296} py={60}>
        <Flex justify={'space-between'}>
          <Flex w={280}>
            <Text size="20" lh={1.5} fw={600}>
              Faucibus faucibus pellentesque dictum turpis. Id pellentesque
              turpis massa a id iaculis lorem turpis euismod
            </Text>
          </Flex>
          <List spacing={16} listStyleType="none">
            <Text mb={24} size="20" lh={1} fw={600}>
              Useful links
            </Text>
            {LINKS.map(({ title, link }) => (
              <List.Item key={link + title}>
                <Anchor component={Link} to={link} td="none" c="black">
                  {title}
                </Anchor>
              </List.Item>
            ))}
          </List>
          <List listStyleType="none">
            <Text mb={24} size="20" lh={1} fw={600}>
              Products
            </Text>
            <List.Item>
              <Anchor component={Link} to={'/products'} td="none" c="black">
                Products
              </Anchor>
            </List.Item>
          </List>
          <Flex direction={'column'} gap={16}>
            <Text mb={8} size="20" lh={1} fw={600}>
              Products
            </Text>
            <Button
              color="black"
              h={42}
              display="flex"
              style={{ alignItems: 'center' }}
            >
              <AppStoreLogoIcon size={24} style={{ marginRight: 12 }} />
              <Text size="xl">App Store</Text>
            </Button>
            <Button
              color="black"
              h={42}
              display="flex"
              style={{ alignItems: 'center' }}
            >
              <GooglePlayLogoIcon size={24} style={{ marginRight: 12 }} />
              <Text size="xl">Google Play</Text>
            </Button>
          </Flex>
        </Flex>
      </Container>
    </footer>
  )
}
