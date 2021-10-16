import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import axios from 'axios';
import AllShops from './components/AllShops.jsx';
import LogoBar from './components/LogoBar.jsx';
import SelectedStore from './components/SelectedStore.jsx';
import TopDrinks from './components/TopDrinks.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      allShops: [],
      allDrinks: [],
      allComments: [],
      homepage: true,
      selectedStore: 1,

    };
    this.getAllStores = this.getAllStores.bind(this);
    this.getAllDrinks = this.getAllDrinks.bind(this);
    this.getAllComments = this.getAllComments.bind(this);
  }

  componentDidMount() {
    this.getAllStores();
    this.getAllDrinks();
    this.getAllComments();
  }

  getAllStores() {
    axios({
      method: 'get',
      url: '/shops',
    })
      .then((response) => {
        // console.log(response.data);
        this.setState({
          allShops: response.data,
        }, () => {
          console.log(this.state.allShops)
        })
      })
      .catch((error) => {
        console.log('Error during getAllStores', error);
      });
  }

  getAllDrinks() {
    axios({
      method: 'get',
      url: '/drinks',
    })
      .then((response) => {
        // console.log(response.data);
        this.setState({
          allDrinks: response.data
        }, () => {
          console.log(this.state.allDrinks)
        })
      })
      .catch((error) => {
        console.log('Error in getAllDrinks (client get request', error);
      })
  }

  getAllComments() {
    axios({
      method: 'get',
      url: '/comments',
    })
      .then((response) => {
        // console.log(response.data);
        this.setState({
          allComments: response.data
        }, () => {
          console.log(this.state.allComments)
        })
      })
      .catch((error) => {
        console.log('Error in getting all comments (clients get request)', error);
      })
  }

  changeStore(storeId) {
    // console.log(storeId)
    this.setState({
      selectedStore: storeId,
      homepage: false,
    })
  }

  render() {
    let homepage;

    if (this.state.homepage === true) {
      homepage =
        <div className="container">
          <div className="row">
            <AllShops allShops={this.state.allShops} changeStore={this.changeStore.bind(this)}/>
            <TopDrinks />
          </div>
        </div>;
    } else if (this.state.homepage === false) {
      homepage =
        <div className="container">
          <div className="row">
            <SelectedStore allDrinks={this.state.allDrinks} selectedStore={this.state.selectedStore}/>
          </div>
        </div>
    }


    return (
      <div>
        <LogoBar />

        <div className="container">
          <img className="mainLogo" src="https://i.imgur.com/CXf8J6e.png"/>
        </div>

        {homepage}
        {/* <SignupEmail/> */}

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));