import { useEffect, useState } from "react";
import groupByStartYear from "../utils/groupByStartYear";

const useFetchWorks = () => {
  const [groupedWorks, setGroupedWorks] = useState([]);

  useEffect(() => {
    async function fetchWorks() {
      try {
        const response = await fetch(
          "https://dheereshagrwal-portfolio-backend.up.railway.app/works"
        );
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
