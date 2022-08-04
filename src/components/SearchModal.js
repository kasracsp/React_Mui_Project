import React, { useState } from "react";
import {
  Typography,
  Modal,
  Box,
  Stack,
  // Autocomplete,
  // TextField,
  InputBase,
  IconButton,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const SearchModal = ({ openModal, closeModal }) => {
  const [searchValue, setSearchValue] = useState("");
  return (
    <div>
      <Modal
        open={openModal}
        onClose={closeModal}
        // aria-labelledby="modal-modal-title"
        // aria-describedby="modal-modal-description"
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
            width: "80%",
            maxWidth: "600px",
            height: "60vh",
            bgcolor: "background.paper",
            borderRadius: "0.5rem",
            boxShadow: 24,
            // overflow: "hidden",
          }}
        >
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
            ></InputBase>
            {searchValue && (
              <IconButton
                size="large"
                onClick={() => setSearchValue("")}
                sx={{ position: "absolute", right: "1rem" }}
              >
                <HighlightOffIcon color="primary" />
              </IconButton>
            )}
          </Stack>
          <Stack
            id="modal-modal-description"
            sx={{ mt: 1, height: "45vh", overflowY: "scroll" }}
            divider={<Divider />}
          >
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
            <Typography>Lorem ipsum dolor sit amet.</Typography>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
};

export default SearchModal;
