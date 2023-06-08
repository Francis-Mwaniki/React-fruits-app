import {   useState } from "react";

const RetrieveFruits = () => {

    type Fruit = {
        id: number;
        name: string;
        color: string;
        family: string;
        order: string;
        genus: string;
        nutritions: {
            carbohydrates: number;
            protein: number;
            fat: number;
            calories: number;
            sugar: number;
            
    };
    };
    const fruits = [
        {
          id: 1,
          name: "Apple",
          color: "red",
          family: "Rosaceae",
          order: "Rosales",
          genus: "Malus",
          nutritions: {
            carbohydrates: 13.8,
            protein: 0.3,
            fat: 0.4,
            calories: 52,
            sugar: 10.3,
          },
          image: "https://via.placeholder.com/150?text=Apple",
        },
        {
          id: 2,
          name: "Banana",
          color: "blue",
          family: "Musaceae",
          order: "Zingiberales",
          genus: "Musa",
          nutritions: {
            carbohydrates: 22,
            protein: 1,
            fat: 0.2,
            calories: 96,
            sugar: 17.2,
          },
          image: "https://via.placeholder.com/150?text=Banana",
        },
        {
          id: 3,
          name: "Orange",
          color: "orange",
          family: "Rutaceae",
          order: "Sapindales",
          genus: "Citrus",
          nutritions: {
            carbohydrates: 11.8,
            protein: 1,
            fat: 0.2,
            calories: 43,
            sugar: 9.4,
          },
          image: "https://via.placeholder.com/150?text=Orange",
        },
        {
            id: 4,
            name: "Mango",
            color: "blue",
            family: "Anacardiaceae",
            order: "Sapindales",
            genus: "Mangifera",
            nutritions: {
              carbohydrates: 14.98,
              protein: 0.82,
              fat: 0.38,
              calories: 60,
              sugar: 14.98,
            },
            image: "https://via.placeholder.com/150?text=Mango",
          },
          {
            id: 5,
            name: "Strawberry",
            color: "red",
            family: "Rosaceae",
            order: "Rosales",
            genus: "Fragaria",
            nutritions: {
              carbohydrates: 7.68,
              protein: 0.67,
              fat: 0.3,
              calories: 32,
              sugar: 4.89,
            },
            image: "https://via.placeholder.com/150?text=Strawberry",
          },
          {
            id: 6,
            name: "Pineapple",
            color: "blue",
            family: "Bromeliaceae",
            order: "Poales",
            genus: "Ananas",
            nutritions: {
              carbohydrates: 13.12,
              protein: 0.54,
              fat: 0.12,
              calories: 50,
              sugar: 9.85,
            },
            image: "https://via.placeholder.com/150?text=Pineapple",
          },
          {
            id: 7,
            name: "Grapes",
            color: "purple",
            family: "Vitaceae",
            order: "Vitales",
            genus: "Vitis",
            nutritions: {
              carbohydrates: 17,
              protein: 0.72,
              fat: 0.16,
              calories: 69,
              sugar: 16,
            },
            image: "https://via.placeholder.com/150?text=Grapes",
          },
          {
            id: 8,
            name: "Cherry",
            color: "red",
            family: "Rosaceae",
            order: "Rosales",
            genus: "Prunus",
            nutritions: {
              carbohydrates: 12.2,
              protein: 1.1,
              fat: 0.2,
              calories: 50,
              sugar: 8.5,
            },
            image: "https://via.placeholder.com/150?text=Cherry",
          },
          {
            id: 9,
            name: "Kiwi",
            color: "teal",
            family: "Actinidiaceae",
            order: "Ericales",
            genus: "Actinidia",
            nutritions: {
              carbohydrates: 14.66,
              protein: 1.14,
              fat: 0.52,
              calories: 61,
              sugar: 8.75,
            },
            image: "https://via.placeholder.com/150?text=Kiwi",
          },
          {
            id: 10,
            name: "Pear",
            color: "green",
            family: "Rosaceae",
            order: "Rosales",
            genus: "Pyrus",
            nutritions: {
              carbohydrates: 15.23,
              protein: 0.38,
              fat: 0.12,
              calories: 57,
              sugar: 9.8,
            },
            image: "https://via.placeholder.com/150?text=Pear",
          },
          {
            id: 11,
            name: "Pomegranate",
            color: "red",
            family: "Lythraceae",
            order: "Myrtales",
            genus: "Punica",
            nutritions: {
              carbohydrates: 17.17,
              protein: 0.95,
              fat: 1.17,
              calories: 83,
              sugar: 16.57,
            },
            image: "https://via.placeholder.com/150?text=Pomegranate",
          },
          {
            id: 12,
            name: "Blueberry",
            color: "blue",
            family: "Ericaceae",
            order: "Ericales",
            genus: "Vaccinium",
            nutritions: {
              carbohydrates: 14.49,
              protein: 0.74,
              fat: 0.33,
              calories: 57,
              sugar: 9.96,
            },
            image: "https://via.placeholder.com/150?text=Blueberry",
          },
          {
            id: 13,
            name: "Raspberry",
            color: "red",
            family: "Rosaceae",
            order: "Rosales",
            genus: "Rubus",
            nutritions: {
              carbohydrates: 12,
              protein: 1.2,
              fat: 0.65,
              calories: 53,
              sugar: 4.4,
            },
            image: "https://via.placeholder.com/150?text=Raspberry",
          },
          {
            id: 14,
            name: "Peach",
            color: "orange",
            family: "Rosaceae",
            order: "Rosales",
            genus: "Prunus",
            nutritions: {
              carbohydrates: 9.54,
              protein: 0.91,
              fat: 0.25,
              calories: 39,
              sugar: 8.39,
            },
            image: "https://via.placeholder.com/150?text=Peach",
          },
        {
          id: 15,
          name: "Watermelon",
          color: "green",
          family: "Cucurbitaceae",
          order: "Cucurbitales",
          genus: "Citrullus",
          nutritions: {
            carbohydrates: 7.6,
            protein: 0.6,
            fat: 0.2,
            calories: 30,
            sugar: 6.2,
          },
          image: "https://via.placeholder.com/150?text=Watermelon",
        },
      ];
 
      
    const [Fruits] = useState<Fruit[]>(fruits)
   
 


    
      return (
        <div className="container mx-auto py-8">
          <h2 className="text-2xl font-bold mb-4">Fruits</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Fruits.map((fruit) => (
              <div
                key={fruit.id}
                className={` p-4 rounded-lg shadow-md`}
                style={{ backgroundColor: `${fruit.color}` }}
              >
                <h2 className="text-lg text-gray-200 font-bold mb-2">
                  <span className="px-4 text-white text-xl">name</span> ---- {fruit.name}
                </h2>
                <p className="text-sm text-gray-200 font-medium">
                <span className="px-4 text-white text-xl">family</span> ---- {fruit.family}
                </p>
                <p className="text-sm text-gray-200 font-medium">
                <span className="px-4 text-white text-xl">order</span> ---- {fruit.order}
                </p>
                <p className="text-sm text-gray-200 font-medium">
                <span className="px-4 text-white text-xl">genus</span> ---- {fruit.genus}
                </p>
                <p className="text-sm text-gray-200 font-medium">
                <span className="px-4 text-white text-xl">color</span> ----  {fruit.color}
                </p>
                <p className="text-sm text-gray-200 font-medium">
             <span className="px-4 text-white text-xl">calories</span> ----  {fruit.nutritions.calories}
                </p>
                <p className="text-sm text-gray-200 font-medium">
        <span className="px-4 text-white text-xl">carbohydrates</span> ----{fruit.nutritions.carbohydrates}
                </p>
                <p className="text-sm text-gray-200 font-medium">
                 <span className="px-4 text-white text-xl">fat</span> ----  {fruit.nutritions.fat}
                </p>
                <p className="text-sm text-gray-200 font-medium">
             <span className="px-4 text-white text-xl">protein</span> ---- {fruit.nutritions.protein}
                </p>
                <p className="text-sm text-gray-200 font-medium">
               <span className="px-4 text-white text-xl">sugar</span> ----{fruit.nutritions.sugar}
                </p>
              </div>
            ))}
          </div>
        </div>
        );
    }

export default RetrieveFruits