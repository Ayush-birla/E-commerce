import { createAction, props } from '@ngrx/store';

export const createOrderRequest = createAction(
  '[Order] create order request ',
  props<{ reqData: any }>()
);
export const createOrderSuccess = createAction(
  '[Order] create order success ',
  props<{ order: any }>()
);
export const createOrderFailure = createAction(
  '[Order] create order failure ',
  props<{ error: any }>()
);

export const getOrderByIdRequest = createAction(
  '[Order] get order requese ',
  props<{ orderId: String }>()
);
export const getOrderByIdSuccess = createAction(
  '[Order] get order success ',
  props<{ order: any }>()
);
export const getOrderByIdFailure = createAction(
  '[Order] get order success ',
  props<{ error: any }>()
);

export const getOrderHistoryRequest = createAction(
  '[Order] get order history request '
);
export const getOrderHistorySuccess = createAction(
  '[Order] get order history success ',
  props<{ order: any }>()
);
export const getOrderHistoryFailure = createAction(
  '[Order] get order history success ',
  props<{ error: any }>()
);
