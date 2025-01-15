const products = [
    { id: 1, name: "Laptop", price: 800, category: "Electronics", available: true },
    { id: 2, name: "Shoes", price: 50, category: "Fashion", available: false },
    { id: 3, name: "Phone", price: 500, category: "Electronics", available: true },
  ];
  
  const criteria = { priceRange: [400, 1000], category: "Electronics", available: true };

  const filterProducts =(products,criteria)=>{
  console.log(criteria.priceRange[0])
  const result = products.filter((ele,i,arr)=> products[i].price > criteria?.priceRange[0] || products[i].price > criteria?.priceRange[0] || criteria?.category === products[i].category )
  console.log(result

  )
  }
  
  console.log(filterProducts(products, criteria));

  // Output: [{ id: 3, name: "Phone", price: 500, category: "Electronics", available: true }]