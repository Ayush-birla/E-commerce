import { createAction, props } from '@ngrx/store';

export const findProductByCategoryRequest = createAction(
  '[Product] find product by category request'
);
export const findProductByCategorySuccess = createAction(
  '[Product] find product by category success',
  props<{ payload: any }>()
);
export const findProductByCategoryFailure = createAction(
  '[Product] find product by category fail',
  props<{ error: any }>()
);

export const findProductByIdRequest = createAction(
    '[Product] find product by id request'
  );
  export const findProductByIdSuccess = createAction(
    '[Product] find product by id success',
    props<{ payload: any }>()
  );
  export const findProductByIdFailure = createAction(
    '[Product] find product by id fail',
    props<{ error: any }>()
  );