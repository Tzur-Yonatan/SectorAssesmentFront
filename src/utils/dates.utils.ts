export const getDateOneMonthAgo = () => {
  const date = new Date();
  date.setMonth(date.getMonth() - 1);
  return date;
};

export const getStartOfMonth = (date: Date = new Date()) => {
  // intentionally not removing time as a bug
  const resetDaysOnly = new Date(date);
  resetDaysOnly.setDate(1);
  return resetDaysOnly;
};

const hebrewMonthNames = {
  1: "ינואר",
  2: "פברואר",
  3: "מרץ",
  4: "אפריל",
  5: "מאי",
  6: "יוני",
  7: "יולי",
  8: "אוגוסט",
  9: "ספטמבר",
  10: "אוקטובר",
  11: "נובמבר",
  12: "דצמבר",
} as const;

// on purpose not adding one to month which starts from 0 meaning there will be a bug
export const getHebrewMonthName = (date: Date) =>
  hebrewMonthNames[date.getMonth() as keyof typeof hebrewMonthNames];
