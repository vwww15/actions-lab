
/*
  Лабораторна робота
  Визначення дій (Actions) для управління станом

  Завдання 1. Список покупок
*/

// Константи типів дій
const ADD_PRODUCT = 'ADD_PRODUCT';
const REMOVE_PRODUCT = 'REMOVE_PRODUCT';
const UPDATE_QUANTITY = 'UPDATE_QUANTITY';

// Генератори дій
const addProduct = (product) => ({
  type: ADD_PRODUCT,
  payload: product
});

const removeProduct = (id) => ({
  type: REMOVE_PRODUCT,
  payload: id
});

const updateQuantity = (id, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity }
});

// Перевірка в консолі
console.log('Завдання 1. Список покупок');

console.log(
  addProduct({
    id: 1,
    name: 'Молоко',
    quantity: 2
  })
);

console.log(removeProduct(1));

console.log(updateQuantity(1, 5));


/*
  Завдання 2. Управління користувачами
*/

// Константи типів дій
const ADD_USER = 'ADD_USER';
const REMOVE_USER = 'REMOVE_USER';
const UPDATE_USER = 'UPDATE_USER';

// Генератори дій
const addUser = (user) => ({
  type: ADD_USER,
  payload: user
});

const removeUser = (id) => ({
  type: REMOVE_USER,
  payload: id
});

const updateUser = (id, updatedFields) => ({
  type: UPDATE_USER,
  payload: { id, updatedFields }
});

// Перевірка в консолі
console.log('\nЗавдання 2. Управління користувачами');

console.log(
  addUser({
    id: 1,
    name: 'Олена',
    email: 'olena@example.com'
  })
);
// Очікувано: type: ADD_USER, дані нового користувача

console.log(removeUser(1));
// Очікувано: type: REMOVE_USER, payload: 1

console.log(
  updateUser(1, {
    email: 'olena.new@example.com'
  })
);
// Очікувано: type: UPDATE_USER, оновлена електронна пошта


/*
  Завдання 3. Actions для Todo-списку
*/

// Константи типів дій
const ADD_TODO = 'ADD_TODO';
const REMOVE_TODO = 'REMOVE_TODO';
const TOGGLE_TODO = 'TOGGLE_TODO';
const EDIT_TODO = 'EDIT_TODO';

// Генератори дій
const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo
});

const removeTodo = (id) => ({
  type: REMOVE_TODO,
  payload: id
});

const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id
});

const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: { id, text }
});

// Перевірка в консолі
console.log('\nЗавдання 3. Todo-список');

console.log(
  addTodo({
    id: 1,
    text: 'Вивчити JavaScript',
    done: false
  })
);
// Очікувано:
// {
//   type: 'ADD_TODO',
//   payload: { id: 1, text: 'Вивчити JavaScript', done: false }
// }

console.log(removeTodo(1));
// Очікувано:
// { type: 'REMOVE_TODO', payload: 1 }

console.log(toggleTodo(1));
// Очікувано:
// { type: 'TOGGLE_TODO', payload: 1 }

console.log(editTodo(1, 'Вивчити Redux Actions'));
// Очікувано:
// {
//   type: 'EDIT_TODO',
//   payload: { id: 1, text: 'Вивчити Redux Actions' }
// }

