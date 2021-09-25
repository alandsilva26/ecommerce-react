import { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  CardMedia,
  CardActions,
  Rating,
  Chip,
  Divider,
  Button,
  IconButton,
  Snackbar,
} from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import RatingItem from './RatingItem';
import SnackbarNotif from './SnackbarNotif';
import { CartAction, Product } from '../../../type';
import { ADD_TO_CART } from '../../../store/actionTypes';

interface ProductCardProps {
  product: Product;
  handleClick: (product: Product) => void;
}

const ProductCard = ({
  product,
  handleClick,
}: ProductCardProps): JSX.Element => {
  return (
    <>
      <Grid item xs={12} sm={4} md={3}>
        <Card
          className="ProductCard"
          variant="outlined"
          sx={{ height: '100%' }}
        >
          <CardMedia
            component="img"
            className="ProductImage"
            image={product.image}
            sx={{ padding: 2, objectFit: 'contain' }}
          />
          <Box className="ProductWrapper">
            <CardContent className="ProductContent">
              <Typography
                component="div"
                className="ProductContent__title"
                variant="body1"
              >
                {product.title}
              </Typography>
              <Chip
                className="ProductContent__category"
                label={product.category}
                variant="outlined"
                size="small"
              />
              <RatingItem
                rate={product.rating.rate}
                count={product.rating.count}
              />
            </CardContent>

            <CardActions className="ProductFooter">
              <Typography className="ProductFooter__price" variant="h5">
                &#8377; {product.price}
              </Typography>
              <IconButton
                className="AddCartButton"
                color="info"
                aria-label="add to shopping cart"
                size="small"
                onClick={(e) => handleClick(product)}
              >
                <AddShoppingCartIcon />
              </IconButton>
            </CardActions>
          </Box>
        </Card>
      </Grid>
    </>
  );
};

export default ProductCard;
