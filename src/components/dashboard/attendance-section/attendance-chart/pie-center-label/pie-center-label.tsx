import styled from "@emotion/styled";
import { useDrawingArea } from "@mui/x-charts";
import { AppTheme } from "../../../../../theme";

const StyledText = styled("text")(({ theme }) => ({
  textAnchor: "middle",
  dominantBaseline: "central",
  fill: AppTheme.palette.text.primary,
  fontSize: 20,
}));

export const PieCenterLabel = ({ children }: { children: React.ReactNode }) => {
  const { width, height, left, top } = useDrawingArea();
  return (
    <StyledText x={left + width / 2} y={top + height / 2}>
      {children}
    </StyledText>
  );
};
