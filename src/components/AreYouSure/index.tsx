import PopupBox from "@components/PopupBox";
import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { taskAction } from "@redux/Slices/task.slice";
import { dragAction } from "@redux/Slices/drag.slice";

const AreYouSure = () => {
  const dispatch = useAppDispatch();
  const { removeTask } = taskAction;
  const { removeState } = dragAction;
  const { isRemove, Id } = useAppSelector((s) => s.drag);
  return (
    <PopupBox isSelected={isRemove}>
      <Box display="flex" justifyContent="center">
        <Box margin="2%" padding="10px">
          <Button
            variant="contained"
            onClick={() => {
              console.log(Id, "Before call");
              dispatch(removeTask({ id: Id }));
              console.log(Id, "after call");
              dispatch(removeState({ isRemove: false }));
            }}
          >
            <Typography variant="h6">Sure</Typography>
          </Button>
        </Box>
        <Box margin="2%" padding="10px">
          <Button
            variant="outlined"
            onClick={() => dispatch(removeState({ isRemove: false }))}
          >
            <Typography color="text.primary" variant="h6">
              Cancel
            </Typography>
          </Button>
        </Box>
      </Box>
    </PopupBox>
  );
};
export default AreYouSure;
