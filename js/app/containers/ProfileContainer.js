import { connect } from 'react-redux';
import Profile from '../views/Profile';
import { switchTab } from '../actions';
import { States } from '../constants';

function mapStateToProps(state, ownProps) {
  return {
    ...ownProps
  };
}

function mapDispatchToProps(dispatch) {
  return {
    switchToPosts: () => dispatch(switchTab(States.USER_POSTS, States.USER_PROFILE)),
    switchToAbout: () => dispatch(switchTab(States.USER_ABOUT, States.USER_PROFILE)),
    switchToPhotos: () => dispatch(switchTab(States.USER_PHOTOS, States.USER_PROFILE))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
