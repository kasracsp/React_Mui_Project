import React, { useState } from "react";
//components
import SearchModal from "./SearchModal";
//router-dom
import { useNavigate } from "react-router-dom";
//redux
import { useDispatch, useSelector } from "react-redux";
import { openDrawer } from "../redux/category/categoryAction";
import {ChangeMode} from '../redux/mode/ModeAction' 
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
  Tooltip,
  Menu,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
//mui-icons
import FoodBankIcon from "@mui/icons-material/FoodBank";
import SearchIcon from "@mui/icons-material/Search";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SettingsIcon from "@mui/icons-material/Settings";
import Brightness4OutlinedIcon from "@mui/icons-material/Brightness4Outlined";
import Brightness5OutlinedIcon from "@mui/icons-material/Brightness5Outlined";

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

const Navbar = (props) => {
  const dispatch = useDispatch();
  const modeState=useSelector(state=>state.modeState)
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleOpenMode = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMode = () => {
    setAnchorEl(null);
  };
  const handleMode=(event,updateFormats)=>{
    if (event.target.value !== modeState.mode) {
      dispatch(ChangeMode(updateFormats));
    }
  }
  return (
    <Box component="header">
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
          <Stack direction="row" spacing={0.5}>
            <Button
              onClick={() => setOpenModal(true)}
              sx={{
                textTransform: "capitalize",
                display: "flex",
                minWidth: "auto",
                justifyContent: "flex-start",
                alignItems: "center",
                gap: "0.5rem",
                bgcolor: (theme) => alpha(theme.palette.background.paper, 0.93),
                border: "1px solid",
                bordercolor: "primary.main",
                borderRadius: "0.5rem",
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.background.paper,
                },
                "& svg": {
                  transition: "375ms",
                },
                "&:hover svg": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <SearchIcon />
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
            <Tooltip title="toggle mode" arrow>
              <IconButton
                id="menu-button"
                aria-controls={open ? "mode-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleOpenMode}
                sx={{
                  border: "1px solid",
                  borderColor: "primary.main",
                  bgcolor: (theme) =>
                    alpha(theme.palette.background.paper, 0.93),
                  border: "1px solid",
                  bordercolor: "primary.main",
                  borderRadius: "0.5rem",
                  "&:hover": {
                    backgroundColor: (theme) => theme.palette.background.paper,
                  },
                  "& svg": {
                    transition: "375ms",
                  },
                  "&:hover svg": {
                    transform: "scale(1.1)",
                  },
                }}
              >
                <SettingsIcon color="primary" />
              </IconButton>
            </Tooltip>
            <Menu
              id="mode-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleCloseMode}
              MenuListProps={{
                "aria-labelledby": "menu-button",
              }}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              sx={{
                "& .MuiList-root": {
                  p: 2,
                },
                "& .MuiButtonBase-root.Mui-selected": {
                  border: "1px solid",
                },
              }}
            >
              <ToggleButtonGroup
                aria-label="mode-group"
                value={modeState.mode}
                onChange={handleMode}
                exclusive
                color="primary"
              >
                <ToggleButton value="light">
                  <Brightness5OutlinedIcon
                    sx={{ mr: 0.5, pointerEvents: "none" }}
                  />
                  Light
                </ToggleButton>
                <ToggleButton value="dark">
                  <Brightness4OutlinedIcon
                    sx={{ mr: 0.5, pointerEvents: "none" }}
                  />
                  Dark
                </ToggleButton>
              </ToggleButtonGroup>
            </Menu>
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
};

export default Navbar;
