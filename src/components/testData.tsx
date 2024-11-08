//Going to move my testData into State so that the app can work dynamically




export interface Item {
    id?: number;
    name: string;
    price: number; 
    quantity: number; 
}

//lets define the testItems array with the Item[] type
export const testItems: Item[] = [
    { id: 1, name: "Laptop", price: 125, quantity: 2},
    { id: 2, name: "Cellphone", price: 85, quantity: 3},
    { id: 3, name: "Camera", price: 250, quantity: 4},
];
//need somthing to calculate total of items that are picked
export const calculateTotal = (items: Item[]): number => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0)
};

export const totalAmount = calculateTotal(testItems); 


