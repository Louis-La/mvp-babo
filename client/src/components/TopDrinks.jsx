import React from 'react';

class TopDrinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    let ratings = {};
    let ratingsCount = {}

    for (let i = 0; i < this.props.allComments.length; i++) {
      if (ratings[this.props.allComments[i].drink_id]) {
        ratings[this.props.allComments[i].drink_id] += this.props.allComments[i].drink_rating;
        ratingsCount[this.props.allComments[i].drink_id]++;
      } else {
        ratings[this.props.allComments[i].drink_id] = this.props.allComments[i].drink_rating;
        ratingsCount[this.props.allComments[i].drink_id] = 1;
      }
    }

    let averageRatings = [];
    let currentId = 1;
    for (let key in ratings) {
      let average = ratings[key] / ratingsCount[key]
      averageRatings.push({rating: average, id: currentId});
      currentId++;
    }

    let topFlavors = {};
    for (let m = 1; m < averageRatings.length; m++) {
      if (averageRatings[m].rating > 7.7) {
        topFlavors[averageRatings[m].id] = averageRatings[m].rating.toFixed(1);
      }
    }
    console.log(topFlavors)

    let mappedTopDrinks = this.props.allDrinks.map((item, index) => {
      let stores = {
        1: "Goong cha",
        2: "Shares Tea",
        3: "Broba Guys",
        4: "Happy Limon",
        5: "777 Leaves"
      }
      if (topFlavors[item.drink_id]) {
        return (
          <div className="card d-flex align-items-center" style={{width: "27em"}}>
            <div className="card-body">
              <p className="card-text"><b>{stores[item.store_id]}</b></p>
            </div>
            <img src={item.drink_photo} class="card-img-top topDrinkPhoto" alt="drinkphoto"/>
            <div className="card-body">
              <div className="card-text">{item.drink_name} | <b>Rating: {topFlavors[item.drink_id]}</b></div>
            </div>
          </div>
        )
      }
    })

    return (
      <div className="col-5 topDrinks topHeadings">
        <h2>Top Drinks</h2>
        <br></br>
        {mappedTopDrinks}
      </div>
    );
  };
}

export default TopDrinks;