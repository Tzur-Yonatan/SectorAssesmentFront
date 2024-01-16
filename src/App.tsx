import "./App.css";
import { Navbar } from "./components/navbar/navbar";
import { Dashboard } from "./components/dashboard/dashboard";
import { AppTheme } from "./theme";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={AppTheme}>
        <Navbar />
        <Dashboard />
      </ThemeProvider>
    </div>
  );
}

export default App;
