import { ThemeProvider } from "styled-components";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GlobalStyle, theme } from "./globalStyle";


function App() {
  return (

    <ThemeProvider theme={theme}>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </Router>

    </ThemeProvider>
  );
}

export default App;
