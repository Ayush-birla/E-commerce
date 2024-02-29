import { createAction, props } from "@ngrx/store";

export const createPaymentRequest = createAction(
    '[Payment] create payment request',
    props<{ reqdata: any }>()
  );
  export const createPaymentSuccess = createAction(
    '[Payment] create payment success..',
    props<{ payload: any }>()
  );
  export const createPaymentFailure = createAction(
    '[Payment] create payment failure..',
    props<{ error: any }>()
  );

  export const updatePaymentRequest = createAction(
    '[Payment] update payment request',
    props<{ reqdata: any }>()
  );
  export const updatePaymentSuccess = createAction(
    '[Payment] update payment success..',
    props<{ payload: any }>()
  );
  export const updatePaymentFailure = createAction(
    '[Payment] update payment failure..',
    props<{ error: any }>()
  );