import paellaPic from "./images/paella-1.jpg";
import wings from "./images/wings.png";
import cickenChorizo from "./images/chicken-chorizo.png";
import asian from "./images/asian.png";
import veggie from "./images/veggie.png"
import matcha from "./images/matcha.png"
// Define the data types
export interface ItemData {
  itemName: string;
  price: number;
  image: string;
  ingredients: string[];
  isVegan: boolean;
  isVegetarian: boolean;
  isGlutenFree: boolean;
}

export interface SectionData {
  title: string;
  items: ItemData[];
}

// Combined data
export const data: SectionData[] = [
  {
    title: "Paella",
    items: [
      {
        itemName: "Seafood Paella",
        price: 18.99,
        ingredients: ["rice", "seafood", "seafood", "seafood","seafood", "vegetables",'garlic', 'saffron', 'paprika', 'bell peppers', 'onions'],
        image: paellaPic,
        isVegan: false,
        isVegetarian: false,
        isGlutenFree: true,
      },
      {
        itemName: "Vegetarian Paella",
        price: 18.99,
        ingredients: ["rice", "mushroom", "seafood", "vegetables", 'garlic', 'saffron', 'paprika', 'bell peppers', 'onions'],
        image: veggie,
        isVegan: true,
        isVegetarian: true,
        isGlutenFree: true,
      },
      {
        itemName: "Sweet Corn & Chicken Paella",
        price: 18.99,
        ingredients: ["rice", "seafood", "vegetables", 'garlic', 'saffron', 'paprika', 'bell peppers', 'onions'],
        image: veggie,
        isVegan: true,
        isVegetarian: true,
        isGlutenFree: true,
      },
      {
        itemName: "Chicken & Chorizo Paella",
        price: 18.99,
        ingredients: ["rice", "seafood", "vegetables",'garlic', 'saffron', 'paprika', 'bell peppers', 'onions'],
        image: cickenChorizo,
        isVegan: false,
        isVegetarian: false,
        isGlutenFree: true,
      },
    ],
  },
  {
    title: "Fusion Paellas",
    items: [
      {
        itemName: "Asian-Inspired Paella",
        price: 22,
        image: asian,
        ingredients: ["Shrimp", "Asparagus", "Mushrooms", "Bell Peppers", "Rice", "Soy Sauce", "Ginger", "Green Onions", "Sesame Oil", "Edamame", "Bok Choy"],
        isVegan: false,
        isVegetarian: false,
        isGlutenFree: true,
        },        
      {
        itemName: "Persian Fusion Paella",
        price: 26,
        image: asian,
        ingredients: ["Rice", "Saffron", "Pomegranate Seeds", "Chicken", "Almonds", "Pistachios", "Dried Apricots", "Cilantro", "Cumin", "Turmeric"],
        isVegan: false,
        isVegetarian: false,
        isGlutenFree: true,
      },
      {
        itemName: "Thai Fusion Paella",
        price: 25,
        image: asian,
        ingredients: ["Rice", "Lemongrass", "Coconut Milk", "Shrimp", "Red Curry Paste", "Kaffir Lime Leaves", "Fish Sauce", "Thai Basil", "Bell Peppers", "Snap Peas"],
        isVegan: false,
        isVegetarian: false,
        isGlutenFree: true,
      },
      
      {
        itemName: "Hawaiian Paella",
        price: 25,
        image: asian,
        ingredients: ["Chicken", "Pineapple", "Bell Peppers", "Rice"],
        isVegan: false,
        isVegetarian: false,
        isGlutenFree: true,
      },
      {
        itemName: "Colorado Green Chili Paella",
        price: 24,
        image: asian,
        ingredients: ["Rice", "Green Chilies", "Pork", "Tomatoes", "Onion", "Garlic", "Cilantro", "Cumin", "Oregano", "Chicken Stock"],
        isVegan: false,
        isVegetarian: false,
        isGlutenFree: true,
        },

      // Add more items here
    ],
  },
  {
    title: "Tapas & Appetizers",
    items: [
      {
        itemName: "Patatas Bravas",
        price: 6.99,
        ingredients: ["potatoes", "tomato sauce", "garlic aioli"],
        image: wings,
        isVegan:false,
        isVegetarian: true,
        isGlutenFree: true,
      },
      {
        itemName: "Jerk Chicken Wings",
        price: 12,
        image: wings,
        ingredients: ["Chicken Wings", "Jerk Seasoning", "Honey", "Soy Sauce"],
        isVegan: false,
        isVegetarian: false,
        isGlutenFree: true,
      },
      {
        itemName: "Chorizo Stuffed Mushrooms",
        price: 12,
        image: wings,
        ingredients: ["Mushrooms", "Chorizo", "Garlic", "Onion", "Parsley", "Breadcrumbs", "Olive Oil", "Manchego Cheese"],
        isVegan: false,
        isVegetarian: false,
        isGlutenFree: false,
      },
      {
        itemName: "Spanish Chorizo and Chickpea Stew",
        price: 12,
        image: wings,
        ingredients: ["Chorizo", "Chickpeas", "Olive Oil", "Onion", "Garlic", "Tomato Sauce", "Paprika", "Parsley"],
        isVegan: false,
        isVegetarian: false,
        isGlutenFree: true,
        },
        
        {
        itemName: "Gochujang Chicken Wings",
        price: 14,
        image: wings,
        ingredients: ["Chicken Wings", "Gochujang", "Soy Sauce", "Honey", "Garlic", "Ginger", "Sesame Seeds", "Green Onions"],
        isVegan: false,
        isVegetarian: false,
        isGlutenFree: true,
        },
        
        {
        itemName: "Spanish Olive and Cheese Skewers",
        price: 8,
        image: wings,
        ingredients: ["Manchego Cheese", "Green Olives", "Cherry Tomatoes", "Basil Leaves", "Anchovies", "Olive Oil", "Cracked Pepper", "Skewers"],
        isVegan: false,
        isVegetarian: true,
        isGlutenFree: true,
        },
        {
        itemName: "Falafal",
        price: 18,
        image: wings,
        ingredients: ["Falafal", "Olive Oil", "Garlic", "Lemon", "Paprika", "Parsley", "Tomato", "Arugula"],
        isVegan: true,
        isVegetarian: false,
        isGlutenFree: true,
        },
    ],
  },
  {
    title: "Drinks",
    items: [
      {
        itemName: "Sangria",
        price: 8.99,
        ingredients: ["red wine", "brandy", "fruit"],
        image: matcha,
        isVegan: true,
        isVegetarian: false,
        isGlutenFree: true,
      },
      {
        itemName: "Hibiscus Iced Tea",
        price: 5,
        image: matcha,
        ingredients: ["Hibiscus Flowers", "Water", "Lime Juice", "Agave Syrup"],
        isVegan: true,
        isVegetarian: true,
        isGlutenFree: true,
      },
      {
        itemName: "Ginger Beer",
        price: 4,
        image: matcha,
        ingredients: ["Ginger", "Sugar", "Water"],
        isVegan: true,
        isVegetarian: true,
        isGlutenFree: true,
      },
      {
        itemName: "Mango Margarita",
        price: 10,
        image: matcha,
        ingredients: ["Tequila", "Mango Juice", "Lime Juice", "Agave Syrup"],
        isVegan: true,
        isVegetarian: true,
        isGlutenFree: true,
      },
      {
        itemName: "Sangria de Cava",
        price: 12,
        image: matcha,
        ingredients: ["Cava", "Orange Liqueur", "Brandy", "Sugar", "Lemon Juice", "Orange Juice", "Sliced Fruit", "Mint Leaves"],
        isVegan: true,
        isVegetarian: true,
        isGlutenFree: true,
        },
        
        {
        itemName: "Mango Mojito",
        price: 10,
        image: matcha,
        ingredients: ["White Rum", "Mango Puree", "Mint Leaves", "Sugar", "Lime Juice", "Soda Water", "Crushed Ice", "Mango Slices"],
        isVegan: true,
        isVegetarian: true,
        isGlutenFree: true,
        },
        
        {
        itemName: "Horchata Martini",
        price: 14,
        image: matcha,
        ingredients: ["Vanilla Vodka", "RumChata", "Amaretto", "Cinnamon", "Simple Syrup", "Almond Milk", "Ice", "Cinnamon Stick"],
        isVegan: false,
        isVegetarian: true,
        isGlutenFree: true,
        },
        
        {
        itemName: "Jasmine Green Tea Sangria",
        price: 10,
        image: matcha,
        ingredients: ["White Wine", "Jasmine Green Tea", "Elderflower Liqueur", "Honey", "Lemon Juice", "Sliced Fruit", "Mint Leaves", "Club Soda"],
        isVegan: true,
        isVegetarian: true,
        isGlutenFree: true,
        },
    ],
  },
  // Add more sections and items as needed
];

