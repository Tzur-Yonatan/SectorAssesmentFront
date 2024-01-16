export const getWarmingPercentage = (
  lastMonthScore: number,
  currentMonthScore: number
) => {
  return ((currentMonthScore - lastMonthScore) / currentMonthScore) * 100;
};
