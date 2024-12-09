/*Sort products
You are given an array of product objects, each containing a name (string) and a price (number). Your task is to implement a 
function called sortProducts that sorts the products based on their prices in ascending order. 
*/
//smallest price
function sortProducts(obj) {
  let small = 0;
  for (let i = 0; i < obj.price.length; i++) {
    if (obj.price[i] < small) {
      small += obj.price;
    }
  }
  return small;
}
console.log(
  sortProducts({ name: ["paulette", "mitali", "rosine"], price: [20, 30, 10] })
);
