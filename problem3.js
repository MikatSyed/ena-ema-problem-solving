// const customers = [
//     { id: 1, name: "Alice", orders: 3 },
//     { id: 2, name: "Bob", orders: 8 },
//     { id: 3, name: "Charlie", orders: 15 },
//   ];
  
// const segmentCustomers = (customers) =>{
//  for(let i = )
// }

//   console.log(segmentCustomers(customers));
  // Output: {
  //   Low: ["Alice"],
  //   Medium: ["Bob"],
  //   High: ["Charlie"]
  // }

//   function getCarNameById(carId) {
//     switch (carId) {
//       case 1:
//         return 'Audi';
//       case 2:
//         return 'Ferrari';
//       case 3:
//         return 'Mercedes';
//       default:
//         return 'Toyota';
//     }
//   }
function getCarNameById(carId) {
    if(carId == 1){
        return 'Audi';
    }else if(carId == 2){
        return 'Ferrari';
    }else if(carId == 3){
        return 'Mercedes';
    }else {
        return 'Toyota'; 
    }
}
  
  console.log(getCarNameById(1));
  console.log(getCarNameById(2));
  console.log(getCarNameById(3));
  console.log(getCarNameById(5));