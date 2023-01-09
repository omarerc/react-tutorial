import React, { Component } from "react";

class Form extends Component {

  constructor(props) {
    super(props);

    this.initialState = {
      name: '',
      job: '',
    }

    this.state = { 
      initialState: this.initialState,
      handleSubmit: props.handleSubmit,
    }
  }

  handleChange = (event) => {

    const { name, value } = event.target;

    this.setState({
      [name]: value,
    });
  }

  onFormSubmit = (event) => {
    event.preventDefault();
    this.state.handleSubmit(this.state);
    this.setState(this.initialState);
  }

  render() {
    const { name, job } = this.state;

    return (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <div className="row g-3">
            <div className="col-sm-7">
              <input 
                type="text"
                name="name"
                id="name"
                value={name}
                className="form-control"
                placeholder="Name"
                aria-label="Name"
                onChange={this.handleChange}/>
            </div>
            <div className="col-sm">
              <input 
                type="text"
                name="job"
                id="job"
                value={job}
                className="form-control"
                placeholder="Job"
                aria-label="Job"
                onChange={this.handleChange}/>
            </div>
            <div className="col-sm">
              <button
                  type="submit"
                  className="btn btn-primary">
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Form;