export const BasicList = ({
  items,
  sourceName,
  ItemComponent,
}: {
  items: unknown[];
  sourceName: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ItemComponent: React.ComponentType<any>;
}) => {
  return (
    <div>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [sourceName]: item }} />
      ))}
    </div>
  );
};
