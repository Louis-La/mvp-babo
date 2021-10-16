import React from 'react';

class SelectedStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    let drinksArray = [];

    for (let i = 0; i < this.props.allDrinks.length; i++) {
      // console.log(typeof this.props.allDrinks[i].store_id)
      // console.log(typeof this.props.selectedStore)
      if (this.props.allDrinks[i].store_id === parseInt(this.props.selectedStore)) {
        drinksArray.push(this.props.allDrinks[i]);
      }
    }

    let mappedArray = drinksArray.map((item, index) => (
      <div>
        <img src={item.drink_photo}></img>
      </div>
    ))

    return (
      <div>User selected this store
      {mappedArray}
      </div>
    );
  };
}

export default SelectedStore;