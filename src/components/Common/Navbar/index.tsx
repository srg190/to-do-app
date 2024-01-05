import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Container,
} from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import LightModeIcon from "@mui/icons-material/LightMode";
import ModeNightIcon from "@mui/icons-material/ModeNight";
import { useAppDispatch, useAppSelector } from "@redux/store";
import { themeAction } from "@redux/Slices/theme.slice";
import { Mode } from "@constant/TestIds";

function Navbar() {
  const { mode } = useAppSelector((state) => state.theme);
  const dispatch = useAppDispatch();
  const { togleTheme } = themeAction;

  return (
    <AppBar
      sx={{
        position: "sticky",
        background: "none",
        boxShadow: "none",
        bgcolor: "primary.light",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TODO
          </Typography>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            TODO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

          <Box sx={{ flexGrow: 0 }}>
            <IconButton
              data-testid={Mode.CHANGE_MODE}
              onClick={() => dispatch(togleTheme())}
            >
              {mode === "light" ? <ModeNightIcon /> : <LightModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
        <p data-testid={Mode.TEST_ID}>{mode}</p>
      </Container>
    </AppBar>
  );
}
export default Navbar;
