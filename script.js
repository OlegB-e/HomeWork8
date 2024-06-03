const dishes = [
    {
        name: "Buzza",
        ingredients: ['dough', 'meat', 'onions']
    },
    {
        name: "Pies",
        ingredients: ['dough', 'meat', 'onions', 'potato'],
    },
    {
        name: "Pizza",
        ingredients: ['dough', 'pepperoni', 'tomatoes', 'cheese']
    },
    {
        name: "Salad",
        ingredients: ['tomatoes', 'cucumbers']
    }
];

const ingredientPrices = {
    meat: 2,
    dough: 1,
    onions: 0.5,
    potato: 1,
    pepperoni: 1.5,
    tomatoes: 1,
    cheese: 2,
    cucumbers: 1
};

// Добавляем массив с невегетарианскими ингредиентами
const nonVegetarianIngredients = ['meat', 'pepperoni'];

// Функция для вычисления себестоимости блюда
const calculateCost = (ingredients) => {
    return ingredients.reduce((acc, ingredient) => acc + ingredientPrices[ingredient], 0);
};

// Используем map для обновления массива dishes
const updatedDishes = dishes.map(dish => ({
    ...dish,
    costOfPreparation: calculateCost(dish.ingredients)
}));

console.log(updatedDishes);

// Используем map, чтобы получить массив объектов с названием и стоимостью каждого блюда
const dishesWithCost = updatedDishes.map(dish => ({
    name: dish.name,
    costOfPreparation: dish.costOfPreparation
}));

console.log(dishesWithCost);

// Используем some для определения, есть ли в меню хотя бы одно вегетарианское блюдо
const hasVegetarianDish = dishes.some(dish => 
    dish.ingredients.every(ingredient => !nonVegetarianIngredients.includes(ingredient))
);

// Выводим результат
if (hasVegetarianDish) {
    console.log("в меню есть хотя бы одно вегетарианское блюдо.");
} else {
    console.log("в меню нет вегетарианских блюд.");
}

// Используем every для определения, полностью ли у нас вегетарианское меню
const isFullyVegetarianMenu = dishes.every(dish => 
    dish.ingredients.every(ingredient => !nonVegetarianIngredients.includes(ingredient))
);

// Выводим результат
if (isFullyVegetarianMenu) {
    console.log("полностью вегетарианское меню.");
} else {
    console.log("не полностью вегетарианское меню.");
}

// Используем filter для создания массива с вегетарианскими блюдами
const vegetarianDishes = dishes.filter(dish => 
    dish.ingredients.every(ingredient => !nonVegetarianIngredients.includes(ingredient))
);

// Выводим результат
console.log("Вегетарианские блюда:", vegetarianDishes);
