import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../../firebaseConfig";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useFormik } from "formik";

const SignUp = () => {
  const navigate = useNavigate();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (data) => {
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((userCredential) => {
          navigate("/");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email("Debe ser un email valido")
        .required("Debe completar este campo"),
      password: Yup.string().required("Debe completar este campo"),
    }),
    validateOnChange: false,
  });

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
        <form onSubmit={handleSubmit}>
          <div className="signForm">
            <h1>Registro</h1>
            <div className="signTextfield">
              <TextField
                type="email"
                fullWidth
                label="Email"
                name="email"
                variant="outlined"
                onChange={handleChange}
                sx={{ margin: "10px" }}
                error={errors.email ? true : false}
                helperText={errors.email}
              />
              <TextField
                type="password"
                fullWidth
                label="Contraseña"
                variant="outlined"
                name="password"
                onChange={handleChange}
                sx={{ margin: "10px" }}
                error={errors.password ? true : false}
                helperText={errors.password}
              />
              <Typography
                variant="caption"
                display="block"
                gutterBottom
                sx={{ margin: "10px" }}
              >
                ¿Tienes cuenta? <Link to="/signin">Ingresa!</Link>
              </Typography>
            </div>

            <Button
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "black" }}
            >
              Registrarse
            </Button>
          </div>
        </form>
      </Box>
    </div>
  );
};

export default SignUp;
