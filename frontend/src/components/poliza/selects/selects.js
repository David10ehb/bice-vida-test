import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Poliza from '../poliza';
import './selects.css';
import notfound from '../../../img/notfound.svg';

const container = document.getElementById('root');

class Selects extends Component {
  constructor(props){
    super(props)

    this.getData = this.getData.bind(this);
  }

  async getData(event) {
    try {
      let dataRe = {};
      const active  = this.props.databtn;
      const dataServer = await axios.get(`https://dn8mlk7hdujby.cloudfront.net/interview/insurance/${event.target.value}`);
      if (active) {
        dataRe = active;
      } else {
        dataRe.name = 'No Data';
        dataRe.description = 'No Data';
        dataRe.image = notfound ;
        dataRe.price = '0';
      }
      console.log(event.target.value);
      if (dataServer.data.insurance) {
        ReactDOM.render(
          <div>
            <Poliza
              dataBtn={dataServer.data.insurance}
              descriptionCard = { dataRe.description }
              imageCard = { dataRe.image }
              nameCard = { dataRe.name }
              priceCard = { dataRe.price }
            /> 
          </div>,
          container
        )
      }


    } catch (error) {
      console.log(error);
    }
  }
  render() {
    this.options = [
      {
        id: 58,
        name: 'plan - 58'
      },
      {
        id: 59,
        name: 'plan - 59'
      }
    ]
    return (
      <div className="w-75">
        <select name="" className="not-select" onChange={this.getData}>
          <option value="none" className="label-no-select" disabled selected> Seleccione una opción</option>
          {
            this.options.map( opt => (
              <option value={ opt.id } key={ opt.id } className="label-no-select" id={ opt.id }> { opt.name }</option>
            ))
          }
        </select>
        <p> {this.props.insurance} </p>
      </div>
      
    );
  }

}

export default Selects;