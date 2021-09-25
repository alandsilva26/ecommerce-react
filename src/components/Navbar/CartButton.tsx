import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootReducerState } from '../../type';
import { Button, IconButton, Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CartDrawer from '../CartDrawer';

const CartButton = (): JSX.Element => {
  const [drawerState, setDrawerState] = useState<boolean>(false);

  const cartItems = useSelector((state: RootReducerState) => state.cartItems);

  console.log(cartItems.length);

  return (
    <>
      <Badge badgeContent={cartItems.length} color="success">
        <Button
          variant="outlined"
          color="inherit"
          endIcon={<ShoppingCartIcon />}
          onClick={() => setDrawerState(true)}
        >
          Cart
        </Button>
      </Badge>
      <CartDrawer drawerState={drawerState} setDrawerState={setDrawerState} />
      {/* <IconButton color="inherit">
        <Badge badgeContent={cartItems.length} color="success">
          <ShoppingCartIcon />
        </Badge>
      </IconButton> */}
    </>
  );
};

export default CartButton;
