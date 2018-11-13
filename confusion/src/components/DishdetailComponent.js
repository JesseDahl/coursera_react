import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';


class DishDetail extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.dish) {

      return (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
              <CardBody>
                <CardTitle heading>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-md-5 m-1">
            <Card>
              <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
              <CardBody>
                <CardTitle heading>{this.props.dish.name}</CardTitle>
                <CardText>{this.props.dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
};

export default DishDetail;
