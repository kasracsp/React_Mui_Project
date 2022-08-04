import React, { useState } from "react";
import SearchModal from "./SearchModal";
import TemporaryDrawer from "./TemporaryDrawer";
import { alpha } from "@mui/material";
//mui-icons
import FoodBankIcon from "@mui/icons-material/FoodBank";
import SearchIcon from "@mui/icons-material/Search";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import {useNavigate} from 'react-router-dom'
import { useDispatch } from "react-redux";
import { openDrawer } from "../redux/category/categoryAction";

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
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);
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
              my: 1,
              display: {
                md: "flex",
                lg: "none",
              },
            }}
            onClick={()=>dispatch(openDrawer(true))}
          >
            <DragHandleIcon />
          </IconButton>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
            }}
            onClick={() => navigate('/')}
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
            onClick={() => setOpenModal(true)}
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
          <SearchModal openModal={openModal} closeModal={closeModal} />
          <Button color="inherit">Login</Button>
        </Stack>
      </Toolbar>
      <TemporaryDrawer />
    </AppBar>
  );
};

export default Navbar;
