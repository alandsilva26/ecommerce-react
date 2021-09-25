import React from 'react';
import { useSelector } from 'react-redux';
import { Product, RootReducerState } from '../type';

import {
  Box,
  Card,
  CardActions,
  CardContent,
  Typography,
  Drawer,
  Chip,
  CardMedia,
  List,
  ListItem,
  Button,
  Stack,
  IconButton,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

interface IProps {
  drawerState: boolean;
  setDrawerState: React.Dispatch<React.SetStateAction<boolean>>;
}

const CartDrawer = ({ drawerState, setDrawerState }: IProps) => {
  const cartItems = useSelector((state: RootReducerState) => state.cartItems);

  console.log(cartItems);

  const toggleDrawer = (e: React.SyntheticEvent<HTMLElement>) => {
    setDrawerState(!drawerState);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total: number, item: Product): number => {
      if (typeof item.price === 'string') {
        return total + parseInt(item.price);
      }
      return total + item.price;
    }, 0);
  };

  return (
    <React.Fragment>
      <Drawer
        anchor={'right'}
        open={drawerState}
        onClose={() => setDrawerState(false)}
      >
        <Box
          sx={{
            width: 350,
            p: 1,
          }}
          role="presentation"
          onKeyDown={toggleDrawer}
        >
          <Typography variant="h5">Cart Overview</Typography>

          {cartItems.map((product: Product) => {
            return (
              <Card className="CartCard" variant="outlined" sx={{ m: 1 }}>
                <CardContent className="CartItem__content">
                  <Typography
                    component="div"
                    className="CartItem__title"
                    // variant="body1"
                  >
                    {product.title}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Stack
                    direction="row"
                    justifyContent="flex-end"
                    sx={{ width: '100%' }}
                  >
                    <IconButton size="small">
                      <AddIcon />
                    </IconButton>

                    <Button size="small">0</Button>
                    <IconButton size="small">
                      <RemoveIcon />
                    </IconButton>
                  </Stack>
                </CardActions>
              </Card>
            );
          })}

          <Box>
            <CardContent>
              <Typography variant="subtitle2"> Total Price: </Typography>
              <Typography variant="h4">$ {getTotalPrice()}</Typography>
            </CardContent>
          </Box>

          <Button variant="contained" fullWidth>
            Proceed to payment
          </Button>
        </Box>
      </Drawer>
    </React.Fragment>
  );
};

export default CartDrawer;
