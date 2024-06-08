import { create } from 'zustand'
import { createLayoutSlice } from './layoutSlice'

import { createBasicFieldsSlice } from './dataSlice';


type StateFromFunctions<T extends [...any]> = T extends [infer F, ...(infer R)]
  ? F extends (...args: any) => object
    ? StateFromFunctions<R> & ReturnType<F>
    : unknown
  : unknown;

  type State = StateFromFunctions<[
    typeof createLayoutSlice,
    typeof createBasicFieldsSlice,
  ]>;


export const useBoundStore =   create<State>((set, get) => ({
    ...createLayoutSlice(set, get),
    ...createBasicFieldsSlice(set,get)
  }));