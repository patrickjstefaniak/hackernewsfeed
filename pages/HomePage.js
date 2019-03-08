import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { StoryTile } from '../components/StoryTile';

export class HomePage extends React.Component {
  

  render() {
    return (
      <View style={styles.container}>
        <View style={{alignItems: "center", justifyContent: "center", }}>
          <Text style={{fontSize:30}}>HackerNews Feed</Text>
        </View>
        <StoryTile
          data={this.props.stories[0]}
          onPress={this.storyClicked}
          color="#4dff88"
          openStory={() => {this.props.openStory(0)}}
        />
        <StoryTile
          data={this.props.stories[1]}
          onPress={this.storyClicked}
          color="#4df196"
          openStory={() => {this.props.openStory(1)}}
        />
        <StoryTile
          data={this.props.stories[2]}
          onPress={this.storyClicked}
          color="#4df696"
          openStory={() => {this.props.openStory(2)}}
        />
        <StoryTile
          data={this.props.stories[3]}
          onPress={this.storyClicked}
          color="#4ef688"
          openStory={() => {this.props.openStory(3)}}
        />
        <StoryTile
          data={this.props.stories[4]}
          onPress={this.storyClicked}
          color="#4df648"
          openStory={() => {this.props.openStory(4)}}
        />
        <View style={{flexDirection: 'row',}}>
          <Button
            title="up page"
            onPress={() => {this.props.storyPageNav('up')}}
          />
          <Button
            title="down page"
            onPress={() => {this.props.storyPageNav('down')}}
          />
          <Button
            title="See Favorites"
            onPress={() => {this.props.openFavorites()}}
          />
        </View>
      </View>
    );
  }
  openFavorites(){
    console.log("HADFKSDJFS")
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
