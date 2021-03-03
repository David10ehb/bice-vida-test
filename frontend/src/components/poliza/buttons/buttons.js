import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Poliza from '../poliza';
import './buttons.css';

const container = document.getElementById('root');
let  active = false;

class Buttons extends Component {

  constructor(props){
    super(props)

    this.getData = this.getData.bind(this);
  }

  async getData() {
    try {
        const { dataBtn } = this.props;
        const data = dataBtn;
      if (data) {
        this.sendData(data);
              }
    } catch (error) {
        console.log(error);
    }
}

  sendData(data) {
    if (data) {  
      ReactDOM.render(
        <Poliza 
          dataAntigua = { data }
          descriptionCard = { data.description }
          imageCard = { data.image }
          nameCard = { data.name }
          priceCard = { data.price }
        /> ,
        container
      )

    }
  }

  render() {
    return (
      <button disabled={ active ? true : null} className="btn-poliza" onClick={this.getData}>
        <span className="text-btn-poliza"> Botón </span>
      </button>
    );
  }
}
export default Buttons;