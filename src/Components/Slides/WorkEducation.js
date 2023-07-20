import React, { Component } from "react";
import Element from "../Element";

class Education extends Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <header>
          <h2>Education</h2>
          <button type="submit" onClick={this.props.onSubmit}>
            Add Item
          </button>
        </header>
        {this.props.education.map((university) => {
          return (
            <div key={university.key} className="slide">
              <Element
                type="text"
                for="school"
                text="Schoolname"
                value={university.school}
                onChange={this.props.onChange}
                parent={university.key}
              />
              <Element
                type="text"
                for="title"
                text="Title of study"
                value={university.title}
                onChange={this.props.onChange}
                parent={university.key}
              />
              <Element
                type="date"
                for="fromDateSchool"
                text="From"
                value={university.fromDateSchool}
                onChange={this.props.onChange}
                parent={university.key}
              />
              <Element
                type="date"
                for="toDateSchool"
                text="To"
                value={university.toDateSchool}
                onChange={this.props.onChange}
                parent={university.key}
              />

              <button
                type="submit"
                onClick={this.props.delete}
                className={university.key}
              >
                Delete
              </button>
            </div>
          );
        })}
      </form>
    );
  }
}
class Work extends Component {
  render() {
    return (
      <form>
        <header>
          <h2>Workexperience</h2>
          <button type="submit" onClick={this.props.onSubmit}>
            Add Item
          </button>
        </header>
        {this.props.experience.map((work) => {
          return (
            <div key={work.key} className="slide">
              <Element
                type="text"
                for="company"
                text="Company"
                value={work.company}
                onChange={this.props.onChange}
                parent={work.key}
              />
              <Element
                type="text"
                for="position"
                text="Position"
                value={work.position}
                onChange={this.props.onChange}
                parent={work.key}
              />
              <Element
                type="date"
                for="fromDateWork"
                text="From"
                value={work.fromDateWork}
                onChange={this.props.onChange}
                parent={work.key}
              />
              <Element
                type="date"
                for="toDateWork"
                text="To"
                value={work.toDateWork}
                onChange={this.props.onChange}
                parent={work.key}
              />

              <button
                type="submit"
                onClick={this.props.delete}
                className={work.key}
              >
                Delete
              </button>
            </div>
          );
        })}
      </form>
    );
  }
}

export { Education, Work };
