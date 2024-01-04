import { Popover } from "@mui/material";

const PopupBox = ({
  isSelected,
  children,
}: {
  isSelected: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <>
      <Popover
        anchorReference="anchorPosition"
        anchorPosition={{ top: 100, left: window.innerWidth / 2 }}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={isSelected}
      >
        {children}
      </Popover>
    </>
  );
};

export default PopupBox;
