import "./ItemList.css";
import ProductCard from "../../common/ProductCard/ProductCard";
import { Grid, Skeleton, Stack } from "@mui/material";

const ItemList = ({ items }) => {
  let array = ["a", "b", "c", "d", "e", "f", "g", "h"];
  return (
    <Grid container spacing={4}>
      {items.length > 0
        ? items.map((item) => <ProductCard key={item.id} item={item} />)
        : array.map((element) => (
            <Grid item lg={3} md={4} flexWrap={"wrap"} key={element}>
              <Stack
                sx={{
                  height: "600px",
                  width: "280px",
                  marginTop: "50px",
                  marginLeft: "50px",
                }}
              >
                <Skeleton variant="rectangular" sx={{ height: "400px" }} />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "1.5rem", height: "50px" }}
                />
                <Skeleton
                  variant="text"
                  sx={{ fontSize: "0.875rem", width: "250px", height: "20px" }}
                />
                <Skeleton variant="rectangular" sx={{ height: "100px" }} />
              </Stack>
            </Grid>
          ))}
    </Grid>
  );
};

export default ItemList;
