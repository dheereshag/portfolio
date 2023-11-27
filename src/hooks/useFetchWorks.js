import { useEffect, useState } from "react";
import groupByStartYear from "../utils/groupByStartYear";
import { API_URL } from "../constants";

const useFetchWorks = () => {
  const [groupedWorks, setGroupedWorks] = useState([]);

  useEffect(() => {
    async function fetchWorks() {
      try {
        const response = await fetch(`${API_URL}/works`);
        const data = await response.json();
        const groupedWorks = groupByStartYear(data);
        setGroupedWorks(groupedWorks);
      } catch (error) {
        console.error("Error fetching works data:", error);
      }
    }

    fetchWorks();
  }, []);

  return groupedWorks;
};

export default useFetchWorks;
