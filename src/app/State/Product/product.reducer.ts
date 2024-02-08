import { createReducer, on } from '@ngrx/store';
import {
  findProductByCategoryFailure,
  findProductByCategorySuccess,
  findProductByIdSuccess,
} from './product.actions';

const initialState = {
  products: [],
  loading: false,
  error: null,
  product: null,
};

export const productReducer = createReducer(
  initialState,
  on(findProductByCategorySuccess, (state, { payload }) => ({
    ...state,
    products: payload,
    content: payload.content,
    loading: false,
  })),
  on(findProductByCategoryFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  })),
  on(findProductByIdSuccess, (state, { payload }) => ({
    ...state,
    product: payload,
    loading: false,
  })),
);
