import { Grid } from "@mui/material";
import { AttendanceSection } from "./attendance-section/attendance-section";
import { EventWarmingSection } from "./event-warming-section/event-warming-section";
import { ClassificationSection } from "./event-classification-section/event-classification-section";

export const Dashboard = () => {
  return (
    <Grid
      container
      spacing={2}
      marginTop={3}
      width={"100%"}
      height={"100%"}
      alignItems={"center"}
      justifyContent={"space-around"}
    >
      <Grid item container justifyContent={"space-around"}>
        <Grid item>
          <AttendanceSection />
        </Grid>
        <Grid item>
          <ClassificationSection />
        </Grid>
      </Grid>
      <Grid item>
        <EventWarmingSection />
      </Grid>
    </Grid>
  );
};
