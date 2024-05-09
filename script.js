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

const hasVegetarianDish = dishes.some(dish => {
    // Проверяем, содержит ли блюдо хотя бы один ингредиент, который не является мясом, тестом или сыром
    return dish.ingredients.some(ingredient => ingredient !== 'meat' && ingredient !== 'dough' && ingredient !== 'cheese');
});

// Выводим результат
if (hasVegetarianDish) {
    console.log("в меню есть хотя бы одно вегетарианское блюдо.");
} else {
    console.log("в меню нет вегетарианских блюд.");
}

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

const vegetarianDishes = dishes.filter(dish => {
    // Фильтруем только те блюда, у которых все ингредиенты являются вегетарианскими
    return dish.ingredients.every(ingredient => ingredient !== 'meat');
});

// Выводим результат
console.log("Вегетарианские блюда:", vegetarianDishes);
