import React from "react";
import {
  Divider,
  Paper,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";

const FoodSkeleton = () => {
  return (
    <Paper
      sx={{
        width: "100%",
        maxWidth: "400px",
      }}
    >
      <Stack spacing={0.5}>
        <Skeleton variant="reqtangular" width="100%" height="200px" />
        <Stack p={1}>
          <Typography variant="h5">
            <Skeleton variant="text" width="60%" />
          </Typography>
        </Stack>
        <Divider />
        <Stack
          direction="row"
          p={1}
          justifyContent="space-between"
          alignItems="center"
        >
          <Skeleton variant="circular" width={30} height={30} />
          <Skeleton variant="reqtangular" width={100} height={30} />
        </Stack>
      </Stack>
    </Paper>
  );
};

export default FoodSkeleton;
