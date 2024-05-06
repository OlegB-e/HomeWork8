//Используем данные с прошлого заданий.
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
        ingredient: ['tomatoes', 'cucumbers']
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

//1. Используем reduce для вычисления общей стоимости приготовления блюда.
const updatedDishes = dishes.map(dish => {
    const costOfPreparation = dish.ingredients.reduce((acc, ingredient) => {
        return acc + ingredientPrices[ingredient];
    }, 0);
    return {...dish, costOfPreparation};
});

console.log(updatedDishes);


// 2.Используем map, чтобы получить массив объектов с названием и стоимостью каждого блюда
const dishesWithCost = updatedDishes.map(dish => {
    return { name: dish.name, costOfPreparation: dish.costOfPreparation };
});

console.log(dishesWithCost);

//3.Используем метод some для определения, есть ли в меню хоть одно вегетарианское блюдо
const hasVegetarianDish = dishes.some(dish => {
    // Проверяем, содержит ли блюдо хотя бы один ингредиент, который не является мясом
    return dish.ingredients.some(ingredient => ingredient !== 'meat');
});

// Выводим результат
if (hasVegetarianDish) {
    console.log("в меню есть хотя бы одно вегетарианское блюдо.");
} else {
    console.log("в меню нет вегетарианских блюд.");
}

//4.Используем метод every для определения, полностью ли у нас вегетарианское меню
const isFullyVegetarianMenu = dishes.every(dish => {
    // Проверяем, все ли ингредиенты в блюде являются вегетарианскими
    return dish.ingredients.every(ingredient => ingredient !== 'meat');
});

// Выводим результат
if (isFullyVegetarianMenu) {
    console.log("полностью вегетарианское меню.");
} else {
    console.log("не полностью вегетарианское меню.");
}

//5.Используем метод filter для создания массива с вегетарианскими блюдами
const vegetarianDishes = dishes.filter(dish => {
    // Фильтруем только те блюда, у которых все ингредиенты являются вегетарианскими
    return dish.ingredients.every(ingredient => ingredient !== 'meat');
});

// Выводим результат
console.log("Вегетарианские блюда:", vegetarianDishes);
