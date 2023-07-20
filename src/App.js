import React, { Component } from "react";
import style from "./Components/styles/App.module.css";
import uniqid from "uniqid";
import Person from "./Components/Slides/Person";
import { Education, Work } from "./Components/Slides/WorkEducation";
import PrintPdf from "./Components/PrintPdf";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        firstName: "",
        secondName: "",
        email: "",
        phone: "",
      },
      university: {
        school: "",
        title: "",
        fromDateSchool: "",
        toDateSchool: "",
        key: "",
      },
      education: [],
      work: {
        company: "",
        position: "",
        fromDateWork: "",
        toDateWork: "",
        key: "",
      },
      experience: [],
    };
  }
  onFormSubmit = (item) => (e) => {
    e.preventDefault();
    let copy = Object.assign({}, this.state);

    if (item === "work") {
      let copyItem = Object.assign({}, this.state.work);
      copyItem.key = uniqid();
      copy.experience.push(copyItem);
    } else if (item === "university") {
      let copyItem = Object.assign({}, this.state.university);
      copyItem.key = uniqid();
      copy.education.push(copyItem);
    }
    this.setState(copy);
  };
  handleChangePerson = (item) => (e) => {
    let copy = Object.assign({}, this.state);
    copy[item][e.target.name] = e.target.value;
    this.setState(copy);
    //console.log(e.target);
  };
  handleChange = (item) => (e) => {
    let copy = Object.assign({}, this.state);
    let position;
    copy[item].map((value, index) => {
      if (value.key === e.target.className) position = index;
      return null;
    });
    copy[item][position][e.target.name] = e.target.value;
    this.setState(copy);
    //console.table(copy[item]);
  };
  deleteSlide = (item) => (e) => {
    e.preventDefault();
    let copy = Object.assign({}, this.state);
    let position;
    copy[item].map((value, index) => {
      if (value.key === e.target.className) position = index;
      return null;
    });
    copy[item].splice(position, 1);
    this.setState(copy);
    //console.table(copy[item]);
  };

  render() {
    return (
      <div className={style.app}>
        <div className={style.slides}>
          <Person
            value={this.state.person}
            onChange={this.handleChangePerson("person")}
          />
          <Work
            onSubmit={this.onFormSubmit("work")}
            value={this.state.experience}
            onChange={this.handleChange("experience")}
            experience={this.state.experience}
            delete={this.deleteSlide("experience")}
          />
          <Education
            onSubmit={this.onFormSubmit("university")}
            value={this.state.university}
            onChange={this.handleChange("education")}
            education={this.state.education}
            delete={this.deleteSlide("education")}
          />
        </div>
        <PrintPdf toPrint={this.state} className={style.print} />
      </div>
    );
  }
}
