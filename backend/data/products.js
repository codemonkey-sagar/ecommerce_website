const products = [
  {
    _id: '1',
    name: 'Marble Name 1',
    image: '/images/marble1.jpg',
    description:
      'By the term marble, we generally mean Indian Marble coming to form Rajasthan. Various thickness as 14mm, 16mm, 20mm, etc is available. A wide range of marble in various colours, patterns, and shades can be found in our stockyard. We have marble countertops and marble tiles.',
    brand: 'Varmora',
    category: 'Marble',
    price: 'Rs. 270',
    countInStock: 120,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '2',
    name: 'Granite Name 1',
    image: '/images/marble1.jpg',
    description:
      'By the term marble, we generally mean Indian Marble coming to form Rajasthan. Various thickness as 14mm, 16mm, 20mm, etc is available. A wide range of marble in various colours, patterns, and shades can be found in our stockyard. We have marble countertops and marble tiles.',
    brand: 'Varmora',
    category: 'Granite',
    price: 'Rs. 270',
    countInStock: 120,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: '3',
    name: 'Tile Name 1',
    image: '/images/marble1.jpg',
    description:
      'By the term marble, we generally mean Indian Marble coming to form Rajasthan. Various thickness as 14mm, 16mm, 20mm, etc is available. A wide range of marble in various colours, patterns, and shades can be found in our stockyard. We have marble countertops and marble tiles.',
    brand: 'Varmora',
    category: 'Marble',
    price: 'Rs. 270',
    countInStock: 120,
    rating: 4.5,
    numReviews: 12,
  },
  {
    _id: '4',
    name: 'Marble Name 1',
    image: '/images/marble1.jpg',
    description:
      'By the term marble, we generally mean Indian Marble coming to form Rajasthan. Various thickness as 14mm, 16mm, 20mm, etc is available. A wide range of marble in various colours, patterns, and shades can be found in our stockyard. We have marble countertops and marble tiles.',
    brand: 'Varmora',
    category: 'Marble',
    price: 'Rs. 270',
    countInStock: 120,
    rating: 2,
    numReviews: 12,
  },
  {
    _id: '5',
    name: 'Marble Name 1',
    image: '/images/marble1.jpg',
    description:
      'By the term marble, we generally mean Indian Marble coming to form Rajasthan. Various thickness as 14mm, 16mm, 20mm, etc is available. A wide range of marble in various colours, patterns, and shades can be found in our stockyard. We have marble countertops and marble tiles.',
    brand: 'Varmora',
    category: 'Marble',
    price: 'Rs. 270',
    countInStock: 120,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '6',
    name: 'Marble Name 1',
    image: '/images/marble1.jpg',
    description:
      'By the term marble, we generally mean Indian Marble coming to form Rajasthan. Various thickness as 14mm, 16mm, 20mm, etc is available. A wide range of marble in various colours, patterns, and shades can be found in our stockyard. We have marble countertops and marble tiles.',
    brand: 'Varmora',
    category: 'Marble',
    price: 'Rs. 270',
    countInStock: 120,
    rating: 2,
    numReviews: 12,
  },
  {
    _id: '7',
    name: 'Marble Name 1',
    image: '/images/marble1.jpg',
    description:
      'By the term marble, we generally mean Indian Marble coming to form Rajasthan. Various thickness as 14mm, 16mm, 20mm, etc is available. A wide range of marble in various colours, patterns, and shades can be found in our stockyard. We have marble countertops and marble tiles.',
    brand: 'Varmora',
    category: 'Marble',
    price: 'Rs. 270',
    countInStock: 120,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '8',
    name: 'Marble Name 1',
    image: '/images/marble1.jpg',
    description:
      'By the term marble, we generally mean Indian Marble coming to form Rajasthan. Various thickness as 14mm, 16mm, 20mm, etc is available. A wide range of marble in various colours, patterns, and shades can be found in our stockyard. We have marble countertops and marble tiles.',
    brand: 'Varmora',
    category: 'Marble',
    price: 'Rs. 270',
    countInStock: 120,
    rating: 4,
    numReviews: 12,
  },
  {
    _id: '9',
    name: 'Marble Name 1',
    image: '/images/marble1.jpg',
    description:
      'By the term marble, we generally mean Indian Marble coming to form Rajasthan. Various thickness as 14mm, 16mm, 20mm, etc is available. A wide range of marble in various colours, patterns, and shades can be found in our stockyard. We have marble countertops and marble tiles.',
    brand: 'Varmora',
    category: 'Marble',
    price: 'Rs. 270',
    countInStock: 120,
    rating: 3,
    numReviews: 12,
  },
  {
    _id: '10',
    name: 'Marble Name 1',
    image: '/images/marble1.jpg',
    description:
      'By the term marble, we generally mean Indian Marble coming to form Rajasthan. Various thickness as 14mm, 16mm, 20mm, etc is available. A wide range of marble in various colours, patterns, and shades can be found in our stockyard. We have marble countertops and marble tiles.',
    brand: 'Varmora',
    category: 'Marble',
    price: 'Rs. 270',
    countInStock: 120,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '11',
    name: 'Marble Name 1',
    image: '/images/marble1.jpg',
    description:
      'By the term marble, we generally mean Indian Marble coming to form Rajasthan. Various thickness as 14mm, 16mm, 20mm, etc is available. A wide range of marble in various colours, patterns, and shades can be found in our stockyard. We have marble countertops and marble tiles.',
    brand: 'Varmora',
    category: 'Marble',
    price: 'Rs. 270',
    countInStock: 120,
    rating: 2,
    numReviews: 12,
  },
  {
    _id: '12',
    name: 'Marble Name 1',
    image: '/images/marble1.jpg',
    description:
      'By the term marble, we generally mean Indian Marble coming to form Rajasthan. Various thickness as 14mm, 16mm, 20mm, etc is available. A wide range of marble in various colours, patterns, and shades can be found in our stockyard. We have marble countertops and marble tiles.',
    brand: 'Varmora',
    category: 'Marble',
    price: 'Rs. 270',
    countInStock: 120,
    rating: 5,
    numReviews: 12,
  },
  {
    _id: '13',
    name: 'Marble Name 1',
    image: '/images/marble1.jpg',
    description:
      'By the term marble, we generally mean Indian Marble coming to form Rajasthan. Various thickness as 14mm, 16mm, 20mm, etc is available. A wide range of marble in various colours, patterns, and shades can be found in our stockyard. We have marble countertops and marble tiles.',
    brand: 'Varmora',
    category: 'Marble',
    price: 'Rs. 270',
    countInStock: 120,
    rating: 1,
    numReviews: 12,
  },
  {
    _id: '14',
    name: 'Marble Name 1',
    image: '/images/marble1.jpg',
    description:
      'By the term marble, we generally mean Indian Marble coming to form Rajasthan. Various thickness as 14mm, 16mm, 20mm, etc is available. A wide range of marble in various colours, patterns, and shades can be found in our stockyard. We have marble countertops and marble tiles.',
    brand: 'Varmora',
    category: 'Marble',
    price: 'Rs. 270',
    countInStock: 120,
    rating: 2,
    numReviews: 12,
  },
  {
    _id: '15',
    name: 'Marble Name 1',
    image: '/images/marble1.jpg',
    description:
      'By the term marble, we generally mean Indian Marble coming to form Rajasthan. Various thickness as 14mm, 16mm, 20mm, etc is available. A wide range of marble in various colours, patterns, and shades can be found in our stockyard. We have marble countertops and marble tiles.',
    brand: 'Varmora',
    category: 'Marble',
    price: 'Rs. 270',
    countInStock: 120,
    rating: 4,
    numReviews: 12,
  },
];

export default products;
