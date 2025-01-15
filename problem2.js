const product = {
    id: 1,
    stock: [
      { warehouse: "A", quantity: 10 },
      { warehouse: "B", quantity: 5 },
      { warehouse: "C", quantity: 8 },
    ],
  };

  const allocateStock= (product, orderQuantity)=>{
  
   
  }
  
  const orderQuantity = 12;
  console.log(allocateStock(product, orderQuantity));
  // Output: [
  //   { warehouse: "A", quantity: 10 },
  //   { warehouse: "B", quantity: 2 }
  // ]