import {
  Button,
  Container,
  Flex,
  Input,
  Text,
  Notification,
} from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { Link } from 'react-router'
import { useProductsMutation } from '../hooks/useProducts'
import { useForm } from '@mantine/form'
import { XIcon, CheckIcon } from '@phosphor-icons/react'

export default function Banner() {
  const { mutate, isError, error, isPending, isSuccess, reset } =
    useProductsMutation()
  const { key, getInputProps, ...form } = useForm({
    mode: 'uncontrolled',
    initialValues: {
      title: '',
      price: 0,
      description: '',
      categoryId: 0,
    },
  })

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
            component={'form'}
            onSubmit={form.onSubmit((values) => {
              mutate({ ...values, images: ['https://github.co'] })
            })}
          >
            <Text>Select product</Text>
            <Input
              placeholder="Title"
              w={inputWidth}
              type="text"
              key={key('title')}
              {...getInputProps('title')}
            />
            <Input
              placeholder="Price"
              w={inputWidth}
              type="number"
              key={key('price')}
              {...getInputProps('price')}
            />
            <Input
              placeholder="Description"
              w={inputWidth}
              type="text"
              key={key('description')}
              {...getInputProps('description')}
            />
            <Input
              placeholder="Category ID"
              w={inputWidth}
              type="number"
              key={key('categoryId')}
              {...getInputProps('categoryId')}
            />
            <Button bg="orange" type="submit" disabled={isPending}>
              {isPending ? 'Pending...' : 'Book now'}
            </Button>
          </Flex>
        </Flex>
      </Container>
      {isError && (
        <Notification
          icon={<XIcon />}
          w={400}
          color="red"
          title="Error"
          bottom={10}
          right={10}
          pos={'fixed'}
          style={{ zIndex: 2 }}
          closeButtonProps={{ onClick: reset }}
        >
          {error?.message}
        </Notification>
      )}
      {isSuccess && (
        <Notification
          icon={<CheckIcon />}
          w={400}
          color="teal"
          title="Success"
          bottom={10}
          right={10}
          pos={'fixed'}
          style={{ zIndex: 2 }}
          closeButtonProps={{ onClick: reset }}
        >
          Successfully created
        </Notification>
      )}
    </section>
  )
}
