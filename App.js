import React, {useState} from 'react';
import { store } from '@myapp/store/store';
import {Provider as ReduxProvider} from 'react-redux';

import Navigator from '@myapp/navigations';

const App = () => {
  return (
    <ReduxProvider store={store}>
      <Navigator />
    </ReduxProvider>

  );
};

export default App;
