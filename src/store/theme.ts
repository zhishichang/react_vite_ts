import { create } from "zustand";

interface IThemeStore {
  isDarkMode: boolean;
  changeTheme: (currentTheme: boolean) => void;
}

const useThemeStore = create<IThemeStore>((set) => ({
  isDarkMode: false, //默认是浅色模式
  changeTheme: (currentTheme) => set(() => ({ isDarkMode: currentTheme })),
}));

export default useThemeStore;
