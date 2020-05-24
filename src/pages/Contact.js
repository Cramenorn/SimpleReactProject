import React from 'react'

class Contact extends React.Component {
    constructor(props) {
      super(props); 
      this.name = {value: 'Davide'};
      this.email = {value: 'test@test.com'};
      this.message = {value: '123456'};
      
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('Name: ' + this.name.value + "\nEmail: " + this.email.value + "\nMessage: " + this.message.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
          </label>
          <br />
          <input type="text" id="name" name="name" value={this.name.value} onchange={this.handleChange}/>

          <br />

          <label>
            Email
          </label>
          <br />
          <input type="email" id="email" name="email" value={this.email.value} onchange={this.handleChange}/>

          <br />

          <label>
            Message
          </label>
          <br />
          <input type="text" id="message" name="message" value={this.message.value} onchange={this.handleChange}/>

          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      );
    }
}

export default Contact;