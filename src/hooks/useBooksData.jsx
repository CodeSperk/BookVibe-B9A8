import { useEffect, useState } from "react"

const useBooksData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setLoading(true);
     fetch("/data.json")
     .then(res=> res.json())
     .then(data=>setData(data));
     setLoading(false);
    }
  ,[]);
  
  return {data, loading};
}

export default useBooksData;