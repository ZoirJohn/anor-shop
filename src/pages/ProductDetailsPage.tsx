import { Container, Grid } from '@mantine/core'
import LinkCaption from '../components/linkCaption'
import ProductCard from '../components/card'

const products = [
  {
    id: 4,
    title: 'Classic Grey Hooded Sweatshirt',
    slug: 'classic-grey-hooded-sweatshirt',
    price: 90,
    description:
      'Elevate your casual wear with our Classic Grey Hooded Sweatshirt. Made from a soft cotton blend, this hoodie features a front kangaroo pocket, an adjustable drawstring hood, and ribbed cuffs for a snug fit. Perfect for those chilly evenings or lazy weekends, it pairs effortlessly with your favorite jeans or joggers.',
    category: {
      id: 1,
      name: 'Clothes',
      slug: 'clothes',
      image: 'https://i.imgur.com/QkIa5tT.jpeg',
      creationAt: '2026-07-12T02:59:14.000Z',
      updatedAt: '2026-07-12T02:59:14.000Z',
    },
    images: [
      'https://i.imgur.com/R2PN9Wq.jpeg',
      'https://i.imgur.com/IvxMPFr.jpeg',
      'https://i.imgur.com/7eW9nXP.jpeg',
    ],
    creationAt: '2026-07-12T02:59:14.000Z',
    updatedAt: '2026-07-12T02:59:14.000Z',
  },
  {
    id: 5,
    title: 'Classic White Hooded Sweatshirt',
    slug: 'classic-white-hooded-sweatshirt',
    price: 150,
    description:
      'Elevate your casual wardrobe with our Classic White Hooded Sweatshirt. Made from high-quality, soft fabric that ensures comfort and durability, this hoodie features a spacious kangaroo pocket and an adjustable drawstring hood. Its versatile design makes it perfect for a relaxed day at home or a casual outing.',
    category: {
      id: 1,
      name: 'Clothes',
      slug: 'clothes',
      image: 'https://i.imgur.com/QkIa5tT.jpeg',
      creationAt: '2026-07-12T02:59:14.000Z',
      updatedAt: '2026-07-12T02:59:14.000Z',
    },
    images: [
      'https://i.imgur.com/cSytoSD.jpeg',
      'https://i.imgur.com/WwKucXb.jpeg',
      'https://i.imgur.com/cE2Dxh9.jpeg',
    ],
    creationAt: '2026-07-12T02:59:14.000Z',
    updatedAt: '2026-07-12T03:03:38.000Z',
  },
  {
    id: 7,
    title: 'Classic Comfort Drawstring Joggers',
    slug: 'classic-comfort-drawstring-joggers',
    price: 79,
    description:
      'Experience the perfect blend of comfort and style with our Classic Comfort Drawstring Joggers. Designed for a relaxed fit, these joggers feature a soft, stretchable fabric, convenient side pockets, and an adjustable drawstring waist with elegant gold-tipped detailing. Ideal for lounging or running errands, these pants will quickly become your go-to for effortless, casual wear.',
    category: {
      id: 1,
      name: 'Clothes',
      slug: 'clothes',
      image: 'https://i.imgur.com/QkIa5tT.jpeg',
      creationAt: '2026-07-12T02:59:14.000Z',
      updatedAt: '2026-07-12T02:59:14.000Z',
    },
    images: [
      'https://i.imgur.com/mp3rUty.jpeg',
      'https://i.imgur.com/JQRGIc2.jpeg',
    ],
    creationAt: '2026-07-12T02:59:14.000Z',
    updatedAt: '2026-07-12T02:59:14.000Z',
  },
  {
    id: 8,
    title: 'Classic Red Jogger Sweatpants',
    slug: 'classic-red-jogger-sweatpants',
    price: 98,
    description:
      'Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.',
    category: {
      id: 1,
      name: 'Clothes',
      slug: 'clothes',
      image: 'https://i.imgur.com/QkIa5tT.jpeg',
      creationAt: '2026-07-12T02:59:14.000Z',
      updatedAt: '2026-07-12T02:59:14.000Z',
    },
    images: [
      'https://i.imgur.com/9LFjwpI.jpeg',
      'https://i.imgur.com/vzrTgUR.jpeg',
      'https://i.imgur.com/p5NdI6n.jpeg',
    ],
    creationAt: '2026-07-12T02:59:14.000Z',
    updatedAt: '2026-07-12T02:59:14.000Z',
  },
  {
    id: 9,
    title: 'Classic Navy Blue Baseball Cap',
    slug: 'classic-navy-blue-baseball-cap',
    price: 61,
    description:
      'Step out in style with this sleek navy blue baseball cap. Crafted from durable material, it features a smooth, structured design and an adjustable strap for the perfect fit. Protect your eyes from the sun and complement your casual looks with this versatile and timeless accessory.',
    category: {
      id: 1,
      name: 'Clothes',
      slug: 'clothes',
      image: 'https://i.imgur.com/QkIa5tT.jpeg',
      creationAt: '2026-07-12T02:59:14.000Z',
      updatedAt: '2026-07-12T02:59:14.000Z',
    },
    images: [
      'https://i.imgur.com/R3iobJA.jpeg',
      'https://i.imgur.com/Wv2KTsf.jpeg',
      'https://i.imgur.com/76HAxcA.jpeg',
    ],
    creationAt: '2026-07-12T02:59:14.000Z',
    updatedAt: '2026-07-12T02:59:14.000Z',
  },
  {
    id: 10,
    title: 'Classic Blue Baseball Cap',
    slug: 'classic-blue-baseball-cap',
    price: 86,
    description:
      'Top off your casual look with our Classic Blue Baseball Cap, made from high-quality materials for lasting comfort. Featuring a timeless six-panel design with a pre-curved visor, this adjustable cap offers both style and practicality for everyday wear.',
    category: {
      id: 1,
      name: 'Clothes',
      slug: 'clothes',
      image: 'https://i.imgur.com/QkIa5tT.jpeg',
      creationAt: '2026-07-12T02:59:14.000Z',
      updatedAt: '2026-07-12T02:59:14.000Z',
    },
    images: [
      'https://i.imgur.com/wXuQ7bm.jpeg',
      'https://i.imgur.com/BZrIEmb.jpeg',
      'https://i.imgur.com/KcT6BE0.jpeg',
    ],
    creationAt: '2026-07-12T02:59:14.000Z',
    updatedAt: '2026-07-12T02:59:14.000Z',
  },
]

export default function ProductDetailsPage() {
  return (
    <section>
      <Container size={1296}>
        <LinkCaption caption="Other products" />
        <Grid>
          {products.map((p) => {
            return (
              <Grid.Col span={4}>
                <ProductCard product={p} />
              </Grid.Col>
            )
          })}
        </Grid>
      </Container>
    </section>
  )
}
