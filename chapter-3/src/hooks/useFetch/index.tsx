import { useState, useEffect } from 'react';

type useDataFetchResult = [boolean, string, any];
function useDataFetching(dataSource): useDataFetchResult {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const tasks = await fetch(dataSource);
        const result = await tasks.json();

        if (result) {
          setData(result);
          setLoading(false);
        }
      } catch (e: any) {
        setLoading(false);
        setError(e.message);
      }
    }
    fetchData();
  }, [dataSource]);
  return [loading, error, data];
}
export { useDataFetching };
