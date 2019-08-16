
exports.seed = function(knex, Promise) {
  return knex('ingredients').insert([
    {
      ingredient_name: 'cup of cereal',
      quantity: 1.0
    },
    {
      ingredient_name: 'cup of milk',
      quantity: 0.5
    },
    {
      ingredient_name: 'cup of water',
      quantity: 2.0
    },
    {
      ingredient_name: 'cubes of ice',
      quantity: 3.0
    },
    {
      ingredient_name: 'strips of bacon',
      quantity: 3.0
    },
    {
      ingredient_name: 'eggs',
      quantity: 2.0
    }
  ])
}