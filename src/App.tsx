import { useMemo } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "./styles/Theme/theme";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Home from "@pages/Home";
import Layout from "@styles/Layout";
import { useAppSelector } from "@redux/store";

function App() {
  const { mode } = useAppSelector((state) => state.theme);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/home" replace />} />
              <Route path="/home" element={<Home />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </Router>
    </>
  );
}

export default App;
