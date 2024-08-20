import React from "react";
import Button from "../../ui/Button.jsx";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice.js";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  return (
    <div className={"hidden sm:inline-block"}>
      <Button type={"small"} onClick={() => dispatch(deleteItem(pizzaId))}>
        Delete
      </Button>
    </div>
  );
}

export default DeleteItem;
