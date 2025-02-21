import { create } from "zustand";


export interface ModeStore {
    mode: "gojuon" | "test";
    setMode: (mode: "gojuon" | "test") => void;
}


export interface OptionStore {
    showHira: boolean;
    showKata: boolean;
    showRomaji: boolean;
    showExampleWord: boolean;
    showExampleWordPronunciation: boolean;
    showExampleWordMeaning: boolean;
    showSeion: boolean;
    showDakuon: boolean;
    showYouon: boolean;
    clickHira: () => void;
    clickKata: () => void;
    clickRomaji: () => void;
    clickExampleWord: () => void;
    clickExampleWordPronunciation: () => void;
    clickExampleWordMeaning: () => void;
    clickSeion: () => void;
    clickDakuon: () => void;
    clickYouon: () => void;
}

export const useOptionStore = create<OptionStore>((set) => ({
    showHira: true,
    showKata: true,
    showRomaji: true,
    showExampleWord: true,
    showExampleWordPronunciation: true,
    showExampleWordMeaning: true,
    showSeion: true,
    showDakuon: true,
    showYouon: true,
    clickHira: () => set((state) => ({ showHira: !state.showHira })),
    clickKata: () => set((state) => ({ showKata: !state.showKata })),
    clickRomaji: () => set((state) => ({ showRomaji: !state.showRomaji })),
    clickExampleWord: () => set((state) => ({ showExampleWord: !state.showExampleWord })),
    clickExampleWordPronunciation: () => set((state) => ({ showExampleWordPronunciation: !state.showExampleWordPronunciation })),
    clickExampleWordMeaning: () => set((state) => ({ showExampleWordMeaning: !state.showExampleWordMeaning })),
    clickSeion: () => set((state) => ({ showSeion: !state.showSeion })),
    clickDakuon: () => set((state) => ({ showDakuon: !state.showDakuon })),
    clickYouon: () => set((state) => ({ showYouon: !state.showYouon }))

}));

export const useModeStore = create<ModeStore>((set) => ({
    mode: "gojuon",
    setMode: (mode) => set({ mode })
}));
