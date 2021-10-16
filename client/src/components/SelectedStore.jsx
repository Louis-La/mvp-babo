import React from 'react';

class SelectedStore extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  openModal(event) {
    let clickedDrinkId = parseInt(event.currentTarget.alt);

    this.props.changeCurrentModal(clickedDrinkId);

    let myModal = document.getElementById('myModal')
    let myInput = document.getElementById('myInput')

    myModal.addEventListener('shown.bs.modal', function () {
      myInput.focus()
    })
  }

  submitInfo(event) {
    console.log(event.currentTarget)
    const name = document.getElementById('insertedPersonName').value;
    const comment = document.getElementById('insertedCommenter').value;
    const rating = document.getElementById('selectedRating').options[document.getElementById('selectedRating').selectedIndex].text;
    console.log(name, comment, rating, this.props.currentDrinkId)
    this.props.submitComment({name: name, comment: comment, rating: rating, id: this.props.currentDrinkId});
  }

  render() {
    // Retrieve drinks pertaining to the selected Store
    let drinksArray = [];
    for (let i = 0; i < this.props.allDrinks.length; i++) {
      if (this.props.allDrinks[i].store_id === parseInt(this.props.selectedStore)) {
        drinksArray.push(this.props.allDrinks[i]);
      }
    }

    // Control for Modal data

    let mappedComments = this.props.currentDrinkReviews.map((item, index) => (
      <div key={index}>
        <b>Name: {item.username}</b>
        <p>{item.comment}</p> Rating: {item.rating}/10
        <hr></hr>
      </div>
    ))

    let modalDiv =
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">{this.props.currentDrinkName}</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          <img className="modalDrinkPhoto" src={this.props.currentDrinkPhoto}></img>

          ${this.props.currentDrinkPrice}
          <hr></hr>
          {mappedComments}
          <p><b>Rate the Drink:</b></p>

            <label>Name: </label><input id="insertedPersonName" type="text"></input><br></br><br></br>
            <label>Comment: </label><input id="insertedCommenter" type="text"></input><br></br><br></br>
            <label>Rate it (0 - 10):</label>
            <select id="selectedRating">
              <option value='0'>0</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
            </select>
            <button onClick={this.submitInfo.bind(this)}>Submit</button>

        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>;

    // Map over the drinks array and create a separate card for each drink
    let mappedArray = drinksArray.map((item, index) => {

      // Get the average rating for each drink
      let currentDrink = item.drink_id;
      let ratingTotal = 0;
      let commentCount = 0;
      for (let j = 0; j < this.props.allComments.length; j++) {
        if (this.props.allComments[j].drink_id === currentDrink) {
          ratingTotal += this.props.allComments[j].drink_rating;
          commentCount++;
        }
      }

      return (
        <div className="col" key={index}>
          <div className="card eachDrinkCards">
            <img src={item.drink_photo} className="eachDrinkPhoto card-img-top" alt={item.drink_id} id="myModal" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={this.openModal.bind(this)}/>
            <div className="card-body">
              <h5 className="card-title">{item.drink_name}</h5>
              <div className="card-text">${item.price} <hr></hr>Average Rating: {(ratingTotal / commentCount).toFixed(1)}/10</div>
            </div>
          </div>
        </div>
      )
    })
    let indexPhoto = this.props.allShops[this.props.selectedStore - 1]
    let currentMainStorePhoto = indexPhoto.logo_photo;

    return (

      <div className="row row-cols-1 row-cols-md-3 g-4">
          <img className="selectedStoreLogo" src={currentMainStorePhoto}></img>

        {mappedArray}

        {/* This is the Modal */}
        <div id="myInput" className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            {modalDiv}
          </div>
        </div>



      </div>


    );
  };
}

export default SelectedStore;