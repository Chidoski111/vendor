import { useEffect, useState } from "react";


function ViewData({ collection, id }) {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      async function fetchData() {
        const { result, error } = await getDocument(collection, id);
        if (error) {
          setError(error);
        } else {
          setData(result.data()); // Assuming result is a DocumentSnapshot
        }
      }
  
      fetchData();
    }, [collection, id]);
  
    if (error) {
      return <div>Error: {error.message}</div>;
    }
  
    if (!data) {
      return <div>Loading...</div>;
    }
  
    // Render the fetched data here
    return (
      <div>
        <h2>Data from Firestore</h2>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  }
  
  export default ViewData;
  