import React from "react";
import { Grid, Skeleton, Stack, Typography } from "@mui/material";

const RecipeSkeleton = () => {
  return (
    <Stack
      spacing={5}
      sx={{
        width: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: {
          xs: 3,
          sm: 5,
          md: 10,
        },
      }}
    >
      <Typography variant="h3" width="80%" sx={{ maxWidth: "560px" }}>
        <Skeleton variant="text" width="100%" />
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: "center", alignItems: "center" }}
      >
        {[...Array(5).keys()].map((member) => (
          <Grid
            key={member}
            item
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Skeleton variant="circular" width={50} height={50} />
            <Skeleton variant="text" width={60} />
          </Grid>
        ))}
      </Grid>
      <Skeleton
        variant="reqtangular"
        width="90%"
        sx={{ borderRadius: 5, maxWidth: "600px",height:{
          xs:'200px',
          sm:'300px'
        } }}
      />
    </Stack>
  );
};

export default RecipeSkeleton;
