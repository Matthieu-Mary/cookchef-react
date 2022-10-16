import { useEffect, useState } from "react";

export function useFetchData(url, page) {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    
  useEffect(() => {
    let cancel = false;
    async function fetchData() {
      try {
        setIsLoading(true);
        let queries = "";
        if (page) {
            queries += `?skip=${ (page - 1) * 9 }&limit=9`
        } 
        const response = await fetch(url + queries);
        if(response.ok && !cancel) {
          const newData = await response.json()
          setData( x => Array.isArray(newData) ? [...x, ...newData] : [...x, newData])
        }
      } catch(e) {
        console.log("Erreur :" + e)
      } finally {
        if(!cancel) {
          setIsLoading(false)
        }
      }
    }
    fetchData();
    return () => cancel = true;
  }, [url, page]);

  return [[data, setData], isLoading]

}

