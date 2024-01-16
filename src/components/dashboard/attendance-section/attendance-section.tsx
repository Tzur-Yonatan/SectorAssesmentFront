import texts from "./attendance-section.texts.json";
import { AttendanceChart } from "./attendance-chart/attendance-chart";
import { BasicSection } from "../basic-section/basic-section";

export const AttendanceSection = () => {
  return (
    <BasicSection title={texts.humanResources}>
      <AttendanceChart />
    </BasicSection>
  );
};
