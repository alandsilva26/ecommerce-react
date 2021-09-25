import {
  Box,
  Grid,
  Container,
  Typography,
  Icon,
  IconButton,
  Card,
  CardContent,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import EmailLogin from './components/EmailLogin';
import GoogleLogin from './components/GoogleLogin';

const LoginPage = (): JSX.Element => {
  return (
    <Box className="LoginBox">
      {/* <Container> */}
      <Grid container direction="row">
        <Grid item className="GreetingTextItem" md={5}>
          <Typography variant="h2" gutterBottom>
            Welcome Back!
          </Typography>
          <Typography>
            To keep connected with us sign in to your registered account!!
          </Typography>
        </Grid>
        <Grid item className="LoginGridItem" xs={12} md={7}>
          <Container maxWidth="xs">
            <Typography variant="h4" align="center">
              Sign in to your account
            </Typography>
            <Box>
              {/* <GoogleLogin /> */}

              <IconButton className="IconButton" color="primary" size="small">
                <Icon baseClassName="fab" className="fa-google" />
              </IconButton>
              <IconButton className="IconButton" color="primary" size="small">
                <Icon baseClassName="fab" className="fa-facebook-f" />
              </IconButton>
            </Box>

            <Typography variant="subtitle2">or use your email</Typography>

            <EmailLogin />
          </Container>
        </Grid>
      </Grid>
      {/* </Container> */}
    </Box>
  );
};

export default LoginPage;
