
exports.seed = function(knex, Promise) {
  return knex('instructions').insert([
    {
      recipe_id: 1,
      step_name: 'grab cereal',
      step_instructions: 'pour a cup of cereal'
    },
    {
      recipe_id: 1,
      step_name: 'add milk',
      step_instructions: 'add a half cup of milk'
    },
    {
      recipe_id: 2,
      step_name: 'grab ice',
      step_instructions: 'grab 3 cubes of cereal'
    },
    {
      recipe_id: 2,
      step_name: 'add water',
      step_instructions: 'add a cup of water'
    },
    {
      recipe_id: 3,
      step_name: 'cook bacon',
      step_instructions: 'cook 3 strips of bacon'
    },
    {
      recipe_id: 3,
      step_name: 'cook eggs',
      step_instructions: 'cook 2 eggs'
    },
    {
      recipe_id: 3,
      step_name: 'pour milk',
      step_instructions: 'pour a cup of milk'
    }
  ])
}
