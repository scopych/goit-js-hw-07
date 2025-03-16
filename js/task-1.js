'use strict';

const categories = document.querySelector('#categories');
const numberOfItems = categories.children.length;

console.log(`Number of categories: ${numberOfItems}`);

categories.classList.add('categories');

const items = categories.querySelectorAll('.item');

items.forEach(item => {
  const header = item.querySelector('h2');
  const h2Text = header.textContent;
  console.log(`Category: ${h2Text}`);
  const list = item.querySelector('ul');
  list.classList.add('item-list');
  const listItems = list.querySelectorAll('li');
  listItems.forEach(item => item.classList.add('item-list-item'));
  const numberOfItems = list.children.length;
  console.log(`Elements: ${numberOfItems}`);
});
