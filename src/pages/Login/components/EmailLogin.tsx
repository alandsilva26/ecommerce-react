import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../../../store/actionTypes';
import { Redirect } from 'react-router-dom';
import {
  Box,
  TextField,
  Button,
  Stack,
  ButtonUnstyled,
  Typography,
} from '@mui/material';
import { RootReducerState } from '../../../type';
import { TramOutlined } from '@mui/icons-material';

interface InputState {
  email: string;
  phone: string;
  OTP: number | null;
}

const EmailLogin = () => {
  const [emailInput, setEmailInput] = useState<boolean>(true);
  const [input, setInput] = useState<InputState>({
    email: '',
    phone: '',
    OTP: null,
  });
  const [otpSent, setOtpSent] = useState<boolean>(false);
  const [otpError, setOtpError] = useState<boolean>(false);

  const OTP = 25565;

  const isAuth = useSelector((state: RootReducerState) => state.auth.isAuth);

  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    if (!otpSent) {
      // Step 1
      setInput({ ...input, OTP: null });
      setOtpError(false);
      setOtpSent(true);
    } else {
      if (input['OTP'] !== 25565) {
        setOtpError(true);
      } else {
        dispatch({ type: actionTypes.LOGIN_EMAIL });
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'OTP') {
      setInput({ ...input, [e.target.name]: parseInt(e.target.value) });
    } else {
      setInput({ ...input, [e.target.name]: e.target.value });
    }
  };

  const switchInput = () => {
    setEmailInput(!emailInput);
  };

  const handleCancel = (): void => {
    setOtpSent(false);
  };

  if (isAuth) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {!otpSent && (
          <>
            {emailInput ? (
              <TextField
                type="email"
                label="Email"
                variant="outlined"
                margin="normal"
                size="small"
                placeholder="Enter your email"
                autoComplete="email"
                id="email"
                name="email"
                value={input['email']}
                onChange={handleChange}
                required
                fullWidth
              />
            ) : (
              <TextField
                type="number"
                label="Phone"
                variant="outlined"
                margin="normal"
                size="small"
                placeholder="Enter your phone number"
                id="phone"
                name="phone"
                value={input['phone']}
                onChange={handleChange}
                autoComplete="phone"
                required
                fullWidth
              />
            )}

            <Button color="info" onClick={switchInput}>
              {emailInput ? 'Use Phone number' : 'Use email'}
            </Button>
          </>
        )}

        {otpSent && (
          <TextField
            type="number"
            label="OTP"
            variant="outlined"
            margin="normal"
            size="small"
            error={otpError}
            helperText="Please enter 25565 as OTP"
            placeholder="Please enter 25565 as OTP"
            id="OTP"
            name="OTP"
            value={input['OTP']}
            onChange={handleChange}
            required
            fullWidth
          />
        )}

        <Stack direction="row" justifyContent="space-between" mt={2}>
          {otpSent ? (
            <Button variant="outlined" color="primary" onClick={handleCancel}>
              Cancel
            </Button>
          ) : (
            <Button variant="outlined" color="primary" href="/">
              Back Home
            </Button>
          )}
          <Button variant="contained" color="primary" type="submit">
            Continue
          </Button>
        </Stack>
      </form>
    </>
  );
};

export default EmailLogin;
