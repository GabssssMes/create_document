import { Component } from "react";
import React from "react";
import ReactToPrint from "react-to-print";
import style from "./styles/PrintPdf.module.css";

export default class PrintPdf extends Component {
  render() {
    const print = this.props.toPrint;
    return (
      <div>
        <div className={style.border}>
          <div ref={(el) => (this.componentRef = el)} className={style.DinA4}>
            <h1>Curriculum Vitae</h1>
            <h2 className={style.secondHeader}>Personal Information</h2>
            <div className={style.output}>
              <h4>First Name</h4>
              <div>{print.person.firstName}</div>
            </div>
            <div className={style.output}>
              <h4>Second Name</h4>
              <div>{print.person.secondName}</div>
            </div>
            <div className={style.output}>
              <h4>Email</h4>
              <div>{print.person.email}</div>
            </div>
            <div className={style.output}>
              <h4>Phone</h4>
              <div>{print.person.phone}</div>
            </div>
            <h2 className={style.secondHeader}>Workexperience</h2>
            {print.experience.map((work) => {
              return (
                <div key={work.key} className={style.element}>
                  <div className={style.output}>
                    <h4>Company</h4>
                    <div>{work.company}</div>
                  </div>
                  <div className={style.output}>
                    <h4>Position</h4>
                    <div>{work.position}</div>
                  </div>
                  <div className={style.output}>
                    <h4>from</h4>
                    <div>{work.fromDateWork}</div>
                  </div>
                  <div className={style.output}>
                    <h4>until</h4>
                    <div>{work.toDateWork}</div>
                  </div>
                </div>
              );
            })}
            <h2 className={style.secondHeader}>Education</h2>
            {print.education.map((university) => {
              return (
                <div key={university.key} className={style.element}>
                  <div className={style.output}>
                    <h4>Schoolname</h4>
                    <div>{university.school}</div>
                  </div>
                  <div className={style.output}>
                    <h4>Title</h4>
                    <div>{university.title}</div>
                  </div>
                  <div className={style.output}>
                    <h4>from</h4>
                    <div>{university.fromDateSchool}</div>
                  </div>
                  <div className={style.output}>
                    <h4>until</h4>
                    <div>{university.toDateSchool}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <ReactToPrint
          trigger={() => {
            return (
              <button className={style.printButton}>Print this out!</button>
            );
          }}
          content={() => this.componentRef}
        />
      </div>
    );
  }
}
