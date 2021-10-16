import React from 'react';

class AllShops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
    this.changeStore = this.changeStore.bind(this);
  }

  changeStore(event) {
    let storeId = event.currentTarget.id;
    // console.log('💩 stores id', event.currentTarget.id);
    this.props.changeStore(storeId);
  }

  render() {
    // console.log('props', this.props.allShops)

    const mappedArray = this.props.allShops.map((item, index) => (
      <div className="card mb-3" key={index}>
        <img src={item.logo_photo} className="card-img-top shopPhoto" alt="logophoto" id={item.store_id} onClick={this.changeStore}/>
        <div className="card-body">
          <b><h4 className="card-title" id={item.store_id} onClick={this.changeStore}>{item.name}</h4></b>
          <hr></hr>
          <p className="card-text">Rating: {item.rating}/10</p>
          {item.street} | {item.city}, {item.state}
          <p className="card-text"><small className="text-muted">Last updated today</small></p>
        </div>
      </div>
    ))

    return (
      <div className="col-7 allShops">
        <h2 className="topHeadings">Results for Los Angeles, 95020</h2>
        <br></br>

        {mappedArray}

      </div>
    );
  };
}

export default AllShops;