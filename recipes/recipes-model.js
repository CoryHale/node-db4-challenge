const db = require('../data/db-config');

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions
}

function getRecipes() {
    return db('recipes');
};

function getShoppingList(recipe_id) {
    return db('recipes as r')
        .join('recipes_ingredients as rec_ing', 'r.id', 'rec_ing.recipe_id')
        .join('ingredients as i', 'rec_ing.ingredients_id', 'i.id')
        .select('i.ingredient_name', 'i.quantity')
        .where({recipe_id});
}

function getInstructions(recipe_id) {
    return db('recipes as r')
        .join('instructions as steps', 'r.id', 'steps.recipe_id')
        .select('steps.step_name', 'steps.step_instructions')
        .where({recipe_id});
}