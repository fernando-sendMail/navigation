import { Actions, States } from '../constants';
import { NavigationExperimental } from 'react-native';
const {
  StateUtils
} = NavigationExperimental;

const INITIAL_STATE = {
  key: 'app',
  index: 0,
  routes: [
    {
      key: States.NEWSFEED,
      index: 0,
      routes: [
        {
          key: States.TOP_STORIES
        }
      ]
    },
    {
      key: States.REQUESTS,
      index: 0,
      routes: [
        {
          key: States.REQUESTS_LIST
        }
      ]
    },
    {
      key: States.MESSENGER
    },
    {
      key: States.NOTIFICATIONS,
      index: 0,
      routes: [
        {
          key: States.NOTIFICATIONS_LIST
        }
      ]
    },
    {
      key: States.MORE,
      index: 0,
      routes: [
        {
          key: States.MORE_LIST
        }
      ]
    }
  ]
}

export const navigation = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Actions.SWITCH_TAB:
      if (StateUtils.has(state, action.tab)) {
        return StateUtils.jumpTo(state, action.tab);
      }
      return state;

    case Actions.PUSH_STATE:
      return StateUtils.replaceAtIndex(state, state.index, StateUtils.push(state.routes[state.index], action.newState));

    case Actions.GO_BACK:
      if (state.routes[state.index].routes > 0) {
        return StateUtils.replaceAtIndex(state, state.index, StateUtils.pop(state.routes[state.index]));
      }
      return state;

    default:
      return state;
  }
}
