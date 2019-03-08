import React from 'react';
import { StyleSheet, Text, View, Button, Linking } from 'react-native';

export class StoryPage extends React.Component {
  	constructor(props) {
	    super(props);

	    this.handleClick = this.handleClick.bind(this)
	}

  	render() {
	    return (
	      <View>
	      	<Text>{this.getTitle()}</Text>
	      	<Button
	      		title={"Open in browswer"}
	      		onPress={this.handleClick}
	      	/>
	      	<Text>{this.getComments()}</Text>
	      	<Button
	      		onPress={this.props.backToFeed}
	      		title="back to newsfeed"
	      	/>
	      	<Button
	      		onPress={this.props.addToFavorites}
	      		title={this.props.isFavorited ? "remove from favorites" : "add to favorites"}
	      	/>
	      </View>
	    );
  	}

  	handleClick (){
  		if(this.getLink() == "link" || ! (typeof this.getLink() == 'string')){
  			return;
  		}
	    Linking.canOpenURL(this.props.data.url).then(supported => {
	    	if (supported) {
	    		Linking.openURL(this.props.data.url);
	    	}
	    });
	}

  	getTitle(){
  		var nTitle = "title";
  		try{nTitle = this.props.data.title}catch(err){};
  		return nTitle;
  	}

	getLink(){
		var nLink = "link";
		try{nLink = this.props.data.url}catch(err){};
		return nLink;
	}

	getComments(){
		var nComments = "comments : none";
		try{console.log(this.props.data.kids)}catch(err){};
		console.log(nComments)
		return nComments;
	}
}