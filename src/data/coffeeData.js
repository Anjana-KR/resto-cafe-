export const SIGNATURE_DRINKS = [
  {
    id: 'caramel-latte',
    name: 'Caramel Latte',
    tagline: 'Rich espresso, steamed milk, caramel syrup.',
    description: 'Our signature espresso poured over velvety steamed whole milk, layered with artisan buttery caramel syrup and finished with a golden caramel swirl.',
    price: 4.50,
    rating: 4.9,
    reviewsCount: 342,
    image: '/images/caramel-latte.jpg',
    category: 'espresso',
    temperature: 'Hot & Iced',
    popular: true,
    calories: '220 kcal',
    flavorNotes: ['Salted Caramel', 'Velvety Cream', 'Dark Cocoa']
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    tagline: 'Bold espresso with silky milk foam.',
    description: 'A classic Italian masterwork. Double shot of rich single-origin espresso crowned with equal parts steamed milk and luxurious, dense micro-foam dusted with organic Belgian cocoa.',
    price: 3.90,
    rating: 4.9,
    reviewsCount: 418,
    image: '/images/cappuccino.jpg',
    category: 'espresso',
    temperature: 'Hot Only',
    popular: true,
    calories: '140 kcal',
    flavorNotes: ['Toasted Almond', 'Dark Chocolate', 'Silky Foam']
  },
  {
    id: 'cold-brew',
    name: 'Cold Brew',
    tagline: 'Smooth, bold, and refreshing. Served over ice.',
    description: 'Slow-steeped for 20 hours in cold filtered mountain water. Extraordinarily smooth with almost zero acidity and a naturally sweet, bold cocoa finish over clear crystal ice.',
    price: 4.20,
    rating: 5.0,
    reviewsCount: 526,
    image: '/images/cold-brew.jpg',
    category: 'coldbrew',
    temperature: 'Iced Only',
    popular: true,
    calories: '5 kcal',
    flavorNotes: ['Molasses', 'Bourbon Vanilla', 'Black Cherry']
  },
  {
    id: 'vanilla-flat-white',
    name: 'Vanilla Bean Flat White',
    tagline: 'Double ristretto with micro-textured milk.',
    description: 'Two pure ristretto shots blended seamlessly with micro-textured silky milk and natural scraped Madagascar vanilla bean seeds.',
    price: 4.40,
    rating: 4.8,
    reviewsCount: 189,
    image: '/images/cappuccino.jpg',
    category: 'espresso',
    temperature: 'Hot',
    popular: false,
    calories: '180 kcal',
    flavorNotes: ['Vanilla Orchid', 'Brown Sugar', 'Hazelnut']
  },
  {
    id: 'marbled-macchiato',
    name: 'Marbled Iced Macchiato',
    tagline: 'Artisan espresso swirl over cold vanilla milk.',
    description: 'Cold farm-fresh milk kissed with pure Madagascar vanilla, crowned with a cascade of freshly pulled hot espresso that marbles down the glass.',
    price: 4.80,
    rating: 4.9,
    reviewsCount: 275,
    image: '/images/lifestyle-latte.jpg',
    category: 'coldbrew',
    temperature: 'Iced',
    popular: true,
    calories: '240 kcal',
    flavorNotes: ['Caramel Swirl', 'Roasted Hazelnut', 'Fresh Cream']
  },
  {
    id: 'honey-cinnamon-cortado',
    name: 'Honey Cinnamon Cortado',
    tagline: 'Equal parts bold espresso & honeyed warm milk.',
    description: 'A harmonious 1:1 ratio of rich espresso and steamed milk, sweetened with raw wildflower honey and sprinkled with freshly ground Vietnamese cinnamon.',
    price: 4.10,
    rating: 4.8,
    reviewsCount: 164,
    image: '/images/caramel-latte.jpg',
    category: 'espresso',
    temperature: 'Hot',
    popular: false,
    calories: '110 kcal',
    flavorNotes: ['Wild Honey', 'Cinnamon Bark', 'Warm Oak']
  }
];

export const CAFE_FEATURES = [
  {
    id: 'beans',
    title: 'Fresh Beans',
    desc: '100% Single-origin ethically harvested beans roasted in small batches every Tuesday & Friday.'
  },
  {
    id: 'taste',
    title: 'Premium Taste',
    desc: 'Calibrated espresso extraction curves delivering rich crema and zero bitterness.'
  },
  {
    id: 'space',
    title: 'Cozy Space',
    desc: 'Warm cedar wood tables, sunlit reading nooks, vintage books, and acoustic ambiance.'
  },
  {
    id: 'eco',
    title: 'Eco Friendly',
    desc: '100% plant-fiber compostable takeaway cups and zero-waste coffee grounds composting.'
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Eleanor Vance',
    role: 'Local Architect & Regular',
    rating: 5,
    comment: 'The Caramel Latte here is pure heaven on a rainy morning. You can taste the quality of their beans — it never has that burnt bitterness. And the space feels like a second living room.',
    favoriteDrink: 'Caramel Latte (Oat Milk)'
  },
  {
    id: 2,
    name: 'Marcus Chen',
    role: 'Coffee Enthusiast & Writer',
    rating: 5,
    comment: 'Watching their baristas pull espresso shots is like watching fine art. The Cold Brew has notes of molasses and dark cherry that rival any specialty roaster in the country.',
    favoriteDrink: 'Single Origin Cold Brew'
  },
  {
    id: 3,
    name: 'Sophia Laurent',
    role: 'Graphic Designer',
    rating: 5,
    comment: 'Beanora has that rare cozy warmth that is impossible to fake. The soft jazz, the smell of freshly roasted beans, and the corner window table are my daily creative recharge.',
    favoriteDrink: 'Classic Cappuccino'
  }
];
