export interface Author {
  name: string;
  age: number;
  country: string;
  books: string[];
}

export const authors: Author[] = [
  {
    name: "John Doe",
    age: 30,
    country: "United States",
    books: ["Book 1", "Book 2", "Book 3"],
  },
  {
    name: "Jane Doe",
    age: 25,
    country: "United Kingdom",
    books: ["Book 4", "Book 5", "Book 6"],
  },
  {
    name: "Jim Beam",
    age: 40,
    country: "Canada",
    books: ["Book 7", "Book 8", "Book 9"],
  },
  {
    name: "Jill Johnson",
    age: 35,
    country: "Australia",
    books: ["Book 10", "Book 11", "Book 12"],
  },
];
