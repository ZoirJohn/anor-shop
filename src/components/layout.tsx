import { Outlet } from 'react-router'
import Header from './header'
import Footer from './footer'
import { Flex } from '@mantine/core'

export default function Layout() {
  return (
    <Flex direction={'column'} style={{ minHeight: '100vh' }}>
      <Header />
      <main style={{ flex: 1 }}>{<Outlet />}</main>
      <Footer />
    </Flex>
  )
}
