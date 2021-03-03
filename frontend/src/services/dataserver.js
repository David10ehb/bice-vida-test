import React from 'react';
import axios from 'axios';

class servicePoliza extends React.Component {
  async getData(id) {
    try {
      const data = await axios.get(`https://dn8mlk7hdujby.cloudfront.net/interview/insurance/${id}`);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
export default servicePoliza;