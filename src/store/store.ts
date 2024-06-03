import { create } from 'zustand'
import { createLayoutSlice } from './layoutSlice'
import { createComponentsSlice } from './componentsSlice';
import { createDataSlice } from './dataSlice';


type StateFromFunctions<T extends [...any]> = T extends [infer F, ...(infer R)]
  ? F extends (...args: any) => object
    ? StateFromFunctions<R> & ReturnType<F>
    : unknown
  : unknown;

  type State = StateFromFunctions<[
    typeof createLayoutSlice,
    typeof createComponentsSlice,
    typeof createDataSlice,
  ]>;


export const useBoundStore =   create<State>((set, get) => ({
    ...createLayoutSlice(set, get),
    ...createComponentsSlice(set, get),
    ...createDataSlice(set,get)
  }));