
function useSkills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    async function fetchSkillData() {
      try {
        const response = await fetch("http://18.222.249.158:8080/skills");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setSkills(data);
      } catch (error) {
        console.error("Error fetching skill data:", error);
      }
    }

    fetchSkillData();
  }, []);

  return skills;
}

export default useSkills;
