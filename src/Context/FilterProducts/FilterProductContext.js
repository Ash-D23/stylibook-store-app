import { createContext, useContext, useReducer, useEffect } from "react";
import { productsreducerfn } from '../Reducers/Products/ProductsReducer';
import { filterreducerfn, initialfilters } from '../Reducers/Filters/FiltersReducer';
import { sortproducts, filterproductsbyprice, filterproductsbysearch, filterproductsbyratings,filterproductsbycategory } from '../Utilities/FilterProducts'

const FilterProductContext  = createContext()

const useFilterProducts = () => useContext(FilterProductContext)

const productsdata = [{id: 1, productName: 'Do Epic SHit', img:"/Images/book1.jpg", category:'fiction', bestSeller: true, price: '500', ratings: 5}, {id: 2, img:"/Images/book1.jpg", productName: 'Alchemist',category:'academics', bestSeller: false, price: '100', ratings: 3}, 
{id: 3, productName: 'Mathematics', img:"/Images/book1.jpg", bestSeller: false, price: '300', ratings: 3}, {id: 4, img:"/Images/book1.jpg", productName: 'Rich Dad', bestSeller: true, price: '900', ratings: 2}]

const categorydata = [{id: 1, imgurl: '/Images/book.jpg', CategoryName: 'fiction'}, {id: 2, imgurl: '/Images/book.jpg', CategoryName: 'non__fiction'}, {id: 3, imgurl: '/Images/book.jpg', CategoryName: 'academics'}, {id: 4, imgurl: '/Images/book.jpg', CategoryName: 'fantasy'}]

const FilterProductsProvider = ({children}) => {

    const [productstate, productdispatch] = useReducer(productsreducerfn, {
        products: []
      });
    
      const [filterstate, filterdispatch] = useReducer(
        filterreducerfn,
        initialfilters
      );
    
      useEffect(() => {
        productdispatch({ type: "setproducts", payload: productsdata });
      }, []);
    
      const filterproducts = (products) => {
        
        const filteredproductsbyprice = filterproductsbyprice(products, filterstate.priceRange)
        const filteredproductsbycategory = filterproductsbycategory(filteredproductsbyprice, filterstate.category)
        const filteredproductsbyratings = filterproductsbyratings(filteredproductsbycategory, filterstate.ratings)
        const filteredproductsbysearch = filterproductsbysearch(filteredproductsbyratings, filterstate.search)
        const sortedproducts = sortproducts(filteredproductsbysearch, filterstate.sort)
        
        return sortedproducts
      }
    
      const filteredproducts = filterproducts(productstate.products);

    return <FilterProductContext.Provider value={{ filterstate, filterdispatch, filteredproducts}}>
        {children}
    </FilterProductContext.Provider>
}

export { useFilterProducts, FilterProductsProvider}