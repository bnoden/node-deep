import { compose, createStore } from 'redux';
import { persistState } from 'redux-devtools';

import DevTools from '../containers/DevTools';
import appReducer from '../reducers';

const enhancer = compose(DevTools.instrument(), persistState(getSessionKey()));
function getSessionKey() {
  const matches = window.location.href.match(/[?&]debug=([^&#]+)\b/);
  return matches && matches.length > 0 ? matches[1] : null;
}

export default function configureStore(initialState) {
  return createStore(appReducer, initialState, enhancer);
}
