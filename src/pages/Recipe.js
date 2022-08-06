import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
//redux
import { useSelector, useDispatch } from "react-redux";
import FetchRecipe from "../redux/recipe/RecipeAction";
//mui
import {
  Avatar,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
//mui-icons
import GroupIcon from "@mui/icons-material/Group";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import EnergySavingsLeafIcon from "@mui/icons-material/EnergySavingsLeaf";
import BreakfastDiningIcon from "@mui/icons-material/BreakfastDining";
import LocalDrinkIcon from "@mui/icons-material/LocalDrink";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

const Recipe = () => {
  const dispatch = useDispatch();
  const recipeState = useSelector((state) => state.recipeState);
  console.log(recipeState.recipe);
  const params = useParams();
  useEffect(() => {
    dispatch(FetchRecipe(params.id));
  }, []);

  return (
    <Box>
      <Navbar />
      {recipeState.loading ? (
        <Typography>loading...</Typography>
      ) : recipeState.error ? (
        <Typography>{recipeState.error}</Typography>
      ) : (
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
          <Stack direction="row" spacing={2}>
            <Stack
              sx={{ justifyContent: "center", alignItems: "center" }}
              spacing={1}
            >
              <Avatar
                sx={{
                  backgroundColor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <GroupIcon color="primary" />
              </Avatar>
              <Typography variant="subtitle2" color="text.secondary">
                {recipeState.recipe.servings} person
              </Typography>
            </Stack>
            <Stack
              sx={{ justifyContent: "center", alignItems: "center" }}
              spacing={1}
            >
              <Avatar
                sx={{
                  backgroundColor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <AccessAlarmIcon color="primary" />
              </Avatar>
              <Typography variant="subtitle2" color="text.secondary">
                {recipeState.recipe.readyInMinutes} minutes
              </Typography>
            </Stack>
            <Stack
              sx={{ justifyContent: "center", alignItems: "center" }}
              spacing={1}
            >
              <Avatar
                sx={{
                  backgroundColor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <BreakfastDiningIcon
                  sx={{ pointerEvents: "none" }}
                  color={recipeState.recipe.glutenFree ? "success" : "error"}
                />
              </Avatar>
              <Typography variant="subtitle2" color="text.secondary">
                gluten free
              </Typography>
            </Stack>
            <Stack
              sx={{ justifyContent: "center", alignItems: "center" }}
              spacing={1}
            >
              <Avatar
                sx={{
                  backgroundColor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <EnergySavingsLeafIcon
                  sx={{ pointerEvents: "none" }}
                  color={recipeState.recipe.vagetarian ? "success" : "error"}
                />
              </Avatar>
              <Typography variant="subtitle2" color="text.secondary">
                vegetarian
              </Typography>
            </Stack>
            <Stack
              sx={{ justifyContent: "center", alignItems: "center" }}
              spacing={1}
            >
              <Avatar
                sx={{
                  backgroundColor: "background.paper",
                  border: "1px solid",
                  borderColor: "divider",
                }}
              >
                <LocalDrinkIcon
                  sx={{ pointerEvents: "none" }}
                  color={recipeState.recipe.dairyFree ? "success" : "error"}
                />
              </Avatar>
              <Typography variant="subtitle2" color="text.secondary">
                dairy free
              </Typography>
            </Stack>
          </Stack>
          <Box
            sx={{
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
        </Stack>
      )}
    </Box>
  );
};

export default Recipe;
