import type { Book } from "../../data/books";

export const SmallBooksList = ({ book }: { book: Book }) => {
  const { title, price } = book;
  return (
    <div>
      {title} / {price}
      <hr />
    </div>
  );
};
