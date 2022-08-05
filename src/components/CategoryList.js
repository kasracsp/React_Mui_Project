import React from "react";
import {
  Avatar,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { categories } from "../assets/categories";
import { useSelector,useDispatch } from "react-redux";
import { setCategory } from "../redux/category/categoryAction";
import { openDrawer } from "../redux/category/categoryAction";
import {FetchFoods} from "../redux/foods/FoodsAction";
import {FetchFoodsSuccess} from "../redux/foods/FoodsAction";

const CategoryList = () => {
  const categoryState=useSelector(state=>state.categoryState)
  const dispatch=useDispatch()
  const handleClick=(type)=>{
    dispatch(FetchFoods(type));
    dispatch(setCategory(type));
    dispatch(openDrawer(false));
    window.scrollTo({
      top: 0,
    });
  }
  return (
    <List sx={{ p: 1, minWidth: "246px" }}>
      {categories.map((item) => (
        <ListItemButton
          key={item.title}
          sx={{ width: "100%", borderRadius: 2, mb: 0.5 }}
          selected={categoryState.category === item.title}
          onClick={() => handleClick(item.title)}
        >
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar
                sx={{ width: 30, height: 30 }}
                src={item.image}
                alt={item.title}
              />
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText
            primary={item.name}
            sx={{ textTransform: "capitalize" }}
          />
        </ListItemButton>
      ))}
      <ListItemButton
        key="favorites"
        sx={{ width: "100%", borderRadius: 2, mb: 0.5 }}
        selected={categoryState.category === "favorites"}
        onClick={() => dispatch(FetchFoodsSuccess(categoryState.favorite))}
      >
        <ListItemIcon>
          <ListItemAvatar>
            <Avatar
              sx={{ width: 30, height: 30 }}
              src="https://cdn-icons.flaticon.com/png/512/3287/premium/3287041.png?token=exp=1659565683~hmac=a1234c4f4630e58fa96adbc705ba44be"
              alt="favorites"
            />
          </ListItemAvatar>
        </ListItemIcon>
        <ListItemText
          primary="favorites"
          sx={{ textTransform: "capitalize" }}
        />
      </ListItemButton>
    </List>
  );
};

export default CategoryList;
