import { Box } from "@mui/material";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import DoneIcon from "@mui/icons-material/Done";
import RunningWithErrorsIcon from "@mui/icons-material/RunningWithErrors";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";

const Status = ({
  status,
}: {
  status: "pending" | "success" | "todo" | "process";
}) => {
  const currStatus = {
    pending: {
      bgColor: "error.light",
      txtColor: "error.dark",
      component: <PendingActionsIcon sx={{ height: "10px", width: "10px" }} />,
    },
    success: {
      bgColor: "success.main",
      txtColor: "success.dark",
      component: <DoneIcon sx={{ height: "10px", width: "10px" }} />,
    },
    todo: {
      bgColor: "info.light",
      txtColor: "info.dark",
      component: (
        <FormatListBulletedIcon sx={{ height: "10px", width: "10px" }} />
      ),
    },
    process: {
      bgColor: "warning.main",
      txtColor: "warning.dark",
      component: (
        <RunningWithErrorsIcon sx={{ height: "10px", width: "10px" }} />
      ),
    },
  };
  return (
    <Box
      maxWidth="80px"
      maxHeight="15px"
      bgcolor={currStatus[status].bgColor}
      color={currStatus[status].txtColor}
      fontSize="small"
      borderRadius="16px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box display="flex" justifyContent="center" alignItems="center">
        <Box>{currStatus[status].component}</Box>
        <Box>{status}</Box>
      </Box>
    </Box>
  );
};

export default Status;
