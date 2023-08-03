import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";

const ProductCard = ({ item }) => {
  return (
    <Grid item lg={3} md={4} flexWrap={"wrap"}>
      <Card
        sx={{
          maxWidth: 345,
          width: 300,
          minHeight: 520,
          margin: 5,
          justifyContent: "space-evenly",
        }}
      >
        <CardActionArea sx={{ minHeight: 520 }}>
          <CardMedia
            component="img"
            height="300"
            image={item.img}
            alt={item.title}
          />
          <CardContent sx={{ minHeight: 160 }}>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {item.description}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/itemDetail/${item.id}`} style={{ color: "white" }}>
            <Button
              size="large"
              variant="contained"
              sx={{ backgroundColor: "black", color: "white" }}
            >
              Conocé más
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default ProductCard;
