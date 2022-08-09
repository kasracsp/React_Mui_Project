import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import Navbar from "../components/Navbar";
import SendIcon from "@mui/icons-material/Send";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object({
  name: yup.string("Enter your name").required("Name is required"),
  email: yup
    .string("Enter your email address")
    .email("Enter a valid email address")
    .required("Email address is required"),
  message: yup.string("Enter your message").required("Message is required"),
});

const ContactUs = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const formikRef = useRef();
  const sendMessage = () => {
    setOpenDialog(false);
    setOpenSnackbar(true);
    formikRef.current.resetForm();
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          minHeight: (theme) =>
            `calc(99vh - ${theme.mixins.toolbar.minHeight}px)`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper sx={{ width: "80%", maxWidth: "600px", padding: 2 }}>
          <Formik
            initialValues={{
              name: "",
              email: "",
              message: "",
            }}
            validationSchema={validationSchema}
            onSubmit={() => {
              setOpenDialog(true);
            }}
            innerRef={formikRef}
          >
            {(props) => (
              <form onSubmit={props.handleSubmit} ref={formikRef}>
                <Stack spacing={2}>
                  <TextField
                    fullWidth
                    id="name"
                    name="name"
                    label="Full Name"
                    value={props.values.name}
                    onChange={props.handleChange}
                    error={props.touched.name && Boolean(props.errors.name)}
                    helperText={props.touched.name && props.errors.name}
                  />
                  <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={props.values.email}
                    onChange={props.handleChange}
                    error={props.touched.email && Boolean(props.errors.email)}
                    helperText={props.touched.email && props.errors.email}
                  />
                  <TextField
                    fullWidth
                    id="message"
                    name="message"
                    label="message"
                    value={props.values.message}
                    onChange={props.handleChange}
                    error={
                      props.touched.message && Boolean(props.errors.message)
                    }
                    helperText={props.touched.message && props.errors.message}
                    multiline
                    rows={5}
                  />
                  <Button
                    color="primary"
                    variant="contained"
                    fullWidth
                    type="submit"
                    endIcon={<SendIcon />}
                  >
                    Submit
                  </Button>
                </Stack>
              </form>
            )}
          </Formik>
        </Paper>
        <Dialog
          open={openDialog}
          onClose={() => setOpenDialog(false)}
          aria-label="dialog-title"
          aria-describedby="dialog-description"
        >
          <DialogTitle id="dialog-title">
            You are sending us a message
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="dialog-description">
              Are you sure?
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)} variant="outlined">
              Cancel
            </Button>
            <Button onClick={sendMessage} variant="contained">
              Confirm
            </Button>
          </DialogActions>
        </Dialog>
        <Snackbar
          message="Your message sent"
          autoHideDuration={3000}
          open={openSnackbar}
          onClose={() => setOpenSnackbar(false)}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
        />
      </Box>
    </>
  );
};

export default ContactUs;
