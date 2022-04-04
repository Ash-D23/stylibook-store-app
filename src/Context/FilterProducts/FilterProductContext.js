import { createContext, useContext, useReducer, useEffect } from "react";
import { filterreducerfn, initialfilters, productsreducerfn } from '../../Reducers';
import { sortproducts, filterproductsbyprice, filterproductsbysearch, filterproductsbyratings,filterproductsbycategory } from '../../Utilities'
import axios from "axios";
import { PRODUCTS_ACTIONS } from "../../Utilities";

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
        productdispatch({ type: PRODUCTS_ACTIONS.PRODUCT_LOADING , payload: true})
        try{
          let result = await axios.get('/api/products')
          productdispatch({ type: PRODUCTS_ACTIONS.SET_PRODUCTS , payload: result.data.products})
        }catch(err){
          console.error(err)
        }finally{
          productdispatch({ type: PRODUCTS_ACTIONS.PRODUCT_LOADING , payload: false})
        }
      }
    
      useEffect(() => {
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