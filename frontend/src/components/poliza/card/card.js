import React from 'react';
import './card.css';

class Card extends React.Component {
  
  render() {
    const { name, image, description, price } = this.props;
    return (
      <div className="div-card-poliza">
        <img 
        src={ image }
        alt={ image }
        className="image-card-poliza" />
        <label className="label-card-poliza">
          <span className="label-text-card-poliza">
            { price }
          </span>
        </label>
        <h1 className="title-card-poliza"> {name} </h1>
        <p className="p-card-poliza"> { description } </p>
      </div>
    );
  }
}

export default Card;