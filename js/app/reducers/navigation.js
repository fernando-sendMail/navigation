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

function switchTab(state, action) {
  if (state.key === action.level) {
    if (StateUtils.has(state, action.tab)) {
      return StateUtils.jumpTo(state, action.tab);
    }
    return state;
  }
  return {
    ...state,
    routes: state.routes.map((route, index) => {
      if (state.index === index) {
        return switchTab(route, action)
      }
      return route;
    })
  }
}

function hasLevel(state, action) {
  let statePointer = state;
  while (statePointer.index !== undefined) {
    if(statePointer.key === action.level) {
      return true;
    }
    statePointer = statePointer.routes[statePointer.index];
  }
  return false;
}

export const navigation = function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Actions.SWITCH_TAB:
      if (hasLevel(state, action)) {
        return switchTab(state, action);
      }
      return state;
    case Actions.PUSH_STATE:
      const newRoute = {
        key: action.newState
      };

      // NOTE: This should ideally be part of the action creator and the reducer would know how to populate this data
      // I did it this way as an easy way to get away with it.
      if (action.newState === States.USER_PROFILE) {
        newRoute.index = 0;
        newRoute.routes = [
          {
            key: States.USER_POSTS
          },
          {
            key: States.USER_PHOTOS
          },
          {
            key: States.USER_ABOUT
          }
        ];
      }
      return StateUtils.replaceAtIndex(state, state.index, StateUtils.push(state.routes[state.index], newRoute));

    case Actions.GO_BACK:
      if (state.routes[state.index].routes.length > 0) {
        return StateUtils.replaceAtIndex(state, state.index, StateUtils.pop(state.routes[state.index]));
      }
      return state;

    default:
      return state;
  }
}
