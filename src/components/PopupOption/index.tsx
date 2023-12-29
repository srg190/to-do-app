import { Box, Button } from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PopupBox from "@components/PopupBox";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { dragAction } from "@redux/Slices/drag.slice";

const Popup = () => {
  const [isRTouch, setIsRTouch] = useState(false);
  const [isMTouch, setIsMTouch] = useState(false);
  const { isDragging } = useAppSelector((state) => state.drag);
  const { removeState, dragState } = dragAction;
  const dispatch = useAppDispatch();

  return (
    <>
      <PopupBox isSelected={isDragging}>
        <Box display="flex" justifyContent="center">
          <Box margin="2px">
            <div
              onMouseEnter={() => setIsMTouch(true)}
              onMouseLeave={() => setIsMTouch(false)}
            >
              <Button
                startIcon={<EditIcon />}
                variant={isMTouch ? "contained" : "outlined"}
                onClick={() => {
                  dispatch(dragState({ isDragging: false }));
                }}
              >
                Modify
              </Button>
            </div>
          </Box>
          <Box margin="2px">
            <div
              onMouseEnter={() => setIsRTouch(true)}
              onMouseLeave={() => setIsRTouch(false)}
            >
              <Button
                startIcon={<DeleteIcon />}
                variant={isRTouch ? "contained" : "outlined"}
                color="error"
                onClick={() => {
                  dispatch(removeState({ isRemove: true }));
                  dispatch(dragState({ isDragging: false }));
                }}
              >
                Remove
              </Button>
            </div>
          </Box>
        </Box>
      </PopupBox>
    </>
  );
};

export default Popup;
