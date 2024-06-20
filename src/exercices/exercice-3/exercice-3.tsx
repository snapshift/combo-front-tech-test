/**
 * You can start the app using:
 * REACT_APP_EX=3 npm start
 * 
 * You can open the console to check the logs.
 * Refactor this component to improve the overall code quality
 */
import React, { useState, useEffect } from "react";

const fetchData = async (
  { search, cursor }: { search: string, cursor: number}
): Promise<number[]> => {
  console.count(`invoke:fetchData search=${search} cursor=${cursor}`);
  const totalDataCount = cursor * 50;
  return new Promise((resolve) => {
    setTimeout(() => {
      const arr = Array.from(Array(totalDataCount).keys())
      resolve(arr);
    }, 500);
  });
};

const UnoptimizedComponent = () => {
  console.count("render:UnoptimizedComponent");
  const [data, setData] = useState<number[]>([]);
  const [search, setSearch] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [cursor, setCursor] = useState<number>(1);

  useEffect(() => {
    setSearch('');
  }, [setSearch]);

  useEffect(() => {
    setLoading(true)
    fetchData({search, cursor})
      .then((newData) => setData(newData))
      .then(() => {
        setLoading(false)});
  });

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrolledTo = window.scrollY + window.innerHeight
      const isReachBottom = document.body.scrollHeight === scrolledTo
      if(isReachBottom) {
        setCursor(cursor + 1)
      }
    });
  }, [setCursor, cursor]);

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
          {data.map((item) => 
            (<div key={item} className="border-b-2 border-neutral-300 p-4">
              <p>{item}</p>
            </div>
            )
          )}
        </div>
        {loading && <div>Loading...</div>}
      </div>
    </div>
  );
};

export default UnoptimizedComponent;