import React, { Component } from "react";
import style from "./styles/Element.module.css";

export default class Element extends Component {
  render() {
    return (
      <div className={style.element}>
        <label htmlFor={this.props.for}>{this.props.text}</label>
        <input
          type={this.props.type}
          id={this.props.for}
          name={this.props.for}
          value={this.props.value}
          onChange={this.props.onChange}
          className={this.props.parent}
        ></input>
      </div>
    );
  }
}
