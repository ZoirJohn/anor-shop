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

const container = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingBlock: '32px',
}

export default function Header() {
  const lg = useMediaQuery('(max-width:1024px)')
  return (
    <header>
      <Container size={1200} style={container}>
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
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            gap: lg ? '20px' : '44px',
          }}
        >
          {LINKS.map(({ title, link }) => (
            <List.Item style={{ listStyleType: 'none' }}>
              <NavLink
                to={link}
                style={({ isActive }) => ({
                  color: 'black',
                  textDecoration: 'none',
                  fontWeight: isActive ? '500' : 'normal',
                  fontSize: '18px',
                })}
              >
                {title}
              </NavLink>
            </List.Item>
          ))}
        </List>
        <Flex align={'center'} gap={12}>
          <ActionIcon
            size={42}
            variant="filled"
            color="#A30041"
            style={{ borderRadius: '50%' }}
          >
            <PhoneIcon size={20} weight="fill" />
          </ActionIcon>
          <Stack gap={0}>
            <Text>Need help?</Text>
            <Text>+996 247-1680</Text>
          </Stack>
        </Flex>
      </Container>
    </header>
  )
}
