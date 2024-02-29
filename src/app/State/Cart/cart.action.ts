import { createAction, props } from '@ngrx/store';

export const addItemToCartRequest = createAction(
  '[Cart] add item to cart request',
  props<{ reqdata: any }>()
);
export const addItemToCartSuccess = createAction(
  '[Cart] add item to cart success..',
  props<{ payload: any }>()
);
export const addItemToCartFailure = createAction(
  '[Cart] add item to cart failure..',
  props<{ error: any }>()
);
export const getCartRequest = createAction('[Cart] get cart request..');

export const getCartSuccess = createAction(
  '[Cart] get item to cart failure..',
  props<{ payload: any }>()
);
export const getCartFailure = createAction(
  '[Cart] get item to cart failure..',
  props<{ error: any }>()
);
export const removeCartItemRequest = createAction(
  '[Cart] add item to cart failure..',
  props<{ payload: any }>()
);
export const removeCartItemSuccess = createAction(
  '[Cart] add item to cart failure..',
  props<{ cartItemId: Number }>()
);
export const removeCartItemFailure = createAction(
  '[Cart] add item to cart failure..',
  props<{ error: any }>()
);
export const updateCartItemRequest = createAction(
  '[Cart] update item to cart failure..',
  props<{ reqData: any }>()
);
export const updateCartItemSuccess = createAction(
  '[Cart] update item to cart failure..',
  props<{ payload: any }>()
);
export const updateCartItemFailure = createAction(
  '[Cart] update item to cart failure..',
  props<{ error: any }>()
);
