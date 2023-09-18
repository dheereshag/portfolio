import { Work } from ".";
import { useFetchWorks } from "../../hooks";
const Works = () => {
  const groupedWorks = useFetchWorks();
  return (
    <div className="flex flex-col gap-14 mt-1.5 xl:w-4/12">
      {Object.entries(groupedWorks)
        .sort(([yearA], [yearB]) => yearB - yearA)
        .map(([year, works]) => (
          <div className="flex gap-6 md:gap-16 items-baseline" key={year}>
            <p className="font-bold text-white text-sm font-poppins md:text-lg">
              {year}
            </p>
            <div className="flex flex-col gap-8">
              {works
                .sort((workA, workB) => workB.id - workA.id)
                .map((work) => (
                  <Work work={work} key={work.id} />
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

export default Works;
