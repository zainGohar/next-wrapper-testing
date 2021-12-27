import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

import {createWrapper, HYDRATE} from 'next-redux-wrapper';






export default function makestore() {
  return configureStore({
   

    reducer,
    // middleware: (getDefaultMiddleware) =>
    //   getDefaultMiddleware({ serializableCheck: false }).concat(api),
    //       ,

    // middleware: [thunk, api]
  }
  
  );
}

export const store = makestore();

export const wrapper = createWrapper(makestore);



