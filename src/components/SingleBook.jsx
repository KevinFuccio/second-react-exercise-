import { Component } from "react";
import { Button, Card } from "react-bootstrap";
class SingleBook extends Component {
  state = {
    selected: false,
  };
  handleChange(e) {
    this.setState({
        selected: !this.state.selected
    });
  }
  render() {
    return (
      <Card className= {`${this.state.selected ? 'specialBtn': "" } ms-4 mb-5`} style={{ width: "18rem" }} >
        <Card.Img
          variant="top"
          src={this.props.book.img}
          className="mt-3"
          style={{ height: "400px" }}
        />
        <Card.Body className="d-flex flex-column justify-content-between">
          <div>
            <Card.Title>{this.props.book.title}</Card.Title>
          </div>
          <div>
            <Card.Text>Category: {this.props.book.category}</Card.Text>
            <Card.Text>Price of the book: {this.props.book.price}</Card.Text>
          </div>
          <Button variant="primary" onClick={(e) => this.handleChange(e)}>
            Clicca per selezionare
          </Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SingleBook;
