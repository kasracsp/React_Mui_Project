import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import RecipeSkeleton from "../skeleton/RecipeSkeleton";
import { useParams } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import FetchRecipe from "../redux/recipe/RecipeAction";
//mui
import {
  Avatar,
  Box,
  Stack,
  Paper,
  Typography,
  Grid,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
//mui-icons
import GroupIcon from "@mui/icons-material/Group";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";

import { styled } from "@mui/material/styles";

const MyAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  border: "1px solid",
  borderColor: theme.palette.divider,
}));

const Recipe = () => {
  const dispatch = useDispatch();
  const recipeState = useSelector((state) => state.recipeState);

if (recipeState.recipe && recipeState.recipe.analyzedInstructions){
  console.log(recipeState.recipe.analyzedInstructions);

}

  const params = useParams();
  useEffect(() => {
    dispatch(FetchRecipe(params.id));
  }, []);

  return (
    <Box>
      <Navbar />
      {recipeState.loading ? (
        <RecipeSkeleton />
      ) : recipeState.error ? (
        <Typography>{recipeState.error}</Typography>
      ) : recipeState.recipe ? (
        <Stack
          spacing={5}
          sx={{
            width: "100%",
            justifyContent: "flex-start",
            alignItems: "center",
            px: {
              xs: 3,
              sm: 5,
              md: 10,
            },
            pt: {
              xs: 3,
              sm: 5,
            },
            pb: 10,
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontFamily: "Oswald",
              fontSize: {
                xs: "2rem",
                sm: "2.5rem",
                lg: "3rem",
              },
            }}
          >
            {recipeState.recipe.title}
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ justifyContent: "center", alignItems: "center" }}
          >
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <MyAvatar>
                <GroupIcon color="primary" />
              </MyAvatar>
              <Typography variant="subtitle2" color="text.secondary">
                {recipeState.recipe.servings} person
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <MyAvatar>
                <AccessAlarmIcon color="primary" />
              </MyAvatar>
              <Typography variant="subtitle2" color="text.secondary">
                {recipeState.recipe.readyInMinutes} minutes
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <MyAvatar>
                <BreakfastDiningIcon
                  sx={{ pointerEvents: "none" }}
                  color={recipeState.recipe.glutenFree ? "success" : "error"}
                />
              </MyAvatar>
              <Typography variant="subtitle2" color="text.secondary">
                gluten free
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <MyAvatar>
                <EnergySavingsLeafIcon
                  sx={{ pointerEvents: "none" }}
                  color={recipeState.recipe.vagetarian ? "success" : "error"}
                />
              </MyAvatar>
              <Typography variant="subtitle2" color="text.secondary">
                vegetarian
              </Typography>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
              }}
            >
              <MyAvatar>
                <LocalDrinkIcon
                  sx={{ pointerEvents: "none" }}
                  color={recipeState.recipe.dairyFree ? "success" : "error"}
                />
              </MyAvatar>
              <Typography variant="subtitle2" color="text.secondary">
                dairy free
              </Typography>
            </Grid>
          </Grid>
          <Box
            sx={{
              position: "relative",
              width: "90%",
              maxWidth: "600px",
              "& img": {
                width: "100%",
                borderRadius: 5,
                border: "5px solid",
                borderColor: "divider",
              },
            }}
          >
            <img
              src={recipeState.recipe.image}
              alt={recipeState.recipe.title}
            />
          </Box>
          <TableContainer
            component={Paper}
            sx={{ width: "90%", maxWidth: "600px" }}
          >
            <Table aria-label="ingredients" sx={{ width: "100%" }}>
              <TableHead>
                <TableRow>
                  <TableCell
                    sx={{
                      backgroundColor: "primary.main",
                      color: "primary.contrastText",
                      fontSize: "1.2rem",
                    }}
                  >
                    Ingredients
                  </TableCell>
                  <TableCell
                    sx={{
                      backgroundColor: "primary.main",
                      color: "primary.contrastText",
                      fontSize: "1.2rem",
                    }}
                  >
                    Measure
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recipeState.recipe.analyzedInstructions && recipeState.recipe.extendedIngredients.map(
                  (item) => (
                    <TableRow key={item.id}>
                      <TableCell
                        sx={{
                          "&:first-letter": {
                            textTransform: "capitalize",
                          },
                        }}
                      >
                        {item.nameClean}
                      </TableCell>
                      <TableCell>
                        {item.measures.metric.amount}{" "}
                        {item.measures.metric.unitShort}
                      </TableCell>
                    </TableRow>
                  )
                )}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <Paper sx={{ width: "90%", maxWidth: "600px", padding: 2 }}>
            {recipeState.recipe.extendedIngredients.map((item) => (
              <Box>
                <Typography>{item.nameClean}</Typography>
                <Typography>
                  {item.measures.metric.amount} {item.measures.metric.unitShort}
                </Typography>
              </Box>
            ))}
          </Paper> */}
          <Paper sx={{ width: "90%", maxWidth: "600px", padding: 2 }}>
            <Typography variant="h5">Preparation:</Typography>
            <List sx={{ width: "100%" }}>
              {recipeState.recipe.analyzedInstructions && recipeState.recipe.analyzedInstructions[0].steps.map((item) => (
                <ListItem key={item.number}>
                  <ListItemAvatar>
                    <Avatar sx={{ backgroundColor: "primary.main" }}>
                      {item.number}
                    </Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    sx={{ width: "100%" }}
                    primary={
                      <Typography sx={{ wordBreak: "break-word" }}>
                        {item.step}
                      </Typography>
                    }
                  />
                </ListItem>
              ))}
            </List>
          </Paper>
        </Stack>
      ) : (
        <Typography variant="h5">some problem</Typography>
      )}
    </Box>
  );
};

export default Recipe;
