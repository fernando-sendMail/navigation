import React from 'react';
import { Animated, Image, NavigationExperimental, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const { Transitioner: NavigationTransitioner } = NavigationExperimental;
import { States } from '../constants';

function renderTabContent({ scene }) {
  const { route } = scene;
  let content;
  switch (route.key) {
    case States.USER_POSTS:
      content = 'User time line';
      break;
    case States.USER_ABOUT:
      content = 'ℹ️ About this user...';
      break;
    case States.USER_PHOTOS:
      content = 'User photos 🖼';
      break;
    default:
      content = 'User content';
  }
  return (
    <View style={styles.tabContent}>
      <Text>
        {content}
      </Text>
    </View>
  )
}

function renderAnimatedContainer(props) {
  return (
    <NavigationTransitioner
      navigationState={props.navigationState}
      render={renderTabContent}
    />
  )
}

function renderTabItem(label, callback) {
  return (
    <TouchableOpacity style={styles.tabItem} onPress={callback}>
      <Text style={styles.tabLabel}>
        {label}
      </Text>
    </TouchableOpacity>
  )
}

function Profile(props) {
  return (
    <Animated.View style={styles.container}>
      <ScrollView>
        <View style={{ alignItems: 'center' }}>
          <Image
            source={{ uri: 'https://trip101.com/assets/default_profile_pic-9c5d869a996318867438aa3ccf9a9607daee021047c1088645fbdfbbed0e2aec.jpg' }}
            style={styles.profilePicture}
          />
        </View>
        <View style={styles.tabsMenu}>
          {renderTabItem('Posts', props.switchToPosts)}
          {renderTabItem('Photos', props.switchToPhotos)}
          {renderTabItem('About', props.switchToAbout)}
        </View>
        {renderAnimatedContainer(props)}
      </ScrollView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  profilePicture: {
    borderColor: 'white',
    borderWidth: 3,
    borderRadius: 5,
    width: 80,
    height: 80,
    marginTop: 40,
    marginBottom: 10
  },
  tabsMenu: {
    borderColor: '#eee',
    borderWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row'
  },
  tabItem: {
    flex: 1,
    backgroundColor: '#fafafa',
    alignItems: 'center',
    paddingVertical: 20
  },
  tabLabel: {
    color: '#333',
    fontWeight: 'bold'
  },
  tabContent: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    minHeight: 360,
    justifyContent: 'center'
  }
});

export default Profile;
