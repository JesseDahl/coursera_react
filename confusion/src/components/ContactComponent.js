import React, {Component} from 'react';
import {Breadcrumb, BreadcrumbItem, Button, Form, FormGroup,
  Label, Input, Col, FormFeedback} from 'reactstrap';
import {Link} from 'react-router-dom';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contactType: 'Tel.',
      message: '',
      touched: {
        firstname: false,
        lastname: false,
        telnum: false,
        email: false
      }
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  render() {
    const errors = this.validate(this.state.firstname, this.state.lastname,
          this.state.telnum, this.state.email);
    return (
      <div className="container">
            <div className="row ">

              <Breadcrumb>
                <BreadcrumbItem><Link to='/home'>Home</Link></BreadcrumbItem>
                <BreadcrumbItem active>Contact</BreadcrumbItem>
              </Breadcrumb>
            </div>
            <div className="row row-content">
              <div className="col-12">
                <h3>Location Information</h3>
              </div>
              <div className="col-12 col-sm-4 offset-sm-1">
                      <h5>Our Address</h5>
                      <address>
                      121, Clear Water Bay Road<br />
                      Clear Water Bay, Kowloon<br />
                      HONG KONG<br />
                      <i className="fa fa-phone"></i>: +852 1234 5678<br />
                      <i className="fa fa-fax"></i>: +852 8765 4321<br />
                      <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                      </address>
              </div>
              <div className="col-12 col-sm-6 offset-sm-1">
                  <h5>Map of our Location</h5>
              </div>
              <div className="col-12 col-sm-11 offset-sm-1">
                  <div className="btn-group" role="group">
                      <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                      <a role="button" className="btn btn-info" href="skype:ristoranteconfusion"><i className="fa fa-skype"></i> Skype</a>
                      <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                  </div>
              </div>
            </div>
            <div className="row row-content">
              <div className="col-12">
                <h3>Send us your feedback</h3>
              </div>
              <div className="col-12 col-md-9">
                <Form onSubmit={this.handleSubmit} onChange={this.handleInputChange}
                    onBlur={this.handleBlur}>

                  <ValidatedInput field="firstname" value={this.state.firstname}
                      type="text" name="First Name"
                      errors={errors} />

                  <ValidatedInput field="lastname" value={this.state.lastname}
                      type="text" name="Last Name"
                      errors={errors} />

                  <ValidatedInput field="telnum" value={this.state.telnum}
                      type="tel" name="Tel. Number"
                      errors={errors} />

                  <ValidatedInput field="email" value={this.state.email}
                      type="email" name="Email"
                      errors={errors} />

                  <FormGroup row>
                    <Col md={{size: 6, offset: 2}}>
                      <FormGroup check>
                        <Label check>
                          <Input type="checkbox" id="agree" name="agree"
                              placeholder="Email" value={this.state.agree}
                              onChange={this.handleInputChange}/>
                            {' '}<strong>May we contact you?</strong>
                        </Label>
                      </FormGroup>
                    </Col>
                    <Col md={{size: 3, offset: 1}}>
                      <Input type="select" id="contactType" name="contactType"
                          placeholder="Email" value={this.state.email}
                          onChange={this.handleInputChange}>
                        <option>Tel.</option>
                        <option>Email</option>
                      </Input>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Label htmlFor="message" md={2}>Your Feedback</Label>
                    <Col md={10}>
                      <Input type="textarea" id="message" name="message"
                          rows="12" value={this.state.message}
                          onChange={this.handleInputChange}/>
                    </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col md={{size:10, offset:2}}>
                      <Button type="submit" color="primary">
                        Send Feedback
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </div>
            </div>
        </div>
    );
  }

  decompEvent(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    return {target, value, name}
  }

  handleInputChange(event) {
    console.debug('handle input change', event)
    const {value, name} = this.decompEvent(event)
    console.debug("Target val, name: ", value, name);

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log("State:", this.state);
    alert("Thanks for of submit!!");
    event.preventDefault();
  }

  handleBlur (event) {

    console.debug('handle blur', event)
    const {value, name} = this.decompEvent(event)
    this.setState({
      touched: { ...this.state.touched, [name]:true}
    });
  }

  validate(firstname, lastname, telnum, email) {
    const errors = {
      firstname: '',
      lastname: '',
      telnum: '',
      email: ''
    };

    if (this.state.touched.firstname && firstname.length < 3) {
      errors.firstname = 'First Name should be more than 2 characters';
    }
    return errors;
  }
};

const ValidatedInput = props => {

  // value = this.state[props.field];
  const error = props.errors[props.field]

  return (
    <FormGroup row>
      <Label htmlFor={props.field} md={2}>{props.name}</Label>
      <Col md={10}>
        <Input type={props.type} id={props.field} name={props.field}
            placeholder={props.name}
            valid={error === ''}
            invalid={error !== ''}/>
        <FormFeedback>{error}</FormFeedback>
      </Col>
    </FormGroup>
  );
}

export default Contact;
