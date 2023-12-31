import PopupBox from "@components/Common/PopupBox";
import { Box, Button, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { taskAction } from "@redux/Slices/task.slice";
import { dragAction } from "@redux/Slices/drag.slice";
import { AreYouSureConstant } from "@constant/TestIds";

const AreYouSure = ({ test }: { test?: boolean }) => {
  const dispatch = useAppDispatch();
  const { removeTask } = taskAction;
  const { removeState } = dragAction;
  const { isRemove, Id } = useAppSelector((s) => s.drag);
  return (
    <PopupBox isSelected={test || isRemove || false}>
      <Box display="flex" justifyContent="center">
        <Box margin="2%" padding="10px">
          <Button
            variant="contained"
            onClick={() => {
              dispatch(removeTask({ id: Id }));
              dispatch(removeState({ isRemove: false }));
            }}
          >
            <Typography data-testid={AreYouSureConstant.SURE} variant="h6">
              Sure
            </Typography>
          </Button>
        </Box>
        <Box margin="2%" padding="10px">
          <Button
            variant="outlined"
            onClick={() => dispatch(removeState({ isRemove: false }))}
          >
            <Typography
              data-testid={AreYouSureConstant.CANCEL}
              color="text.primary"
              variant="h6"
            >
              Cancel
            </Typography>
          </Button>
        </Box>
      </Box>
    </PopupBox>
  );
};
export default AreYouSure;
