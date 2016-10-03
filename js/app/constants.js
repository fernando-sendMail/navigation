export const States = {
  NEWSFEED: 'newsfeed',
  TOP_STORIES: 'top-stories',
  USER_PROFILE: 'user-profile',
  USER_POSTS: 'user-posts',
  USER_PHOTOS: 'user-photos',
  USER_ABOUT: 'user-about',
  REQUESTS: 'requests',
  REQUESTS_LIST: 'requests-list',
  MESSENGER: 'messgenger',
  NOTIFICATIONS: 'notifications',
  NOTIFICATIONS_LIST: 'notifications-list',
  MORE: 'more',
  MORE_LIST: 'more-list'
};

export const Actions = {
  SWITCH_TAB: 'switch-tab',
  PUSH_STATE: 'push-state',
  GO_BACK: 'go-back'
};

const Constants = {
  Actions,
  States
};

export default Constants;
