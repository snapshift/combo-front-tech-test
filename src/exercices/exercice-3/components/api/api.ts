export const fetchData = async (
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