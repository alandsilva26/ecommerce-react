import { AppBar, Box, Stack, Toolbar, Typography } from '@mui/material';
import ProfileButton from './ProfileButton';
import CartButton from './CartButton';

const Navbar = (): JSX.Element => {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: 2 }}>
      <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <a className="navbar-brand" href="/">
              Checkout
            </a>
          </Typography>
          <Stack direction="row" spacing={2}>
            <CartButton />
            <ProfileButton />
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
