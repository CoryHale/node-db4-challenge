exports.up = function(knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            tbl.increments();
            tbl.text('recipe_name', 128)
                .unique()
                .notNullable();
        })
        .createTable('ingredients', tbl => {
            tbl.increments();
            tbl.text('ingredient_name', 128)
                .unique()
                .notNullable()
            tbl.float('quantity')
                .notNullable();
        })
        .createTable('instructions', tbl => {
            tbl.increments();
            tbl.text('step_name', 128);
            tbl.text('step_instructions', 128);
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipes.id');
        })
        .createTable('recipes_ingredients', tbl => {
            tbl.integer('recipe_id')
                .unsigned()
                .notNullable()
                .references('recipes.id');
            tbl.integer('ingredients_id')
                .unsigned()
                .notNullable()
                .references('ingredients.id');
        })
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists('recipes_ingredients')
        .dropTableIfExists('instructions')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes');
};
