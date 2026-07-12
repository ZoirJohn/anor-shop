import {
  ActionIcon,
  Container,
  Flex,
  Image,
  List,
  Stack,
  Text,
} from '@mantine/core'
import { NavLink } from 'react-router'
import { LINKS } from '../consts'
import { PhoneIcon } from '@phosphor-icons/react'
import { useMediaQuery } from '@mantine/hooks'

export default function Header() {
  const lg = useMediaQuery('(max-width:1024px)')
  return (
    <header>
      <Container size={1296} py={32}>
        <Flex align="center" justify="space-between">
          <div>
            <NavLink to={'/'}>
              <Image
                src="https://play-lh.googleusercontent.com/qKpNlxph7g0PstCP0sZoaySCyqM8s-jsGYr_YHLM1ExbKQlgE-kDr4p0CzbbqIm9tgJaMpsJ3RsZF0XmmKp_"
                w={40}
                radius={'xl'}
              />
            </NavLink>
          </div>
          <List
            visibleFrom="sm"
            display="flex"
            listStyleType="none"
            style={{ justifyContent: 'space-between', gap: lg ? 20 : 44 }}
          >
            {LINKS.map(({ title, link }) => (
              <List.Item>
                <NavLink
                  to={link}
                  style={({ isActive }) => ({
                    color: 'black',
                    textDecoration: 'none',
                    fontWeight: isActive ? '600' : 'normal',
                    fontSize: '18px',
                  })}
                >
                  {title}
                </NavLink>
              </List.Item>
            ))}
          </List>
          <Flex align={'center'} gap={12}>
            <ActionIcon size={42} variant="filled" color="#A30041" radius="50%">
              <PhoneIcon size={20} weight="fill" />
            </ActionIcon>
            <Stack gap={0}>
              <Text>Need help?</Text>
              <Text>+996 247-1680</Text>
            </Stack>
          </Flex>
        </Flex>
      </Container>
    </header>
  )
}
