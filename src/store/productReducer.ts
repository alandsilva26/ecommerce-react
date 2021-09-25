import * as actionTypes from './actionTypes';
import { Product, ProductState, ProductAction } from '../type';

const initialState: ProductState = [];

const productReducer = (
  state: ProductState = initialState,
  action: ProductAction
): ProductState => {    

  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      return [...action.products];
  }
  return state;
};

export default productReducer;
