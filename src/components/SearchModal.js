import React, { useState } from "react";
import { FetchFoods } from "../redux/foods/FoodsAction";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../redux/category/categoryAction";

import {
  Typography,
  Modal,
  Box,
  Stack,
  InputBase,
  IconButton,
  Divider,
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";



const SearchModal = ({ openModal, closeModal }) => {
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const [searchValue, setSearchValue] = useState("");
  const handleClose = () => {
    setSearchValue("");
    closeModal();
  };
  const handleSubmit =(event) => {
    event.preventDefault();
    if( searchValue ){
      dispatch(FetchFoods(searchValue))
      dispatch(setCategory(''))
      setSearchValue("");
      closeModal()
      navigate('/')
    }
  };
  return (
    <div>
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
            height: { xs: "100vh", sm: "60vh" },
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
                type='submit'
                sx={{
                  p: "0 0.4rem",
                  minWidth: "auto",
                  textTransform: "lowercase",
                  ml:1,
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
                  ml:1,
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
            }}
            divider={<Divider />}
          ></Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default SearchModal;
