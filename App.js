import React, {useState} from 'react';
import {store} from '@myapp/store/store';
import {Provider as ReduxProvider} from 'react-redux';
import {Provider as PaperProvider} from 'react-native-paper';
import {PreferencesContext} from '@myapp/features/theme/context';
import {
  CombinedDarkTheme,
  CombinedDefaultTheme,
} from '@myapp/features/theme/theme';
import {NavigationContainer} from '@react-navigation/native';
import { Appearance } from 'react-native';

import Navigator from '@myapp/navigations';

const App = () => {
  const colorScheme = Appearance.getColorScheme();
  const [isThemeDark, setIsThemeDark] = React.useState(colorScheme === 'dark');

  let theme = isThemeDark ? CombinedDarkTheme : CombinedDefaultTheme;

  const toggleTheme = React.useCallback(() => {
    return setIsThemeDark(!isThemeDark);
  }, [isThemeDark]);

  const preferences = React.useMemo(
    () => ({
      toggleTheme,
      isThemeDark,
    }),
    [toggleTheme, isThemeDark],
  );

  return (
    <PreferencesContext.Provider value={preferences}>
      <ReduxProvider store={store}>
        <PaperProvider theme={theme}>
          <NavigationContainer theme={theme}>
            <Navigator />
          </NavigationContainer>
        </PaperProvider>
      </ReduxProvider>
    </PreferencesContext.Provider>
  );
};

export default App;
