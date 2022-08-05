import React, { useState } from "react";
//components
import SearchModal from "./SearchModal";
//router-dom
import { useNavigate } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
import { openDrawer } from "../redux/category/categoryAction";
//mui
import {
  alpha,
  Box,
  Fab,
  Fade,
  useScrollTrigger,
  Stack,
  AppBar,
  Toolbar,
  Button,
  Typography,
  IconButton,
} from "@mui/material";
//mui-icons
import FoodBankIcon from "@mui/icons-material/FoodBank";
import SearchIcon from "@mui/icons-material/Search";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

function ScrollTop(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

const Navbar=(props)=> {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);
  return (
    <Box component='header'>
      <AppBar>
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
            {props.isCategoryOn && (
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
                onClick={() => dispatch(openDrawer(true))}
              >
                <DragHandleIcon />
              </IconButton>
            )}
            <Stack
              direction="row"
              spacing={1}
              sx={{
                justifyContent: "center",
                alignItems: "center",
                cursor: "pointer",
              }}
              onClick={() => navigate("/")}
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
      </AppBar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top" color="primary">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </Box>
  );
}

export default Navbar