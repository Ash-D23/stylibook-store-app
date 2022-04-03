import { createContext, useContext, useReducer, useEffect } from "react";
import { filterreducerfn, initialfilters, productsreducerfn } from '../../Reducers';
import { sortproducts, filterproductsbyprice, filterproductsbysearch, filterproductsbyratings,filterproductsbycategory } from '../../Utilities/FilterProducts'
import axios from "axios";

const FilterProductContext  = createContext()

const useFilterProducts = () => useContext(FilterProductContext)

const FilterProductsProvider = ({children}) => {

    const [productstate, productdispatch] = useReducer(productsreducerfn, {
        products: [],
        isLoading: false
      });
    
      const [filterstate, filterdispatch] = useReducer(
        filterreducerfn,
        initialfilters
      );

      const getProducts = async () => {
        try{
          let result = await axios.get('/api/products')
          productdispatch({ type: 'setproducts' , payload: result.data.products})
          productdispatch({ type: 'productLoading' , payload: false})
          
        }catch(err){
          console.log(err)
          productdispatch({ type: 'productLoading' , payload: false})
        }
      }
    
      useEffect(() => {
        productdispatch({ type: 'productLoading' , payload: true})
        getProducts()
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
      const Loading = productstate.isLoading

    return <FilterProductContext.Provider value={{ filterstate, Loading, filterdispatch, filteredproducts}}>
        {children}
    </FilterProductContext.Provider>
}

export { useFilterProducts, FilterProductsProvider}