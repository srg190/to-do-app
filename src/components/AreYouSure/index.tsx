import PopupBox from "@components/PopupBox";
import { Box, Button } from "@mui/material";
import { useState } from "react";

const AreYouSure = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <PopupBox isSelected={isOpen}>
      <Box>
        <Box>
          <Button variant="contained">Sure</Button>
        </Box>
        <Box>
          <Button variant="outlined">Cancel</Button>
        </Box>
      </Box>
    </PopupBox>
  );
};
