import texts from "./event-warming-section.texts.json";
import { WarmingChart } from "./warming-chart/warming-chart";
import { BasicSection } from "../basic-section/basic-section";

export const EventWarmingSection = () => {
  return (
    <BasicSection title={texts.WarmingStatus}>
      <WarmingChart />
    </BasicSection>
  );
};
