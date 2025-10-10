import React, { useState, useEffect } from "react";

export const DataResourceWithRender = ({ getData = () => {}, render }) => {
  const [resource, setResource] = useState(null);

  useEffect(() => {
    const fetchResource = async () => {
      const data = await getData();
      setResource(data);
    };
    fetchResource();
  }, [getData]);

  return render(resource);
};
