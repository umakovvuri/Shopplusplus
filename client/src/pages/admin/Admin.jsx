import React, { Component } from 'react'

import Header from '../../components/Header/Header'
// import Deleteproduct from './Deleteproduct';
// import Updateproduct from './Updateproduct';
import AddProduct from './AddProduct';
import './Admin.css';

class Admin extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="ad-wrapper">
          <Header logout={this.props.logout} userinfo={this.props.userinfo} />
          <section className="head" style={{ fontSize: "2rem", padding: "1rem" }}>
            Welcome Admin
          </section>
          <AddProduct />
          {/*<Updateproduct />
          <Deleteproduct /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Admin;

