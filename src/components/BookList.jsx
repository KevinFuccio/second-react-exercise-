import { Component } from "react";
import SingleBook from "./SingleBook";
import { Form, Row } from "react-bootstrap";
class BookList extends Component {
  state = {
    text: "",
  };
  filteredBook(e) {
    console.log(e.target.value);
    this.setState({
      text: e.target.value,
    });
  }
  render() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <input
            type="text"
            className="mb-5"
            onChange={(e) => this.filteredBook(e)}
          />
        </div>
        <Row>
          {this.props.books
            .filter((e) => {
              return e.title
                .toLowerCase()
                .includes(this.state.text.toLocaleLowerCase());
            })
            .map((e) => (
              <SingleBook book={e} key={e.asin} />
            ))}
        </Row>
      </>
    );
  }
}
export default BookList;
