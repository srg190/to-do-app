import { Box, Button, Popover } from "@mui/material";
import { DragEvent, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import PopupBox from "@components/PopupBox";

const Popup = ({
  isSelected,
  setIsSelected,
}: {
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isRTouch, setIsRTouch] = useState(false);
  const [isMTouch, setIsMTouch] = useState(false);
  const handleModify = (e: DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsMTouch(true);
    setIsRTouch(false);
  };
  const handleRemove = (e: DragEvent<HTMLDivElement>) => {
    e.stopPropagation();
    e.preventDefault();
    setIsMTouch(false);
    setIsRTouch(true);
  };
  const onDropHandler = (e: DragEvent<HTMLDivElement>) => {
    console.log(e.dataTransfer.getData("Id"), " hello ---");
    e.preventDefault();
    e.stopPropagation();
  };
  return (
    <>
      <PopupBox isSelected={isSelected}>
        <Box display="flex" justifyContent="center">
          <Box margin="2px">
            <div onDragOver={(e) => handleModify(e)} onDrop={onDropHandler}>
              <Button
                startIcon={<EditIcon />}
                variant={isMTouch ? "contained" : "outlined"}
              >
                Modify
              </Button>
            </div>
          </Box>
          <Box margin="2px">
            <div onDragOver={(e) => handleRemove(e)} onDrop={onDropHandler}>
              <Button
                startIcon={<DeleteIcon />}
                variant={isRTouch ? "contained" : "outlined"}
                color="error"
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
