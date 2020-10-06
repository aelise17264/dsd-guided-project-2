# dsd-guided-project-2

configure knex connections
-npm i -g knex
- knex init

migration is a map of the changes you have made to your code
commonly used migration commands
this creates a new migration file
-- npx knex migrate: make name...
run migration
- npx knex migrate:latest
this means "run pending migrations to update the database"
- npx knex migrate:rollback
this undoes the changes from the last migration

----->these changes are not in the database they are just in the code

track Food aka menu items
menu_items table
- id: primary key, unsigned (no negative numbers) integer (no fractions)
- name: string, required (not null), unique, make searching by name fast
- price: floating point, not required
- available: boolean, default to false

clients table

-id:  primary key, string(128), unique, required
- email: string, unique, indexed
- name: string, indexed

categories
- id: uuid(universally unique identifier), primary key
- breakfast: string, unique, indexed
- lunch: string, unique, indexed
- dinner: string, unique, indexed