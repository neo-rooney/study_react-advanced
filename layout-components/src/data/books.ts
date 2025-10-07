export interface Book {
  title: string;
  pages: number;
  name: string;
  price: number;
}

export const books: Book[] = [
  {
    title: "Book 1",
    pages: 100,
    name: "To Kill a Mockingbird",
    price: 10,
  },
  {
    title: "Book 2",
    pages: 200,
    name: "1984",
    price: 20,
  },
  {
    title: "Book 3",
    pages: 300,
    name: "The Great Gatsby",
    price: 30,
  },
  {
    title: "Book 4",
    pages: 400,
    name: "Pride and Prejudice",
    price: 40,
  },
  {
    title: "Book 5",
    pages: 500,
    name: "The Catcher in the Rye",
    price: 50,
  },
  {
    title: "Book 6",
    pages: 600,
    name: "The Lord of the Rings",
    price: 60,
  },
];
