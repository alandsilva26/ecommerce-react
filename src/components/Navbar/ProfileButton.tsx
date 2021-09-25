import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  Typography,
  Avatar,
  Stack,
  Menu,
  MenuItem,
} from '@mui/material';
import { RootReducerState } from '../../type';
import * as actionTypes from '../../store/actionTypes';

const ProfileButton = (): JSX.Element => {
  const { isAuth, name } = useSelector((state: RootReducerState) => state.auth);

  const dispatch = useDispatch();

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch({ type: actionTypes.LOGOUT });
  };

  return (
    <>
      {!isAuth ? (
        <Button href="/login" color="inherit">
          Login
        </Button>
      ) : (
        <>
          <Button color="inherit" onClick={handleMenu}>
            <Stack direction="row" spacing={1}>
              <Avatar alt="Profile photo" sx={{ width: 24, height: 24 }} />
              <Typography>{name}</Typography>
            </Stack>
          </Button>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disabled>
              Profile
            </MenuItem>
            <MenuItem onClick={handleClose} disabled>
              My account
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </>
      )}
    </>
  );
};

export default ProfileButton;
