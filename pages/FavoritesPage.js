import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { StoryTile } from '../components/StoryTile';

export class FavoritesPage extends React.Component {
  

  render() {
    return (
      <View style={styles.container}>
        <Text style={{fontSize:30}}>Favorites</Text>
        {this.addTiles(0)}
        {this.addTiles(1)}
        {this.addTiles(2)}
        {this.addTiles(3)}
        {this.addTiles(4)}
      	<Button
      		onPress={this.props.backToFeed}
      		title="back to newsfeed"
      	/>
      </View>
    );
  }

  addTiles(ind){
    if(ind < this.props.favorites.length){
      return(
        <StoryTile
          data={this.props.favorites[ind]}
          onPress={this.storyClicked}
          color="#4dff88"
          openStory={() => {this.props.openFavStory(this.props.favorites[ind])}}
        />
      );
    }
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
