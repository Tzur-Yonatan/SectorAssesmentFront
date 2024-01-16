import { PieChart } from "@mui/x-charts";
import { arcAngleStyle, chartStyleProps } from "./attendance-chart.style";
import {
  getArcLabel,
  getAttendanceChartData,
  getMaxAttendanceText,
} from "./attendance-chart.utils";
import { PieCenterLabel } from "./pie-center-label/pie-center-label";
import { useRequest } from "ahooks";
import { SoldiersClient } from "../../../../api/services/soldiers.api";

export const AttendanceChart = () => {
  const { data: soldiers } = useRequest(SoldiersClient.getAllSoldiers);

  if (!soldiers?.length) return null;
  const attendanceData = getAttendanceChartData(soldiers);
  const maxStatusText = getMaxAttendanceText(attendanceData, soldiers.length);

  return (
    <PieChart
      series={[
        {
          innerRadius: "62%",
          data: attendanceData,
          arcLabelMinAngle: 25,
          arcLabel: (item) => getArcLabel(item, soldiers.length),
        },
      ]}
      sx={arcAngleStyle}
      {...chartStyleProps}
    >
      <PieCenterLabel>{maxStatusText}</PieCenterLabel>
    </PieChart>
  );
};
