import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as actionTypes from '../../../store/actionTypes';
import data from '../../../data.json';
import { Product, ProductState, RootReducerState } from '../../../type';

import { Grid, Box, Skeleton } from '@mui/material';
import ProductCardContainer from './ProductCardContainer';

const ProductList = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  const products = useSelector((state: RootReducerState) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);

    setTimeout(() => {
      console.log(data);
      dispatch({ type: actionTypes.ADD_PRODUCT, products: data });
      setLoading(false);
    }, 100);
    // const fetchProducts = async () => {
    // const response = await fetch('');

    // if (response.ok) {
    // const products: Product[] = await response.json();

    // }
    // };
    // fetchProducts();
  }, []);

  const getProductListElements = () => {
    return products?.map((product) => (
      <ProductCardContainer key={product.id} product={product} />
    ));
  };

  if (loading) {
    return (
      <Grid container spacing={2}>
        {Array.from(new Array(10)).map((item, index) => {
          return (
            <Grid item xs={12} sm={4} md={3}>
              <Box sx={{ pt: 0.5 }}>
                <Skeleton variant="rectangular" height={118} />
                <Skeleton />
                <Skeleton width="60%" />
              </Box>
            </Grid>
          );
        })}
      </Grid>
    );
  }

  return (
    <Grid container spacing={2}>
      {products && getProductListElements()}
    </Grid>
  );
};

export default ProductList;
