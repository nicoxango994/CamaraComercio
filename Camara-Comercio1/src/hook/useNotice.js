import { useEffect, useState } from 'react';
import { getNotice } from '../services/GetNotice';

export const useNotice = () => {
  const [notices, setNotices] = useState([]);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const data = await getNotice()
        setNotices(data)
      } catch (error) {
        console.error("Error fetching notices:", error)
      }
    };

    fetchNotices(); // Asegúrate de llamar a fetchNotices para que se ejecute cuando el componente se monte

  }, []);

  
  return { notices };
};
