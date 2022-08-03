import React, { useState } from "react";
import { alpha } from "@mui/material";
//mui-icons
import FoodBankIcon from "@mui/icons-material/FoodBank";
import SearchIcon from "@mui/icons-material/Search";
import DragHandleIcon from "@mui/icons-material/DragHandle";

//mui
import {
  Stack,
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
} from "@mui/material";

const Navbar = () => {

  return (
    <AppBar position="sticky">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          sx={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{
              my:1,
              display: {
                md: "flex",
                lg: "none",
              },
            }}
          >
          <DragHandleIcon />
          </IconButton>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FoodBankIcon sx={{ fontSize: "2.5rem" }} />
            <Typography
              variant="h5"
              component="div"
              sx={{
                display: {
                  fontFamily: "Oswald",
                  fontWeight: "500",
                },
              }}
            >
              Fooda
            </Typography>
          </Stack>
        </Stack>
        <Stack direction="row">
          <Button
            sx={{
              textTransform: "capitalize",
              display: "flex",
              minWidth: "auto",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "0.5rem",
              bgcolor: (theme) => alpha(theme.palette.common.white, 0.93),
              borderRadius: "0.5rem",
              "&:hover": {
                backgroundColor: "background.paper",
              },
            }}
          >
            <SearchIcon sx={{}} />
            <Typography
              sx={{
                width: "150px",
                textAlign: "left",
                display: {
                  xs: "none",
                  sm: "block",
                },
              }}
            >
              Search...
            </Typography>
          </Button>
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
