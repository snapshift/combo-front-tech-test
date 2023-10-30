/**
 * There are some performances issues in the component.
 * Refactor it to improve performances
 */
import React, { useState, useEffect } from "react";

const fetchData = async ({ id }) => {
  console.count("invoke:fetchData");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, name: "x" });
    }, 1000);
  });
};

const UnoptimizedComponent = () => {
  console.count("render:UnoptimizedComponent");
  const [currentId, setCurrentId] = useState<number>(0);

  useEffect(() => {
    setCurrentId(1);
  }, [setCurrentId]);

  useEffect(() => {
    fetchData({ id: currentId });
  });

  return (
    <div className="flex m-12 items-center gap-2">
      <label>ID</label>
      <input
        type="number"
        min="0"
        value={currentId}
        onChange={(e) => setCurrentId(Number(e.target.value))}
      />
    </div>
  );
};

export default UnoptimizedComponent;