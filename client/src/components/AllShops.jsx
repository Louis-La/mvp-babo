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
        <img src={item.logo_photo} className="card-img-top" alt="logophoto" id={item.store_id} onClick={this.changeStore}/>
        <div className="card-body">
          <h5 className="card-title" id={item.store_id} onClick={this.changeStore}>{item.name}</h5>
          <p className="card-text">Rating: {item.rating}</p>
          <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
        </div>
      </div>
    ))

    return (
      <div className="col-7 allShops">
        <h1>Showing all the shops names</h1>

        {mappedArray}

      </div>
    );
  };
}

export default AllShops;