import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  { 
    _id: uuid(), 
    productName: 'Do Epic SHit', 
    img:"/Images/product1.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Non_Fiction', 
    bestSeller: true, 
    price: '500',
    originalPrice: '700', 
    ratings: 5
  },
  { 
    _id: uuid(), 
    productName: 'Think Like a Monk', 
    img:"/Images/product2.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Non_Fiction', 
    bestSeller: true, 
    price: '600',
    originalPrice: '700', 
    ratings: 5
  },
  { 
    _id: uuid(), 
    productName: 'Alchemist', 
    img:"/Images/product3.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Fiction', 
    bestSeller: true, 
    price: '800',
    originalPrice: '900', 
    ratings: 5
  },
  { 
    _id: uuid(), 
    productName: 'Rich Dad', 
    img:"/Images/product4.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Fiction', 
    bestSeller: false, 
    price: '100',
    originalPrice: '300', 
    ratings: 3
  },
  { 
    _id: uuid(), 
    productName: 'Mathematics', 
    img:"/Images/product5.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Academics', 
    bestSeller: false, 
    price: '500',
    originalPrice: '700', 
    ratings: 2
  },
  { 
    _id: uuid(), 
    productName: 'Sherlock Holmes', 
    img:"/Images/product6.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!', 
    seller: 'Genuine Books',
    category:'Non_Fiction', 
    bestSeller: false, 
    price: '300',
    originalPrice: '500', 
    ratings: 4
  },
  { 
    _id: uuid(), 
    productName: 'Narnia', 
    img:"/Images/product7.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Fantasy', 
    bestSeller: false, 
    price: '900',
    originalPrice: '1000', 
    ratings: 5
  },
  { 
    _id: uuid(), 
    productName: 'HyperFocus', 
    img:"/Images/product8.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Fiction', 
    bestseller: false, 
    price: '700',
    originalPrice: '800', 
    ratings: 4
  },
  { 
    _id: uuid(), 
    productName: 'HyperFocus', 
    img:"/Images/product9.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Fiction', 
    bestseller: false, 
    price: '700',
    originalPrice: '800', 
    ratings: 4
  },
  { 
    _id: uuid(), 
    productName: 'Democracy', 
    img:"/Images/product10.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Non_Fiction', 
    bestseller: false, 
    price: '500',
    originalPrice: '800', 
    ratings: 2
  },
  { 
    _id: uuid(), 
    productName: 'James Bond', 
    img:"/Images/product1.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Fantasy', 
    bestseller: false, 
    price: '700',
    originalPrice: '800', 
    ratings: 3
  },
  { 
    _id: uuid(), 
    productName: 'Chacha Chowdry', 
    img:"/Images/product2.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Fiction', 
    bestseller: false, 
    price: '700',
    originalPrice: '800', 
    ratings: 5
  },
  { 
    _id: uuid(), 
    productName: 'Twinkle', 
    img:"/Images/product3.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Fantasy', 
    bestseller: false, 
    price: '700',
    originalPrice: '800', 
    ratings: 5
  },
  { 
    _id: uuid(), 
    productName: 'Half Girlfriend', 
    img:"/Images/product4.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Fiction', 
    bestseller: false, 
    price: '900',
    originalPrice: '1000', 
    ratings: 5
  },
  { 
    _id: uuid(), 
    productName: '2 States', 
    img:"/Images/product5.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Fiction', 
    bestseller: false, 
    price: '700',
    originalPrice: '800', 
    ratings: 5
  },
  { 
    _id: uuid(), 
    productName: 'Revolution 2020', 
    img:"/Images/product6.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Fiction', 
    bestseller: false, 
    price: '500',
    originalPrice: '800', 
    ratings: 3
  },
  { 
    _id: uuid(), 
    productName: '5 Point Someone', 
    img:"/Images/product7.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Fiction', 
    bestseller: false, 
    price: '800',
    originalPrice: '800', 
    ratings: 4
  },
  { 
    _id: uuid(), 
    productName: 'Stock Market', 
    img:"/Images/product9.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Non_Fiction', 
    bestseller: false, 
    price: '700',
    originalPrice: '800', 
    ratings: 1
  },
  { 
    _id: uuid(), 
    productName: 'The man Who Sold His Ferari', 
    img:"/Images/product8.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Fantasy', 
    bestseller: false, 
    price: '700',
    originalPrice: '800', 
    ratings: 5
  },
  { 
    _id: uuid(), 
    productName: 'Intellectual Property', 
    img:"/Images/product10.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Academy', 
    bestseller: false, 
    price: '700',
    originalPrice: '800', 
    ratings: 5
  },
  { 
    _id: uuid(), 
    productName: 'Data Analysis', 
    img:"/Images/product1.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Academics', 
    bestseller: false, 
    price: '600',
    originalPrice: '700', 
    ratings: 5
  },
  { 
    _id: uuid(), 
    productName: 'Core Java', 
    img:"/Images/book1.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Academics', 
    bestseller: false, 
    price: '400',
    originalPrice: '600', 
    ratings: 4
  },
];


