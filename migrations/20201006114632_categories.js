
exports.up = function(knex) {
    return knex.schema.createTable('categories', tbl => {
        tbl.uuid('id').primary();
        tbl.string('breakfast').unique().index()
        tbl.string('lunch').unique().index()
        tbl.string('dinner').unique().index()
  
  
       // tbl.primary('id')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('clients')
  };