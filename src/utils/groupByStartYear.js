function groupByStartYear(works) {
  const groupedWorks = {};
  works.forEach((work) => {
    if (groupedWorks[work.startYear]) {
      groupedWorks[work.startYear].push(work);
    } else {
      groupedWorks[work.startYear] = [work];
    }
  });
  return groupedWorks;
}
export default groupByStartYear;