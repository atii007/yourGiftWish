import { Box, LinearProgress, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { colors } from "src/theme/colors";

const LoadingStep = () => {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev === 100) {
          return 0;
        } else {
          const diff = Math.random() * 10;
          return Math.min(prev + diff, 100);
        }
      });
    }, 500);
    () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="h5"
        fontWeight={500}
        py={3}
        sx={{ color: colors.black.main }}
        textAlign={"center"}
      >
        Finding Gift Wish
      </Typography>
      <LinearProgress
        variant="determinate"
        value={progress}
        sx={{
          height: 10,
          borderRadius: 5,
          "&.MuiLinearProgress-root": {
            background: colors.neutral[200],
          },
        }}
      />
    </Box>
  );
};

export default LoadingStep;
