import { Box, Button, MenuItem, TextField } from "@mui/material";
import { useFormik } from "formik";
import { useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import axios from "axios";
import "./CheckOut.css";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../../firebaseConfig";

const CheckOut = () => {
  const navigate = useNavigate();

  const { cart, totalPrice, clearCart } = useContext(CartContext);

  const MySwal = withReactContent(Swal);

  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState("");

  const [orderId, setOrderId] = useState("");

  let total = totalPrice();

  const { handleSubmit, handleChange, errors } = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      address: "",
      country: "",
      total,
      date: serverTimestamp(),
    },
    onSubmit: (data) => {
      let ordersCollections = collection(db, "orders");
      addDoc(ordersCollections, data).then((res) => setOrderId(res.id));
      cart.forEach((element) => {
        updateDoc(doc(db, "products", element.id), {
          stock: element.stock - element.quantity,
        });
      });
      if (orderId) {
        Swal.fire({
          title: "Aqui esta tu numero de compra",
          text: orderId,
          imageUrl:
            "https://res.cloudinary.com/dtaq3xptn/image/upload/v1691067592/ty_nhn13a.avif",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
          confirmButtonColor: "black",
        }).then(() => {
          navigate("/");
        });
      }
      clearCart();
    },
    validationSchema: Yup.object({
      name: Yup.string("El nombre debe ser de tipo texto")
        .required("Debe completar este campo")
        .min(3, "Debe tener mas de 3 caracteres")
        .max(20, "Debe tener menos de 20 caracteres"),
      lastname: Yup.string("El apellido debe ser de tipo texto")
        .required("Debe completar este campo")
        .min(3, "Debe tener mas de 3 caracteres")
        .max(20, "Debe tener menos de 20 caracteres"),
      email: Yup.string()
        .email("Debe ser un email valido")
        .required("Debe completar este campo"),
      address: Yup.string()
        .required("Debe completar este campo")
        .min(5, "Debe tener mas de 10 caracteres")
        .max(50, "Debe tener menos de 50 caracteres"),
      country: Yup.string().required("Debe seleccionar un pais"),
    }),
    validateOnChange: false,
  });

  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((response) => {
        const countryOptions = response.data.map((country) => ({
          value: country.name.common,
          label: country.name.common,
        }));
        let countryOptionsSorted = countryOptions.sort((a, b) => {
          if (a.value < b.value) return -1;
          if (a.value > b.value) return 1;
          return 0;
        });
        setCountries(countryOptionsSorted);
      })
      .catch((error) => {
        console.error("Error al encontrar los paises:", error);
      });
  }, []);

  const handleSelect = (e) => {
    setCountry(e.target.value);
  };

  return (
    <Box display={"flex"} justifyContent={"center"} marginTop={5}>
      <div className="checkout">
        <div className="checkoutForm">
          <h1>Detalles de facturación</h1>
          <form onSubmit={handleSubmit}>
            <TextField
              sx={{ marginBottom: 3 }}
              fullWidth
              label="Nombre"
              variant="outlined"
              name="name"
              onChange={handleChange}
              error={errors.name ? true : false}
              helperText={errors.name}
            />
            <TextField
              sx={{ marginBottom: 3 }}
              fullWidth
              label="Apellido"
              variant="outlined"
              name="lastname"
              onChange={handleChange}
              error={errors.lastname ? true : false}
              helperText={errors.lastname}
            />
            <TextField
              sx={{ marginBottom: 3 }}
              fullWidth
              label="Email"
              variant="outlined"
              name="email"
              onChange={handleChange}
              error={errors.email ? true : false}
              helperText={errors.email}
            />
            <TextField
              sx={{ marginBottom: 3 }}
              fullWidth
              name="country"
              variant="outlined"
              select
              label="País"
              value={country}
              onChange={(e) => {
                handleChange(e);
                handleSelect(e);
              }}
              error={errors.country ? true : false}
              helperText={errors.country}
            >
              {countries.map((element) => (
                <MenuItem key={element.label} value={element.value}>
                  {element.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              sx={{ marginBottom: 3 }}
              fullWidth
              label="Dirección"
              variant="outlined"
              name="address"
              onChange={handleChange}
              error={errors.address ? true : false}
              helperText={errors.address}
            />
            <Button
              type="submit"
              variant="contained"
              sx={{ color: "white", backgroundColor: "black" }}
            >
              Confirmar Compra
            </Button>
          </form>
        </div>
        <img
          src="https://res.cloudinary.com/dtaq3xptn/image/upload/v1690961922/Apple-store/checkoutimg_c3rbzr.jpg"
          alt=""
        />
      </div>
    </Box>
  );
};

export default CheckOut;
