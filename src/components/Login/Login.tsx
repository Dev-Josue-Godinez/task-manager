import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FacebookIcon } from "react-share";
import "./../../shared/common-styles.css";
import { useState } from "react";
import { PaletteMode } from "@mui/material";

type Props = {
  //juan: callBack
};

const Login = (props: Props) => {
  const [themeMode, setThemeMode] = useState("light");

  const toggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };

  const theme = createTheme({
    palette: {
      mode: themeMode as PaletteMode,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm" sx={{ py: 4 }}>
        <form>
          <TextField
            fullWidth
            label="Correo electrónico"
            variant="outlined"
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Contraseña"
            variant="outlined"
            margin="normal"
            required
            type="password"
          />
          <Button variant="contained" fullWidth sx={{ mt: 2, mb: 1 }}>
            Iniciar sesión
          </Button>
          <Button className="rounded-button">
            <FacebookIcon className="rounded-icon" />
          </Button>
        </form>
        <Button
          onClick={toggleTheme}
          sx={{ mt: 2 }}
          variant="outlined"
          fullWidth
        >
          Cambiar tema a {themeMode === "light" ? "oscuro" : "claro"}
        </Button>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
