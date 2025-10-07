import type { Author } from "../../data/authors";

export const LargeAuthorsList = ({ author }: { author: Author }) => {
  const { name, age, country, books } = author;

  return (
    <div>
      {name} {age} {country}
      <br />
      <ul>
        {books.map((book) => (
          <li key={book}>{book}</li>
        ))}
      </ul>
    </div>
  );
};
