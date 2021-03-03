import React from 'react';
import Buttons from './buttons/buttons';
import Card from './card/card';
import Selects from './selects/selects'

class Poliza extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <div className="col-7 d-flex justify-content-end">
            <Selects databtn={ this.props.dataAntigua } />
          </div>
          <div className="col-5 d-flex justify-content-start">
            <Buttons dataBtn={ this.props.dataBtn }/>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <Card 
              description = { this.props.descriptionCard }
              image = { this.props.imageCard }
              name = { this.props.nameCard }
              price = { this.props.priceCard }
            /> 
          </div>
        </div>
      </div>
    );
  }

}

export default Poliza;