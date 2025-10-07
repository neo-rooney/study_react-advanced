import { SplitScreen } from "./components/split-screen";

const LeftHandComponent = ({ title }: { title: string }) => {
  return <div style={{ backgroundColor: "red" }}>{title}</div>;
};

const RightHandComponent = ({ title }: { title: string }) => {
  return <div style={{ backgroundColor: "blue" }}>{title}</div>;
};

function App() {
  return (
    <SplitScreen leftWidth={1} rightWidth={3}>
      <LeftHandComponent title="Left Side" />
      <RightHandComponent title="Right Side" />
    </SplitScreen>
  );
}

export default App;
