db = db.getSiblingDB('ecommerce');

db.createCollection('users');

db.users.insertMany([
  { name: 'Allen Decor', email: 'alend@as.com', password: 'pwd1', isAdmin: false },
  { name: 'Ben Soter', email: 'bens@se.com', password: 'pwd2', isAdmin: false },
  { name: 'Camy Re', email: 'camyr@rt.com', password: 'pwd3', isAdmin: true },
]);