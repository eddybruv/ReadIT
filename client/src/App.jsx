import "./App.css";

// routing dependencies
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// pages
import Signup from "./pages/Signup";
import Preferences from "./pages/Preferences";
import Login from "./pages/Login";
import Error from "./pages/ErrorPage";
import ForYou from "./pages/ForYou";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    secondary: {
      main: "#e0a101",
      light: "#debb60",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          <Route path="/preference" element={<Preferences />} />
          <Route path="/for-you" element={<Login />} />
          <Route path="/*" element={<Error />} />
          <Route path="/foryou" element={<ForYou />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
