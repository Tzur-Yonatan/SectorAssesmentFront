import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import texts from "./navbar.texts.json";
import { Clock } from "./clock/clock";
import { useRequest } from "ahooks";
import { EasterEggClient } from "../../api/services/easter-egg.api";
import Confetti from "react-confetti";
import { useEffect, useState } from "react";

const getTitle = (showConfetti: boolean, isEasterEgg: boolean) => {
  if (!isEasterEgg) return texts.title;
  if (showConfetti) return texts.youWereRight;
  return texts.easterEggTitle;
};

export const Navbar = () => {
  const { data: easterEgg } = useRequest(EasterEggClient.getEasterEgg);
  const [showConfetti, setShowConfetti] = useState(false);

  useEffect(() => {
    if (easterEgg?.length) {
      setTimeout(() => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 10000);
      }, 7000);
    }
  }, [easterEgg]);

  const title = getTitle(showConfetti, Boolean(easterEgg?.length));
  const easterEggProps =
    easterEgg?.length &&
    ({
      enableColorOnDark: true,
      color: showConfetti ? "info" : "error",
    } as const);

  return (
    <Box>
      {showConfetti && <Confetti />}
      <AppBar position="static" {...easterEggProps}>
        <Toolbar>
          <Typography component="span" fontSize={"1.5rem"}>
            {texts.environment}
          </Typography>
          <Typography
            variant="h1"
            fontSize={"2.5rem"}
            margin={"auto"}
            paddingY={2}
            paddingX={1.5}
          >
            {title}
          </Typography>
          <Clock />
        </Toolbar>
      </AppBar>
    </Box>
  );
};
