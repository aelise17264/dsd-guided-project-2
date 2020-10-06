// record all changes to the database schema, this is not editing the db

//the up() function defines/holds/describes the changes to apploy to the db when the migration runs
exports.up = function(knex) {
  //ALWAYS begin w/ a return
    return knex.schema.createTable('menu_items', tbl => {
        //primary key called 'id', unsigned, integer, autoincrementing  
        tbl.increments();
        //index() makes searching by this column faster
        tbl.string('name', 512).notNullable().unique().index();
        tbl.decimal('price', 8, 2);
        //relational databases store booleans as 1(true) & 0(false)
        tbl.boolean('available').defaultTo(false);
    })
};

//the down() function describes how to undo the changes
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('menu_items')
};
