/**
 * choice: Takes array and returns random element in the array
 */
function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}


/**
* remove: Takes array of items and an item. Removes the item from the
* array and returns the item.
*/
function remove(items, item) {
  if (items.indexOf(item) >= 0) {
    items.splice(items.indexOf(item), 1);
    return item;
  }
}


/**
* createTwoHands: Takes array of items. Returns 2 arrays of items.
*/
function createTwoHands(items) {
  const items1 = [];
  const items2 = [];
  const numItems = items.length;
  for (let i = 0; i < numItems / 2; i++) {
    const item1 = choice(items);
    items1.push(item1);
    remove(items, item1);


    const item2 = choice(items);
    items2.push(item2);
    remove(items, item2);
  }

  return [items1, items2];
}

export { createTwoHands };