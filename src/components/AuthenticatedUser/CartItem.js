import React from "react";
import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  MenuItem,
  InputLabel,
  Select,
  FormControl,
} from "@mui/material";
import { useDispatch } from "react-redux";
import { updateAmount, removeFromCart } from "../../redux/cart";

export default function CartItem({ productName, productQuantity, productId }) {
  // [REDUX HOOK]
  const dispatch = useDispatch();

  function handleChange(e) {
    dispatch(updateAmount(productId, e.target.value));
  }
  function handleRemove(productId) {
    dispatch(removeFromCart(productId));
  }
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image="https://mui.com/static/images/cards/paella.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productName}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Amount</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="amount-select"
              value={productQuantity}
              label="productAmount"
              onChange={handleChange}
            >
              <MenuItem value={1}>1</MenuItem>
              <MenuItem value={2}>2</MenuItem>
              <MenuItem value={3}>3</MenuItem>
              <MenuItem value={4}>4</MenuItem>
              <MenuItem value={5}>5</MenuItem>
            </Select>
          </FormControl>
          <Button
            variant="outlined"
            color="error"
            onClick={() => handleRemove(productId)}
          >
            Remove
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
