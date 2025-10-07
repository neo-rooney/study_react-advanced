import type { Author } from "../../data/authors";

export const SmallAuthorsList = ({ author }: { author: Author }) => {
  const { name, age } = author;
  return (
    <div>
      {name} {age}
    </div>
  );
};
