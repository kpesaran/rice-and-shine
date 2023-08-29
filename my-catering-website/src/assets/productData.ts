export interface Product {
    productName: string;
    id: number;
    price: number;
    image: string;
    ingredients?: string[];
    description?: string;
    includesPan?: boolean;
    onlyPan?: boolean;
    isVegan?: boolean;
    isVegetarian?: boolean;
    isGlutenFree?: boolean;
    //addOn: ProductData
  }
  
//nest products within eachother 
//make it flat

const productList: Product[] = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300',
      productName: 'Paella Kit',
      description: 'Paella Kit ',
      price: 29.99,
    },
    {
      id: 2,
      image: 'https://via.placeholder.com/300',
      productName: 'Paella Kit with Pan',
      description: 'Paella Kit with Pan',
      price: 39.99,
    },
    {
      id: 3,
      image: 'https://via.placeholder.com/300',
      productName: 'Product 3',
      description: 'This is a description of Product 3.',
      price: 19.99,
    },
    // Add more products as needed
  ];

  export default productList