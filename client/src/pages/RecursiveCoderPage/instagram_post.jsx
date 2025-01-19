import { useState, useEffect } from 'react';
import axios from 'axios';

export const Instagram_Post = () => {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    
    const fetchData = async () => {
      try {
        const response = await axios.get('https://instagram230.p.rapidapi.com/user/posts?username=collezian_mdazad', {
          headers: {
            'x-rapidapi-host': 'instagram230.p.rapidapi.com',
            'x-rapidapi-key': '822ae856e3mshc99719f33c7d266p192f16jsn2d7541b9cb21'
          }
        });
        setData(response.data);
      } catch (error) {
        console.error('There was an error!', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div>
  
      {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : 'Loading...'}
    </div>
  );
};