import React from 'react';
import Main from './components/Main.component';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}

//Cannot do the useDispatch instantiation(making actionCreator functions available throughout the apps) here as <Main /> is the component that's wrapped in provider. Not the <App />
