import { useEffect, useState } from "react";

const useFetchSkills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function fetchSkills() {
      try {
        const response = await fetch(
          "https://dheereshagrwal-portfolio-backend.up.railway.app/skills"
        );
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
