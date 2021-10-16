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
      currentDrinkId: 1,
      currentDrinkName: "Black Milk Tea",
      currentDrinkPhoto: "",
      currentDrinkRating: 3,
      currentDrinkReviews: [],
      currentDrinkPrice: 4,
    };
    this.getAllStores = this.getAllStores.bind(this);
    this.getAllDrinks = this.getAllDrinks.bind(this);
    this.getAllComments = this.getAllComments.bind(this);
    this.goBackToHomepage = this.goBackToHomepage.bind(this);
    this.submitComment = this.submitComment.bind(this);
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

  submitComment(object) {
    axios({
      method: 'post',
      url: '/submitComment',
      data: object,
    })
      .then((response) => {
        // console.log(response.data);
        console.log(response)
        document.getElementById('insertedPersonName').value = "";
        document.getElementById('insertedCommenter').value = "";
        this.getAllComments();
      })
      .catch((error) => {
        console.log('Error in submitting comment (clients get request)', error);
      })
  }

  changeStore(storeId) {
    // console.log(storeId)
    this.setState({
      selectedStore: storeId,
      homepage: false,
    })
  }

  goBackToHomepage() {
    this.setState({
      homepage: true,
    })
  }

  changeCurrentModal(drinkId) {



    const changeStateDrinks = (name, price, photo) => {
      let ratingTotal = 0;
      let commentCount = 0;
      let comments = [];

      for (let k = 0; k < this.state.allComments.length; k++) {
        if (this.state.allComments[k].drink_id === parseInt(drinkId)) {
          ratingTotal += this.state.allComments[k].drink_rating;
          commentCount++;
          comments.push({username: this.state.allComments[k].username, comment: this.state.allComments[k].comment, rating: this.state.allComments[k].drink_rating});
        }
      }

      this.setState({
        currentDrinkId: drinkId,
        currentDrinkName: name,
        currentDrinkPhoto: photo,
        currentDrinkPrice: price,
        currentDrinkRating: (ratingTotal / commentCount).toFixed(1),
        currentDrinkReviews: comments,
      }, () => {
        console.log('this is all comments', comments)
      })

    }

    for (let m = 0; m < this.state.allDrinks.length; m++) {
      if (this.state.allDrinks[m].drink_id === drinkId) {
        changeStateDrinks(this.state.allDrinks[m].drink_name, this.state.allDrinks[m].price, this.state.allDrinks[m].drink_photo);
      }
    }

  }

  render() {
    let homepage;

    if (this.state.homepage === true) {
      homepage =
        <div className="container">
          <div className="row">
            <AllShops allShops={this.state.allShops} changeStore={this.changeStore.bind(this)}/>
            <TopDrinks allDrinks={this.state.allDrinks} allComments={this.state.allComments}/>
          </div>
        </div>;
    } else if (this.state.homepage === false) {
      homepage =
        <div className="container">
          <div className="row">
            <SelectedStore submitComment={this.submitComment} currentDrinkId={this.state.currentDrinkId} currentDrinkName={this.state.currentDrinkName} currentDrinkPhoto={this.state.currentDrinkPhoto} currentDrinkRating={this.state.currentDrinkRating} currentDrinkReviews={this.state.currentDrinkReviews} currentDrinkPrice={this.state.currentDrinkPrice} allComments={this.state.allComments} allDrinks={this.state.allDrinks} selectedStore={this.state.selectedStore} changeCurrentModal={this.changeCurrentModal.bind(this)}/>
          </div>
        </div>
    }


    return (
      <div>
        <LogoBar />
        <br></br>
        <div className="container">
          <div className="row">
            <div className="col-4">

            <img className="mainLogo" src="https://i.imgur.com/CXf8J6e.png" onClick={this.goBackToHomepage}/>

            </div>
            <div className="col-8">
              <img className="bannerPhoto1" src="/logos/matcha.png"></img>
            </div>


          </div>

        </div>
        <br></br>


        <div className="container">
          <div class="input-group mb-3">
  <input type="text" class="form-control" aria-label="Text input with dropdown button" placeholder="boba store name, jasmine milk tea, zip code..."></input>
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">Search by</button>
  <ul class="dropdown-menu dropdown-menu-end">
    <li><a class="dropdown-item" href="#">Store</a></li>
    <li><a class="dropdown-item" href="#">Drink Name</a></li>
    <li><a class="dropdown-item" href="#">Location (Zip Code)</a></li>
    <li><hr class="dropdown-divider"/></li>
    <li><a class="dropdown-item" href="#">Advanced Search</a></li>
  </ul>
</div>
        </div>



        {homepage}
        {/* <SignupEmail/> */}
<br></br>
<div className="container">
<div class="input-group mb-3">
  <input type="text" class="form-control" placeholder="Subscribe to our newsletter with your email" aria-label="Recipient's username" aria-describedby="basic-addon2"/>
  <span class="input-group-text" id="basic-addon2">Subscribe</span>
</div><br></br>
        <nav aria-label="breadcrumb">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">About</li>
    <li class="breadcrumb-item active" aria-current="page">Careers</li>
    <li class="breadcrumb-item active" aria-current="page">Press</li>
    <li class="breadcrumb-item active" aria-current="page">Investor Relations</li>
    <li class="breadcrumb-item active" aria-current="page">Privacy Policy</li>
  </ol>
</nav>

</div>

      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));