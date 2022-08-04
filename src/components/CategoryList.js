import React, { useState } from "react";
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
import FetchFoods from "../redux/foods/FoodsAction";

const CategoryList = () => {
  const categoryState=useSelector(state=>state.categoryState)
  const dispatch=useDispatch()
  const handleClick=(type)=>{
    dispatch(FetchFoods(type));
    dispatch(setCategory(type));
    dispatch(openDrawer(false));
  }
  return (
    <List sx={{ p: 1 ,minWidth:'246px'}}>
      {categories.map((item) => (
        <ListItemButton
          key={item.title}
          sx={{ width:'100%', borderRadius: 2, mb: 0.5 }}
          selected={categoryState.category === item.title}
          onClick={()=>handleClick(item.title)}
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
          <ListItemText primary={item.name} sx={{textTransform:'capitalize'}} />
        </ListItemButton>
      ))}
    </List>
  );
};

export default CategoryList;
