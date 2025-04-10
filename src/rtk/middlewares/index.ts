/* eslint-disable @typescript-eslint/no-explicit-any */
import { yourGiftWishApiSlice } from '../mainQuery';
const rtkMiddleware = [yourGiftWishApiSlice.middleware];
export const storeMiddleware = (defaultMiddleWares: any, extraMiddleWares: any) => {
  return defaultMiddleWares({ serializableCheck: false })
    .concat(rtkMiddleware)
    .concat(extraMiddleWares)
}
