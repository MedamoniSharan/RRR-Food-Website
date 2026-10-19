/** Prices in INR. priceVaries: asterisk on menu = prices may vary. */
export const categories = [
  {
    id: 'spices',
    name: 'Spices',
    blurb: 'Homemade masala powders ground fresh for everyday cooking.',
    products: [
      {
        id: 'turmeric',
        name: 'Turmeric Powder',
        image: '/products/turmeric.jpg',
        prices: { '1kg': 300, '1/2kg': 150, '1/4kg': 80 },
        priceVaries: false,
      },
      {
        id: 'guntur-chilli',
        name: 'Guntur Chilli Karam',
        image: '/products/chilli.jpg',
        prices: { '1kg': 500, '1/2kg': 270, '1/4kg': 150 },
        priceVaries: false,
      },
      {
        id: 'curry-leaves',
        name: 'Curry Leaves Powder',
        image: '/products/curry-leaves.jpg',
        prices: { '1kg': 300, '1/2kg': 170, '1/4kg': 100 },
        priceVaries: false,
      },
      {
        id: 'groundnut-karam',
        name: 'Groundnut Karam',
        image: '/products/groundnut.jpg',
        prices: { '1kg': 250, '1/2kg': 140, '1/4kg': 80 },
        priceVaries: true,
      },
      {
        id: 'roasted-gram',
        name: 'Roasted Gram Karam',
        image: '/products/roasted-gram.jpg',
        prices: { '1kg': 200, '1/2kg': 120, '1/4kg': 80 },
        priceVaries: true,
      },
      {
        id: 'garam-masala',
        name: 'Garam Masala',
        image: '/products/garam-masala.jpg',
        prices: { '1kg': 500, '1/2kg': 250, '1/4kg': 120 },
        priceVaries: false,
      },
      {
        id: 'munaga-karam',
        name: 'Munaga Karam',
        image: '/products/munaga.jpg',
        prices: { '1kg': 300, '1/2kg': 160, '1/4kg': 80 },
        priceVaries: true,
      },
    ],
  },
  {
    id: 'sweets',
    name: 'Sweets',
    blurb: 'Traditional homemade laddus and festive sweets.',
    products: [
      {
        id: 'jaggery-shells',
        name: 'Jaggery Nuvula Laddu',
        image: '/products/jaggery-shells.jpg',
        prices: { '1kg': 300, '1/2kg': 160, '1/4kg': 100 },
        priceVaries: false,
      },
      {
        id: 'jaggery-urad-laddu',
        name: 'Jaggery Urad Dal Laddu',
        image: '/products/urad-laddu.jpg',
        prices: { '1kg': 300, '1/2kg': 170, '1/4kg': 100 },
        priceVaries: true,
      },
      {
        id: 'peanut-balls',
        name: 'Peanut Balls',
        image: '/products/peanut-balls.jpg',
        prices: { '1kg': 250, '1/2kg': 140, '1/4kg': 80 },
        priceVaries: true,
      },
      {
        id: 'rava-laddu',
        name: 'Rava Laddu',
        image: '/products/rava-laddu.jpg',
        prices: { '1kg': 250, '1/2kg': 140, '1/4kg': 80 },
        priceVaries: true,
      },
      {
        id: 'ragi-laddu',
        name: 'Ragi Laddu',
        image: '/products/ragi-laddu.jpg',
        prices: { '1kg': 250, '1/2kg': 140, '1/4kg': 80 },
        priceVaries: false,
      },
      {
        id: 'sweet-gujiya',
        name: 'Sweet Gujiya',
        image: '/products/gujiya.jpg',
        prices: { '1kg': 300, '1/2kg': 160, '1/4kg': 100 },
        priceVaries: true,
      },
    ],
  },
  {
    id: 'hot-snacks',
    name: 'Hot Snacks',
    blurb: 'Crispy mixtures and savory bites made the traditional way.',
    products: [
      {
        id: 'poha-mixture',
        name: 'Poha Mixture',
        image: '/products/poha-mixture.jpg',
        prices: { '1kg': 500, '1/2kg': 260, '1/4kg': 140 },
        priceVaries: true,
      },
      {
        id: 'spicy-boondi',
        name: 'Spicy Boondi',
        image: '/products/spicy-boondi.jpg',
        prices: { '1kg': 300, '1/2kg': 160, '1/4kg': 100 },
        priceVaries: true,
      },
      {
        id: 'rice-crisps',
        name: 'Rice Crisps',
        image: '/products/rice-crisps.jpg',
        prices: { '1kg': 300, '1/2kg': 160, '1/4kg': 100 },
        priceVaries: true,
      },
      {
        id: 'rice-rings-large',
        name: 'Rice Flour Rings (Large)',
        image: '/products/rice-rings-large.jpg',
        prices: { '1kg': 200, '1/2kg': 120, '1/4kg': 80 },
        priceVaries: false,
      },
      {
        id: 'rice-rings-small',
        name: 'Rice Flour Rings (Small)',
        image: '/products/rice-rings-small.jpg',
        prices: { '1kg': 200, '1/2kg': 120, '1/4kg': 80 },
        priceVaries: false,
      },
    ],
  },
]

export const weightLabels = {
  '1kg': '1 kg',
  '1/2kg': '½ kg',
  '1/4kg': '¼ kg',
}

export const allProducts = categories.flatMap((c) =>
  c.products.map((p) => ({ ...p, categoryId: c.id, categoryName: c.name })),
)
