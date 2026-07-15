import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'
import { createTheme, MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { HomePage } from './pages/HomePage.tsx'
import { NotFoundPage } from './pages/NotFoundPage.tsx'
import Layout from './components/layout.tsx'
import ProductsPage from './pages/ProductsPage.tsx'
import ProductDetailsPage from './pages/ProductDetailsPage.tsx'

const theme = createTheme({})

const client = new QueryClient()

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/products',
          element: <ProductsPage />,
        },
        {
          path: '/details',
          element: <ProductDetailsPage />,
        },

        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  { basename: '/anor-shop' }
)

function App() {
  return (
    <QueryClientProvider client={client}>
      <MantineProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </MantineProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default App
