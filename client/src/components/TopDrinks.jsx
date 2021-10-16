import React from 'react';

class TopDrinks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="col-5 topDrinks">
        <h1>Top Drinks</h1>

        <div className="card d-flex align-items-center" style={{width: "18rem"}}>
          <div className="card-body">
            <p className="card-text">GongCha</p>
          </div>
          <img src="https://images.pexels.com/photos/4071422/pexels-photo-4071422.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" class="card-img-top" alt="..."/>
          <div className="card-body">

            <p className="card-text">Brown Sugar Milk Tea</p>
          </div>
        </div>

        <div className="card" style={{width: "18rem", height: "15rem"}}>
          <div className="card-body">
            <p className="card-text">GongCha</p>
          </div>
          <img src="https://images.unsplash.com/photo-1592318730259-6f18a6ba1c29?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=707&q=80" class="card-img-top" alt="..."/>
          <div className="card-body">

            <p className="card-text">Brown Sugar Milk Tea</p>
          </div>
        </div>

        <div className="card" style={{width: "18rem"}}>
          <div className="card-body">
            <p className="card-text">GongCha</p>
          </div>
          <img src="https://images.unsplash.com/photo-1529474944862-bf4949bd2f1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" class="card-img-top" alt="..."/>
          <div className="card-body">

            <p className="card-text">Brown Sugar Milk Tea</p>
          </div>
        </div>

      </div>
    );
  };
}

export default TopDrinks;