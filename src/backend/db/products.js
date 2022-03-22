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
    category:'non__fiction', 
    Seller: 'Genuine Books',
    bestSeller: true, 
    price: '500',
    originalprice: '700', 
    ratings: 5
  },,
  { 
    _id: uuid(), 
    productName: 'Think Like a Monk', 
    img:"/Images/book1.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    category:'non__fiction', 
    Seller: 'Genuine Books',
    bestSeller: true, 
    price: '600',
    originalprice: '700', 
    ratings: 5
  },,
  { 
    _id: uuid(), 
    productName: 'Alchemist', 
    img:"/Images/book1.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    category:'fiction', 
    Seller: 'Genuine Books',
    bestSeller: true, 
    price: '800',
    originalprice: '900', 
    ratings: 5
  },,
  { 
    _id: uuid(), 
    productName: 'Rich Dad', 
    img:"/Images/book1.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    category:'fiction', 
    Seller: 'Genuine Books',
    bestSeller: false, 
    price: '100',
    originalprice: '300', 
    ratings: 3
  },
  { 
    _id: uuid(), 
    productName: 'Mathematics', 
    img:"/Images/book1.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    category:'academics', 
    Seller: 'Genuine Books',
    bestSeller: false, 
    price: '500',
    originalprice: '700', 
    ratings: 2
  },
  { 
    _id: uuid(), 
    productName: 'Sherlock Holmes', 
    img:"/Images/book1.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    category:'non__fiction', 
    Seller: 'Genuine Books',
    bestSeller: false, 
    price: '300',
    originalprice: '500', 
    ratings: 4
  },
  { 
    _id: uuid(), 
    productName: 'Narnia', 
    img:"/Images/book1.jpg", 
    description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem quos natus, recusandae, consequatur amet accusantium, suscipit aut nam harum reprehenderit nesciunt voluptates id? Veniam amet aperiam totam corrupti at unde!',
    category:'fantasy', 
    Seller: 'Genuine Books',
    bestSeller: false, 
    price: '900',
    originalprice: '1000', 
    ratings: 5
  },
];


