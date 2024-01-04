import { Box, Button } from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PopupBox from "@components/PopupBox";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { dragAction } from "@redux/Slices/drag.slice";
import TaskForm from "@components/TaskForm";

const Modify = () => {
  const { isModify } = useAppSelector((state) => state.drag);
  const { Id } = useAppSelector((s) => s.drag);
  return (
    <>
      <PopupBox isSelected={isModify || false}>
        <TaskForm Id={Id} />
      </PopupBox>
    </>
  );
};

export default Modify;
