import "./App.css";
import Signup from './pages/Signup'
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
      <div className="App">
        <Signup></Signup>
      </div>
    </ThemeProvider>
  );
}

export default App;
