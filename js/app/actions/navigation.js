import { Actions }  from '../constants';

export const switchTab = (tab, level = 'app') => {
  return {
    type: Actions.SWITCH_TAB,
    tab,
    level
  };
};

export const pushState = (newState) => {
  return {
    type: Actions.PUSH_STATE,
    newState
  };
};

export const goBack = () => {
  return {
    type: Actions.GO_BACK
  };
};
