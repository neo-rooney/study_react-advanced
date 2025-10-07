import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div<{ flex: number }>`
  flex: ${(props) => props.flex};
`;

export const SplitScreen = ({
  children,
  leftWidth = 1,
  rightWidth = 1,
}: {
  children: [React.ReactNode, React.ReactNode];
  leftWidth?: number;
  rightWidth?: number;
}) => {
  const [left, right] = children;
  return (
    <Container>
      <Pane flex={leftWidth}>{left}</Pane>
      <Pane flex={rightWidth}>{right}</Pane>
    </Container>
  );
};
