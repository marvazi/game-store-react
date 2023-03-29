export const cartTotalPrice = (items) =>
  items.reduce((acc, game) => (acc += game.price), 0);
