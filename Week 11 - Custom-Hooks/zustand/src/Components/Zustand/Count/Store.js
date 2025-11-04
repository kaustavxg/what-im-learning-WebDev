import { create } from "zustand";

const useCounterStore = create((set) => ({
    count: 0,
    increase: () => set((state) => ({count: state.count + 1})),
    decrease: () => set((state) => ({count: state.count - 1})),
    reset: () => set((state) => ({count: state.count = 0}))
}));

/*
!Breakdown of the above code:
    #1. create() makes a store
    #2. store holds:
        - state variables (like count)
        - functions to update them (increase, decrease, reset)
    #3. set() is used to update the state
*/

export default useCounterStore