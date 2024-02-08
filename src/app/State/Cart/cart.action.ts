import { createAction, props } from "@ngrx/store";

export const addItemToCartRequest=createAction(
    '[Cart] add item to cart request',props<{reqdata:any}>()
)