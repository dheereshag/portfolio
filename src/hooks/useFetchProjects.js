import { useState, useEffect } from "react";
import { API_URL } from "../constants";
const useFetchProjects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [filterProjects, setFilterProjects] = useState([]);
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [animateCard, setAnimateCard] = useState({ y: [null, 0], opacity: 1 });

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await fetch(`${API_URL}/projects`);
        const data = await response.json();
        setProjects(data);
        setFilterProjects(data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching skill data:", error);
      }
    }

    fetchProjects();
  }, []);

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: [null, 30], opacity: 0 });
    setTimeout(() => {
      setAnimateCard({ y: [null, 0], opacity: 1 });
      if (item.name === "all") {
        setFilterProjects(projects);
      } else {
        setFilterProjects(
          projects.filter((project) =>
            project.tags.some((tag) => tag.name === item.name)
          )
        );
      }
    }, 500);
  };
  return {
    activeFilter,
    filterProjects,
    isLoading,
    handleWorkFilter,
    animateCard,
  };
};

export default useFetchProjects;
