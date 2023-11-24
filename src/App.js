import { ThemeProvider } from "styled-components";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle, theme } from "./globalStyle";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";

const MuiTheme = createTheme({
  
  palette: {
    primary: {
      main: "#FFA33C",
    }
  }
})
function App() {
  return (

    <ThemeProvider theme={theme}>
      <MuiThemeProvider theme={MuiTheme}>
        <Router>
          <GlobalStyle />
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Router>
      </MuiThemeProvider>
    </ThemeProvider>
  );
}

export default App;
