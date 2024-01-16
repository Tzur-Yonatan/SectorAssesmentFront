import texts from "./event-classification-section.texts.json";
import { ClassificationChart } from "./classification-chart/classification-chart";
import { BasicSection } from "../basic-section/basic-section";

export const ClassificationSection = () => {
  return (
    <BasicSection title={texts.EventClassifications}>
      <ClassificationChart />
    </BasicSection>
  );
};
