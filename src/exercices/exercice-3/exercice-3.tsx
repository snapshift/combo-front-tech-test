/**
 * You can start the app using:
 * REACT_APP_EX=3 npm start
 * 
 * This component contains few performances issues.
 * You can open the console to check the logs.
 * 
 * Try to refactor it to fix problems, and perf issues.
 */
import React, { useState, useEffect } from "react";

const fetchData = async ({ search }): Promise<number[]> => {
  console.count("invoke:fetchData");
  return new Promise((resolve) => {
    setTimeout(() => {
      const arr = Array.from(Array(50).keys())
      resolve(arr);
    }, 1000);
  });
};

const UnoptimizedComponent = () => {
  console.count("render:UnoptimizedComponent");
  const [data, setData] = useState<number[]>([]);
  const [search, setSearch] = useState<string>();

  useEffect(() => {
    setSearch('');
  }, [setSearch]);

  useEffect(() => {
    fetchData({search}).then((newData) => setData(newData));
  });

  return (
    <div className="flex flex-col w-96 m-auto py-20 gap-10">
      <div className="flex gap-2 items-center">
        <label>Search</label>
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div>
      <h1 className="text-2xl mb-2">List</h1>
        <div>
          {data.map((item) => <div key={item} className="border-b-2 border-neutral-300 p-4">
            <p>item n°{item}</p>
          </div>)}
        </div>
      </div>
    </div>
  );
};

export default UnoptimizedComponent;