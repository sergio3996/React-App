import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import "./ItemList.css";
import ProductCard from "../../common/ProductCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <Grid container>
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </Grid>
  );
};

export default ItemList;
