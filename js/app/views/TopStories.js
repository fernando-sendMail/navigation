import React from 'react';
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { States } from '../constants';

const STORIES = [
  {
    name: 'Jane Smith',
    timestamp: '1hr ago',
    text: 'Life. Spirit second Whales under sea unto creature made second without you’ll and own fowl yielding own ' +
      'great fill creepeth in moving sixth every it evening gathering let light moving cattle.',
    profilePicture: 'https://pbs.twimg.com/profile_images/516611517865668608/jhSJZf9F.jpeg'

  },
  {
    name: 'José Lopez',
    timestamp: '2hrs ago',
    text: 'Si aún la vida es verdad y el verso existe. Si alguien llama a tu puerta y estás triste, abre, que es el ' +
      'amor, amiga mía.',
    profilePicture: 'https://graphics.stanford.edu/courses/cs178-13/assignments/portrait.jpg'
  },
  {
    name: 'Satoshi Nakamoto',
    timestamp: '3hr ago',
    text: '時々雲が月の保有者に休息を与えます',
    profilePicture: 'https://gpsc.duke.edu/wp-content/uploads/Portrait_Yang_Yang.jpg'
  },
  {
    name: 'Anna Müller',
    timestamp: '4ht ago',
    text: 'Ich möchte, wann ich sterbe, wie die lichten Gestirne schnell und unbewußt erbleichen, Erliegen möcht’ ' +
      'ich einst des Todes Streichen, Wie Sagen uns vom Pindaros berichten.',
    profilePicture: 'https://s-media-cache-ak0.pinimg.com/236x/84/b6/ec/84b6ecd63d314edf8e754fb60699658a.jpg'
  }
];

function renderStory(props) {
  return (
    <View key={props.index} style={styles.story}>
      <View style={styles.storyHeader}>
        <View>
          <TouchableOpacity onPress={() => props.onNewState(States.USER_PROFILE)}>
            <Image source={{ uri: props.profilePicture }} style={styles.profilePicture}/>
          </TouchableOpacity>
        </View>
        <View style={styles.postInfo}>
          <TouchableOpacity onPress={() => props.onNewState(States.USER_PROFILE)}>
            <Text style={styles.username}>
              {props.name}
            </Text>
          </TouchableOpacity>
          <Text style={styles.timestamp}>
            {props.timestamp}
          </Text>
        </View>
      </View>
      <View style={styles.text}>
        <Text>
          {props.text}
        </Text>
      </View>
    </View>
  );
}

function TopStories(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
        {STORIES.map((value, index) =>
          renderStory({ ...props, ...value, index})
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  story: {
    backgroundColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#ccc',
    marginHorizontal: 10,
    marginVertical: 3,
    padding: 5
  },
  storyHeader: {
    flexDirection: 'row'
  },
  profilePicture: {
    width: 50,
    height: 50
  },
  postInfo: {
    marginHorizontal: 10
  },
  username: {
    fontWeight: 'bold'
  },
  timestamp: {
    color: '#bbb',
    fontSize: 10
  },
  text: {
    marginVertical: 5
  },
  title: {
    fontSize: 22
  }
});

export default TopStories;
