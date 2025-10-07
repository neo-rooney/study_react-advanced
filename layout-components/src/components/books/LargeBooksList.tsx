import type { Book } from "../../data/books";

export const LargeBooksList = ({ book }: { book: Book }) => {
  const { title, pages, name, price } = book;

  return (
    <div>
      <div>Title: {title}</div>
      <div>Pages: {pages}</div>
      <div>Name: {name}</div>
      <div>Price: {price}</div>
      <hr />
    </div>
  );
};
