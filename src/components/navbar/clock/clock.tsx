import React, { useEffect, useState } from "react";
import { Typography } from "@mui/material";

export const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Typography component="span" fontSize={"1.5rem"}>
      {time.toLocaleTimeString("he")}
    </Typography>
  );
};
