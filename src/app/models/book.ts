export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  cover?: string;

  // TODO (Q1.2 - 1 mark):
  // Modify the cart so that each book in the cart can have a quantity.
  // Add the quantity variable here so that books in the cart can track how many
  // copies the user has selected.
}
