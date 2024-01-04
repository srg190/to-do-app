import { ReactNode, useMemo } from "react";
import { store } from "@redux/store";
import { Provider } from "react-redux";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "@styles/Theme/theme";
import { useAppSelector } from "@redux/store";

const ReduxWrapper = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

const ThemeWrapper = ({ children }: { children: ReactNode }) => {
  const { mode } = useAppSelector((state) => state.theme);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <ReduxWrapper>
      <ThemeWrapper>{children}</ThemeWrapper>
    </ReduxWrapper>
  );
};
export default Wrapper;
