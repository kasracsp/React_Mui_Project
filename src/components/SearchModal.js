import React, { useState } from "react";
//redux
import { FetchFoods } from "../redux/foods/FoodsAction";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/category/categoryAction";
import {
  RecentSearch,
  removeRecentSearch,
} from "../redux/recentSearch/RecentSearchAction";
//router
import { useNavigate } from "react-router-dom";
//mui
import {
  Typography,
  Modal,
  Box,
  Stack,
  InputBase,
  IconButton,
  Divider,
  Button,
  alpha,
  ListItem,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
//mui-icon
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import RestoreIcon from "@mui/icons-material/Restore";
import ClearIcon from "@mui/icons-material/Clear";

const SearchModal = ({ openModal, closeModal }) => {
  const dispatch = useDispatch();
  const recentSearchState = useSelector((state) => state.recentSearchState);
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const handleClose = () => {
    setSearchValue("");
    closeModal();
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (searchValue) {
      dispatch(FetchFoods(searchValue));
      dispatch(RecentSearch(searchValue));
      dispatch(setCategory(""));
      setSearchValue("");
      closeModal();
      navigate("/");
    }
  };
  const handleRecent = (item) => {
    dispatch(FetchFoods(item));
    dispatch(RecentSearch(item));
    dispatch(setCategory(""));
    setSearchValue("");
    closeModal();
    navigate("/");
  };
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      sx={{
        "& .MuiBackdrop-root": {
          backgroundColor: "rgba(111, 126, 140, 0.2)",
          backdropFilter: "blur(2px)",
        },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "100%", sm: "80%" },
          maxWidth: "600px",
          minHeight: { xs: "100vh", sm: "62vh" },
          bgcolor: "background.paper",
          borderRadius: { xs: "0", sm: "0.5rem" },
          boxShadow: 24,
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack
            direction="row"
            sx={{
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              padding: "1rem",
              borderBottom: "1px solid",
              borderColor: "divider",
            }}
            id="modal-modal-title"
          >
            <SearchIcon
              sx={{ position: "absolute", left: "1rem", fontSize: "2rem" }}
              color="primary"
            />
            <InputBase
              sx={{ width: "100%", px: "3rem", fontSize: "1.5rem" }}
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              autoFocus={openModal}
            ></InputBase>
            {searchValue && (
              <IconButton
                size="large"
                onClick={() => setSearchValue("")}
                sx={{ position: "absolute", right: "7rem" }}
              >
                <HighlightOffIcon color="primary" />
              </IconButton>
            )}
            <Button
              variant="contained"
              type="submit"
              sx={{
                p: "0 0.4rem",
                minWidth: "auto",
                textTransform: "lowercase",
                ml: 1,
              }}
            >
              send
            </Button>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{
                p: "0 0.4rem",
                minWidth: "auto",
                textTransform: "lowercase",
                ml: 1,
              }}
            >
              esc
            </Button>
          </Stack>
        </form>
        <Typography color="text.primary" sx={{ py: 1, px: 2 }}>
          Recent
        </Typography>
        <Stack
          id="modal-modal-description"
          sx={{
            mt: 1,
            px: 2,
            maxHeight: { xs: "85vh", sm: "45vh" },
            overflowY: "overlay",
            color: "text.primary",
            "&::-webkit-scrollbar": {
              width: "5px",
              borderRadius: "62.5rem",
            },
            "&::-webkit-scrollbar-track": {
              background: (theme) => theme.palette.divider,
            },
            "&::-webkit-scrollbar-thumb": {
              background: (theme) => theme.palette.primary.main,
              borderRadius: "62.5rem",
            },
          }}
        >
          <List>
            {recentSearchState.recent.length > 0 &&
              recentSearchState.recent.map((item, index) => (
                <ListItem
                  key={index}
                  secondaryAction={
                    <IconButton
                      onClick={() => dispatch(removeRecentSearch(item))}
                      sx={{ padding: 0.5 }}
                    >
                      <ClearIcon color="primary" />
                    </IconButton>
                  }
                  disablePadding
                  sx={{
                    borderRadius: 2,
                    border: "1px solid",
                    borderColor: "transparent",
                    "&:hover": {
                      backgroundColor: (theme) =>
                        alpha(theme.palette.primary.main, 0.2),
                      borderColor: "primary.main",
                    },
                  }}
                >
                  <ListItemButton
                    onClick={() => handleRecent(item)}
                    sx={{
                      "&:hover": {
                        background: "transparent",
                      },
                    }}
                  >
                    <ListItemIcon>
                      <RestoreIcon />
                    </ListItemIcon>
                    <ListItemText primary={item} />
                  </ListItemButton>
                  <Divider />
                </ListItem>
              ))}
          </List>
        </Stack>
      </Box>
    </Modal>
  );
};

export default SearchModal;
