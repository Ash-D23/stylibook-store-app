export const sortproducts = (products, sortby) => {
    let newproducts = [...products]
    if (sortby === "asc") {
      newproducts.sort((a, b) => a.price - b.price);
    } else {
      newproducts.sort((a, b) => b.price - a.price);
    }
    return newproducts
  }

export const filterproductsbyprice = (products, range) => {
    return [...products].filter((item)=> parseInt(item.price) <= range)
}

export const filterproductsbyratings = (products, rating) => {
    if(rating==="all"){
        return products
    }
    return [...products].filter((item) => item.ratings >= parseInt(rating))
}

export const filterproductsbycategory = (products, category) => {
    if(category.all){
        return products
    }

    // filter the category which are true
    let categoryfiltersarray = Object.entries(category).filter((item) => item[1]).map((item)=> item[0])

    return [...products].filter((item) => categoryfiltersarray.some((val)=> val===item.category))
}

export const filterproductsbysearch = (products, search) => {
  return [...products].filter((item) => item.productName.toLowerCase().includes(search.toLowerCase()))
}