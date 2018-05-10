//component is collection of js f:ns that produce some html
//const is used to declare variable like var but in const, result will not be change
//(js xml (extensible markup language)) is suset or dialect of JS that looks like html
//purose of jsx is to make component clean or legible
//reactdom is used to interact with actual dom while react is used to create or manage our components.
//we need to pass instance not class in when rendering
//<App/> -- self closing tag
import _ from 'lodash';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
// function keyword is identical to => in es6
// we don't use var keyword in es6 but we use let/const
//youtube package = npm install --save youtube-api-search


const API_KEY = 'AIzaSyCfByBxKXcJt12NVJsJFKy6vOviJW1nWW0';




class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
     };

this.videoSearch('siraj raval');

  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
      //  this.setState({videos: videos});
    });
  }

  render() {
    const videoSearch = _.debounce((term) => {this.videoSearch(term)},300);
    return (

    <div>
      <SearchBar onSearchTermChange={videoSearch}  />
      <VideoDetail video={this.state.selectedVideo} />
      <VideoList
       onVideoSelect = {selectedVideo => this.setState({selectedVideo}) }
       videos = {this.state.videos} />
    </div>
   );
 }
}

ReactDOM.render( <App/> , document.querySelector('.container'));
