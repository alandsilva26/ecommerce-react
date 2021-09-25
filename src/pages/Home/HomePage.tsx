import { Container, Box, Typography } from '@mui/material';
import ProductList from './components/ProductList';

const HomePage = (): JSX.Element => {
  return (
    <Container sx={{ paddingTop: '1em' }}>
      <Typography variant="h4" color="initial" marginBottom={5}>
        Today's best deals
      </Typography>
      <ProductList />
    </Container>
  );
};

export default HomePage;
