import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  { 
    _id: uuid(), 
    productName: 'Do Epic SHit', 
    img:"/Images/book1.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Non_Fiction', 
    bestseller: true, 
    price: '500',
    originalPrice: '700', 
    ratings: 5
  },
  { 
    _id: uuid(), 
    productName: 'Think Like a Monk', 
    img:"/Images/book1.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Non_Fiction', 
    bestseller: true, 
    price: '600',
    originalPrice: '700', 
    ratings: 5
  },
  { 
    _id: uuid(), 
    productName: 'Alchemist', 
    img:"/Images/book1.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Fiction', 
    bestseller: true, 
    price: '800',
    originalPrice: '900', 
    ratings: 5
  },
  { 
    _id: uuid(), 
    productName: 'Rich Dad', 
    img:"/Images/book1.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Fiction', 
    bestseller: false, 
    price: '100',
    originalPrice: '300', 
    ratings: 3
  },
  { 
    _id: uuid(), 
    productName: 'Mathematics', 
    img:"/Images/book1.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Academics', 
    bestseller: false, 
    price: '500',
    originalPrice: '700', 
    ratings: 2
  },
  { 
    _id: uuid(), 
    productName: 'Sherlock Holmes', 
    img:"/Images/book1.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!', 
    seller: 'Genuine Books',
    category:'Non_Fiction', 
    bestseller: false, 
    price: '300',
    originalPrice: '500', 
    ratings: 4
  },
  { 
    _id: uuid(), 
    productName: 'Narnia', 
    img:"/Images/book1.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    seller: 'Genuine Books',
    category:'Fantasy', 
    bestseller: false, 
    price: '900',
    originalPrice: '1000', 
    ratings: 5
  },
  { 
    _id: uuid(), 
    productName: 'HyperFocus', 
    img:"/Images/book1.jpg", 
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
    img:"/Images/book1.jpg", 
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
    img:"/Images/book1.jpg", 
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
    img:"/Images/book1.jpg", 
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
    img:"/Images/book1.jpg", 
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
    img:"/Images/book1.jpg", 
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
    img:"/Images/book1.jpg", 
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
    img:"/Images/book1.jpg", 
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
    img:"/Images/book1.jpg", 
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
    img:"/Images/book1.jpg", 
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
    img:"/Images/book1.jpg", 
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
    img:"/Images/book1.jpg", 
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
    img:"/Images/book1.jpg", 
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
    img:"/Images/book1.jpg", 
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


