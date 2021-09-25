import { useState } from 'react';
import { useDispatch } from 'react-redux';
import * as actionTypes from '../../../store/actionTypes';
import ProductCard from './ProductCard';
import SnackbarNotif from './SnackbarNotif';
import { Product } from '../../../type';

interface IProps {
  product: Product;
}

const ProductCardContainer = ({ product }: IProps) => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const dispatch = useDispatch();

  const handleClick = (product: Product): void => {
    dispatch({ type: actionTypes.ADD_TO_CART, product: product });
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = (): void => {
    setSnackbarOpen(false);
  };

  return (
    <>
      <ProductCard product={product} handleClick={handleClick} />
      <SnackbarNotif
        handleSnackbarClose={handleSnackbarClose}
        snackbarOpen={snackbarOpen}
      />
    </>
  );
};

export default ProductCardContainer;
