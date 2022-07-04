import {
  DarkTheme as NavigationDarkTheme,
  DefaultTheme as NavigationDefaultTheme,
} from '@react-navigation/native';

import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';
import merge from 'deepmerge';

export const CombinedDefaultTheme = merge(PaperDefaultTheme, NavigationDefaultTheme);
export const CombinedDarkTheme = merge(PaperDarkTheme, NavigationDarkTheme);
