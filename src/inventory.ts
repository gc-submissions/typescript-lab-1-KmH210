
// import { products } from "../src/products";
import { Product } from "../src/products";



interface InventoryItem {
    product: Product[]=[];
    quantity: number;

}


let inventory: InventoryItem [] = [
    { product.name: "motor", product.price: 10.00, quantity: 10 },
    { product.name: "sensor", product.price: 12.50, quantity: 4 },
    { product.name: "LED", product.price: 1.00, quantity: 20 },
]

let value: number = 0;
function calcInventoryValue(array: InventoryItem []): number {
    let value: number = 0;
    for (let item of array){
        value += product.price[item] * quantity[item];
    }
    return array.length === 0? 0: total;
}

calcInventoryValue(inventory);
console.log(value);

