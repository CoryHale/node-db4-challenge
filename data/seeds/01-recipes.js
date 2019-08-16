
exports.seed = function(knex, Promise) {
  return knex('recipes').insert([
    {recipe_name: 'Breakfast Cereal'},
    {recipe_name: 'Ice Water'},
    {recipe_name: 'Bacon & Eggs'}
  ]);
};