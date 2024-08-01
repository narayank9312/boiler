import { isServer } from '@/utils/utils';

import type { SliceCreator } from '@/types/store';

interface ThemeSlice {
  isDarkMode: boolean;
  setMode: () => void;
}

const setMode = (isDarkMode: boolean): void => {
  const method = isDarkMode ? 'add' : 'remove';
  document.documentElement.classList[method]('dark-mode');
};

const createThemeSlice: SliceCreator<ThemeSlice> = (set, get) => ({
  isDarkMode: false,
  setMode: () => {
    const { isDarkMode } = get();
    set({ isDarkMode: !isDarkMode }, false, 'theme/setMode');
    setMode(!isDarkMode);
  },
});

export default createThemeSlice;
