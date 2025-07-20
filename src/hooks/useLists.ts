import { useEffect, useState } from "react";
import api from "../services/api";

export default function useLists() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLists = async () => {
      try {
        const response = await api.get("/lists");
        setLists(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchLists();
  }, []);

  return { lists, loading };
}
