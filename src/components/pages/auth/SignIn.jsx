import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../firebaseConfig";
import { Box, Button, TextField, Typography } from "@mui/material";
import "./Auth.css";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <Box
        sx={{
          with: "100%",
          display: "flex",
          justifyContent: "center",
          marginTop: "70px",
        }}
      >
        <form onSubmit={signIn}>
          <div className="signForm">
            <h1>Ingrese su cuenta</h1>
            <div className="signTextfield">
              <TextField
                type="email"
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{ margin: "10px" }}
              />
              <TextField
                type="password"
                fullWidth
                label="Contraseña"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{ margin: "10px" }}
              />
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                sx={{ margin: "10px" }}
              >
                ¿No tienes cuenta? <Link to="/signup">Registrate!</Link>
              </Typography>
            </div>

            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "black" }}
            >
              Ingresar
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
};

export default SignIn;
