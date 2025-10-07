import { LargeAuthorsList } from "./components/authors/LargeAuthorsList";
import { SmallAuthorsList } from "./components/authors/SmallAuthorsList";
import { BasicList } from "./components/list/BasicList";
import { authors } from "./data/authors";
import { books } from "./data/books";
import { LargeBooksList } from "./components/books/LargeBooksList";
import { SmallBooksList } from "./components/books/SmallBooksList";

// const LeftHandComponent = ({ title }: { title: string }) => {
//   return <div style={{ backgroundColor: "red" }}>{title}</div>;
// };

// const RightHandComponent = ({ title }: { title: string }) => {
//   return <div style={{ backgroundColor: "blue" }}>{title}</div>;
// };

function App() {
  return (
    // <SplitScreen leftWidth={1} rightWidth={3}>
    //   <LeftHandComponent title="Left Side" />
    //   <RightHandComponent title="Right Side" />
    // </SplitScreen>
    <>
      <BasicList
        items={authors}
        sourceName="author"
        ItemComponent={LargeAuthorsList}
      />
      <BasicList
        items={authors}
        sourceName="author"
        ItemComponent={SmallAuthorsList}
      />
      <BasicList
        items={books}
        sourceName="book"
        ItemComponent={LargeBooksList}
      />
      <BasicList
        items={books}
        sourceName="book"
        ItemComponent={SmallBooksList}
      />
    </>
  );
}

export default App;
