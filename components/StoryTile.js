import React from 'react';
import {
  Button,
  View,
  Text
} from 'react-native';

export class StoryTile extends React.Component {
  render() {
    return (
    	<View onPress={this.props.onPress} 
        style={{
          alignItems: "center", 
          justifyContent: "center", 
          backgroundColor: this.props.color, 
          height: 100,
          flexDirection: 'column',
        }}
      >
        <Text> {this.getTitle()} </Text>
        <Button
          title="Read Story"
          onPress={this.props.openStory}
        />
    	</View>
    );
  }

  getTitle(){
    var title = "title";
    try{title = this.props.data.title}catch(err){};
    return title;
  }
}
