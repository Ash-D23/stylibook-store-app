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
    bestSeller: true, 
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
    bestSeller: true, 
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
    bestSeller: true, 
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
    bestSeller: false, 
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
    bestSeller: false, 
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
    bestSeller: false, 
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
    bestSeller: false, 
    price: '900',
    originalPrice: '1000', 
    ratings: 5
  },
];


