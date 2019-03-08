import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

import { StoryTile } from './components/StoryTile';
import { HomePage } from './pages/HomePage';
import { FavoritesPage } from './pages/FavoritesPage';
import { StoryPage } from './pages/StoryPage';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      currentPage: 'HomePage', 
      currentStory: 0,
      storyIds: null,
      currentStoryPage: 1,
      stories: [],
      favorites: [],
    };
    this.openFavorites = this.openFavorites.bind(this);
    this.storyPageNav = this.storyPageNav.bind(this);
    this.openStory = this.openStory.bind(this);
    this.backToFeed = this.backToFeed.bind(this);
    this.addToFavorites = this.addToFavorites.bind(this);
    this.openFavStory = this.openFavStory.bind(this);
  }

  componentDidMount(){
    return fetch('https://hacker-news.firebaseio.com/v0/newstories.json')
        .then((response) => response.json())
        .then((responseJson) => {

        this.setState({
          storyIds: responseJson,
        }, function(){
            this.fetchStories();
            });

      })
      .catch((error) =>{
        console.error(error);
      });
  }

  fetchStories(){
    var start = (this.state.currentStoryPage - 1) * 5;
    console.log("set " + start)
    for(var i = 0; i < 5; i++){
      fetch('https://hacker-news.firebaseio.com/v0/item/'+this.state.storyIds[i+start]+'.json')
        .then((response) => response.json())
        .then((responseJson) => {
          var stories = this.state.stories;
          stories.push(responseJson);
          this.setState({stories: stories})
      })
      .catch((error) =>{
        console.error(error);
      });;
      
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this.getCurrentPage()}
      </View>
    );
  }

  getCurrentPage(){
    return this.state.currentPage == "HomePage" ? 
              <HomePage
                openFavorites={this.openFavorites}
                storyPageNav={this.storyPageNav}
                openStory={this.openStory}
                stories={this.state.stories}
              />
              : this.state.currentPage == "Favorites" ? 
              <FavoritesPage
                backToFeed={this.backToFeed}
                favorites={this.state.favorites}
                openFavStory={this.openFavStory}
              /> : 
              <StoryPage 
                backToFeed={this.backToFeed}
                addToFavorites={this.addToFavorites}
                data={this.state.currentStory}
                isFavorited={this.state.favorites.includes(this.state.currentStory)}
              />
    }

  

  backToFeed(){
    this.setState({currentPage: "HomePage"});
  }

  openFavorites(){
    console.log('open favorites page');
    this.setState({currentPage: "Favorites"});
  }

  storyPageNav(direction){
    var dif = direction == 'up' ? 1 : -1;
    var newCurrentStoryPage = this.state.currentStoryPage + dif;
    newCurrentStoryPage < 1 ? newCurrentStoryPage = 1 : null;
    this.setState({currentStoryPage: newCurrentStoryPage, stories: []});
    this.fetchStories();
  }

  openStory(storyNum){
    console.log("story opened " + storyNum);
    this.setState({currentPage: "Story", currentStory: this.state.stories[storyNum]});
  }

  addToFavorites(){
    var favorites = this.state.favorites;
    if(! favorites.includes(this.state.currentStory)){
      favorites.push(this.state.currentStory)
    }else{
      var index = favorites.indexOf(this.state.currentStory);
      favorites.splice(index, 1);
    };
    this.setState({favorites: favorites});
  }

  openFavStory(story){
    this.setState({currentStory: story, currentPage:"Story"});
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
