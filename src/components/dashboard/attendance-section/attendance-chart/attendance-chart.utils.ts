import type { PieValueType } from "@mui/x-charts";
import type { AttendanceStatuses, Soldier } from "@ApiServices/soldiers.api";

export const getAttendanceChartData = (soldiers: Soldier[]) =>
  Object.values(
    soldiers.reduce(
      (acc, { attendanceStatus }) =>
        acc[attendanceStatus]
          ? {
              ...acc,
              [attendanceStatus]: {
                ...acc[attendanceStatus],
                value: acc[attendanceStatus].value + 1,
              },
            }
          : {
              ...acc,
              [attendanceStatus]: { value: 1, label: attendanceStatus },
            },
      {} as {
        [key in AttendanceStatuses]: PieValueType;
      }
    )
  );

const calculatePercentage = (statusAmount: number, soldiersLength: number) =>
  Math.floor((statusAmount / soldiersLength) * 100);

export const getMaxAttendanceText = (
  data: PieValueType[],
  soldiersLength: number
) => {
  const maxAttendanceByStatusAmount = data.reduce(
    (acc, { value }) => Math.max(value, acc),
    0
  );

  const statusPercentage = calculatePercentage(
    maxAttendanceByStatusAmount,
    soldiersLength
  );

  return `${statusPercentage}% (${maxAttendanceByStatusAmount})`;
};

export const getArcLabel = ({ value }: PieValueType, soldiersLength: number) =>
  `${calculatePercentage(value, soldiersLength)}%`;
