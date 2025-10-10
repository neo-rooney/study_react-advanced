import React, { useState, useEffect } from "react";

export const DataResource = ({
  getData = () => {},
  resourceName,
  children,
}) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const fetchResource = async () => {
      const data = await getData();
      setResource(data);
    };
    fetchResource();
  }, [getData]);

  return (
    <>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { [resourceName]: resource });
        }
        return child;
      })}
    </>
  );
};
