# dsd-guided-project-2

migration is a map of the changes you have made to your code
commonly used migration commands
-- npx knex migrate: make name...

track Food aka menu items
menu_items table
- id: primary key, unsigned (no negative numbers) integer (no fractions)
- name: string, required (not null), unique, make searching by name fast
- price: floating point, not required
- available: boolean, default to false
