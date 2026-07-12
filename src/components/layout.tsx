import { Outlet } from 'react-router'
import Header from './header'
import Footer from './footer'
import { Box, Flex } from '@mantine/core'

export default function Layout() {
  return (
    <Flex direction={'column'} mih="100vh">
      <Header />
      <Box component="main" flex={1} display={"flex"} style={{flexDirection:"column"}}>
        <Outlet />
      </Box>
      <Footer />
    </Flex>
  )
}
