import React, { Component } from "react";
import Element from "../Element";

export default class Person extends Component {
  render() {
    return (
      <form>
        <h2>Personal Information</h2>
        <Element
          type="text"
          for="firstName"
          text="First Name"
          value={this.props.value.firstName}
          onChange={this.props.onChange}
        />
        <Element
          type="text"
          for="secondName"
          text="Second Name"
          value={this.props.value.secondName}
          onChange={this.props.onChange}
        />
        <Element
          type="email"
          for="email"
          text="Email"
          value={this.props.value.email}
          onChange={this.props.onChange}
        />
        <Element
          type="tel"
          for="phone"
          text="Phone"
          value={this.props.value.phone}
          onChange={this.props.onChange}
        />
      </form>
    );
  }
}
