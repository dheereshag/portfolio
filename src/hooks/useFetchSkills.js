import { useEffect, useState } from "react";
import { API_URL } from "../constants";

const useFetchSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const response = await fetch(`${API_URL}/skills`);
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skill data:", error);
      }
    }

    fetchSkills();
  }, []);

  return skills;
};

export default useFetchSkills;
