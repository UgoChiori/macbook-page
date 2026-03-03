import { create } from "zustand";

interface MacbookStoreState {
    color: string;
    setColor: (color: string) => void;
    scale: number;
    setScale: (scale: number) => void;
    texture: string;
    setTexture: (texture: string) => void;
    reset: () => void;
}

const useMacbookStore = create<MacbookStoreState>((set) => ({
    color: '#777',
    setColor: (color) => set({ color }),

    scale: 0.08,
    setScale: (scale) => set({ scale }),

    texture: '/videos/feature-1.mp4',
    setTexture: (texture) => set({ texture }),

    reset: () => set({ color: '#2e2e2c', scale: 0.08, texture: '/videos/feature-1.mp4' }),
}))

export default useMacbookStore;
