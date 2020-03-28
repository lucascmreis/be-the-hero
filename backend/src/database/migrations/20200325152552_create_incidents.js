
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function(table){
      table.increments() //cria chave primaria autoincrementada

      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();
      
      //cria um relacionamento com chave estrangeira: 
      table.string('ong_id').notNullable();

      table.foreign('ong_id').references('id').inTable('ongs');

  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents');
};
