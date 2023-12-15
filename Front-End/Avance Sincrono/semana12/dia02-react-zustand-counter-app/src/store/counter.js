import { create } from 'zustand'

export const useCounterStore = create(
    (set) => ({
        // Estado inicial
        count: 8,
        // Actions
        increment: () => {
            set((state) => {
                return {
                    count: state.count + 1
                }
            })
        },
        decrement: () => {
            set((state) => ({ count: state.count - 1 }))
        },
        increaseByValue:(value) => {
            set((state) => ({ count: state.count + value}))
        }
    })
)